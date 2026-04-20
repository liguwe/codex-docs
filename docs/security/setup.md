# 安全设置

Codex 安全功能配置指南

## 概述

本指南介绍如何配置 Codex 的各项安全功能，确保使用过程中的安全性。

## 认证安全

### API 密钥管理

```json
{
  "auth": {
    "apiKeyStorage": "keychain",
    "rotateInterval": "30d"
  }
}
```

### 会话管理

```json
{
  "session": {
    "timeout": 3600,
    "refreshEnabled": true,
    "maxConcurrent": 5
  }
}
```

### 多因素认证

```json
{
  "mfa": {
    "required": true,
    "method": "totp"
  }
}
```

## 沙箱配置

### 启用沙箱

```json
{
  "sandbox": {
    "enabled": true,
    "type": "docker"
  }
}
```

### 资源限制

```json
{
  "sandbox": {
    "limits": {
      "cpu": 2,
      "memory": "4GB",
      "disk": "10GB",
      "timeout": 300
    }
  }
}
```

### 网络隔离

```json
{
  "sandbox": {
    "network": {
      "enabled": false,
      "allowedHosts": []
    }
  }
}
```

## 权限管理

### 文件权限

```json
{
  "permissions": {
    "files": {
      "read": ["./src", "./docs"],
      "write": ["./src"],
      "deny": ["./config", "./.env"]
    }
  }
}
```

### 命令权限

```json
{
  "permissions": {
    "commands": {
      "allow": ["npm", "node", "git"],
      "deny": ["rm -rf", "sudo", "curl"]
    }
  }
}
```

### 网络权限

```json
{
  "permissions": {
    "network": {
      "allow": ["api.openai.com"],
      "deny": ["*"]
    }
  }
}
```

## 审批配置

### 审批模式

```json
{
  "approval": {
    "mode": "default"
  }
}
```

模式选项：
- `auto` - 自动批准
- `default` - 默认策略
- `manual` - 手动批准

### 自定义规则

```json
{
  "approval": {
    "rules": [
      {
        "action": "file:delete",
        "requireApproval": true
      },
      {
        "action": "command:exec",
        "requireApproval": true
      }
    ]
  }
}
```

## 审计配置

### 启用审计

```json
{
  "audit": {
    "enabled": true,
    "logPath": "~/.codex/audit.log"
  }
}
```

### 审计内容

```json
{
  "audit": {
    "logActions": [
      "file:read",
      "file:write",
      "command:exec",
      "network:request"
    ]
  }
}
```

### 日志轮转

```json
{
  "audit": {
    "rotation": {
      "maxSize": "100MB",
      "maxFiles": 10
    }
  }
}
```

## 数据保护

### 敏感数据检测

```json
{
  "dataProtection": {
    "detectSecrets": true,
    "patterns": [
      "api_key",
      "password",
      "token"
    ]
  }
}
```

### 数据脱敏

```json
{
  "dataProtection": {
    "maskSecrets": true,
    "maskChar": "*"
  }
}
```

### 加密配置

```json
{
  "encryption": {
    "enabled": true,
    "algorithm": "AES-256-GCM"
  }
}
```

## 网络安全

### TLS 配置

```json
{
  "network": {
    "tls": {
      "minVersion": "1.3",
      "verifyCerts": true
    }
  }
}
```

### 代理配置

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

### 自定义 CA

```json
{
  "network": {
    "caCerts": ["/path/to/ca.pem"]
  }
}
```

## 企业配置

### IP 白名单

```json
{
  "enterprise": {
    "ipWhitelist": [
      "192.168.1.0/24",
      "10.0.0.0/8"
    ]
  }
}
```

### SSO 配置

```json
{
  "enterprise": {
    "sso": {
      "enabled": true,
      "provider": "okta",
      "entityId": "https://sso.example.com"
    }
  }
}
```

### 策略强制执行

```json
{
  "enterprise": {
    "enforcePolicies": true,
    "allowOverride": false
  }
}
```

## 监控和告警

### 异常检测

```json
{
  "monitoring": {
    "detectAnomalies": true,
    "thresholds": {
      "requestsPerMinute": 100,
      "dataTransferMB": 50
    }
  }
}
```

### 告警配置

```json
{
  "monitoring": {
    "alerts": {
      "email": "security@example.com",
      "slack": "#security-alerts"
    }
  }
}
```

## 安全检查清单

### 部署前检查

```
☐ 启用沙箱
☐ 配置审批
☐ 设置权限
☐ 启用审计
☐ 配置备份
```

### 定期审查

```
每月:
☐ 审查权限
☐ 检查日志
☐ 更新配置
☐ 测试备份
```

## 故障排除

### 常见问题

| 问题 | 解决方案 |
|------|---------|
| 沙箱启动失败 | 检查 Docker |
| 权限不足 | 检查权限配置 |
| 审计日志过多 | 调整轮转配置 |

## 下一步

- [安全首页](/security/) - 安全介绍
- [威胁模型](/security/threat-model) - 威胁分析
- [安全 FAQ](/security/faq) - 常见问题
