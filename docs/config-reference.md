# 配置参考

Codex 配置项完整参考

## 概述

本页面列出所有可用的 Codex 配置项，可作为查阅手册使用。

## 根配置项

| 配置项 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `model` | string | codex-latest | 默认模型 |
| `approval_mode` | string | default | 审批模式 |
| `language` | string | en-US | 界面语言 |
| `theme` | string | system | 主题 |
| `timeout` | number | 300 | 超时时间 (秒) |

## 模型配置

### model

```json
{
  "model": "codex-latest"
}
```

可选值：
- `codex-latest` - 最新最强
- `codex-fast` - 快速响应
- `codex-economy` - 经济实惠

### model.temperature

```json
{
  "model": {
    "temperature": 0.7
  }
}
```

范围：0.0 - 1.0
- 低值：更确定性
- 高值：更创意

### model.maxTokens

```json
{
  "model": {
    "maxTokens": 4096
  }
}
```

范围：1024 - 32768

### model.fallback

```json
{
  "model": {
    "fallback": "codex-fast",
    "fallbackOn": ["rate_limit", "timeout"]
  }
}
```

## 行为配置

### behavior

```json
{
  "behavior": {
    "verbosity": "concise",
    "codeStyle": "functional",
    "commentLanguage": "zh-CN"
  }
}
```

### behavior.verbosity

可选值：
- `concise` - 简洁
- `normal` - 正常
- `detailed` - 详细

### behavior.codeStyle

可选值：
- `functional` - 函数式
- `object-oriented` - 面向对象
- `procedural` - 过程式

## 审批配置

### approval_mode

```json
{
  "approval_mode": "default"
}
```

可选值：
- `auto` - 自动批准
- `default` - 默认策略
- `manual` - 手动批准

### approval.autoApprove

```json
{
  "approval": {
    "autoApprove": ["read:files", "git:status"]
  }
}
```

### approval.requireApproval

```json
{
  "approval": {
    "requireApproval": ["file:delete", "command:exec"]
  }
}
```

## 安全配置

### security.sandbox

```json
{
  "security": {
    "sandbox": true
  }
}
```

### security.audit

```json
{
  "security": {
    "audit": {
      "enabled": true,
      "logPath": "~/.codex/audit.log"
    }
  }
}
```

### security.network

```json
{
  "security": {
    "network": {
      "enabled": false,
      "allowedDomains": ["api.example.com"]
    }
  }
}
```

## 文件配置

### files.readOnly

```json
{
  "files": {
    "readOnly": true
  }
}
```

### files.allowedPaths

```json
{
  "files": {
    "allowedPaths": ["./src", "./docs"]
  }
}
```

### files.exclude

```json
{
  "files": {
    "exclude": [
      "node_modules",
      ".git",
      "*.log"
    ]
  }
}
```

## 网络配置

### network.proxy

```json
{
  "network": {
    "proxy": {
      "enabled": true,
      "url": "http://proxy.example.com:8080"
    }
  }
}
```

### network.timeout

```json
{
  "network": {
    "timeout": 30000
  }
}
```

### network.retry

```json
{
  "network": {
    "retry": {
      "maxRetries": 3,
      "backoff": "exponential"
    }
  }
}
```

## 记忆配置

### memories

```json
{
  "memories": [
    "偏好使用 TypeScript",
    "使用 2 空格缩进"
  ]
}
```

### memory.sync

```json
{
  "memory": {
    "sync": true,
    "syncInterval": 3600
  }
}
```

### memory.expiration

```json
{
  "memory": {
    "expiration": {
      "session": "1h",
      "project": "30d"
    }
  }
}
```

## 规则配置

### rules

```json
{
  "rules": [
    "使用 TypeScript 严格模式",
    "所有函数必须有类型"
  ]
}
```

### rules.files

```json
{
  "rules": {
    "files": ["./.codex/rules/*.md"]
  }
}
```

## 钩子配置

### hooks.pre-execution

```json
{
  "hooks": {
    "pre-execution": "./hooks/pre-exec.sh"
  }
}
```

### hooks.post-commit

```json
{
  "hooks": {
    "post-commit": "./hooks/notify.sh"
  }
}
```

### hooks.on-error

```json
{
  "hooks": {
    "on-error": "./hooks/log-error.sh"
  }
}
```

## 性能配置

### performance.cache

```json
{
  "performance": {
    "cache": {
      "enabled": true,
      "maxSize": 1000
    }
  }
}
```

### performance.parallel

```json
{
  "performance": {
    "parallel": {
      "maxAgents": 5,
      "maxRequests": 10
    }
  }
}
```

### performance.resources

```json
{
  "performance": {
    "resources": {
      "maxMemory": "4GB",
      "maxCPU": 2
    }
  }
}
```

## 功能配置

### features.autoReview

```json
{
  "features": {
    "autoReview": true
  }
}
```

### features.autoTest

```json
{
  "features": {
    "autoTest": true
  }
}
```

### features.autoDocs

```json
{
  "features": {
    "autoDocs": false
  }
}
```

## MCP 配置

### mcpServers

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

## 界面配置

### theme

```json
{
  "theme": "dark"
}
```

可选值：
- `light` - 浅色
- `dark` - 深色
- `system` - 跟随系统

### language

```json
{
  "language": "zh-CN"
}
```

可选值：
- `en-US` - 英语
- `zh-CN` - 简体中文
- `ja-JP` - 日语

## 日志配置

### logging.level

```json
{
  "logging": {
    "level": "info"
  }
}
```

可选值：
- `error`
- `warn`
- `info`
- `debug`
- `trace`

### logging.format

```json
{
  "logging": {
    "format": "json"
  }
}
```

可选值：
- `json`
- `text`
- `colorized`

## 环境变量

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `CODEX_HOME` | Codex 主目录 | `~/.codex` |
| `OPENAI_API_KEY` | API 密钥 | - |
| `CODEX_MODEL` | 默认模型 | `codex-latest` |
| `CODEX_TIMEOUT` | 超时时间 | `300` |
| `CODEX_CONFIG` | 配置文件 | - |
| `CODEX_LOG_LEVEL` | 日志级别 | `info` |
| `CODEX_PROXY` | 代理地址 | - |

## 下一步

- [配置基础](/config-basic) - 入门配置
- [配置高级](/config-advanced) - 高级选项
- [配置示例](/config-sample) - 配置样例
