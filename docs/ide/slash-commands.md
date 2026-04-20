# IDE 斜杠命令

IDE 扩展中的交互式命令

## 概述

在 IDE 的 Codex 面板中，可以使用斜杠命令执行特殊操作。

## 基础命令

### /help

显示帮助：

```
/help
/help <命令>
```

### /clear

清除对话：

```
/clear
```

### /history

查看历史：

```
/history
```

## 文件命令

### /file

操作文件：

```
/file <路径>     # 打开文件
/file search <词> # 搜索文件
```

### /read

读取文件：

```
/read <文件路径>
```

### /edit

编辑文件：

```
/edit <修改说明>
```

## 代码命令

### /explain

解释代码：

```
/explain
```

### /fix

修复问题：

```
/fix
```

### /optimize

优化代码：

```
/optimize
```

### /refactor

重构代码：

```
/refactor
```

## 测试命令

### /test

生成测试：

```
/test
/test unit      # 单元测试
/test integration # 集成测试
```

### /run

运行测试：

```
/run tests
```

### /debug

调试代码：

```
/debug
```

## 文档命令

### /docs

生成文档：

```
/docs
/docs api     # API 文档
/docs readme  # README
```

### /comment

添加注释：

```
/comment
```

## Git 命令

### /git

Git 操作：

```
/git status
/git diff
/git log
```

### /commit

创建提交：

```
/commit <信息>
```

### /review

代码审查：

```
/review
/review --pr 123
```

## 记忆命令

### /memory

记忆管理：

```
/memory list
/memory add <内容>
/memory delete <名称>
```

## 配置命令

### /config

配置管理：

```
/config list
/config set <键> <值>
```

### /model

切换模型：

```
/model
/model codex-fast
```

## 工具命令

### /run

运行命令：

```
/run <命令>
```

### /terminal

打开终端：

```
/terminal
```

## 快捷命令

### 快速操作

```
/new        # 新建对话
/save       # 保存对话
/share      # 分享对话
/export     # 导出对话
```

## 上下文命令

### /context

管理上下文：

```
/context add <文件>
/context remove <文件>
/context clear
```

### /include

包含额外上下文：

```
/include <文件>
```

## 自定义命令

### 创建别名

```json
{
  "slash_commands": {
    "l": "lint",
    "t": "test",
    "b": "build"
  }
}
```

## 命令补全

Tab 键自动补全：

```
/ex<TAB> → /explain
```

## 下一步

- [命令参考](/ide/commands) - 快捷键
- [设置指南](/ide/settings) - 配置选项
- [功能特性](/ide/features) - 功能介绍
