# GitHub 集成

与 GitHub 深度集成功能

## 概述

Codex 与 GitHub 深度集成，支持 PR 审查、Issue 管理和代码审查等工作流。

## 连接 GitHub

### 授权 Codex

1. 打开 Codex 设置
2. 选择"集成" → "GitHub"
3. 点击"连接 GitHub"
4. 授权访问权限

### 权限要求

```
需要的权限:
- 读取仓库代码
- 创建评论
- 创建分支
- 创建 Pull Request
```

## Pull Request 审查

### 自动审查

配置自动审查：

```json
{
  "github": {
    "autoReview": true,
    "reviewTriggers": ["opened", "synchronize"]
  }
}
```

### 审查内容

```
审查范围:
- 代码质量
- 安全隐患
- 性能问题
- 代码规范
```

### 审查评论

Codex 自动在 PR 中添加评论：

```markdown
## Codex 代码审查

### 发现的问题
1. ⚠️ 第 42 行可能空指针
2. 💡 可以提取为公共函数

### 建议
- 添加错误处理
- 增加测试覆盖
```

## Issue 管理

### 自动分配

```json
{
  "github": {
    "autoAssign": true,
    "assignRules": [
      {
        "label": "bug",
        "assignee": "on-call"
      }
    ]
  }
}
```

### Issue 分析

Codex 自动分析 Issue：

```
分析内容:
- 问题分类
- 优先级建议
- 相关代码定位
```

### 自动回复

```json
{
  "github": {
    "autoReply": {
      "enabled": true,
      "templates": {
        "bug": "收到，正在分析...",
        "feature": "感谢建议，会评估..."
      }
    }
  }
}
```

## 代码审查

### PR 工作流

```
1. 开发者创建 PR
2. Codex 自动审查
3. 添加审查评论
4. 开发者修复
5. 再次审查
6. 合并 PR
```

### 审查模式

```
审查模式:
- 快速审查：仅检查明显问题
- 标准审查：全面检查
- 深度审查：包括架构分析
```

## GitHub Actions 集成

### 自动工作流

```yaml
name: Codex Review

on:
  pull_request:
    branches: [main]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: openai/codex-action@v2
        with:
          mode: review
```

### 检查状态

```
Codex 审查结果作为检查状态:
- ✅ 通过
- ⚠️ 有建议
- ❌ 发现问题
```

## 通知和提醒

### Slack 通知

```json
{
  "notify": {
    "slack": {
      "onPR": true,
      "onIssue": true,
      "channel": "#github"
    }
  }
}
```

### 邮件通知

```json
{
  "notify": {
    "email": {
      "onReviewComplete": true
    }
  }
}
```

## 配置选项

### 仓库设置

```json
{
  "repos": {
    "owner/repo": {
      "enabled": true,
      "autoReview": true,
      "branch": "main"
    }
  }
}
```

### 过滤规则

```json
{
  "filters": {
    "excludePaths": [
      "*.md",
      "test/**"
    ],
    "includePaths": [
      "src/**"
    ]
  }
}
```

## 最佳实践

### 1. 配置审查规则

```
明确审查重点:
- 安全问题必查
- 性能问题优先
- 风格问题可选
```

### 2. 设置阈值

```
评论阈值:
- 只评论重要问题
- 避免过度评论
```

### 3. 人工最终审查

```
AI 审查 + 人工确认
确保质量
```

## 故障排除

### 常见问题

| 问题 | 解决方案 |
|------|---------|
| 无法连接 | 检查授权权限 |
| 审查不触发 | 检查触发配置 |
| 评论未显示 | 检查评论权限 |

## 下一步

- [GitHub Action](/github-action) - CI/CD 集成
- [Slack 集成](/integrations/slack) - 通知集成
- [Linear 集成](/integrations/linear) - 任务管理
