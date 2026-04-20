# 构建插件

开发 Codex 插件完整指南

## 概述

本指南介绍如何从零开始开发、测试和发布一个 Codex 插件。

## 环境准备

### 安装依赖

```bash
# Node.js 18+
node --version

# 安装 Codex CLI
npm install -g @openai/codex

# 安装开发工具
npm install -g typescript ts-node
```

### 创建项目

```bash
# 使用模板
npx create-codex-plugin my-plugin

# 或手动创建
mkdir my-plugin
cd my-plugin
npm init -y
```

## 项目配置

### package.json

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "我的 Codex 插件",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "test": "vitest"
  },
  "dependencies": {
    "@openai/codex": "^2.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "vitest": "^1.0.0"
  }
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "declaration": true,
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### plugin.json

```json
{
  "name": "my-plugin",
  "displayName": "我的插件",
  "version": "1.0.0",
  "description": "插件描述",
  "author": "Your Name",
  "license": "MIT",
  "homepage": "https://github.com/user/my-plugin",
  "repository": "github:user/my-plugin",
  "engines": {
    "codex": ">=2.0.0"
  },
  "main": "dist/index.js"
}
```

## 开发插件

### 基础结构

```typescript
// src/index.ts
import { Plugin, Tool, Command, Context } from '@openai/codex';

export default class MyPlugin extends Plugin {
  private context?: Context;

  async activate(context: Context): Promise<void> {
    this.context = context;
    context.logger.info('插件已激活');
    
    // 注册工具
    this.registerTools();
    
    // 注册命令
    this.registerCommands();
  }

  async deactivate(): Promise<void> {
    this.context?.logger.info('插件已停用');
  }

  private registerTools(): void {
    const tool: Tool = {
      name: 'my-tool',
      description: '我的工具',
      parameters: {
        type: 'object',
        properties: {
          input: { 
            type: 'string',
            description: '输入内容'
          }
        },
        required: ['input']
      },
      execute: async (params: any) => {
        return this.processInput(params.input);
      }
    };
    
    this.context?.registerTool(tool);
  }

  private registerCommands(): void {
    const command: Command = {
      name: 'my-command',
      description: '我的命令',
      run: async (args: string[]) => {
        this.context?.logger.info(`执行命令：${args.join(' ')}`);
      }
    };
    
    this.context?.registerCommand(command);
  }

  private async processInput(input: string): Promise<any> {
    // 处理逻辑
    return { result: `处理了：${input}` };
  }
}
```

### 工具开发

```typescript
// src/tools/file-reader.ts
import { Tool } from '@openai/codex';

export const fileReaderTool: Tool = {
  name: 'read-file',
  description: '读取文件内容',
  parameters: {
    type: 'object',
    properties: {
      path: { 
        type: 'string',
        description: '文件路径'
      }
    },
    required: ['path']
  },
  execute: async (params) => {
    const fs = require('fs');
    const content = fs.readFileSync(params.path, 'utf-8');
    return { content };
  }
};
```

### 命令开发

```typescript
// src/commands/lint.ts
import { Command } from '@openai/codex';

export const lintCommand: Command = {
  name: 'lint',
  description: '运行代码检查',
  run: async (args: string[]) => {
    const { execSync } = require('child_process');
    try {
      const output = execSync('npm run lint', { encoding: 'utf-8' });
      console.log(output);
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, error: error.message };
    }
  }
};
```

## 测试插件

### 单元测试

```typescript
// tests/plugin.test.ts
import { describe, it, expect } from 'vitest';
import MyPlugin from '../src/index';

describe('MyPlugin', () => {
  it('should activate', async () => {
    const plugin = new MyPlugin();
    const mockContext = {
      logger: { info: () => {}, error: () => {} },
      registerTool: () => {},
      registerCommand: () => {}
    };
    
    await expect(plugin.activate(mockContext)).resolves.not.toThrow();
  });
});
```

### 集成测试

```typescript
// tests/integration.test.ts
import { testPlugin } from '@openai/codex/test';
import MyPlugin from '../src/index';

testPlugin(MyPlugin, {
  name: 'my-plugin',
  tests: [
    {
      name: 'tool execution',
      tool: 'my-tool',
      input: { input: 'test' },
      expected: { result: '处理了：test' }
    }
  ]
});
```

## 调试插件

### 本地调试

```bash
# 链接插件
codex plugin link ./my-plugin

# 开发模式
npm run dev

# 在另一个终端运行 Codex
codex
```

### 日志调试

```typescript
this.context?.logger.debug('调试信息:', data);
this.context?.logger.info('信息:', message);
this.context?.logger.warn('警告:', warning);
this.context?.logger.error('错误:', error);
```

## 打包发布

### 构建

```bash
npm run build
```

### 检查

```bash
# 检查 package.json
npm pkg get

# 检查文件
npm pack --dry-run
```

### 发布

```bash
# 发布到 npm
npm publish

# 发布到 Codex 市场
codex plugin publish
```

## 版本管理

### 语义化版本

```
MAJOR.MINOR.PATCH
- MAJOR: 不兼容更新
- MINOR: 功能更新
- PATCH: Bug 修复
```

### 更新版本

```bash
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.1 -> 1.1.0
npm version major  # 1.1.0 -> 2.0.0
```

## 文档编写

### README.md

```markdown
# My Plugin

插件描述

## 安装

```bash
codex plugin install my-plugin
```

## 使用

### 工具

- `my-tool` - 工具描述

### 命令

- `my-command` - 命令描述

## 配置

```json
{
  "my-plugin": {
    "option": "value"
  }
}
```

## 许可证

MIT
```

## 最佳实践

### 1. 代码质量

```
- 使用 TypeScript
- 启用严格模式
- 编写测试
- 代码审查
```

### 2. 错误处理

```typescript
try {
  // 可能出错的代码
} catch (error) {
  logger.error('操作失败:', error);
  throw error;
}
```

### 3. 性能优化

```
- 延迟加载
- 结果缓存
- 避免阻塞
```

## 下一步

- [插件索引](/plugins/index) - 插件系统介绍
- [MCP](/mcp) - Model Context Protocol
- [开源贡献](/open-source) - 参与开源
