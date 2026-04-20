# Linear 集成

与 Linear 任务管理集成

## 概述

Codex 与 Linear 集成，实现任务自动创建、更新和跟踪。

## 连接 Linear

### 授权步骤

1. 打开 Codex 设置
2. 选择"集成" → "Linear"
3. 点击"连接 Linear"
4. 授权访问权限

### 权限要求

```
需要的权限:
- 读取 Issue
- 创建 Issue
- 更新 Issue
- 添加评论
```

## Issue 管理

### 自动创建 Issue

```json
{
  "linear": {
    "autoCreate": {
      "enabled": true,
      "triggers": ["bug_detected", "feature_requested"]
    }
  }
}
```

### Issue 模板

```json
{
  "templates": {
    "bug": {
      "title": "Bug: {description}",
      "description": "## 问题描述\n{description}\n\n## 复现步骤\n{steps}",
      "priority": 2
    },
    "feature": {
      "title": "Feature: {description}",
      "description": "## 功能描述\n{description}",
      "priority": 3
    }
  }
}
```

## 任务自动化

### 代码审查任务

```yaml
trigger: review_complete
conditions:
  - hasIssues: true
actions:
  - createIssue:
      team: engineering
      assignee: pr_author
```

### Bug 修复任务

```yaml
trigger: bug_detected
actions:
  - createIssue:
      team: engineering
      priority: high
      label: bug
```

## 双向同步

### 状态同步

```
Codex → Linear:
- 任务进度
- 完成状态

Linear → Codex:
- 任务分配
- 优先级变更
```

### 评论同步

```json
{
  "sync": {
    "comments": {
      "codexToLinear": true,
      "linearToCodex": true
    }
  }
}
```

## 智能分配

### 自动分配规则

```json
{
  "assignment": {
    "rules": [
      {
        "label": "bug",
        "assignee": "on-call"
      },
      {
        "label": "feature",
        "assignee": "team-lead"
      }
    ]
  }
}
```

### 工作量平衡

```json
{
  "assignment": {
    "balanceWorkload": true,
    "maxIssuesPerPerson": 5
  }
}
```

## 项目视图

### 仪表盘

```
显示内容:
- 活跃任务
- 待审查 PR
- 本周完成
```

### 过滤器

```
常用过滤:
- 我的任务
- 高优先级
- 逾期任务
```

## 通知集成

### Slack 通知

```json
{
  "notify": {
    "slack": {
      "onIssueCreated": true,
      "onIssueUpdated": true,
      "channel": "#tasks"
    }
  }
}
```

### 邮件通知

```json
{
  "notify": {
    "email": {
      "onAssign": true,
      "onDueDate": true
    }
  }
}
```

## 工作流集成

### 开发流程

```
1. Codex 检测问题
2. 自动创建 Linear Issue
3. 分配给开发者
4. 开发者修复
5. Codex 验证修复
6. 关闭 Issue
```

### 审查流程

```
1. PR 创建
2. Codex 审查
3. 发现问题创建 Issue
4. 修复后关联 Issue
5. 验证后关闭
```

## 报告和分析

### 周报告

```
周报内容:
- 新建任务数
- 完成任务数
- 平均修复时间
- Bug 趋势
```

### 团队指标

```
团队效率:
- 任务完成率
- 逾期率
- 返工率
```

## 配置选项

### 团队设置

```json
{
  "teams": {
    "engineering": {
      "enabled": true,
      "defaultPriority": 2,
      "autoAssign": true
    }
  }
}
```

### 优先级映射

```json
{
  "priorityMapping": {
    "critical": 0,
    "high": 1,
    "medium": 2,
    "low": 3
  }
}
```

## 最佳实践

### 1. 合理自动创建

```
避免创建过多任务:
- 设置阈值
- 合并相似问题
- 人工确认重要任务
```

### 2. 明确责任

```
定义责任矩阵:
- Bug 修复责任人
- 审查责任人
- 验证责任人
```

### 3. 定期清理

```
每周清理:
- 关闭已完成
- 重新评估优先级
- 清理重复任务
```

## 故障排除

### 常见问题

| 问题 | 解决方案 |
|------|---------|
| 无法连接 | 检查 API 密钥 |
| Issue 未创建 | 检查触发条件 |
| 分配失败 | 检查用户权限 |

## 下一步

- [GitHub 集成](/integrations/github) - GitHub 配置
- [Slack 集成](/integrations/slack) - 通知集成
- [自动化](/workflows) - 工作流配置
