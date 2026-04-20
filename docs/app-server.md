# App Server

Codex App 服务端配置和部署

## 概述

Codex App Server 是企业部署选项，允许在内部基础设施上运行 Codex 服务。

## 部署选项

### 1. 云端托管

OpenAI 托管的 SaaS 服务：
- 零运维
- 自动扩展
- 内置高可用

### 2. 自托管

在自有基础设施上部署：
- 完全控制
- 数据驻留
- 定制集成

### 3. 混合部署

部分服务在云端，部分在本地：
- 平衡灵活性和便利性
- 敏感数据本地处理

## 系统要求

### 硬件要求

| 规模 | CPU | 内存 | 存储 |
|------|-----|------|------|
| 小型 (10 用户) | 4 核 | 8GB | 50GB |
| 中型 (50 用户) | 8 核 | 16GB | 100GB |
| 大型 (200 用户) | 16 核 | 32GB | 500GB |

### 软件要求

- Docker 20.10+
- Kubernetes 1.24+ (可选)
- PostgreSQL 14+
- Redis 7+

## 安装指南

### Docker Compose 安装

```yaml
# docker-compose.yml
version: '3.8'

services:
  codex-app:
    image: openai/codex-app:latest
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/codex
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=codex
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine

volumes:
  postgres_data:
```

启动服务：
```bash
docker-compose up -d
```

### Kubernetes 安装

```bash
# 添加 Helm 仓库
helm repo add codex https://charts.openai.com
helm repo update

# 安装 Codex
helm install codex codex/codex-app \
  --namespace codex \
  --create-namespace \
  -f values.yaml
```

## 配置选项

### 基础配置

```yaml
# values.yaml
replicaCount: 3

image:
  repository: openai/codex-app
  tag: latest

ingress:
  enabled: true
  className: nginx
  hosts:
    - host: codex.example.com
      paths:
        - path: /
          pathType: Prefix

resources:
  limits:
    cpu: 2000m
    memory: 4Gi
  requests:
    cpu: 500m
    memory: 1Gi
```

### 数据库配置

```yaml
postgresql:
  enabled: false  # 使用外部数据库
  
externalDatabase:
  host: db.example.com
  port: 5432
  database: codex
  user: codex
  passwordSecret: codex-db-password
```

### 认证配置

```yaml
auth:
  type: oauth
  oauth:
    provider: google
    clientId: ${GOOGLE_CLIENT_ID}
    clientSecret: ${GOOGLE_CLIENT_SECRET}
    
  # 或 SAML
  saml:
    enabled: true
    idpMetadataUrl: https://idp.example.com/saml/metadata
```

## 安全配置

### TLS/SSL

```yaml
ingress:
  tls:
    - secretName: codex-tls
      hosts:
        - codex.example.com
```

### 网络策略

```yaml
networkPolicy:
  enabled: true
  ingressRules:
    - from:
        - namespaceSelector:
            matchLabels:
              name: ingress
```

### 密钥管理

```bash
# 创建密钥
kubectl create secret generic codex-secrets \
  --from-literal=api-key=$API_KEY \
  --from-literal=db-password=$DB_PASSWORD \
  -n codex
```

## 监控和日志

### Prometheus 监控

```yaml
monitoring:
  enabled: true
  serviceMonitor:
    enabled: true
    interval: 30s
```

### 日志收集

```yaml
logging:
  driver: json-file
  options:
    max-size: "100m"
    max-file: "3"
```

### Grafana 仪表板

导入预配置的仪表板：
- Codex 性能监控
- 用户活动分析
- 系统资源使用

## 备份和恢复

### 数据库备份

```bash
# 创建备份
pg_dump -h db.example.com -U codex codex > backup.sql

# 恢复备份
psql -h db.example.com -U codex codex < backup.sql
```

### 定期备份

```yaml
# CronJob 备份
apiVersion: batch/v1
kind: CronJob
metadata:
  name: codex-backup
spec:
  schedule: "0 2 * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
            - name: backup
              image: postgres:15
              command:
                - pg_dump
                - -h
                - $(DB_HOST)
                - -U
                - codex
                - codex
          restartPolicy: OnFailure
```

## 升级指南

### 版本检查

```bash
# 查看当前版本
codex-app version

# 查看可用版本
codex-app available-updates
```

### 执行升级

```bash
# Docker Compose
docker-compose pull
docker-compose up -d

# Kubernetes
helm upgrade codex codex/codex-app -n codex
```

## 故障排除

### 查看日志

```bash
# Docker
docker-compose logs -f codex-app

# Kubernetes
kubectl logs -n codex -l app=codex-app -f
```

### 健康检查

```bash
curl https://codex.example.com/health

# 期望响应：{"status":"ok"}
```

### 常见问题

| 问题 | 解决方案 |
|------|---------|
| 启动失败 | 检查数据库连接 |
| 性能慢 | 增加资源限制 |
| 认证失败 | 检查 OAuth 配置 |

## 下一步

- [企业设置](/enterprise/admin-setup) - 管理员指南
- [安全设置](/security/setup) - 安全配置
- [远程连接](/remote-connections) - 远程访问配置
