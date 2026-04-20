# 工作树 (Worktrees)

使用 Git 工作树管理多分支开发

## 概述

工作树功能允许你在同一仓库的多个分支上并行工作，每个工作树有独立的目录。

## 什么是工作树

工作树是 Git 仓库的额外工作目录：

```
主仓库
├── main 分支 (主目录)
├── worktrees/
│   ├── feature-a (feature-a 分支)
│   └── bugfix-b (bugfix-b 分支)
```

## 创建工作树

### 通过 UI 创建

1. 点击 Git 面板
2. 选择"工作树"
3. 点击"新建工作树"
4. 选择分支和目录

### 命令行创建

```bash
# 创建新工作树
git worktree add ../feature-a-worktree feature-a

# 列出所有工作树
git worktree list
```

## 管理工作树

### 切换工作树

```
工作树列表 → 选择工作树 → 切换
```

### 删除工作树

```bash
# 删除工作树
git worktree remove ../feature-a-worktree

# 强制删除（即使有未提交更改）
git worktree remove --force ../feature-a-worktree
```

### 清理工作树

```bash
# 清理已删除的工作树
git worktree prune
```

## 使用场景

### 1. 并行开发

同时开发多个功能：

```
工作树 1: main - 稳定版本
工作树 2: feature-a - 功能 A 开发
工作树 3: feature-b - 功能 B 开发
```

### 2. 紧急修复

在开发中处理紧急 Bug：

```
1. 当前在 feature 分支开发
2. 创建工作树切换到 main
3. 创建 hotfix 分支修复
4. 返回原工作树继续
```

### 3. 代码审查

同时审查多个 PR：

```
工作树 1: pr-100
工作树 2: pr-101
工作树 3: pr-102
```

## Codex 集成

### 自动检测

Codex 自动检测工作树：

```
项目列表 → 工作树自动显示
```

### 独立会话

每个工作树有独立的 Codex 会话：

```
工作树 A → Codex 会话 A
工作树 B → Codex 会话 B
```

### 上下文隔离

每个工作树保持独立上下文：

```
- 独立的对话历史
- 独立的记忆
- 独立的配置
```

## 配置选项

### 工作树设置

```json
{
  "worktrees": {
    "autoDetect": true,
    "defaultLocation": "./worktrees",
    "cleanupOnRemove": true
  }
}
```

### Codex 配置

```json
{
  "worktree": {
    "shareMemories": false,
    "shareRules": true,
    "independentSessions": true
  }
}
```

## 最佳实践

### 1. 命名规范

使用清晰的命名：

```
好：feature-user-auth
好：bugfix-login-error
不好：worktree1
```

### 2. 目录组织

```
project/
├── main/           # 主工作树
├── worktrees/      # 功能工作树
│   ├── feature-a/
│   └── feature-b/
└── hotfix/         # 紧急修复
```

### 3. 定期清理

```bash
# 每周清理
git worktree prune --expire 2.weeks.ago
```

## 常见问题

### 问题 1: 工作树冲突

**症状**: 两个工作树修改同一文件

**解决**:
```bash
# 确保提交或贮藏更改
git stash

# 切换前确认状态
git status
```

### 问题 2: 无法删除工作树

**症状**: 提示有未提交更改

**解决**:
```bash
# 先提交或贮藏
git stash

# 或强制删除
git worktree remove --force <path>
```

## 快捷键

| 快捷键 | 功能 |
|--------|------|
| Cmd+Shift+T | 新建工作树 |
| Cmd+Shift+W | 切换工作树 |
| Cmd+Shift+D | 删除工作树 |

## 下一步

- [Git 集成](/integrations/github) - GitHub 功能
- [本地环境](/app/local-environments) - 环境管理
- [CLI 参考](/cli/reference) - Git 命令参考
