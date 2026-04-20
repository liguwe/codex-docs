# 云环境

管理 Codex Cloud 的执行环境

## 概述

云环境是 Codex Cloud 中预配置的执行环境，包含运行任务所需的所有依赖。

## 环境类型

### 1. 通用环境

适合大多数项目：

```
- Node.js 18
- Python 3.11
- Git
- 基础工具
```

### 2. 语言特定环境

针对特定语言优化：

```
- JavaScript/TypeScript
- Python
- Go
- Rust
```

### 3. 框架环境

预配置流行框架：

```
- React + Vite
- Next.js
- Django
- FastAPI
```

## 创建环境

### 自动创建

连接仓库后自动创建：

```
1. 连接 GitHub 仓库
2. 检测项目类型
3. 自动配置环境
```

### 手动配置

通过配置文件自定义：

```yaml
# .codex/environment.yml
language: nodejs
version: 18
dependencies:
  - react
  - typescript
tools:
  - git
  - npm
```

## 环境配置

### 配置文件位置

```
.codex/environment.yml
.devcontainer/devcontainer.json
```

### 配置选项

```yaml
language: nodejs | python | go | rust
version: 版本号
dependencies:
  - 包名
tools:
  - 工具名
environment_variables:
  KEY: value
```

## 依赖管理

### 自动安装

```
环境创建时自动安装:
- package.json (Node.js)
- requirements.txt (Python)
- go.mod (Go)
- Cargo.toml (Rust)
```

### 缓存依赖

```
依赖会被缓存以加速:
- 首次完整安装
- 后续增量更新
```

## 环境变量

### 设置变量

```yaml
environment_variables:
  NODE_ENV: production
  API_URL: https://api.example.com
```

### 敏感变量

使用 GitHub Secrets：

```yaml
environment_variables:
  API_KEY: ${{ secrets.API_KEY }}
```

## 持久化存储

### 临时存储

```
任务期间有效
任务结束后清除
```

### 持久存储

```
跨任务保留
需要明确配置
```

## 环境命令

### 运行命令

```bash
# 在环境中运行
npm install
npm test
npm run build
```

### 自定义命令

```yaml
commands:
  test: npm test
  build: npm run build
  lint: npm run lint
```

## 多环境支持

### 环境分支

```
开发环境 → 开发分支
生产环境 → main 分支
```

### 环境切换

```
选择环境:
- Development
- Staging
- Production
```

## 监控和日志

### 环境状态

```
查看:
- CPU 使用
- 内存使用
- 磁盘空间
```

### 执行日志

```
实时日志:
- 命令输出
- 错误信息
- 测试结果
```

## 最佳实践

### 1. 最小化环境

只安装必需的依赖：

```yaml
# 好
dependencies:
  - express
  - cors

# 不好 - 太多不必要的包
```

### 2. 锁定版本

使用版本锁定：

```yaml
# 明确指定版本
version: 18.17.0
dependencies:
  - react@18.2.0
```

### 3. 定期更新

```
每月更新基础镜像
保持依赖最新
```

## 故障排除

### 环境问题

| 问题 | 解决方案 |
|------|---------|
| 依赖安装失败 | 检查网络/源配置 |
| 内存不足 | 请求增加配额 |
| 命令未找到 | 添加工具配置 |

### 重建环境

```
设置 → 环境 → 重建
```

## 下一步

- [Cloud 首页](/cloud/) - Cloud 介绍
- [互联网访问](/cloud/internet-access) - 外部 API
- [环境配置](/config-reference) - 配置参考
