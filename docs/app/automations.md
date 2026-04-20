# 自动化

Codex App 的自动化功能

## 概述

自动化功能允许你设置规则，让 Codex 自动执行常见任务。

## 自动化类型

### 1. 文件自动化

基于文件变化的自动化：

```
当文件变化时：
- 自动格式化
- 运行测试
- 生成文档
```

### 2. 时间自动化

定时执行的任务：

```
每天上午 9 点：
- 检查依赖更新
- 运行完整测试
- 生成报告
```

### 3. 事件自动化

响应特定事件：

```
当创建 PR 时：
- 自动审查
- 运行测试
- 通知团队
```

## 创建自动化

### 可视化创建

1. 点击"自动化"标签
2. 点击"新建自动化"
3. 选择触发器
4. 配置动作
5. 保存

### 配置示例

```yaml
name: 自动测试
description: 文件变化时运行测试

trigger:
  type: file-change
  pattern: src/**/*.ts

actions:
  - type: run-command
    command: npm test
  - type: notify
    channel: slack
```

## 内置自动化

### 1. 自动保存

```
启用：设置 → 编辑 → 自动保存
延迟：5 秒
```

### 2. 自动格式化

```
启用：设置 → 编辑 → 保存时格式化
格式化器：Prettier
```

### 3. 自动审查

```
启用：设置 → Git → PR 自动审查
范围：所有 PR
```

## 自定义自动化

### 示例 1：自动文档

```yaml
name: 自动文档
trigger:
  type: file-change
  pattern: src/**/*.py
  contains: "def "

actions:
  - type: codex
    prompt: "为这个函数生成文档"
  - type: write
    path: docs/api.md
```

### 示例 2：代码质量检查

```yaml
name: 代码质量
trigger:
  type: before-commit

actions:
  - type: run-command
    command: npm run lint
  - type: run-command
    command: npm test
  - type: block
    condition: lint-failed or test-failed
```

### 示例 3：依赖更新

```yaml
name: 依赖检查
trigger:
  type: schedule
  cron: "0 9 * * 1"  # 每周一上午 9 点

actions:
  - type: run-command
    command: npm outdated
  - type: codex
    prompt: "检查是否有重要安全更新"
  - type: notify
    if: security-updates-found
```

## 自动化动作

### 可用动作

| 动作 | 说明 |
|------|------|
| run-command | 运行命令 |
| codex | 调用 Codex |
| write | 写入文件 |
| notify | 发送通知 |
| git | Git 操作 |
| http | HTTP 请求 |
| delay | 延迟执行 |
| condition | 条件判断 |

### 动作组合

```yaml
actions:
  - type: codex
    prompt: "检查代码质量"
  - type: condition
    if: issues-found
    then:
      - type: notify
        message: "发现代码质量问题"
  - type: git
    action: create-commit
    message: "自动修复代码问题"
```

## 触发器

### 文件触发器

```yaml
trigger:
  type: file-change
  pattern: src/**/*.ts
  event: create | modify | delete
```

### 时间触发器

```yaml
trigger:
  type: schedule
  cron: "0 */4 * * *"  # 每 4 小时
```

### Git 触发器

```yaml
trigger:
  type: git
  event: push | pull-request | merge
  branch: main
```

## 条件判断

### 基础条件

```yaml
- type: condition
  if: file-size > 1000
  then:
    - type: notify
      message: "文件过大"
```

### 复合条件

```yaml
- type: condition
  if: test-failed AND coverage < 80
  then:
    - type: block
    - type: notify
```

## 监控和管理

### 查看历史

```
自动化 → 历史记录
查看执行记录和结果
```

### 启停控制

```
自动化列表 → 切换开关
临时禁用自动化
```

### 错误处理

```yaml
on-error:
  - type: notify
    channel: slack
  - type: log
    level: error
```

## 最佳实践

### 1. 渐进式启用

先在小范围测试：
```
1. 个人项目测试
2. 非关键流程
3. 全面推广
```

### 2. 添加通知

重要自动化要有通知：
```yaml
on-complete:
  type: notify
  summary: true
```

### 3. 设置超时

防止无限循环：
```yaml
timeout: 300  # 5 分钟
```

## 故障排除

### 常见问题

| 问题 | 解决方案 |
|------|---------|
| 不触发 | 检查触发条件 |
| 执行失败 | 查看错误日志 |
| 重复执行 | 检查触发器配置 |

### 查看日志

```
自动化 → 选择任务 → 查看日志
```

## 下一步

- [工作流](/workflows) - 高级工作流
- [钩子](/hooks) - 事件钩子
- [规则](/rules) - 自定义规则
