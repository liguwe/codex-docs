# 插件

扩展 Codex 功能的插件系统

## 概述

Codex 插件系统允许开发者扩展 Codex 的功能，添加新的工具、命令和集成。

## 插件类型

### 1. 工具插件

添加新的工具和能力：

```
- 文件处理工具
- 代码分析工具
- 外部 API 集成
```

### 2. 命令插件

添加新的 CLI 命令：

```
- 自定义命令
- 工作流命令
- 自动化命令
```

### 3. 界面插件

扩展用户界面：

```
- 新面板
- 新视图
- 主题定制
```

## 快速开始

### 创建插件

```bash
# 使用模板创建
npx create-codex-plugin my-plugin
```

### 插件结构

```
my-plugin/
├── src/
│   ├── index.ts      # 入口文件
│   ├── commands/     # 命令定义
│   └── tools/        # 工具定义
├── package.json
└── plugin.json       # 插件配置
```

### 插件配置

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "我的插件",
  "author": "Your Name",
  "main": "src/index.ts",
  "engines": {
    "codex": ">=2.0.0"
  }
}
```

## 开发指南

### 入口文件

```typescript
import { Plugin } from '@openai/codex';

export default class MyPlugin extends Plugin {
  async activate() {
    console.log('插件已激活');
  }

  async deactivate() {
    console.log('插件已停用');
  }
}
```

### 添加工具

```typescript
import { Tool } from '@openai/codex';

export const myTool: Tool = {
  name: 'my-tool',
  description: '工具描述',
  parameters: {
    type: 'object',
    properties: {
      input: { type: 'string' }
    }
  },
  async execute(params) {
    return { result: '处理结果' };
  }
};
```

### 添加命令

```typescript
import { Command } from '@openai/codex';

export const myCommand: Command = {
  name: 'my-command',
  description: '命令描述',
  async run(args) {
    console.log('执行命令');
  }
};
```

## 发布插件

### 准备工作

```json
{
  "name": "@scope/my-plugin",
  "version": "1.0.0",
  "license": "MIT",
  "repository": "github:user/repo",
  "keywords": ["codex", "plugin"]
}
```

### 发布到 npm

```bash
# 构建插件
npm run build

# 发布
npm publish
```

### 发布到 Codex 市场

```bash
# 提交到市场
codex plugin publish
```

## 安装插件

### 从 npm 安装

```bash
codex plugin install @scope/my-plugin
```

### 从本地安装

```bash
codex plugin install ./path/to/plugin
```

### 从 URL 安装

```bash
codex plugin install https://github.com/user/repo
```

## 管理插件

### 列出插件

```bash
codex plugin list
```

### 更新插件

```bash
codex plugin update my-plugin
codex plugin update --all
```

### 卸载插件

```bash
codex plugin uninstall my-plugin
```

### 启用/禁用

```bash
codex plugin enable my-plugin
codex plugin disable my-plugin
```

## 插件 API

### Codex 接口

```typescript
interface CodexAPI {
  // 注册工具
  registerTool(tool: Tool): void;
  
  // 注册命令
  registerCommand(command: Command): void;
  
  // 注册处理器
  registerHandler(handler: Handler): void;
  
  // 日志
  log(message: string): void;
}
```

### 上下文接口

```typescript
interface Context {
  // 项目信息
  project: ProjectInfo;
  
  // 配置
  config: Config;
  
  // 日志
  logger: Logger;
}
```

## 最佳实践

### 1. 单一职责

```
插件应该专注于单一功能
避免大而全的插件
```

### 2. 错误处理

```typescript
try {
  await doSomething();
} catch (error) {
  context.logger.error(error);
  throw error;
}
```

### 3. 性能考虑

```
- 避免阻塞操作
- 使用缓存
- 延迟加载
```

### 4. 文档完善

```
包含:
- 安装说明
- 使用示例
- API 文档
- 常见问题
```

## 调试插件

### 开发模式

```bash
codex plugin develop ./my-plugin
```

### 日志查看

```bash
codex logs plugin=my-plugin
```

### 断点调试

```typescript
// 在代码中设置断点
debugger;
```

## 安全考虑

### 权限管理

```json
{
  "permissions": [
    "read:files",
    "write:files",
    "run:commands"
  ]
}
```

### 数据保护

```
- 不存储敏感数据
- 加密必要数据
- 明确数据用途
```

## 示例插件

### 示例 1: GitHub 工具插件

```typescript
export const githubTool: Tool = {
  name: 'github',
  description: 'GitHub API 工具',
  async execute(params) {
    // 调用 GitHub API
  }
};
```

### 示例 2: 代码格式化插件

```typescript
export const formatCommand: Command = {
  name: 'format',
  description: '格式化代码',
  async run() {
    // 格式化项目代码
  }
};
```

## 下一步

- [MCP](/mcp) - Model Context Protocol
- [SDK](/sdk) - Codex SDK
- [开源](/open-source) - 开源贡献
