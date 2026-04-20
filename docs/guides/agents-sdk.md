# Agents SDK 指南

使用 Codex Agents SDK 构建 AI 应用

## 概述

Agents SDK 提供构建 AI 原生应用所需的工具和接口，让你能够快速集成 Codex 能力。

## 安装

```bash
npm install @openai/codex-agents
```

## 快速开始

### 基础 Agent

```typescript
import { Agent } from '@openai/codex-agents';

const agent = new Agent({
  name: 'MyAgent',
  model: 'codex-latest'
});

const response = await agent.chat('你好，请帮我分析这段代码');
```

### 多 Agent 协作

```typescript
import { Agent, Orchestrator } from '@openai/codex-agents';

const reviewer = new Agent({ name: 'Reviewer' });
const tester = new Agent({ name: 'Tester' });

const orchestrator = new Orchestrator([reviewer, tester]);

await orchestrator.run('审查并测试这个模块');
```

## 核心概念

### Agent

独立的 AI 实体，具有特定角色和能力：

```typescript
const agent = new Agent({
  name: 'CodeReviewer',
  role: '代码审查专家',
  capabilities: ['review', 'suggest'],
  constraints: ['no-write', 'no-execute']
});
```

### Orchestrator

协调多个 Agent 的协作：

```typescript
const orchestrator = new Orchestrator({
  agents: [agent1, agent2],
  strategy: 'sequential' // 或 'parallel'
});
```

### Task

定义 Agent 执行的任务：

```typescript
const task = new Task({
  description: '审查代码',
  input: code,
  output: 'report'
});
```

## Agent 配置

### 角色定义

```typescript
const agent = new Agent({
  name: 'SecurityExpert',
  role: '你是一位资深的安全专家，专注于发现代码中的安全漏洞。',
  backstory: '你有 10 年安全审计经验...'
});
```

### 能力配置

```typescript
const agent = new Agent({
  capabilities: {
    tools: ['code-analyzer', 'vulnerability-scanner'],
    actions: ['read', 'analyze', 'report']
  }
});
```

### 记忆配置

```typescript
const agent = new Agent({
  memory: {
    type: 'short-term', // 或 'long-term'
    maxSize: 100
  }
});
```

## 工具集成

### 内置工具

```typescript
import { tools } from '@openai/codex-agents';

agent.useTools([
  tools.fileRead,
  tools.codeExecute,
  tools.webSearch
]);
```

### 自定义工具

```typescript
const myTool = {
  name: 'custom-tool',
  description: '自定义工具描述',
  handler: async (input) => {
    return result;
  }
};

agent.addTool(myTool);
```

## 工作流

### 顺序工作流

```typescript
const workflow = new SequentialWorkflow([
  { agent: analyzer, task: '分析代码' },
  { agent: reviewer, task: '审查问题' },
  { agent: reporter, task: '生成报告' }
]);

await workflow.execute(code);
```

### 条件工作流

```typescript
const workflow = new ConditionalWorkflow({
  conditions: [
    {
      if: (result) => result.hasIssues,
      then: reviewer
    },
    {
      else: approver
    }
  ]
});
```

## 事件处理

### 监听事件

```typescript
agent.on('start', (task) => {
  console.log('任务开始:', task);
});

agent.on('complete', (result) => {
  console.log('任务完成:', result);
});

agent.on('error', (error) => {
  console.error('任务失败:', error);
});
```

### 自定义事件

```typescript
agent.emit('custom-event', { data });

agent.on('custom-event', (data) => {
  // 处理事件
});
```

## 状态管理

### Agent 状态

```typescript
const state = agent.getState();

// 保存状态
await agent.saveState();

// 恢复状态
await agent.restoreState();
```

### 共享状态

```typescript
const context = new Context();
context.set('shared-data', value);

agent1.setContext(context);
agent2.setContext(context);
```

## 高级功能

### 函数调用

```typescript
agent.addFunction({
  name: 'calculate',
  description: '执行计算',
  parameters: {
    type: 'object',
    properties: {
      expression: { type: 'string' }
    }
  },
  handler: (args) => eval(args.expression)
});
```

### 流式响应

```typescript
const stream = agent.chatStream('生成一个长报告');

for await (const chunk of stream) {
  process.stdout.write(chunk);
}
```

### 批处理

```typescript
const results = await agent.batch([
  '分析文件 1',
  '分析文件 2',
  '分析文件 3'
]);
```

## 最佳实践

### 1. 单一职责

```typescript
// 好：专注于单一任务
const reviewer = new Agent({ name: 'CodeReviewer' });

// 不好：职责过多
const everything = new Agent({ 
  name: 'DoEverything' 
});
```

### 2. 明确边界

```typescript
const agent = new Agent({
  constraints: [
    '只读操作',
    '不访问外部 API',
    '不修改原文件'
  ]
});
```

### 3. 错误处理

```typescript
try {
  await agent.execute(task);
} catch (error) {
  await agent.recover(error);
}
```

## 调试和测试

### 调试模式

```typescript
const agent = new Agent({
  debug: true,
  logLevel: 'verbose'
});
```

### 单元测试

```typescript
import { test } from 'vitest';

test('Agent 正确处理任务', async () => {
  const result = await agent.execute('test');
  expect(result.success).toBe(true);
});
```

## 部署

### 本地运行

```typescript
await agent.start();
```

### 云端部署

```typescript
import { CloudAgent } from '@openai/codex-agents/cloud';

const agent = new CloudAgent({
  region: 'us-east-1'
});
```

## 下一步

- [Agents.md](/guides/agents-md) - Agent 配置
- [SDK 参考](/sdk) - SDK API 文档
- [最佳实践](/learn/best-practices) - 开发技巧
