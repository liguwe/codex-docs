# Windows 支持

在 Windows 上使用 Codex

## 概述

Codex 完全支持 Windows 系统，包括 Windows 10 和 Windows 11。

## 安装方式

### Windows App

下载并安装 Codex Windows 应用：

1. 访问 [下载页面](https://developers.openai.com/codex/downloads)
2. 下载 Windows 安装程序
3. 运行安装程序
4. 启动 Codex 并登录

### CLI 工具

**使用 npm 安装**：

```powershell
npm install -g @openai/codex
```

**使用 winget 安装**：

```powershell
winget install OpenAI.Codex
```

**使用 Chocolatey 安装**：

```powershell
choco install codex
```

## 系统要求

### 最低要求

| 要求 | 说明 |
|------|------|
| 操作系统 | Windows 10 版本 1903+ |
| 处理器 | 双核 1.6 GHz |
| 内存 | 4 GB RAM |
| 磁盘空间 | 500 MB |

### 推荐配置

| 要求 | 说明 |
|------|------|
| 操作系统 | Windows 11 |
| 处理器 | 四核 2.4 GHz+ |
| 内存 | 8 GB RAM |
| 磁盘空间 | 1 GB SSD |

## PowerShell 集成

### 配置文件

在 PowerShell 配置文件中添加别名：

```powershell
# Microsoft.PowerShell_profile.ps1
Set-Alias codex codex.exe

# 快捷函数
function cdx {
    param($cmd)
    codex --non-interactive $cmd
}
```

### 执行策略

如果遇到执行问题，调整 PowerShell 执行策略：

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## WSL 支持

### WSL 2 集成

Codex 可以在 WSL 2 环境中运行：

```bash
# 在 WSL 中安装
npm install -g @openai/codex

# 从 Windows 调用 WSL 中的 Codex
wsl codex "分析项目"
```

### 跨平台文件访问

```json
{
  "paths": {
    "wsl": "\\\\wsl$\\Ubuntu\\home\\user\\project",
    "windows": "C:\\Users\\user\\project"
  }
}
```

## Windows 特定功能

### 文件路径

Codex 自动处理 Windows 路径格式：

```
# 支持所有路径格式
C:\Users\user\project
C:/Users/user/project
\\network\share\path
```

### 剪贴板集成

```bash
# 从剪贴板读取
codex "解释这段代码" < clipboard

# 复制到剪贴板
codex "生成代码" | clip
```

### Windows Terminal

在 Windows Terminal 中的配置：

```json
{
  "profiles": {
    "defaults": {
      "commandline": "codex"
    }
  }
}
```

## 常见问题

### 路径问题

**问题**: 路径包含反斜杠导致问题

**解决**: Codex 自动处理路径转换，也可以手动转换：

```powershell
# 使用正斜杠
codex "分析" C:/Users/user/project

# 或使用引号
codex "分析" "C:\Users\user\project"
```

### 权限问题

**问题**: 无法访问某些目录

**解决**: 以管理员身份运行：

```powershell
Start-Process codex -Verb RunAs
```

### 编码问题

**问题**: 中文输出乱码

**解决**: 设置控制台编码：

```powershell
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
chcp 65001
```

## 环境变量

### 设置环境变量

```powershell
# 当前会话
$env:CODEX_HOME = "C:\Users\user\.codex"
$env:OPENAI_API_KEY = "your-key"

# 永久设置
[System.Environment]::SetEnvironmentVariable(
    "CODEX_HOME",
    "C:\Users\user\.codex",
    "User"
)
```

### 常用变量

| 变量 | 说明 |
|------|------|
| `CODEX_HOME` | Codex 主目录 |
| `OPENAI_API_KEY` | API 密钥 |
| `CODEX_CONFIG` | 配置文件路径 |

## 集成开发环境

### VS Code

在 VS Code 中使用 Codex：

1. 安装 Codex 扩展
2. 登录账户
3. 开始使用

### JetBrains

在 IntelliJ IDEA、PyCharm 等中使用：

1. 安装 Codex 插件
2. 配置 API 密钥
3. 打开 Codex 面板

## 安全考虑

### Windows Defender

如果 Windows Defender 阻止 Codex：

1. 打开 Windows 安全中心
2. 病毒和威胁防护
3. 管理设置
4. 添加排除项：`codex.exe`

### 防火墙

允许 Codex 通过防火墙：

```powershell
New-NetFirewallRule -DisplayName "Codex" -Direction Inbound -Program "codex.exe" -Action Allow
```

## 更新和维护

### 检查更新

```powershell
codex --version
npm update -g @openai/codex
```

### 卸载

```powershell
# 使用安装程序卸载
# 或通过设置 > 应用 > 卸载

# CLI 卸载
npm uninstall -g @openai/codex
```

## 下一步

- [快速开始](/quickstart) - 安装和配置
- [CLI 参考](/cli/reference) - CLI 命令文档
- [App 使用](/app/) - App 功能介绍
