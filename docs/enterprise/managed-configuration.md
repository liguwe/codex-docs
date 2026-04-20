# 托管配置

企业环境中的集中配置管理

## 概述

托管配置允许企业管理员集中控制和分发 Codex 配置给组织成员。

## 配置类型

### 1. 强制配置

用户无法覆盖：

```json
{
  "enforced": {
    "model": "codex-latest",
    "approval_mode": "manual"
  }
}
```

### 2. 推荐配置

用户可以覆盖：

```json
{
  "recommended": {
    "theme": "dark",
    "language": "zh-CN"
  }
}
```

### 3. 默认配置

初始默认值：

```json
{
  "defaults": {
    "timeout": 300,
    "max_tokens": 4096
  }
}
```

## 配置层级

### 组织级配置

```
适用：全组织
优先级：最高
管理：超级管理员
```

### 团队级配置

```
适用：特定团队
优先级：中等
管理：团队管理员
```

### 个人级配置

```
适用：个人用户
优先级：最低
管理：用户自己（除非被强制）
```

## 配置分发

### 自动推送

```
配置变更后:
1. 自动推送给用户
2. 用户下次启动生效
3. 记录变更日志
```

### 定时同步

```
同步频率:
- 默认：每小时
- 可配置：5 分钟 -24 小时
```

### 手动刷新

```
用户操作:
设置 → 同步配置 → 立即刷新
```

## 配置模板

### 开发者模板

```json
{
  "template": "developer",
  "config": {
    "model": "codex-latest",
    "features": ["code-review", "generation"],
    "approval": "default"
  }
}
```

### 审查员模板

```json
{
  "template": "reviewer",
  "config": {
    "model": "codex-fast",
    "features": ["code-review"],
    "approval": "manual"
  }
}
```

### 管理员模板

```json
{
  "template": "admin",
  "config": {
    "model": "codex-latest",
    "features": ["all"],
    "admin_console": true
  }
}
```

## 版本控制

### 配置版本

```
版本管理:
- 每次变更创建新版本
- 保留历史版本
- 支持回滚
```

### 变更日志

```
记录内容:
- 变更时间
- 变更人
- 变更内容
- 影响范围
```

### 回滚操作

```
回滚步骤:
1. 选择历史版本
2. 预览变更
3. 确认回滚
4. 通知用户
```

## 条件配置

### 基于用户组

```json
{
  "conditions": [
    {
      "group": "engineering",
      "config": { "model": "codex-latest" }
    },
    {
      "group": "contractors",
      "config": { "model": "codex-fast", "features": ["limited"] }
    }
  ]
}
```

### 基于地理位置

```json
{
  "conditions": [
    {
      "region": "eu",
      "config": { "data_region": "eu" }
    },
    {
      "region": "us",
      "config": { "data_region": "us" }
    }
  ]
}
```

### 基于时间

```json
{
  "conditions": [
    {
      "time": "business_hours",
      "config": { "approval": "default" }
    },
    {
      "time": "after_hours",
      "config": { "approval": "manual" }
    }
  ]
}
```

## 合规检查

### 配置审计

```
审计内容:
- 配置变更历史
- 策略执行情况
- 用户反馈
```

### 合规报告

```
报告内容:
- 配置覆盖率
- 策略遵守率
- 异常配置
```

## 故障排除

### 配置冲突

```
解决优先级:
1. 强制配置
2. 团队配置
3. 个人配置
```

### 同步失败

```
排查步骤:
1. 检查网络连接
2. 检查认证状态
3. 查看错误日志
4. 联系管理员
```

### 配置无效

```
处理方式:
- 自动回滚到上版本
- 通知管理员
- 记录问题
```

## 最佳实践

### 1. 渐进式部署

```
部署策略:
1. 小范围测试
2. 收集反馈
3. 逐步推广
4. 全面部署
```

### 2. 清晰文档

```
文档内容:
- 配置说明
- 变更原因
- 影响评估
```

### 3. 用户沟通

```
沟通方式:
- 变更通知
- 培训材料
- 支持渠道
```

## 下一步

- [管理员设置](/enterprise/admin-setup) - 管理员指南
- [治理](/enterprise/governance) - 治理和控制
- [配置参考](/config-reference) - 配置项文档
