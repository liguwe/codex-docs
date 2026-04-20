# Slack 集成

与 Slack 团队协作集成

## 概述

Codex Slack 集成让团队可以在 Slack 中接收通知、协作和与 Codex 交互。

## 安装集成

### 添加 Slack 应用

1. 访问 Slack App 目录
2. 搜索 "Codex"
3. 添加到工作区
4. 授权权限

### 配置权限

```
需要的权限:
- 发送消息
- 读取频道
- 创建频道
```

## 通知功能

### PR 通知

```json
{
  "slack": {
    "pullRequests": {
      "enabled": true,
      "channel": "#code-reviews",
      "events": ["opened", "updated", "merged"]
    }
  }
}
```

### 审查完成通知

```json
{
  "slack": {
    "reviewComplete": {
      "enabled": true,
      "channel": "#code-reviews"
    }
  }
}
```

### 部署通知

```json
{
  "slack": {
    "deployments": {
      "enabled": true,
      "channel": "#deployments",
      "events": ["started", "completed", "failed"]
    }
  }
}
```

## 交互式命令

### 斜杠命令

```
/codex review <PR 链接>
/codex explain <代码片段>
/codex status
```

### 快捷操作

```
点击消息菜单:
- Codex: 解释这段消息
- Codex: 审查代码
- Codex: 生成回复
```

## 频道集成

### 专用频道

```
#codex-notifications  - 通知
#codex-reviews       - 代码审查
#codex-help          - 帮助讨论
```

### 话题线程

```
自动创建线程:
- PR 审查线程
- Bug 讨论线程
- 功能开发线程
```

## 消息格式

### 审查通知

```markdown
🔍 Codex 完成代码审查

PR: #123 添加用户登录
文件：3 个文件，+150 -20 行

发现:
⚠️ 2 个警告
💡 3 个建议

[查看详情] [审查 PR]
```

### 错误告警

```markdown
🚨 Codex 检测到问题

文件：src/auth.js
问题：潜在的安全漏洞
严重性：高

[立即审查] [忽略]
```

## 自动化工作流

### 新 PR 流程

```yaml
trigger: pr_opened
actions:
  - notify: "#code-reviews"
  - assign: reviewer
  - schedule: review
```

### 审查完成流程

```yaml
trigger: review_complete
actions:
  - notify: author
  - update: pr_status
  - log: metrics
```

## 团队协作

### 审查分配

```json
{
  "reviewers": {
    "rotation": true,
    "members": ["@user1", "@user2"],
    "schedule": "weekly"
  }
}
```

### @提及 Codex

```
在消息中提及 Codex:
@codex 请审查这个 PR
@codex 这个 bug 怎么修复？
```

## 自定义通知

### 条件通知

```json
{
  "notifications": {
    "securityIssues": {
      "channel": "#security",
      "priority": "high"
    },
    "styleIssues": {
      "channel": "#code-style",
      "priority": "low"
    }
  }
}
```

### 通知过滤

```json
{
  "filters": {
    "minSeverity": "warning",
    "excludeAuthors": ["bot"],
    "quietHours": "22:00-08:00"
  }
}
```

## 数据分析

### 使用统计

```
每周报告:
- 审查 PR 数量
- 发现问题数量
- 平均响应时间
```

### 团队指标

```
团队效率:
- 代码审查时间
- Bug 发现率
- 修复率
```

## 安全设置

### 访问控制

```json
{
  "access": {
    "allowedChannels": ["#dev", "#reviews"],
    "allowedUsers": ["@admin", "@lead"]
  }
}
```

### 数据保护

```
不发送:
- 敏感代码
- 密钥信息
- 个人数据
```

## 故障排除

### 常见问题

| 问题 | 解决方案 |
|------|---------|
| 通知不显示 | 检查频道权限 |
| 命令无响应 | 检查应用授权 |
| 格式错误 | 更新应用版本 |

## 最佳实践

### 1. 合理配置通知

```
避免通知过载:
- 只通知重要事件
- 使用摘要报告
- 设置免打扰时间
```

### 2. 明确响应流程

```
定义响应 SLA:
- 紧急：15 分钟
- 高：1 小时
- 中：4 小时
- 低：24 小时
```

### 3. 定期审查配置

```
每月检查:
- 通知效果
- 团队反馈
- 配置优化
```

## 下一步

- [GitHub 集成](/integrations/github) - GitHub 配置
- [Linear 集成](/integrations/linear) - 任务管理
- [自动化](/app/automations) - 工作流配置
