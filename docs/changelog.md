# 更新日志

Codex 的版本历史和变更说明

## 最新版本

### v2.5.0 (2026-04-15)

**新功能**
- 新增快速模式 (Fast Mode)
- 支持自定义 MCP 服务器
- 添加工作流编辑器

**改进**
- 代码审查性能提升 40%
- 减少 30% 的 Token 使用
- 优化大文件处理

**Bug 修复**
- 修复 Windows 路径问题
- 修复记忆同步问题
- 修复 CLI 颜色显示

### v2.4.0 (2026-03-20)

**新功能**
- IDE 扩展支持 JetBrains 全系列
- 新增自动化审批规则
- 支持多模态输入

**改进**
- 启动速度提升 50%
- 上下文管理优化

**Bug 修复**
- 修复 Git 集成问题
- 修复认证缓存问题

### v2.3.0 (2026-02-15)

**新功能**
- Codex Cloud 公开测试
- 新增技能系统
- GitHub 集成 2.0

**改进**
- 响应速度提升
- 代码生成质量改进

## 历史版本

### v2.2.0 (2026-01-10)

- 添加钩子系统
- 改进记忆功能
- 新增企业功能

### v2.1.0 (2025-12-01)

- CLI 2.0 发布
- 新增规则引擎
- 性能优化

### v2.0.0 (2025-11-01)

- 重大版本更新
- 全新架构
- MCP 协议支持

### v1.5.0 (2025-09-15)

- VS Code 扩展发布
- 添加沙箱功能
- 改进安全性

### v1.0.0 (2025-06-01)

- Codex 首次发布
- 基础 CLI 功能
- 基础 API 支持

## 即将发布

### v2.6.0 (2026-05-计划)

计划功能：
- 移动端应用
- 离线模式
- 自定义模型支持

### v3.0.0 (2026-Q3-计划)

计划功能：
- 全新的 UI
- 团队协作功能
- 高级分析功能

## 弃用通知

### 已弃用

- v1.x API (2026-06-01 移除)
- 旧版认证方式 (2026-03-01 移除)
- 遗留钩子格式 (2026-04-01 移除)

### 迁移指南

查看迁移文档了解如何升级到新版本：
- [v1 到 v2 迁移指南](/guides/migration-v2)
- [API 变更参考](/cli/reference#api-changes)

## 发布周期

- **大版本**: 每季度
- **小版本**: 每月
- **补丁版本**: 每周

## 获取更新

### 自动更新

```bash
# 启用自动更新
codex config set auto-update true
```

### 手动更新

```bash
# CLI 更新
codex update

# npm 更新
npm update -g @openai/codex
```

### 订阅通知

- [GitHub Releases](https://github.com/openai/codex/releases)
- [更新 RSS](https://developers.openai.com/codex/changelog.xml)

## 贡献

发现 Bug 或建议新功能：
- [报告问题](https://github.com/openai/codex/issues)
- [功能请求](https://github.com/openai/codex/discussions)

## 下一步

- [快速开始](/quickstart) - 开始使用最新版本
- [迁移指南](/guides/migration) - 升级到新版本
- [反馈问题](https://github.com/openai/codex/issues) - 报告 Bug
