# Agent 审批与安全

管理 Codex Agent 的权限和审批流程

## 概述

Codex Agent 可以执行各种操作，审批系统确保你在自动化与安全之间取得平衡。

## 审批级别

### 1. 自动批准

Codex 自动执行操作，无需确认：

```json
{
  "approval_mode": "auto",
  "auto_approve": ["read:files", "git:status"]
}
```

**适用场景**:
- 低风险操作（读取文件、查看状态）
- 受信任的项目
- 自动化脚本

### 2. 默认审批

根据内置策略决定：

```json
{
  "approval_mode": "default"
}
```

**策略规则**:
- 读取操作：自动批准
- 小修改：自动批准
- 危险操作：需要确认

### 3. 手动批准

所有操作都需要确认：

```json
{
  "approval_mode": "manual"
}
```

**适用场景**:
- 生产环境
- 敏感项目
- 初次使用

## 危险操作

以下操作通常需要明确批准：

| 操作 | 风险级别 | 默认行为 |
|------|---------|---------|
| 删除文件 | 高 | 需要批准 |
| 执行系统命令 | 高 | 需要批准 |
| 网络请求 | 中 | 需要批准 |
| 写入敏感文件 | 高 | 需要批准 |
| Git 推送 | 中 | 需要批准 |
| 安装依赖 | 中 | 需要批准 |

## 配置审批规则

### 自定义规则

```json
{
  "approval_rules": {
    "auto_approve": [
      {
        "action": "read:file",
        "when": "path.startsWith('src/')"
      },
      {
        "action": "write:file",
        "when": "path.endsWith('.test.js')"
      }
    ],
    "require_approval": [
      {
        "action": "exec:command",
        "when": "command.includes('rm -rf')"
      }
    ]
  }
}
```

### 基于项目的规则

```json
{
  "project_rules": {
    "production": {
      "approval_mode": "manual",
      "blocked_actions": ["deploy", "database:migrate"]
    },
    "development": {
      "approval_mode": "auto",
      "allowed_actions": ["*"]
    }
  }
}
```

## 审批界面

### CLI 审批

```
⚠️ Codex 想要执行以下操作：

命令：rm -rf ./temp/*
影响：删除 15 个文件

[1] 批准
[2] 拒绝
[3] 批准并记住
[4] 查看详细信息

选择 (1-4): 
```

### App 审批

在 App 中，审批请求以弹窗形式显示：
- 操作描述
- 影响范围
- 批准/拒绝按钮
- 详情展开

## 安全最佳实践

### 1. 最小权限原则

```json
{
  "approval_mode": "default",
  "blocked_patterns": [
    "rm -rf /",
    "DROP TABLE",
    "chmod 777"
  ]
}
```

### 2. 环境隔离

```json
{
  "environments": {
    "production": {
      "approval_mode": "manual",
      "mfa_required": true
    },
    "staging": {
      "approval_mode": "default"
    }
  }
}
```

### 3. 审计日志

```json
{
  "audit": {
    "enabled": true,
    "log_approvals": true,
    "log_path": "~/.codex/audit.log"
  }
}
```

### 4. 超时设置

```json
{
  "approval_timeout": 300,
  "auto_deny_on_timeout": true
}
```

## 企业功能

### 集中审批策略

管理员可以定义组织级策略：

```json
{
  "org_policy": {
    "require_two_person_rule": true,
    "blocked_actions": ["production:deploy"],
    "required_reviewers": ["team-lead"]
  }
}
```

### SSO 集成

与企业身份提供商集成：
- SAML SSO
- OIDC
- 多因素认证

### 合规报告

生成审批报告用于合规审计：
- 操作时间线
- 审批决策记录
- 异常活动告警

## 故障排除

### 审批请求未显示

检查：
1. 通知权限是否开启
2. 审批超时设置
3. 日志文件是否有错误

### 无法批准操作

检查：
1. 是否被组织策略阻止
2. 是否超出权限范围
3. 会话是否过期

## 下一步

- [安全设置](/security/setup) - 安全配置指南
- [威胁模型](/security/threat-model) - 了解安全风险
- [规则](/rules) - 自定义行为规则
