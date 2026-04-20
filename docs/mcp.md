# MCP (Model Context Protocol)

Model Context Protocol 允许 Codex 与外部工具和服务集成

## 概述

MCP 是一个开放协议，使 Codex 能够：

- 连接外部数据源
- 调用远程工具
- 扩展模型能力
- 实现跨应用协作

## MCP 架构

```
┌─────────────┐     MCP      ┌─────────────┐
│    Codex    │ ◄──────────► │  MCP Server │
│   (Client)  │              │   (Tools)    │
└─────────────┘              └─────────────┘
```

### 组件

| 组件 | 说明 |
|------|------|
| MCP Client | Codex 作为客户端发起请求 |
| MCP Server | 提供工具和服务的服务器 |
| MCP Tools | 可调用的远程函数 |
| MCP Resources | 可访问的数据源 |

## 配置 MCP

### 基础配置

在 `~/.codex/mcp.json` 中添加：

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem"]
    }
  }
}
```

### 环境变量

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "${{ secrets.GITHUB_TOKEN }}"
      }
    }
  }
}
```

## 内置 MCP 服务器

### 文件系统

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem"],
      "args": ["--allowed-dirs", "/home/user/projects"]
    }
  }
}
```

可用工具：
- `read_file` - 读取文件
- `write_file` - 写入文件
- `list_directory` - 列出目录
- `search_files` - 搜索文件

### GitHub

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    }
  }
}
```

可用工具：
- `create_issue` - 创建 Issue
- `create_pull_request` - 创建 PR
- `search_repositories` - 搜索仓库
- `get_file_contents` - 获取文件内容

### 数据库

```json
{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://user:pass@localhost:5432/db"
      }
    }
  }
}
```

## 自定义 MCP 服务器

### 创建服务器

```javascript
// my-mcp-server/index.js
import { Server } from '@modelcontextprotocol/sdk';

const server = new Server({
  name: 'my-server',
  version: '1.0.0'
});

// 定义工具
server.tool('greet', '打招呼', async (name) => {
  return `你好，${name}!`;
});

// 启动服务器
server.start();
```

### 注册服务器

```json
{
  "mcpServers": {
    "my-server": {
      "command": "node",
      "args": ["/path/to/my-mcp-server/index.js"]
    }
  }
}
```

## MCP 资源

资源是 MCP 服务器提供的数据源：

```json
{
  "resources": [
    {
      "uri": "mcp://github/issues",
      "name": "GitHub Issues",
      "description": "访问 GitHub Issues"
    }
  ]
}
```

## MCP 工具调用

### 在对话中使用

```
@github 帮我创建一个新 issue：
标题：Bug 报告
内容：发现一个登录问题
```

### CLI 调用

```bash
codex mcp call github create_issue \
  --title "Bug" \
  --body "描述..."
```

## MCP 管理

### 列出服务器

```bash
codex mcp list
```

### 启用/禁用服务器

```bash
codex mcp enable github
codex mcp disable filesystem
```

### 重启服务器

```bash
codex mcp restart github
```

### 查看日志

```bash
codex mcp logs github
```

## 安全考虑

### 权限控制

```json
{
  "mcpServers": {
    "filesystem": {
      "allowedDirs": ["/home/user/projects"],
      "readOnly": true
    }
  }
}
```

### 敏感数据

不要在配置文件中硬编码敏感信息：

```json
// 不好
{
  "env": {
    "API_KEY": "sk-xxx"
  }
}

// 好
{
  "env": {
    "API_KEY": "${{ secrets.API_KEY }}"
  }
}
```

## 故障排除

### 服务器启动失败

检查：
1. 命令和参数是否正确
2. 环境变量是否设置
3. 依赖是否已安装

### 工具调用失败

检查：
1. 服务器是否运行
2. 工具名称是否正确
3. 参数格式是否匹配

### 调试模式

```json
{
  "debug": {
    "mcp": true
  }
}
```

## MCP 生态

### 官方服务器

- `@modelcontextprotocol/server-github`
- `@modelcontextprotocol/server-filesystem`
- `@modelcontextprotocol/server-postgres`
- `@modelcontextprotocol/server-slack`

### 社区服务器

探索更多 MCP 服务器：
- [MCP 服务器注册表](https://github.com/modelcontextprotocol/servers)
- [社区贡献](https://modelcontextprotocol.io/community)

## 下一步

- [插件开发](/plugins/build) - 构建完整插件
- [SDK](/sdk) - 使用 Codex SDK
- [集成](/integrations/github) - 第三方集成
