# CLI 功能特性

Codex CLI 的功能介绍

## 概述

Codex CLI 提供丰富的命令行功能，适合开发者和自动化脚本使用。

## 核心功能

### 1. 智能代码助手

在终端中与 Codex 对话：

```bash
codex
> 帮我创建一个快速排序函数
```

### 2. 文件操作

读取、写入和修改文件：

```bash
codex "读取 src/index.js 并解释"
codex "在 file.py 中添加错误处理"
```

### 3. 命令执行

安全地执行 shell 命令：

```bash
codex "运行测试并报告结果"
```

### 4. Git 集成

版本控制操作：

```bash
codex "查看最近的变更并准备提交"
```

## 高级功能

### 5. 非交互模式

脚本中使用：

```bash
codex --non-interactive "生成文档" < input.py
```

### 6. 管道支持

Unix 管道集成：

```bash
git diff | codex "审查代码变更"
```

### 7. 批量处理

处理多个文件：

```bash
codex "为所有 TS 文件添加类型" src/**/*.ts
```

### 8. 会话管理

保存和恢复会话：

```bash
codex session save my-session
codex session load my-session
```

## 输出选项

### 彩色输出

```bash
codex --color "解释代码"
```

### JSON 输出

```bash
codex --json "分析项目"
```

### 静默模式

```bash
codex --quiet "执行任务"
```

## 配置选项

### 模型选择

```bash
codex --model codex-fast "简单任务"
```

### 超时设置

```bash
codex --timeout 60 "复杂分析"
```

### 审批模式

```bash
codex --approval auto "自动执行"
codex --approval manual "手动确认"
```

## 集成能力

### MCP 支持

连接外部工具：

```json
{
  "mcpServers": {
    "github": {...}
  }
}
```

### 插件系统

扩展 CLI 功能：

```bash
codex plugin install @codex/plugin-name
```

## 效率工具

### 命令历史

```bash
# 查看历史
codex history

# 重用命令
codex !123
```

### 别名配置

```json
{
  "aliases": {
    "r": "review",
    "t": "test"
  }
}
```

### 模板系统

使用预定义模板：

```bash
codex template use pr-description
```

## 安全功能

### 沙箱执行

```bash
codex --sandbox "运行未知代码"
```

### 审批流程

```bash
codex --approval-required "执行危险操作"
```

### 审计日志

```bash
codex audit view
```

## 性能优化

### 缓存

```bash
codex cache clear
codex cache stats
```

### 并行处理

```bash
codex --parallel "处理文件" file1 file2 file3
```

## 下一步

- [命令参考](/cli/reference) - 完整命令列表
- [斜杠命令](/cli/slash-commands) - 交互式命令
- [非交互模式](/noninteractive) - 脚本自动化
