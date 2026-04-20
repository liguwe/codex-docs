# 远程连接

连接到远程开发环境

## 概述

Codex 支持连接到远程服务器、容器或云环境，让你可以在远程开发环境中使用 Codex 的能力。

## 连接类型

### 1. SSH 连接

连接到远程 SSH 服务器：

```json
{
  "remote": {
    "type": "ssh",
    "host": "example.com",
    "port": 22,
    "username": "user",
    "privateKey": "~/.ssh/id_rsa"
  }
}
```

### 2. Docker 容器

连接到 Docker 容器：

```json
{
  "remote": {
    "type": "docker",
    "container": "my-container"
  }
}
```

### 3. Dev Container

连接到 VS Code Dev Container：

```json
{
  "remote": {
    "type": "devcontainer",
    "config": ".devcontainer/devcontainer.json"
  }
}
```

### 4. WSL

连接到 Windows Subsystem for Linux：

```json
{
  "remote": {
    "type": "wsl",
    "distribution": "Ubuntu-22.04"
  }
}
```

## 配置远程连接

### 配置文件

在 `~/.codex/remote.json` 中配置：

```json
{
  "remotes": [
    {
      "name": "production",
      "type": "ssh",
      "host": "prod.example.com",
      "username": "deploy"
    },
    {
      "name": "dev-container",
      "type": "devcontainer"
    }
  ],
  "default": "dev-container"
}
```

### 命令行配置

```bash
# 添加远程连接
codex remote add production ssh://user@prod.example.com

# 列出所有连接
codex remote list

# 连接到远程
codex remote connect production

# 断开连接
codex remote disconnect
```

## SSH 连接

### 基础配置

```json
{
  "remote": {
    "type": "ssh",
    "host": "192.168.1.100",
    "port": 22,
    "username": "developer",
    "privateKey": "~/.ssh/id_rsa",
    "passphrase": "optional"
  }
}
```

### 使用 SSH 代理

```json
{
  "remote": {
    "type": "ssh",
    "host": "internal-server",
    "username": "developer",
    "proxyJump": "bastion.example.com"
  }
}
```

### SSH 隧道

```bash
# 创建隧道
ssh -L 8080:localhost:80 user@remote

# Codex 通过隧道连接
codex remote connect tunnel
```

## Docker 连接

### 本地容器

```json
{
  "remote": {
    "type": "docker",
    "container": "my-dev-container"
  }
}
```

### 远程 Docker

```json
{
  "remote": {
    "type": "docker",
    "host": "ssh://user@remote-docker-host",
    "container": "app-container"
  }
}
```

## Dev Container

### 自动检测

Codex 可以自动检测项目的 Dev Container 配置：

```json
{
  "remote": {
    "type": "devcontainer",
    "autoDetect": true
  }
}
```

### 手动配置

```json
{
  "remote": {
    "type": "devcontainer",
    "config": ".devcontainer/devcontainer.json",
    "workspaceFolder": "/workspace"
  }
}
```

## 同步设置

### 文件同步

```json
{
  "sync": {
    "enabled": true,
    "direction": "bidirectional",
    "exclude": [
      "node_modules",
      ".git",
      "*.log"
    ],
    "interval": 60
  }
}
```

### 环境变量同步

```json
{
  "sync": {
    "envVars": [
      "NODE_ENV",
      "DATABASE_URL",
      "API_KEY"
    ]
  }
}
```

## 安全考虑

### 认证

```json
{
  "auth": {
    "type": "key",
    "keyPath": "~/.ssh/codex_key",
    "required": true
  }
}
```

### 网络隔离

```json
{
  "network": {
    "allowedHosts": [
      "internal.example.com",
      "db.example.com"
    ],
    "blockedPorts": [
      22,
      3306
    ]
  }
}
```

### 审计日志

```json
{
  "audit": {
    "enabled": true,
    "logRemoteCommands": true,
    "logPath": "~/.codex/remote-audit.log"
  }
}
```

## 故障排除

### 连接测试

```bash
# 测试连接
codex remote test production

# 查看详细日志
codex remote connect --verbose
```

### 常见问题

| 问题 | 解决方案 |
|------|---------|
| 认证失败 | 检查 SSH 密钥权限 |
| 连接超时 | 检查防火墙设置 |
| 文件同步失败 | 检查磁盘空间 |

### SSH 密钥权限

```bash
# 修复密钥权限
chmod 600 ~/.ssh/id_rsa
chmod 700 ~/.ssh
```

## 最佳实践

### 1. 使用密钥管理

```bash
# 使用 ssh-agent
eval $(ssh-agent)
ssh-add ~/.ssh/codex_key
```

### 2. 配置连接池

```json
{
  "connectionPool": {
    "enabled": true,
    "maxConnections": 5,
    "idleTimeout": 300
  }
}
```

### 3. 设置超时

```json
{
  "timeout": {
    "connect": 30,
    "read": 60,
    "write": 60
  }
}
```

## 下一步

- [认证](/auth) - 认证配置
- [安全设置](/security/setup) - 安全最佳实践
- [CLI 参考](/cli/reference) - CLI 命令文档
