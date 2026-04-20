# 配置示例

Codex 配置文件示例集合

## 概述

本页面提供多种场景下的 Codex 配置示例，可直接使用或作为参考。

## 基础配置

### 最小配置

```json
{
  "model": "codex-latest"
}
```

### 推荐配置

```json
{
  "model": "codex-latest",
  "approval_mode": "default",
  "language": "zh-CN",
  "theme": "dark"
}
```

## 角色配置

### 前端开发者

```json
{
  "$schema": "https://codex.openai.com/schemas/config.json",
  "model": "codex-latest",
  "behavior": {
    "framework": "react",
    "styling": "tailwind",
    "testing": "jest",
    "language": "typescript"
  },
  "approval": {
    "autoApprove": [
      "read:files",
      "npm:install",
      "npm:run:test"
    ]
  },
  "memories": [
    "偏好使用函数式编程",
    "组件必须包含 PropTypes",
    "使用 ESLint + Prettier"
  ]
}
```

### Python 开发者

```json
{
  "model": "codex-latest",
  "behavior": {
    "version": "3.11",
    "linter": "flake8",
    "formatter": "black",
    "testing": "pytest"
  },
  "approval": {
    "autoApprove": [
      "read:files",
      "pip:install",
      "pytest:run"
    ],
    "requireApproval": [
      "pip:uninstall",
      "file:delete"
    ]
  },
  "hooks": {
    "pre-commit": "pytest"
  }
}
```

### 后端开发者

```json
{
  "model": "codex-latest",
  "behavior": {
    "language": "go",
    "database": "postgresql",
    "api": "rest"
  },
  "approval": {
    "requireApproval": [
      "db:migrate",
      "deploy"
    ]
  },
  "rules": [
    "所有 API 必须有错误处理",
    "数据库查询必须参数化",
    "必须添加日志记录"
  ]
}
```

## 项目配置

### React 项目

```json
{
  "model": "codex-latest",
  "project": {
    "type": "react",
    "entryPoint": "src/index.tsx"
  },
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "test": "vitest",
    "lint": "eslint src"
  },
  "exclude": [
    "node_modules",
    "dist",
    "build"
  ]
}
```

### Python 项目

```json
{
  "model": "codex-latest",
  "project": {
    "type": "python",
    "entryPoint": "main.py",
    "virtualenv": ".venv"
  },
  "scripts": {
    "install": "pip install -r requirements.txt",
    "test": "pytest",
    "lint": "flake8",
    "format": "black ."
  }
}
```

### Node.js 项目

```json
{
  "model": "codex-latest",
  "project": {
    "type": "node",
    "entryPoint": "src/index.ts"
  },
  "scripts": {
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts",
    "build": "tsc",
    "test": "jest"
  }
}
```

## 团队配置

### 创业公司

```json
{
  "model": "codex-latest",
  "team": {
    "size": "small",
    "focus": "speed"
  },
  "approval": {
    "mode": "auto"
  },
  "features": {
    "autoReview": false,
    "autoTest": true
  }
}
```

### 企业团队

```json
{
  "model": "codex-latest",
  "team": {
    "size": "large",
    "focus": "quality"
  },
  "approval": {
    "mode": "manual",
    "chain": ["team-lead", "manager"]
  },
  "security": {
    "audit": true,
    "mfa": true
  },
  "features": {
    "autoReview": true,
    "securityScan": true
  }
}
```

### 外包团队

```json
{
  "model": "codex-latest",
  "team": {
    "focus": "billing"
  },
  "tracking": {
    "timeTracking": true,
    "taskTracking": true
  },
  "reporting": {
    "dailyReport": true,
    "weeklyReport": true
  }
}
```

## 安全配置

### 高安全模式

```json
{
  "model": "codex-latest",
  "security": {
    "sandbox": true,
    "network": false,
    "audit": true
  },
  "approval": {
    "mode": "manual"
  },
  "permissions": {
    "files": {
      "readOnly": true
    },
    "commands": {
      "allow": []
    }
  }
}
```

### 开发模式

```json
{
  "model": "codex-latest",
  "security": {
    "sandbox": false,
    "network": true,
    "audit": false
  },
  "approval": {
    "mode": "auto"
  }
}
```

### 生产模式

```json
{
  "model": "codex-latest",
  "security": {
    "sandbox": true,
    "network": {
      "allowedDomains": ["api.production.com"]
    },
    "audit": true,
    "mfa": true
  },
  "approval": {
    "mode": "manual",
    "requireApproval": ["all"]
  }
}
```

## 性能配置

### 快速响应

```json
{
  "model": "codex-fast",
  "performance": {
    "cache": true,
    "streaming": true
  },
  "timeout": 30
}
```

### 高质量输出

```json
{
  "model": "codex-latest",
  "performance": {
    "cache": false,
    "streaming": false
  },
  "timeout": 300
}
```

### 批量处理

```json
{
  "model": "codex-economy",
  "performance": {
    "batchSize": 100,
    "parallel": true
  },
  "timeout": 600
}
```

## 特殊场景

### 教学用途

```json
{
  "model": "codex-latest",
  "teaching": {
    "explainFirst": true,
    "stepByStep": true,
    "encourageQuestions": true
  },
  "behavior": {
    "verbosity": "detailed"
  }
}
```

### 代码审查

```json
{
  "model": "codex-latest",
  "review": {
    "focus": ["security", "performance", "readability"],
    "style": "constructive",
    "autoFix": false
  }
}
```

### 快速原型

```json
{
  "model": "codex-fast",
  "prototype": {
    "quickAndDirty": true,
    "skipTests": true,
    "minimalDocs": true
  }
}
```

## 完整示例

### 全功能配置

```json
{
  "$schema": "https://codex.openai.com/schemas/config.json",
  "model": "codex-latest",
  "behavior": {
    "framework": "nextjs",
    "styling": "tailwind",
    "testing": "jest",
    "language": "typescript"
  },
  "approval": {
    "mode": "default",
    "autoApprove": ["read:files"],
    "requireApproval": ["file:delete", "command:exec"]
  },
  "security": {
    "sandbox": true,
    "audit": true
  },
  "memories": [
    "使用 TypeScript 严格模式",
    "组件必须有类型定义",
    "使用 Tailwind CSS"
  ],
  "rules": [
    "所有函数必须有返回类型",
    "禁止使用 any 类型",
    "必须处理错误情况"
  ],
  "hooks": {
    "pre-commit": "npm run lint && npm run test"
  },
  "features": {
    "autoReview": true,
    "autoTest": true,
    "autoDocs": false
  }
}
```

## 下一步

- [配置基础](/config-basic) - 基础配置
- [配置参考](/config-reference) - 完整参考
- [配置高级](/config-advanced) - 高级选项
