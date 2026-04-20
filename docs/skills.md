# 技能

扩展 Codex 能力的自定义技能

## 概述

技能是自定义的 Codex 扩展，可以添加新的命令、工具集成或自动化任务。

## 技能类型

### 1. 命令技能

添加新的 CLI 命令：

```json
{
  "name": "deploy",
  "description": "部署应用到服务器",
  "commands": ["deploy", "publish"],
  "handler": "./skills/deploy.js"
}
```

### 2. 工具技能

集成外部工具：

```json
{
  "name": "jira",
  "description": "Jira 任务管理",
  "tools": ["create-issue", "update-status"],
  "handler": "./skills/jira.js"
}
```

### 3. 自动化技能

响应特定事件：

```json
{
  "name": "auto-test",
  "description": "自动运行测试",
  "triggers": ["file-changed:*.test.js"],
  "handler": "./skills/auto-test.js"
}
```

## 创建技能

### 目录结构

```
skills/
├── my-skill/
│   ├── skill.json      # 技能配置
│   ├── index.js        # 主处理逻辑
│   └── README.md       # 使用说明
```

### 技能配置

```json
{
  "name": "my-skill",
  "version": "1.0.0",
  "description": "我的自定义技能",
  "author": "Your Name",
  "main": "index.js",
  "commands": [
    {
      "name": "my-command",
      "description": "命令描述",
      "usage": "my-command [options]"
    }
  ],
  "permissions": ["read:files", "run:commands"]
}
```

### 处理逻辑

```javascript
module.exports = {
  async run(context, args) {
    // 获取上下文
    const { project, config } = context;
    
    // 处理参数
    const { option1, option2 } = args;
    
    // 执行逻辑
    const result = await doSomething(option1, option2);
    
    // 返回结果
    return {
      success: true,
      data: result
    };
  }
};
```

## 内置技能

### Git 技能

```json
{
  "name": "git-helper",
  "commands": ["git-status", "git-diff", "git-log"]
}
```

### Docker 技能

```json
{
  "name": "docker-helper",
  "commands": ["docker-build", "docker-run", "docker-compose"]
}
```

### 测试技能

```json
{
  "name": "test-runner",
  "commands": ["run-tests", "coverage", "test-watch"]
}
```

## 安装技能

### 本地安装

```bash
codex skill install ./path/to/skill
```

### 从 URL 安装

```bash
codex skill install https://github.com/user/skill-repo
```

### 从注册表安装

```bash
codex skill install @codex/skill-name
```

## 管理技能

### 列出已安装技能

```bash
codex skill list
```

### 更新技能

```bash
codex skill update <skill-name>
```

### 卸载技能

```bash
codex skill uninstall <skill-name>
```

### 启用/禁用技能

```bash
codex skill enable <skill-name>
codex skill disable <skill-name>
```

## 技能权限

### 权限类型

| 权限 | 说明 |
|------|------|
| `read:files` | 读取文件 |
| `write:files` | 写入文件 |
| `run:commands` | 执行命令 |
| `network:request` | 网络请求 |
| `env:read` | 读取环境变量 |

### 权限请求

技能首次请求权限时会提示用户授权：

```
技能 "deploy" 请求以下权限：
- run:commands (执行部署命令)
- env:read (读取部署配置)

是否授权？[y/N]
```

## 技能开发最佳实践

### 1. 错误处理

```javascript
try {
  const result = await doSomething();
  return { success: true, data: result };
} catch (error) {
  return { 
    success: false, 
    error: error.message 
  };
}
```

### 2. 日志记录

```javascript
const logger = context.getLogger('my-skill');
logger.info('Starting operation...');
logger.debug('Debug info:', data);
```

### 3. 配置验证

```javascript
if (!config.apiKey) {
  throw new Error('API key is required');
}
```

## 发布技能

### 打包技能

```bash
codex skill package ./my-skill
```

### 发布到注册表

```bash
codex skill publish ./my-skill
```

## 下一步

- [插件开发](/plugins/build) - 构建完整插件
- [钩子](/hooks) - 事件脚本
- [MCP](/mcp) - Model Context Protocol
