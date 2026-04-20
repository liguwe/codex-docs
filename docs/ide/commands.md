# IDE 命令

Codex IDE 扩展的快捷键和命令

## 概述

本页面列出 IDE 扩展的所有快捷键和命令，帮助你高效使用。

## 通用快捷键

### VS Code

| 快捷键 | 功能 |
|--------|------|
| Cmd+Shift+P | 打开 Codex 面板 |
| Cmd+Shift+L | 解释选中代码 |
| Cmd+Shift+E | 编辑选中代码 |
| Cmd+Shift+R | 重新生成 |
| Cmd+Shift+T | 生成测试 |
| Cmd+Shift+D | 生成文档 |

### JetBrains

| 快捷键 | 功能 |
|--------|------|
| Cmd+Shift+C | 打开 Codex 面板 |
| Cmd+Shift+L | 解释选中代码 |
| Cmd+Shift+E | 编辑选中代码 |
| Cmd+Shift+R | 重新生成 |
| Cmd+Shift+T | 生成测试 |
| Cmd+Shift+D | 生成文档 |

## 编辑命令

### 代码操作

| 快捷键 | 功能 |
|--------|------|
| Cmd+K | 代码补全 |
| Cmd+I | 内联建议 |
| Cmd+Option+R | 重构代码 |
| Cmd+Option+F | 格式化代码 |

### 快速修复

```
Alt+Enter:
- 快速修复
- 导入缺失
- 类型修复
```

## 对话命令

### 面板操作

| 快捷键 | 功能 |
|--------|------|
| Esc | 关闭面板 |
| Cmd+Enter | 发送消息 |
| Cmd+↑ | 上一条消息 |
| Cmd+↓ | 下一条消息 |

### 快捷指令

```
输入框中:
/@ - 提及文件
/# - 提及符号
/~ - 运行命令
```

## 审查命令

### 代码审查

| 快捷键 | 功能 |
|--------|------|
| Cmd+Shift+A | 审查变更 |
| Cmd+Shift+S | 安全审查 |
| Cmd+Shift+P | 性能审查 |

### 审查操作

```
审查面板:
- 接受建议
- 拒绝建议
- 编辑建议
```

## 测试命令

### 测试操作

| 快捷键 | 功能 |
|--------|------|
| Cmd+T | 运行测试 |
| Cmd+Shift+T | 生成测试 |
| Cmd+Option+T | 调试测试 |

### 测试覆盖

```
☐ 显示覆盖率
☐ 高亮未覆盖
```

## Git 命令

### Git 操作

| 快捷键 | 功能 |
|--------|------|
| Cmd+Shift+G | Git 面板 |
| Cmd+Shift+A | 暂存所有 |
| Cmd+Shift+C | 提交 |

### Git 快捷

```
Git 面板右键:
- 查看差异
- 暂存更改
- 撤销更改
```

## 自定义命令

### 创建命令

```json
{
  "commands": [
    {
      "name": "test",
      "shortcut": "Cmd+Shift+T",
      "action": "run-tests"
    }
  ]
}
```

### 命令别名

```json
{
  "aliases": {
    "r": "review",
    "t": "test",
    "b": "build"
  }
}
```

## 下一步

- [设置指南](/ide/settings) - 配置选项
- [斜杠命令](/ide/slash-commands) - 交互命令
- [功能特性](/ide/features) - 功能介绍
