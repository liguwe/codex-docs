# 定制化

定制 Codex 以适应你的工作流

## 概述

Codex 提供多种定制选项，让你可以根据个人偏好和项目需求调整行为。

## 定制层级

### 1. 用户级定制

适用于所有项目：

```
~/.codex/config.json
```

### 2. 项目级定制

仅适用于特定项目：

```
project/.codex.json
```

### 3. 会话级定制

仅适用于当前会话：

```
对话中指定
```

## 定制选项

### 模型选择

```json
{
  "model": "codex-latest"
}
```

可用模型：
- `codex-latest` - 最新最强
- `codex-fast` - 快速响应
- `codex-economy` - 经济实惠

### 行为定制

```json
{
  "behavior": {
    "verbosity": "concise",
    "codeStyle": "functional",
    "commentLanguage": "zh-CN"
  }
}
```

### 审批策略

```json
{
  "approval": {
    "mode": "default",
    "autoApprove": ["read:files"],
    "requireApproval": ["exec:commands"]
  }
}
```

## 记忆定制

### 个人偏好

```
记住这些偏好：
- 使用 TypeScript
- 函数式编程风格
- 详细注释
```

### 项目规范

```
项目规范：
- 使用 ESLint
- 测试覆盖率 > 80%
- 遵循 PEP 8
```

## 规则定制

### 代码风格规则

```markdown
# 代码风格

- 使用 2 空格缩进
- 单引号字符串
- 箭头函数优先
```

### 安全规则

```markdown
# 安全检查

- 不提交密钥
- 参数化 SQL 查询
- 验证用户输入
```

## 钩子定制

### 前置钩子

```json
{
  "hooks": {
    "pre-execution": "./hooks/check.sh"
  }
}
```

### 后置钩子

```json
{
  "hooks": {
    "post-commit": "./hooks/notify.sh"
  }
}
```

## 界面定制

### 主题设置

```json
{
  "theme": "dark"
}
```

### 布局设置

```json
{
  "layout": {
    "sidebar": "right",
    "panel": "bottom"
  }
}
```

## 工作流定制

### 自动化规则

```yaml
automation:
  - trigger: file-change
    action: run-tests
  - trigger: pr-opened
    action: code-review
```

### 快捷命令

```json
{
  "shortcuts": {
    "t": "npm test",
    "b": "npm run build"
  }
}
```

## MCP 定制

### 服务器配置

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"]
    }
  }
}
```

### 工具集成

```json
{
  "tools": {
    "enabled": ["file-read", "file-write", "git-status"]
  }
}
```

## 最佳实践

### 1. 版本控制配置

```
将 .codex.json 提交到版本控制
确保团队一致
```

### 2. 分层配置

```
用户级：通用偏好
项目级：特定规范
```

### 3. 文档化

```
为定制添加说明
便于团队理解
```

## 配置示例

### 前端项目

```json
{
  "model": "codex-latest",
  "language": "zh-CN",
  "behavior": {
    "framework": "react",
    "styling": "tailwind",
    "testing": "jest"
  },
  "approval": {
    "autoApprove": ["read:files", "npm:install"]
  }
}
```

### Python 项目

```json
{
  "model": "codex-latest",
  "behavior": {
    "version": "3.11",
    "linter": "flake8",
    "formatter": "black"
  },
  "hooks": {
    "pre-commit": "pytest"
  }
}
```

## 下一步

- [规则](/rules) - 定义行为规则
- [钩子](/hooks) - 事件钩子
- [配置参考](/config-reference) - 完整配置项
