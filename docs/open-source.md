# 开源

Codex 的开源项目和社区

## 概述

Codex 生态系统包含多个开源项目，欢迎开发者贡献和扩展。

## 开源项目

### 核心项目

| 项目 | 说明 | 仓库 |
|------|------|------|
| Codex CLI | 命令行工具 | github.com/openai/codex-cli |
| Codex SDK | 开发工具包 | github.com/openai/codex-sdk |
| MCP Servers | MCP 服务器集合 | github.com/modelcontextprotocol/servers |

### 社区项目

| 项目 | 说明 |
|------|------|
| Codex Extensions | 社区开发的扩展 |
| 自定义技能 | 用户贡献的技能 |
| 主题和插件 | 界面主题和功能插件 |

## 贡献指南

### 如何开始

1. **Fork 项目**
   ```bash
   git fork https://github.com/openai/codex-cli
   ```

2. **克隆仓库**
   ```bash
   git clone https://github.com/your-username/codex-cli
   cd codex-cli
   ```

3. **安装依赖**
   ```bash
   npm install
   ```

4. **创建分支**
   ```bash
   git checkout -b feature/your-feature
   ```

5. **提交更改**
   ```bash
   git commit -m "Add your feature"
   ```

6. **推送并创建 PR**
   ```bash
   git push origin feature/your-feature
   ```

### 开发设置

```bash
# 安装依赖
npm install

# 启动开发模式
npm run dev

# 运行测试
npm test

# 构建
npm run build
```

### 代码规范

#### JavaScript/TypeScript

```javascript
// 使用 ESLint + Prettier
npm run lint
npm run format
```

#### Python

```bash
# 使用 Black + Flake8
black .
flake8 .
```

### 测试要求

- 新功能必须有测试覆盖
- 不能破坏现有测试
- PR 必须通过 CI

## 项目结构

### Codex CLI

```
codex-cli/
├── src/              # 源代码
│   ├── commands/     # CLI 命令
│   ├── utils/        # 工具函数
│   └── index.js      # 入口文件
├── tests/            # 测试文件
├── docs/             # 文档
└── package.json      # 项目配置
```

### Codex SDK

```
codex-sdk/
├── src/              # 源代码
│   ├── client/       # API 客户端
│   ├── types/        # 类型定义
│   └── index.ts      # 入口文件
├── examples/         # 使用示例
├── tests/            # 测试
└── package.json      # 项目配置
```

## 发布流程

### 版本管理

遵循语义化版本（SemVer）：

- **MAJOR**: 不兼容的 API 变更
- **MINOR**: 向后兼容的功能
- **PATCH**: 向后兼容的 bug 修复

### 发布步骤

```bash
# 更新版本号
npm version patch

# 更新 changelog
npm run changelog

# 发布到 npm
npm publish

# 创建 GitHub Release
gh release create v1.0.0
```

## 社区参与

### 报告问题

在 GitHub Issues 中报告：

1. 搜索是否已存在相同问题
2. 使用问题模板
3. 提供详细的重现步骤
4. 附上相关日志和截图

### 功能请求

1. 在 Discussions 中提出想法
2. 说明使用场景
3. 描述期望行为
4. 收集社区反馈

### 成为维护者

活跃贡献者可以申请成为维护者：

1. 持续贡献代码
2. 帮助审查 PR
3. 回答社区问题
4. 参与项目决策

## 开源许可证

### 主要许可证

| 项目 | 许可证 |
|------|--------|
| Codex CLI | MIT |
| Codex SDK | MIT |
| 文档 | CC BY 4.0 |

### 许可证说明

**MIT License**
```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

允许商业使用、修改、分发，但需保留版权和许可声明。

## 安全政策

### 报告漏洞

发现安全漏洞请：

1. **不要**公开报告
2. 发送邮件至 security@openai.com
3. 提供详细的漏洞描述
4. 等待官方修复

### 安全响应流程

1. 接收报告
2. 评估影响
3. 开发修复
4. 发布补丁
5. 公开致谢

## 社区资源

### 讨论区

- [GitHub Discussions](https://github.com/orgs/openai/discussions)
- [Discord 社区](https://discord.gg/openai)
- [Reddit r/OpenAI](https://reddit.com/r/OpenAI)

### 学习资源

- [官方文档](https://developers.openai.com/codex)
- [示例仓库](https://github.com/openai/codex-examples)
- [教程集合](https://github.com/openai/codex-tutorials)

## 致谢

感谢所有贡献者让 Codex 生态系统更加繁荣！

## 下一步

- [插件开发](/plugins/build) - 构建扩展
- [SDK 使用](/sdk) - 集成到你的应用
- [社区贡献](/plugins/index) - 发现社区项目
