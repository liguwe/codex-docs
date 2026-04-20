# CLI 命令参考

Codex CLI 的完整命令文档

## 基础命令

### codex

启动 Codex 交互界面：

```bash
codex [选项] [提示词]
```

### codex login

登录 Codex：

```bash
codex login
codex login --api-key
codex login --device-auth
```

### codex logout

退出登录：

```bash
codex logout
```

## 项目命令

### codex init

初始化新项目：

```bash
codex init [项目名]
```

### codex open

打开项目：

```bash
codex open [项目路径]
```

### codex projects

管理项目列表：

```bash
codex projects list
codex projects remove [项目名]
```

## 对话命令

### codex chat

开始新对话：

```bash
codex chat
codex chat --model codex-fast
```

### codex continue

继续上次对话：

```bash
codex continue
```

### codex history

查看对话历史：

```bash
codex history
codex history --limit 10
```

## 文件命令

### codex read

读取文件：

```bash
codex read <文件路径>
codex read --lines 1-50 file.js
```

### codex write

写入文件：

```bash
codex write <文件路径> --content "内容"
```

### codex edit

编辑文件：

```bash
codex edit <文件路径> "修改说明"
```

### codex search

搜索文件内容：

```bash
codex search "关键词" --glob "*.js"
```

## 执行命令

### codex run

运行命令：

```bash
codex run "npm test"
codex run --approve-all "运行测试"
```

### codex exec

执行单行命令：

```bash
codex exec "ls -la"
```

## Git 命令

### codex git

Git 操作：

```bash
codex git status
codex git diff
codex git commit "提交信息"
```

### codex review

代码审查：

```bash
codex review
codex review --file src/index.js
codex review --pr 123
```

## 配置命令

### codex config

配置管理：

```bash
codex config get model
codex config set model codex-fast
codex config list
```

### codex memories

记忆管理：

```bash
codex memories list
codex memories add "偏好 TypeScript"
codex memories remove <名称>
codex memories clear
```

### codex rules

规则管理：

```bash
codex rules list
codex rules add <规则文件>
codex rules remove <名称>
```

## 会话命令

### codex session

会话管理：

```bash
codex session save <名称>
codex session load <名称>
codex session list
codex session delete <名称>
```

## 工具命令

### codex MCP

MCP 管理：

```bash
codex mcp list
codex mcp enable <服务器>
codex mcp disable <服务器>
codex mcp restart <服务器>
```

### codex plugin

插件管理：

```bash
codex plugin list
codex plugin install <插件>
codex plugin uninstall <插件>
codex plugin update <插件>
```

## 系统命令

### codex update

更新 Codex：

```bash
codex update
codex update --check
```

### codex version

显示版本：

```bash
codex --version
```

### codex doctor

诊断问题：

```bash
codex doctor
```

### codex feedback

提交反馈：

```bash
codex feedback
```

## 调试命令

### codex logs

查看日志：

```bash
codex logs
codex logs --follow
codex logs --level debug
```

### codex debug

调试模式：

```bash
codex debug --verbose
```

## 全局选项

### 常用选项

| 选项 | 简写 | 说明 |
|------|------|------|
| --model | -m | 选择模型 |
| --timeout | -t | 超时时间 |
| --output | -o | 输出文件 |
| --quiet | -q | 静默模式 |
| --verbose | -v | 详细输出 |
| --json | -j | JSON 输出 |
| --help | -h | 显示帮助 |
| --version | -V | 显示版本 |

### 认证选项

| 选项 | 说明 |
|------|------|
| --api-key | 使用 API 密钥 |
| --device-auth | 设备代码认证 |

### 审批选项

| 选项 | 说明 |
|------|------|
| --approval auto | 自动批准 |
| --approval manual | 手动批准 |
| --approval default | 默认策略 |

## 环境变量

| 变量 | 说明 |
|------|------|
| CODEX_HOME | Codex 主目录 |
| OPENAI_API_KEY | API 密钥 |
| CODEX_MODEL | 默认模型 |
| CODEX_TIMEOUT | 默认超时 |
| CODEX_CONFIG | 配置文件路径 |

## 示例

### 日常工作流

```bash
# 登录
codex login

# 打开项目
codex open my-project

# 请求帮助
codex "帮我添加用户认证功能"

# 审查代码
codex review --pr 123

# 运行测试
codex run "npm test"
```

### 脚本自动化

```bash
#!/bin/bash
# 自动代码审查

for file in src/**/*.js; do
  codex --non-interactive \
    --file "$file" \
    "检查潜在问题" \
    > "reviews/$(basename $file).md"
done
```

## 下一步

- [斜杠命令](/cli/slash-commands) - 交互式命令
- [功能特性](/cli/features) - 功能介绍
- [非交互模式](/noninteractive) - 脚本使用
