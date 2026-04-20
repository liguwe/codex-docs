# 速度优化

提升 Codex 响应速度的技巧

## 概述

本指南介绍如何优化 Codex 的性能，减少等待时间，提高工作效率。

## 影响因素

### 1. 网络延迟

- API 请求响应时间
- 服务器地理位置
- 网络连接质量

### 2. 模型选择

- 大型模型：更准确但较慢
- 小型模型：更快速但准确性略低

### 3. 上下文长度

- 长上下文增加处理时间
- 历史对话越多越慢

### 4. 任务复杂度

- 简单任务响应快
- 复杂推理需要更多时间

## 优化策略

### 选择快速模型

```json
{
  "model": "codex-fast"
}
```

**模型速度对比**：

| 模型 | 相对速度 | 适用场景 |
|------|---------|---------|
| codex-fast | 1x (最快) | 简单任务 |
| codex-latest | 2x | 复杂任务 |
| codex-reasoning | 5x | 深度推理 |

### 减少上下文

```
# 不好：过长的提示
我是一个程序员，今天工作需要处理一个文件，
这个文件是 Python 写的，里面有个函数...

# 好：简洁的提示
修复这个 Python 函数的 bug：[代码]
```

### 使用流式响应

```typescript
// 启用流式输出
const stream = await codex.chat.create({
  stream: true,
  // ...
});
```

流式响应可以立即开始显示内容，减少感知延迟。

### 批量处理

```
# 不好：多次请求
帮我修改函数 A
帮我修改函数 B
帮我修改函数 C

# 好：一次请求
帮我修改函数 A、B、C，它们都有相同的空指针问题
```

## 配置优化

### 缓存设置

```json
{
  "cache": {
    "enabled": true,
    "size": 1000,
    "ttl": 3600
  }
}
```

### 超时配置

```json
{
  "timeout": 30000,
  "maxRetries": 2
}
```

### 并行请求

```typescript
// 并行处理多个请求
const [result1, result2, result3] = await Promise.all([
  codex.task1(),
  codex.task2(),
  codex.task3()
]);
```

## 最佳实践

### 1. 预热连接

```bash
# 启动时发送简单请求保持连接
codex ping
```

### 2. 本地优先

```json
{
  "preferLocal": true,
  "fallbackToCloud": true
}
```

本地处理比云端更快。

### 3. 增量处理

```
# 不好：每次处理整个文件
[完整文件内容] 请修改...

# 好：只处理变更
[变更部分] 请修改这部分...
```

### 4. 预加载上下文

```typescript
// 提前加载可能需要的文件
const context = await codex.preload(['src/index.js', 'config.json']);
```

## 网络优化

### 使用 CDN

```json
{
  "endpoint": "https://cdn.openai.com/codex"
}
```

### 代理设置

```json
{
  "proxy": "http://localhost:8080"
}
```

### 连接复用

```typescript
// 复用连接
const client = new Codex({ keepAlive: true });
```

## 监控性能

### 查看延迟

```bash
codex status --verbose
```

### 性能日志

```json
{
  "debug": {
    "performance": true
  }
}
```

### 指标监控

| 指标 | 正常值 | 警告值 |
|------|-------|-------|
| API 延迟 | < 500ms | > 1000ms |
| Token 生成速度 | > 50/s | < 20/s |
| 首次响应时间 | < 1s | > 3s |

## 故障排除

### 响应慢

检查：
1. 网络连接
2. 服务器状态
3. 模型负载
4. 上下文长度

### 超时错误

解决方案：
1. 增加超时时间
2. 减少请求大小
3. 使用更小的模型
4. 分批处理

### 连接失败

检查：
1. API 密钥是否有效
2. 防火墙设置
3. 代理配置
4. DNS 设置

## 高级技巧

### 1. 请求压缩

```typescript
// 启用 gzip 压缩
const client = new Codex({ compress: true });
```

### 2. 响应预测

```typescript
// 预测性预取
const prediction = await codex.predict(nextAction);
```

### 3. 边缘计算

```json
{
  "edgeEnabled": true,
  "edgeLocation": "auto"
}
```

## 下一步

- [配置高级](/config-advanced) - 高级性能配置
- [最佳实践](/learn/best-practices) - 更多优化技巧
- [故障排除](/app/troubleshooting) - 解决性能问题
