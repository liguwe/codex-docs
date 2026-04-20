# 钩子

在特定事件触发时执行脚本

## 概述

钩子允许你在 Codex 的特定事件发生时自动执行自定义脚本，实现深度集成和自动化。

## 钩子类型

### 1. 前置钩子 (Pre-hooks)

在 Codex 执行操作前运行：

```json
{
  "pre-commit": "./hooks/pre-commit.sh",
  "pre-execution": "./hooks/check-permissions.sh"
}
```

### 2. 后置钩子 (Post-hooks)

在 Codex 执行操作后运行：

```json
{
  "post-commit": "./hooks/notify-team.sh",
  "post-execution": "./hooks/cleanup.sh"
}
```

### 3. 事件钩子

响应特定事件：

```json
{
  "on-error": "./hooks/log-error.sh",
  "on-warning": "./hooks/notify-user.sh"
}
```

## 配置钩子

### 全局钩子

在 `~/.codex/hooks.json` 中配置：

```json
{
  "hooks": {
    "pre-execution": "~/.codex/hooks/pre-exec.sh",
    "post-execution": "~/.codex/hooks/post-exec.sh"
  }
}
```

### 项目钩子

在 `./.codex.json` 中配置：

```json
{
  "hooks": {
    "pre-commit": "./scripts/codex-pre-commit.sh",
    "post-commit": "./scripts/codex-post-commit.sh"
  }
}
```

### 钩子优先级

```
项目钩子 > 全局钩子
```

## 可用钩子事件

| 事件 | 触发时机 | 参数 |
|------|---------|------|
| `pre-execution` | 执行任何操作前 | action, context |
| `post-execution` | 执行任何操作后 | action, result |
| `pre-commit` | 提交代码前 | changes, message |
| `post-commit` | 提交代码后 | commit-hash |
| `pre-review` | 审查代码前 | diff, files |
| `post-review` | 审查代码后 | review-summary |
| `on-error` | 发生错误时 | error, context |
| `on-approval-required` | 需要审批时 | action, reason |

## 钩子脚本

### Bash 脚本示例

```bash
#!/bin/bash
# hooks/pre-execution.sh

ACTION=$1
CONTEXT=$2

echo "即将执行：$ACTION"

# 检查权限
if ! check_permission "$ACTION"; then
    echo "权限不足，拒绝执行"
    exit 1
fi

# 记录日志
log_action "$ACTION" "$CONTEXT"
```

### Node.js 脚本示例

```javascript
#!/usr/bin/env node
// hooks/post-commit.js

const { execSync } = require('child_process');

const [commitHash] = process.argv.slice(2);

// 发送通知
sendSlackMessage(`代码已提交：${commitHash}`);

// 触发 CI
execSync('curl -X POST https://ci.example.com/build');

function sendSlackMessage(message) {
    // 发送 Slack 通知
}
```

### Python 脚本示例

```python
#!/usr/bin/env python3
# hooks/on-error.py

import sys
import logging

error = sys.argv[1]
context = sys.argv[2]

logging.error(f"Codex 错误：{error}")
logging.error(f"上下文：{context}")

# 发送告警
send_alert(error, context)
```

## 钩子环境变量

钩子脚本可以访问以下环境变量：

```bash
CODEX_ACTION        # 当前操作
CODEX_PROJECT       # 项目路径
CODEX_HOME          # Codex 主目录
CODEX_MODEL         # 使用的模型
CODEX_SESSION_ID    # 会话 ID
```

## 钩子最佳实践

### 1. 保持快速

钩子脚本应该快速执行，避免阻塞主流程：

```bash
# 不好：慢操作
./slow-analysis.sh

# 好：异步执行
./send-notification.sh &
```

### 2. 错误处理

```bash
#!/bin/bash
set -e

# 主要逻辑
if ! do_something; then
    echo "钩子失败，但继续主流程"
    exit 0  # 不中断主流程
fi
```

### 3. 日志记录

```bash
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" >> ~/.codex/hooks.log
}

log "执行钩子：$CODEX_ACTION"
```

## 钩子用例

### 自动备份

```json
{
  "hooks": {
    "pre-commit": "./hooks/backup-before-commit.sh"
  }
}
```

### 代码质量检查

```bash
#!/bin/bash
# hooks/pre-commit.sh

# 运行 linter
if ! npm run lint; then
    echo "代码质量检查失败，请修复后再提交"
    exit 1
fi

# 运行测试
if ! npm test; then
    echo "测试失败，请修复后再提交"
    exit 1
fi
```

### 通知团队

```bash
#!/bin/bash
# hooks/post-commit.sh

COMMIT_MSG=$(git log -1 --pretty=%B)
curl -X POST "$SLACK_WEBHOOK" \
  -H "Content-Type: application/json" \
  -d "{\"text\":\"新提交：$COMMIT_MSG\"}"
```

## 钩子调试

### 启用调试日志

```json
{
  "debug": {
    "hooks": true
  }
}
```

### 查看钩子日志

```bash
tail -f ~/.codex/hooks.log
```

### 测试钩子

```bash
codex hooks test pre-execution
```

## 安全考虑

### 钩子权限

确保钩子脚本有适当的权限：

```bash
chmod 700 ~/.codex/hooks/*.sh
```

### 输入验证

钩子脚本应验证所有输入：

```bash
if [[ ! "$CODEX_ACTION" =~ ^[a-z-]+$ ]]; then
    echo "无效的操作名称"
    exit 1
fi
```

## 下一步

- [规则](/rules) - 定义行为准则
- [工作流](/workflows) - 自动化任务
- [配置参考](/config-reference) - 钩子配置项
