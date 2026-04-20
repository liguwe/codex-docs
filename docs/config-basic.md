# 配置基础

自定义 Codex 的基本配置选项

## 概述

Codex 通过 JSON 配置文件进行配置。你可以自定义从模型选择到审批策略的一切内容。

## 配置文件位置

Codex 在以下位置查找配置文件：

- **用户级配置**: `~/.codex/config.json`
- **项目级配置**: `./.codex.json`
- **环境变量**: `CODEX_HOME` 可以覆盖主目录位置

## 配置优先级

配置按以下顺序应用（后者覆盖前者）：

1. 用户级配置 (`~/.codex/config.json`)
2. 项目级配置 (`./.codex.json`)
3. 环境变量
4. 托管配置（如果启用）

## 基础配置示例

```json
{
  "model": "codex-latest",
  "temperature": 0.7,
  "approval_mode": "default",
  "language": "zh-CN"
}
```

## 常用配置项

### 模型选择

```json
{
  "model": "codex-latest"
}
```

可用模型：
- `codex-latest` - 最新稳定版
- `codex-fast` - 快速模式
- `codex-economy` - 经济模式

### 审批模式

```json
{
  "approval_mode": "default"
}
```

选项：
- `default` - 默认审批策略
- `auto` - 自动批准所有操作
- `manual` - 手动批准所有操作

### 语言设置

```json
{
  "language": "zh-CN"
}
```

支持的语言：
- `en-US` - 英语
- `zh-CN` - 简体中文
- `ja-JP` - 日语

## 下一步

- [配置高级](/config-advanced) - 高级配置选项
- [配置参考](/config-reference) - 完整配置项参考
- [规则](/rules) - 自定义 Codex 行为
