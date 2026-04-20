# 本地环境

管理和使用本地开发环境

## 概述

本地环境功能帮助你管理项目的开发环境，包括 Node 版本、环境变量和依赖。

## 环境检测

### 自动检测

Codex 自动检测项目环境：

```
检测到:
- Node.js 18.17.0
- npm 9.6.7
- .env 文件存在
- package.json 存在
```

### 环境信息

显示项目环境详情：

```
环境面板 → 查看
- 运行时版本
- 已安装依赖
- 环境变量
```

## 环境配置

### .env 文件管理

```
项目根目录:
.env            # 环境变量
.env.example    # 示例配置
.env.local      # 本地覆盖
```

### 环境变量编辑器

内置环境变量编辑器：

```
1. 打开环境面板
2. 点击"编辑变量"
3. 添加/修改变量
4. 保存
```

## 版本管理

### Node 版本

```json
{
  "nodeVersion": "18.17.0",
  "autoInstall": true
}
```

### Python 版本

```json
{
  "pythonVersion": "3.11",
  "virtualenv": ".venv"
}
```

### 多版本支持

```bash
# 使用 nvm
nvm use 18

# 使用 pyenv
pyenv local 3.11.0
```

## 依赖管理

### 安装依赖

```
1. 打开依赖面板
2. 搜索包名
3. 点击安装
```

### 依赖检查

```bash
# 检查过时依赖
npm outdated

# Codex 自动检查
设置 → 自动检查更新
```

### 依赖树

可视化查看依赖关系：

```
依赖面板 → 依赖树视图
```

## 虚拟环境

### Python venv

```bash
# 创建虚拟环境
python -m venv .venv

# 激活
source .venv/bin/activate  # Linux/macOS
.venv\Scripts\activate     # Windows
```

### Node node_modules

```bash
# 清理重装
rm -rf node_modules
npm install
```

## 容器环境

### Docker 集成

```yaml
# docker-compose.yml
services:
  app:
    build: .
    environment:
      - NODE_ENV=development
    volumes:
      - .:/app
```

### Dev Container

```json
{
  "name": "Development",
  "image": "node:18",
  "extensions": [
    "dbaeumer.vscode-eslint"
  ]
}
```

## 环境同步

### 团队同步

```
1. 提交 .env.example
2. 团队成员复制为 .env
3. 填充实际值
```

### 环境导出

```bash
# 导出当前环境
codex env export > environment.yml

# 导入环境
codex env import environment.yml
```

## 环境变量

### 常用变量

```bash
# 应用配置
NODE_ENV=development
PORT=3000
API_URL=http://localhost:8080

# 数据库
DATABASE_URL=postgresql://user:pass@localhost:5432/db

# API 密钥
OPENAI_API_KEY=sk-xxx
```

### 变量验证

```json
{
  "required": [
    "DATABASE_URL",
    "API_KEY"
  ],
  "optional": [
    "DEBUG",
    "LOG_LEVEL"
  ]
}
```

## 故障排除

### 常见问题

| 问题 | 解决方案 |
|------|---------|
| 命令未找到 | 检查 PATH 配置 |
| 版本不匹配 | 使用版本管理工具 |
| 环境变量缺失 | 检查 .env 文件 |

### 环境重置

```bash
# Node 项目重置
rm -rf node_modules package-lock.json
npm install

# Python 项目重置
rm -rf .venv
python -m venv .venv
```

## 最佳实践

### 1. 版本锁定

```
始终提交:
- package-lock.json
- Pipfile.lock
- requirements.txt
```

### 2. 环境隔离

```
每个项目使用:
- 独立的虚拟环境
- 独立的 Node 版本
- 独立的 .env 文件
```

### 3. 敏感信息

```
不要提交:
- 密码
- API 密钥
- 生产配置
```

## 下一步

- [远程连接](/remote-connections) - 远程环境
- [Docker 集成](/integrations/) - 容器环境
- [配置参考](/config-reference) - 环境配置项
