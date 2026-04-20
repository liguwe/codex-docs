# 代码审查

使用 Codex 进行代码审查

## 概述

Codex 可以自动审查代码，提供质量改进建议，发现潜在问题。

## 审查模式

### 1. Pull Request 审查

审查 PR 中的代码变更：

```
1. 打开 PR 页面
2. 点击"Codex 审查"
3. 查看审查结果
```

### 2. 文件审查

审查特定文件：

```
右键文件 → Codex → 审查此文件
```

### 3. 变更审查

审查 Git 变更：

```
查看 Git 面板 → 选择变更 → 审查
```

## 审查内容

### 代码质量

- 代码可读性
- 命名规范
- 函数长度
- 复杂度分析

### 潜在问题

- 空指针风险
- 资源泄漏
- 边界条件
- 异常处理

### 安全漏洞

- SQL 注入
- XSS 攻击
- 认证问题
- 敏感数据泄露

### 性能问题

- 不必要的循环
- 低效算法
- 内存使用
- 数据库查询

## 审查配置

### 审查规则

```json
{
  "review": {
    "enabled": true,
    "focus": [
      "security",
      "performance",
      "readability"
    ],
    "ignore": [
      "*.test.js",
      "*.d.ts"
    ]
  }
}
```

### 审查模板

定义审查模板：

```markdown
## 代码审查报告

### 整体评价
[总体评价]

### 发现的问题
1. [问题 1]
2. [问题 2]

### 改进建议
- [建议 1]
- [建议 2]
```

## 使用示例

### 示例 1：PR 审查

```
用户：审查这个 PR

Codex:
✅ 代码结构良好
⚠️ 第 42 行可能空指针
💡 建议提取公共逻辑

详细信息：
1. UserService.ts:42 - 未检查 null
2. auth.ts:15 - 可以简化条件
```

### 示例 2：安全审查

```
用户：安全检查

Codex:
🔴 发现 2 个安全问题：

1. SQL 注入风险
   位置：db/user.js:25
   建议：使用参数化查询

2. 敏感信息泄露
   位置：config.js:10
   建议：使用环境变量
```

## 自动修复

### 一键修复

对于简单问题，Codex 可以直接修复：

```
[修复所有简单问题]
```

### 修复建议

对于复杂问题，提供修复代码：

```typescript
// 修复前
function getUser(id) {
  return db.query(`SELECT * FROM users WHERE id = ${id}`);
}

// 修复后
function getUser(id) {
  return db.query('SELECT * FROM users WHERE id = ?', [id]);
}
```

## 审查报告

### 报告格式

- Markdown 格式
- 可导出 PDF
- 可分享到 Slack

### 报告内容

```markdown
# 代码审查报告

**文件**: src/index.ts
**日期**: 2026-04-20
**审查者**: Codex

## 评分：85/100

## 优点
- 代码结构清晰
- 命名规范

## 需要改进
1. 添加错误处理
2. 减少函数复杂度

## 详细评论
[具体评论内容]
```

## 团队审查

### 多人审查

```
审查流程：
1. Codex 自动审查
2. 团队成员审查
3. 合并审查意见
```

### 审查分工

```
Codex 负责:
- 代码风格
- 常见错误
- 安全检查

人类负责:
- 业务逻辑
- 架构设计
- 最终决策
```

## 最佳实践

### 1. 小批量审查

每次审查的代码量适中：
- 最好 < 400 行
- 聚焦单一功能

### 2. 明确审查重点

告诉 Codex 关注什么：
```
请重点关注安全问题
```

### 3. 迭代改进

```
第一轮：基础审查
第二轮：深度审查
第三轮：性能审查
```

## 集成

### GitHub 集成

自动审查 PR：

```yaml
name: Codex Review
on: pull_request
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: openai/codex-action@v2
```

### Slack 通知

审查完成通知：

```json
{
  "notify": {
    "slack": {
      "channel": "#code-review",
      "onComplete": true
    }
  }
}
```

## 下一步

- [自动化](/app/automations) - 自动化审查流程
- [GitHub 集成](/integrations/github) - GitHub 配置
- [安全审查](/security/) - 安全最佳实践
