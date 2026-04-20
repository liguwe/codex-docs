# App 命令

Codex App 的命令和快捷键

## 概述

本页面列出 Codex App 的所有命令和快捷键，帮助你更高效地使用。

## 通用快捷键

### 基础操作

| 快捷键 (Mac) | 快捷键 (Win) | 功能 |
|-------------|-------------|------|
| Cmd+L | Ctrl+L | 新建对话 |
| Cmd+K | Ctrl+K | 快速搜索 |
| Cmd+R | Ctrl+R | 重新生成 |
| Cmd+Z | Ctrl+Z | 撤销 |
| Cmd+Shift+Z | Ctrl+Y | 重做 |

### 窗口管理

| 快捷键 (Mac) | 快捷键 (Win) | 功能 |
|-------------|-------------|------|
| Cmd+W | Ctrl+W | 关闭当前窗口 |
| Cmd+M | Ctrl+M | 最小化 |
| Cmd+Option+F | Ctrl+Alt+F | 全屏切换 |

## 编辑命令

### 代码编辑

| 快捷键 | 功能 |
|--------|------|
| Cmd+D | 复制当前行 |
| Cmd+Delete | 删除当前行 |
| Option+↑ | 上移行 |
| Option+↓ | 下移行 |
| Cmd+/ | 注释/取消注释 |

### 格式调整

| 快捷键 | 功能 |
|--------|------|
| Shift+Option+F | 格式化代码 |
| Cmd+] | 缩进 |
| Cmd+[ | 取消缩进 |
| Cmd+A | 全选 |

## 导航命令

### 文件导航

| 快捷键 | 功能 |
|--------|------|
| Cmd+P | 快速打开文件 |
| Cmd+Shift+O | 跳转到符号 |
| F12 | 跳转到定义 |
| Option+F12 | 查看所有引用 |

### 代码跳转

| 快捷键 | 功能 |
|--------|------|
| Cmd+Option+← | 后退 |
| Cmd+Option+→ | 前进 |
| Cmd+U | 返回最后编辑位置 |

## 搜索和替换

### 文本搜索

| 快捷键 | 功能 |
|--------|------|
| Cmd+F | 在当前文件搜索 |
| Cmd+Shift+F | 全局搜索 |
| Cmd+H | 替换 |
| Cmd+Shift+H | 全局替换 |

### 搜索选项

```
搜索面板:
☐ 区分大小写
☐ 全字匹配
☐ 正则表达式
☐ 包含注释
```

## Git 命令

### Git 操作

| 快捷键 | 功能 |
|--------|------|
| Cmd+Shift+G | 打开 Git 面板 |
| Cmd+Shift+A | 暂存所有更改 |
| Cmd+Shift+C | 提交更改 |
| Cmd+Shift+P | 推送更改 |

### Git 快捷操作

```
Git 面板右键菜单:
- 查看差异
- 暂存更改
- 撤销更改
- 创建分支
```

## 终端命令

### 终端操作

| 快捷键 | 功能 |
|--------|------|
| Cmd+` | 打开/关闭终端 |
| Cmd+T | 新建终端标签 |
| Cmd+W | 关闭终端标签 |
| Cmd+Shift+5 | 分屏终端 |

### 常用命令

```
内置命令:
- codex run <command>
- codex test
- codex build
- codex deploy
```

## 对话命令

### 对话管理

| 快捷键 | 功能 |
|--------|------|
| Cmd+Shift+H | 查看历史对话 |
| Cmd+Shift+S | 保存对话 |
| Cmd+Shift+E | 导出对话 |
| Delete | 删除对话 |

### 对话快捷操作

```
对话中:
/@ - 提及相关文件
/# - 提及符号
/~ - 运行命令
```

## 视图命令

### 面板切换

| 快捷键 | 功能 |
|--------|------|
| Cmd+B | 切换侧边栏 |
| Cmd+Shift+E | 资源管理器 |
| Cmd+Shift+F | 搜索 |
| Cmd+Shift+G | Git |

### 视图布局

```
视图 → 外观:
- 单栏
- 双栏
- 三栏
- 自定义布局
```

## 自定义命令

### 创建自定义命令

```json
{
  "commands": [
    {
      "name": "test",
      "shortcut": "Cmd+Shift+T",
      "action": "run",
      "command": "npm test"
    }
  ]
}
```

### 命令别名

```json
{
  "aliases": {
    "t": "test",
    "b": "build",
    "d": "deploy"
  }
}
```

## 命令行参数

### 启动参数

```bash
# 打开特定项目
codex --project /path/to/project

# 打开特定文件
codex file.js

# 运行命令
codex --run "npm start"
```

### 参数列表

| 参数 | 说明 |
|------|------|
| --project | 打开项目 |
| --file | 打开文件 |
| --run | 运行命令 |
| --help | 显示帮助 |

## 下一步

- [设置指南](/app/settings) - 配置选项
- [功能特性](/app/features) - 功能介绍
- [故障排除](/app/troubleshooting) - 常见问题
