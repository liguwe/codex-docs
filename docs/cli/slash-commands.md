# CLI 斜杠命令

Codex CLI 中的交互式命令

## 概述

在 Codex CLI 交互模式中，可以使用斜杠命令执行特殊操作。

## 基础命令

### /help

显示帮助信息：

```
/help
/help <命令名>
```

### /clear

清除当前对话：

```
/clear
```

### /exit

退出 Codex：

```
/exit
/quit
```

## 项目命令

### /projects

管理项目：

```
/projects          # 列出项目
/projects open     # 打开项目
/projects create   # 创建项目
```

### /status

显示当前状态：

```
/status
```

## 文件命令

### /files

浏览文件：

```
/files             # 列出文件
/files <路径>      # 打开文件
/files search <词> # 搜索
```

### /read

读取文件内容：

```
/read <文件路径>
/read <行范围> <文件>
```

### /edit

编辑文件：

```
/edit <文件> <修改说明>
```

### /write

写入新文件：

```
/write <文件路径>
```

## Git 命令

### /git

Git 操作：

```
/git status
/git diff
/git log
/git commit <信息>
/git push
```

### /review

代码审查：

```
/review
/review --file <文件>
/review --pr <编号>
```

## 记忆命令

### /memory

记忆管理：

```
/memory list
/memory add <内容>
/memory delete <名称>
/memory clear
```

## 配置命令

### /config

配置管理：

```
/config list
/config get <键>
/config set <键> <值>
```

### /model

切换模型：

```
/model             # 显示当前模型
/model codex-fast  # 切换模型
```

## 会话命令

### /save

保存会话：

```
/save <会话名>
```

### /load

加载会话：

```
/load <会话名>
```

### /history

查看历史：

```
/history
/history <会话名>
```

## 工具命令

### /run

运行命令：

```
/run <命令>
/run --approve <命令>
```

### /shell

执行 shell 命令：

```
/shell <命令>
```

### /mcp

MCP 操作：

```
/mcp list
/mcp call <服务器> <工具>
```

## 审批命令

### /approve

审批操作：

```
/approve all       # 批准所有
/approve this      # 批准当前
/approve deny      # 拒绝
```

## 快捷命令

### 快速操作

```
/fix               # 修复问题
/test              # 运行测试
/docs              # 生成文档
/explain           # 解释代码
```

## 自定义命令

### 创建别名

```json
{
  "slash_commands": {
    "l": "ls -la",
    "t": "npm test",
    "b": "npm run build"
  }
}
```

## 命令补全

使用 Tab 键自动补全命令：

```
/gi<TAB>  # 自动补全为 /git
```

## 命令历史

使用上下箭头浏览命令历史：

```
↑  # 上一条命令
↓  # 下一条命令
```

## 示例工作流

### 代码审查流程

```
> /git status
> /review
> /edit src/index.js 修复发现的问题
> /run npm test
> /git commit "修复 bug"
```

### 新功能开发

```
> /memory add "使用 TypeScript"
> /write src/new-feature.ts
> /run npm run build
> /test
```

## 下一步

- [命令参考](/cli/reference) - 完整命令列表
- [功能特性](/cli/features) - CLI 功能
- [配置参考](/config-reference) - 配置选项
