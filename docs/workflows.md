# 工作流

自动化你的 Codex 工作流程

## 概述

工作流允许你将多个步骤组合成单个可重复执行的任务，提高效率。

## 创建工作流

### 基础结构

工作流是一个 YAML 文件：

```yaml
name: 代码审查工作流
description: 自动审查 Pull Request 并提交意见

steps:
  - name: 获取变更
    action: git diff
    
  - name: 分析代码
    action: codex review
    
  - name: 提交意见
    action: github comment
```

### 触发条件

工作流可以通过以下方式触发：

- **手动触发**: 在 CLI 或 App 中运行
- **事件触发**: Git push、PR 创建等
- **定时触发**: 每天/每周执行

## 内置工作流

### 1. PR 审查

```yaml
name: pr-review
on:
  pull_request: opened

steps:
  - checkout
  - codex-review:
      focus: [security, performance]
  - post-comment
```

### 2. 代码生成

```yaml
name: generate-code
on: manual

steps:
  - read-spec
  - generate-implementation
  - write-tests
  - create-pr
```

### 3. Bug 修复

```yaml
name: bug-fix
on: issue-labeled bug

steps:
  - reproduce-bug
  - identify-cause
  - implement-fix
  - verify-fix
```

## 自定义工作流

### 创建步骤

每个步骤可以包含：

```yaml
steps:
  - name: 步骤名称
    action: 执行动作
    with:
      param1: value1
    if: 条件表达式
```

### 条件执行

```yaml
steps:
  - name: 检查变更
    action: git diff
    
  - name: 运行审查
    action: codex review
    if: changes.code == true
    
  - name: 通知团队
    action: slack notify
    if: review.hasIssues == true
```

### 循环和并行

```yaml
# 并行执行
parallel:
  - step1
  - step2

# 循环执行
for: each file in changedFiles
  do:
    - review file
```

## 工作流变量

### 内置变量

| 变量 | 说明 |
|------|------|
| `github.event` | GitHub 事件数据 |
| `git.branch` | 当前分支名 |
| `codex.model` | 使用的模型 |
| `env` | 环境变量 |

### 自定义变量

```yaml
env:
  REVIEW_LEVEL: detailed
  TARGET_BRANCH: main

steps:
  - name: 审查
    action: codex review
    with:
      level: ${{ env.REVIEW_LEVEL }}
```

## 输出和通知

### 输出结果

```yaml
outputs:
  review_status: ${{ steps.review.outputs.status }}
  issues_found: ${{ steps.review.outputs.issues }}
```

### 通知配置

```yaml
notify:
  on_success: slack channel
  on_failure: [slack, email]
  
slack:
  webhook: ${{ secrets.SLACK_WEBHOOK }}
  
email:
  to: team@example.com
```

## 最佳实践

### 1. 保持简洁

每个工作流应该有明确的单一职责。

### 2. 错误处理

```yaml
on_error:
  - log error
  - notify team
  - rollback changes
```

### 3. 版本控制

将工作流文件提交到版本控制：
```bash
.codex/workflows/pr-review.yml
```

### 4. 测试工作流

在应用到生产前，先在测试环境运行：

```bash
codex workflow run pr-review --dry-run
```

## 故障排除

### 查看日志

```bash
codex workflow logs <workflow-name>
```

### 调试模式

```bash
codex workflow run <name> --debug --verbose
```

### 常见问题

| 问题 | 解决方案 |
|------|---------|
| 步骤失败 | 检查前置条件 |
| 变量未定义 | 检查变量名和作用域 |
| 权限错误 | 检查 API 密钥和权限 |

## 下一步

- [钩子](/hooks) - 事件触发脚本
- [规则](/rules) - 定义行为准则
- [CLI 参考](/cli/reference) - 命令文档
