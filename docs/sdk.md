# SDK

将 Codex 集成到你的应用程序中

## 概述

Codex SDK 允许你在自己的应用中集成 Codex 的 AI 能力，构建 AI 原生应用。

## 安装

### npm

```bash
npm install @openai/codex-sdk
```

### pip

```bash
pip install openai-codex
```

## 快速开始

### JavaScript/TypeScript

```typescript
import { Codex } from '@openai/codex-sdk';

const codex = new Codex({
  apiKey: process.env.OPENAI_API_KEY
});

// 运行任务
const response = await codex.chat.create({
  model: 'codex-latest',
  messages: [
    {
      role: 'user',
      content: '帮我写一个 Python 函数计算斐波那契数列'
    }
  ]
});

console.log(response.content);
```

### Python

```python
from openai_codex import Codex

codex = Codex(api_key="your-api-key")

response = codex.chat.create(
    model="codex-latest",
    messages=[{
        "role": "user",
        "content": "帮我写一个 Python 函数计算斐波那契数列"
    }]
)

print(response.content)
```

## 核心功能

### 1. 聊天

```typescript
// 单次对话
const response = await codex.chat.create({
  model: 'codex-latest',
  messages: [{ role: 'user', content: 'Hello' }]
});

// 多轮对话
const session = await codex.chat.create({
  model: 'codex-latest',
  messages: [
    { role: 'user', content: '什么是递归？' },
    { role: 'assistant', content: '递归是...' },
    { role: 'user', content: '能给我个例子吗？' }
  ]
});
```

### 2. 代码执行

```typescript
const result = await codex.code.run({
  language: 'python',
  code: `
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
`
});

console.log(result.output); // 55
```

### 3. 文件操作

```typescript
// 读取文件
const file = await codex.files.read({
  path: './src/index.js'
});

// 写入文件
await codex.files.write({
  path: './src/output.js',
  content: 'console.log("Hello");'
});

// 搜索文件
const files = await codex.files.search({
  pattern: '**/*.js',
  contains: 'import'
});
```

### 4. 项目管理

```typescript
// 创建项目
const project = await codex.projects.create({
  name: 'my-project',
  path: './my-project'
});

// 分析项目
const analysis = await codex.projects.analyze({
  project: 'my-project'
});

console.log(analysis.languages); // ['JavaScript', 'TypeScript']
console.log(analysis.frameworks); // ['React', 'Node.js']
```

## 高级功能

### 流式响应

```typescript
const stream = await codex.chat.create({
  model: 'codex-latest',
  messages: [{ role: 'user', content: '写一个故事' }],
  stream: true
});

for await (const chunk of stream) {
  process.stdout.write(chunk.content);
}
```

### 工具调用

```typescript
const response = await codex.chat.create({
  model: 'codex-latest',
  messages: [{ role: 'user', content: '查询天气' }],
  tools: [
    {
      name: 'get_weather',
      description: '获取天气信息',
      parameters: {
        type: 'object',
        properties: {
          location: { type: 'string' }
        }
      }
    }
  ]
});
```

### 函数调用

```typescript
async function getWeather(location: string) {
  // 调用天气 API
  return `北京：25°C，晴`;
}

const response = await codex.chat.create({
  model: 'codex-latest',
  messages: [{ role: 'user', content: '北京天气如何？' }],
  functions: [getWeather]
});
```

## 配置

### 客户端配置

```typescript
const codex = new Codex({
  apiKey: 'your-api-key',
  baseURL: 'https://api.openai.com/v1',
  timeout: 30000,
  maxRetries: 3
});
```

### 代理配置

```typescript
const codex = new Codex({
  apiKey: 'your-api-key',
  httpAgent: new HttpProxyAgent('http://localhost:8080')
});
```

## 错误处理

```typescript
import { CodexError } from '@openai/codex-sdk';

try {
  const response = await codex.chat.create({...});
} catch (error) {
  if (error instanceof CodexError) {
    console.error('Codex 错误:', error.message);
    console.error('错误类型:', error.type);
  } else {
    console.error('其他错误:', error);
  }
}
```

### 错误类型

| 错误类型 | 说明 |
|---------|------|
| `authentication_error` | 认证失败 |
| `rate_limit_error` | 超出限额 |
| `invalid_request_error` | 请求参数错误 |
| `server_error` | 服务器错误 |

## 实用示例

### 代码审查工具

```typescript
async function reviewCode(diff: string) {
  const response = await codex.chat.create({
    model: 'codex-latest',
    messages: [{
      role: 'user',
      content: `请审查以下代码变更：\n\n${diff}`
    }],
    tools: [
      {
        name: 'suggest_fix',
        description: '提供修复建议'
      }
    ]
  });
  
  return response.content;
}
```

### 自动文档生成

```typescript
async function generateDocs(filePath: string) {
  const code = await codex.files.read({ path: filePath });
  
  const docs = await codex.chat.create({
    model: 'codex-latest',
    messages: [{
      role: 'user',
      content: `为以下代码生成文档：\n\n${code.content}`
    }]
  });
  
  return docs.content;
}
```

### 智能重构

```typescript
async function refactorFunction(code: string, improvement: string) {
  const response = await codex.chat.create({
    model: 'codex-latest',
    messages: [{
      role: 'user',
      content: `重构这个函数以${improvement}：\n\n${code}`
    }]
  });
  
  return response.content;
}
```

## 最佳实践

### 1. 管理 Token

```typescript
// 使用 truncation 避免超限
const response = await codex.chat.create({
  model: 'codex-latest',
  messages: longConversation,
  maxTokens: 4096,
  truncation: 'auto'
});
```

### 2. 缓存响应

```typescript
const cache = new Map();

async function cachedChat(prompt: string) {
  const hash = hashString(prompt);
  if (cache.has(hash)) return cache.get(hash);
  
  const response = await codex.chat.create({...});
  cache.set(hash, response);
  return response;
}
```

### 3. 流式处理大响应

```typescript
// 对于长响应使用流式
const stream = await codex.chat.create({
  stream: true,
  // ...
});
```

## API 参考

### 主要类和方法

```typescript
class Codex {
  chat: {
    create(params): Promise<Response>
  }
  code: {
    run(params): Promise<Result>
  }
  files: {
    read(params): Promise<File>
    write(params): Promise<void>
    search(params): Promise<File[]>
  }
  projects: {
    create(params): Promise<Project>
    analyze(params): Promise<Analysis>
  }
}
```

## 下一步

- [MCP](/mcp) - Model Context Protocol
- [插件开发](/plugins/build) - 构建插件
- [API 参考](/cli/reference) - 完整 API 文档
