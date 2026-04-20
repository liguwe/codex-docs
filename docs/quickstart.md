# 快速开始

通过 IDE、CLI 或云端开始使用 Codex

## 概述

每个 ChatGPT 套餐都包含 Codex。你也可以使用 API 积分，通过 OpenAI API 密钥登录来使用 Codex。

## 选择使用方式

- **App** - 推荐的 IDE 扩展
- **IDE** - 在你的编辑器中使用 Codex
- **CLI** - 在终端中使用 Codex
- **Cloud** - 在浏览器中使用 Codex

---

## App：Codex 桌面应用

Codex 应用支持 macOS 和 Windows 系统。

### 1. 下载并安装 Codex 应用

下载适用于 Windows 或 macOS 的 Codex 应用。如果你使用的是基于 Intel 的 Mac，请选择 Intel 版本。

- [下载 macOS 版（Apple Silicon）](https://developers.openai.com/codex/downloads)
- [下载 macOS 版（Intel）](https://developers.openai.com/codex/downloads)
- [下载 Windows 版](https://developers.openai.com/codex/downloads)

> 需要其他操作系统？
> - [下载 Windows 版](https://developers.openai.com/codex/downloads)
> - Linux 版本：开放注册通知

### 2. 打开 Codex 并登录

下载并安装 Codex 应用后，打开它并使用你的 ChatGPT 账户或 OpenAI API 密钥登录。

> **注意**：如果使用 OpenAI API 密钥登录，某些功能（如云端会话）可能不可用。

### 3. 选择一个项目

选择 Codex 要工作的项目文件夹。

如果你之前使用过 Codex 应用、CLI 或 IDE 扩展，你将看到曾经处理过的项目列表。

### 4. 发送第一条消息

选择项目后，确保选择 **Local**（本地）模式，让 Codex 在你的机器上工作，然后向 Codex 发送第一条消息。

你可以询问 Codex 关于项目或计算机的任何问题。以下是一些示例：

- "这个项目的架构是怎样的？"
- "帮我添加一个用户登录功能"
- "修复这个测试失败的问题"

如果需要更多灵感，请探索 [Codex 使用案例](/use-cases)。

---

## IDE：IDE 扩展

### 1. 安装 Codex 扩展

为你的编辑器下载 Codex 扩展：

- [下载 Visual Studio Code 版](https://marketplace.visualstudio.com/items?itemName=openai.codex)
- [下载 Cursor 版](https://cursor.sh/)
- [下载 Windsurf 版](https://codeium.com/windsurf)
- [下载 Visual Studio Code Insiders 版](https://marketplace.visualstudio.com/items?itemName=openai.codex)

### 2. 打开 Codex 面板

安装完成后，Codex 扩展将出现在侧边栏中，与其他扩展一起。它可能被折叠在收起的部分。你可以将 Codex 面板移动到编辑器的右侧。

### 3. 登录并开始第一个任务

使用你的 ChatGPT 账户或 API 密钥登录以开始使用。

Codex 默认以 **Agent 模式** 启动，该模式允许它读取文件、运行命令并在你的项目目录中编写更改。

### 4. 使用 Git 检查点

Codex 可以修改你的代码库，因此建议在每个任务之前和之后创建 Git 检查点，以便在需要时轻松还原更改。

```bash
git add .
git commit -m "Checkpoint before Codex changes"
# Codex 进行修改
git add .
git commit -m "After Codex changes"
```

---

## CLI：命令行工具

Codex CLI 支持 macOS、Windows 和 Linux 系统。

### 1. 安装 Codex CLI

**使用 npm 安装：**

```bash
npm install -g @openai/codex
```

**使用 Homebrew 安装（macOS）：**

```bash
brew install codex
```

### 2. 运行 codex 并登录

在终端中运行 `codex` 开始使用。系统会提示你使用 ChatGPT 账户或 API 密钥登录。

```bash
codex
```

### 3. 让 Codex 在当前目录工作

认证后，你可以让 Codex 在当前目录执行任务。

```bash
cd my-project
codex
# 然后输入你的请求，例如：
# "帮我添加一个读取配置文件的函数"
```

### 4. 使用 Git 检查点

Codex 可以修改你的代码库，因此建议在每个任务之前和之后创建 Git 检查点。

```bash
git add .
git commit -m "Before Codex task"
# 运行 Codex 任务
git add .
git commit -m "After Codex task"
```

---

## Cloud：云端使用

在 chatgpt.com/codex 使用云端的 Codex。

### 1. 在浏览器中打开 Codex

访问 [chatgpt.com/codex](https://chatgpt.com/codex)。

你也可以通过在 GitHub 拉取请求评论中标记 @codex 来委托任务给 Codex（需要登录 ChatGPT）。

### 2. 设置环境

在开始第一个任务之前，为 Codex 设置环境。

1. 打开 [chatgpt.com/codex](https://chatgpt.com/codex) 的环境设置
2. 按照步骤连接 GitHub 仓库

### 3. 启动任务并监控进度

环境准备就绪后，从 Codex 界面启动编程任务。

你可以通过查看日志实时监控进度，或者让任务在后台运行。

### 4. 审查更改并创建拉取请求

任务完成后，在差异视图中审查建议的更改。

你可以直接接受 PR，或者在本地检出分支进行测试：

```bash
git fetch
git checkout codex/branch-name
# 运行测试
```

---

## 下一步

- 了解更多关于 [Codex 应用](/app/) 的信息
- 了解更多关于 [Codex IDE 扩展](/ide/) 的信息
- 了解更多关于 [Codex CLI](/cli/) 的信息
- 了解更多关于 [Codex Cloud](/cloud/) 的信息
- 探索 [使用案例](/use-cases) 获取更多灵感

## 需要帮助？

- 查看 [配置基础](/config-basic) 了解如何自定义 Codex
- 查看 [故障排除](/app/troubleshooting) 解决常见问题
- 访问 [社区论坛](https://community.openai.com/) 获取支持
