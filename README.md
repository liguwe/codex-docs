# OpenAI Codex 中文学习文档

> 系统学习 OpenAI Codex 的中文文档站点

## 项目目标

本项目旨在系统地翻译和整理 OpenAI Codex 官方文档，为中文开发者提供一个完整、易懂的学习资源。

### 学习目标

- 🎯 **快速上手** - 帮助开发者在 30 分钟内完成 Codex 安装配置并开始使用
- 📚 **系统学习** - 从基础概念到高级功能，循序渐进掌握 Codex
- 🔍 **案头参考** - 提供详尽的配置参考和命令手册
- 🌟 **最佳实践** - 分享高效使用 Codex 的技巧和经验

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看文档网站

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 文档结构

```
docs/
├── .vitepress/          # VitePress 配置文件
│   ├── config.ts        # 主配置文件
│   └── theme/           # 主题定制
├── index.md             # 首页
├── quickstart.md        # 快速开始
├── use-cases.md         # 使用案例
├── pricing.md           # 定价
├── models.md            # 模型介绍
├── prompting.md         # 提示工程
├── memories.md          # 记忆功能
├── workflows.md         # 工作流
├── skills.md            # 技能
├── rules.md             # 规则
├── hooks.md             # 钩子
├── mcp.md               # MCP
├── sdk.md               # SDK
├── open-source.md       # 开源
├── speed.md             # 速度优化
├── changelog.md         # 更新日志
├── videos.md            # 视频
├── auth.md              # 认证
├── config-*.md          # 配置相关
├── app/                 # Codex App
├── cli/                 # 命令行工具
├── cloud/               # Cloud 服务
├── concepts/            # 核心概念
├── enterprise/          # 企业版
├── guides/              # 指南
├── ide/                 # IDE 集成
├── integrations/        # 第三方集成
├── learn/               # 学习资源
├── plugins/             # 插件
└── security/            # 安全
```

## 学习路径

### 第一阶段：入门（1-2 天）

1. [快速开始](/quickstart) - 安装和基础配置
2. [认证](/auth) - 设置 API 密钥
3. [核心概念](/concepts/) - 理解 Codex 工作原理

### 第二阶段：基础使用（3-5 天）

1. [App 使用](/app/) - 图形界面操作
2. [CLI 工具](/cli/) - 命令行使用
3. [IDE 集成](/ide/) - 在编辑器中使用
4. [配置基础](/config-basic) - 基本配置项

### 第三阶段：进阶功能（1-2 周）

1. [提示工程](/prompting) - 编写高效的提示
2. [记忆功能](/memories) - 让 Codex 记住上下文
3. [工作流](/workflows) - 自动化工作流程
4. [规则与钩子](/rules) - 自定义行为

### 第四阶段：高级主题（2-4 周）

1. [MCP](/mcp) - Model Context Protocol
2. [插件开发](/plugins/) - 扩展 Codex 功能
3. [SDK 使用](/sdk) - 集成到应用程序
4. [企业功能](/enterprise/) - 团队管理和治理

### 第五阶段：最佳实践（持续学习）

1. [最佳实践](/learn/best-practices)
2. [使用案例](/use-cases)
3. [速度优化](/speed)
4. [安全指南](/security/)

## 核心概念速览

| 概念 | 说明 | 链接 |
|------|------|------|
| 沙箱 (Sandboxing) | 安全执行代码的隔离环境 | [了解更多](/concepts/sandboxing) |
| 子代理 (Subagents) | 并行处理任务的子代理 | [了解更多](/concepts/subagents) |
| 定制化 (Customization) | 个性化 Codex 行为 | [了解更多](/concepts/customization) |
| 记忆 (Memories) | 跨会话保存上下文 | [了解更多](/memories) |
| 钩子 (Hooks) | 在特定事件触发时执行脚本 | [了解更多](/hooks) |
| 规则 (Rules) | 定义 Codex 的行为准则 | [了解更多](/rules) |

## 平台支持

### Codex App
- macOS / Linux / Windows
- 图形界面，适合日常使用
- [功能特性](/app/features)
- [设置指南](/app/settings)

### IDE 集成
- VS Code
- JetBrains 系列 (IntelliJ, PyCharm, WebStorm 等)
- [VS Code 设置](/ide/settings)
- [JetBrains 设置](/ide/settings)

### CLI 工具
- 跨平台命令行
- 适合脚本和自动化
- [CLI 参考](/cli/reference)

### Codex Cloud
- 远程开发环境
- 互联网访问能力
- [Cloud 指南](/cloud/)

## 第三方集成

- **GitHub** - PR 审查、代码审查
- **Slack** - 团队通知、协作
- **Linear** - 任务管理、问题追踪

## 贡献指南

欢迎贡献！你可以通过以下方式参与：

1. **翻译文档** - 将官方文档翻译成中文
2. **校对修订** - 改进现有翻译
3. **补充示例** - 添加使用示例
4. **报告问题** - 提交 issue 反馈错误

### 贡献流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 翻译规范

- 保持专业术语的一致性
- 代码块中的内容保持原文
- 链接保持原样，不要翻译 URL
- 专有名词首次出现标注原文

## 学习资源

### 官方资源

- [OpenAI Codex 官方文档](https://developers.openai.com/codex)
- [OpenAI 开发者社区](https://community.openai.com/)
- [OpenAI Twitter](https://twitter.com/OpenAIDevs)

### 社区资源

- [GitHub 讨论区](https://github.com/your-org/codex-docs/discussions)
- [问题反馈](https://github.com/your-org/codex-docs/issues)

## 常见问题

### Q: Codex 是免费的吗？

A: Codex 提供免费和付费两种方案。查看 [定价页面](/pricing) 了解详情。

### Q: 支持哪些编程语言？

A: Codex 支持主流编程语言，包括 Python、JavaScript、TypeScript、Go、Rust 等。

### Q: 如何在团队中使用 Codex？

A: 查看 [企业版指南](/enterprise/) 了解团队部署和管理。

### Q: Codex 的代码安全性如何保障？

A: Codex 提供沙箱机制和权限控制，详见 [安全文档](/security/)。

## 项目状态

- [x] 项目初始化
- [x] 文档目录结构创建
- [x] VitePress 配置完成
- [x] GitHub Pages 部署完成
- [ ] 文档翻译进行中
- [ ] 完整内容覆盖

## 访问地址

- **生产环境**: https://liguwe.site/codex-docs/
- **GitHub Pages**: https://liguwe.github.io/codex-docs/
- **开发环境**: http://localhost:3000/

## 许可证

MIT License

## 致谢

感谢 OpenAI 团队提供优秀的 Codex 工具和相关文档。

---

**注意**: 本文档基于 OpenAI Codex 官方文档翻译整理，内容版权归 OpenAI 所有。
