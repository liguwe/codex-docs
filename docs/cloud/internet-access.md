# 互联网访问

Codex Cloud 访问外部网络的能力

## 概述

Codex Cloud 可以配置访问互联网，调用外部 API、下载资源或集成第三方服务。

## 访问类型

### 1. 只读访问

允许获取外部资源：

```
- API 调用 (GET)
- 下载文件
- 读取文档
```

### 2. 完全访问

允许发送和接收：

```
- API 调用 (GET/POST/PUT/DELETE)
- Webhook 触发
- 外部服务集成
```

## 配置互联网访问

### 启用访问

```yaml
# .codex/environment.yml
internet_access: true
allowed_domains:
  - api.example.com
  - docs.openai.com
```

### 限制访问

```yaml
internet_access: true
blocked_domains:
  - internal.example.com
allowed_ports:
  - 443
  - 80
```

## 安全考虑

### 域名白名单

```yaml
allowed_domains:
  - api.github.com
  - api.openai.com
  - registry.npmjs.org
```

### API 密钥管理

```yaml
# 使用环境变量
environment_variables:
  OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
```

### 请求限制

```yaml
rate_limits:
  requests_per_minute: 60
  max_response_size: 1MB
```

## 使用示例

### API 调用

```python
import requests

# 调用外部 API
response = requests.get('https://api.example.com/data')
data = response.json()
```

### Webhook 触发

```javascript
// 发送 Webhook
await fetch('https://hooks.example.com/trigger', {
  method: 'POST',
  body: JSON.stringify({ event: 'deploy' })
});
```

### 下载资源

```bash
# 下载文件
curl -O https://example.com/file.zip
unzip file.zip
```

## 常见用例

### 1. 获取 API 数据

```
"从 GitHub API 获取仓库信息"
```

### 2. 调用 AI 服务

```
"调用翻译 API 处理文本"
```

### 3. 部署集成

```
"部署到 Vercel 后发送通知"
```

### 4. 数据同步

```
"同步数据库到外部服务"
```

## 网络配置

### 代理设置

```yaml
proxy:
  enabled: true
  url: http://proxy.example.com:8080
```

### DNS 配置

```yaml
dns:
  - 8.8.8.8
  - 1.1.1.1
```

## 监控和日志

### 请求日志

```
查看网络请求:
- 目标 URL
- 请求方法
- 响应状态
- 响应时间
```

### 用量统计

```
统计信息:
- 请求数量
- 数据传输量
- 热门域名
```

## 故障排除

### 常见问题

| 问题 | 解决方案 |
|------|---------|
| 连接超时 | 检查域名白名单 |
| DNS 错误 | 检查 DNS 配置 |
| SSL 错误 | 检查证书信任 |

### 测试连接

```bash
# 测试网络
curl https://api.example.com

# 测试 DNS
nslookup api.example.com
```

## 最佳实践

### 1. 最小权限

只开放必要的域名：

```yaml
# 好 - 精确控制
allowed_domains:
  - api.specific-service.com

# 不好 - 过于宽泛
allowed_domains:
  - "*.example.com"
```

### 2. 错误处理

添加重试和超时：

```python
import requests
from requests.adapters import HTTPAdapter

session = requests.Session()
session.mount('https://', HTTPAdapter(max_retries=3))

try:
    response = session.get(url, timeout=30)
except requests.Timeout:
    print("请求超时")
```

### 3. 敏感数据处理

```yaml
# 不在日志中记录敏感信息
mask_headers:
  - Authorization
  - API-Key
```

## 下一步

- [云环境](/cloud/environments) - 环境配置
- [Cloud 首页](/cloud/) - Cloud 介绍
- [安全设置](/security/setup) - 安全最佳实践
