# Codex CLI

命令行工具使用指南

## 概述

Codex CLI 是功能强大的命令行工具，适合脚本编写、自动化和终端工作流。

## 快速开始

### 安装

```bash
# 使用 npm
npm install -g @openai/codex

# 使用 Homebrew (macOS)
brew install codex
```

### 登录

```bash
codex login
```

### 开始使用

```bash
cd my-project
codex
```

## 主要功能

- **智能对话** - 在终端中与 Codex 交流
- **代码执行** - 运行命令和脚本
- **文件操作** - 读写和修改文件
- **Git 集成** - 版本控制操作
- **非交互模式** - 脚本自动化

## 使用模式

### 交互模式

```bash
codex
# 进入交互界面
```

### 单次查询

```bash
codex "解释这个文件的作用" < file.js
```

### 管道输入

```bash
cat file.js | codex "添加类型注解"
```

## 下一步

- [功能特性](/cli/features) - 详细功能
- [命令参考](/cli/reference) - 完整命令列表
- [斜杠命令](/cli/slash-commands) - 内置命令
