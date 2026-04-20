# 非交互模式

在无头环境中使用 Codex

## 概述

非交互模式允许你在脚本、CI/CD 或其他自动化环境中使用 Codex，无需人工交互。

## 基础用法

### 命令行调用

```bash
# 单次查询
codex --non-interactive "解释这个函数的作用" < file.js

# 从文件读取
codex --non-interactive --file input.txt "处理这个文件"

# 管道输入
echo "console.log('hello')" | codex --non-interactive "添加类型注解"
```

### 基本选项

```bash
codex --non-interactive [选项] "提示词"

选项:
  --file, -f      输入文件
  --output, -o    输出文件
  --model, -m     使用的模型
  --timeout, -t   超时时间 (秒)
```

## 使用场景

### 1. 脚本自动化

```bash
#!/bin/bash
# scripts/codex-review.sh

for file in src/**/*.js; do
  codex --non-interactive \
    --file "$file" \
    "检查潜在 bug 和安全问题" \
    > "reviews/$(basename $file).md"
done
```

### 2. CI/CD 集成

```yaml
# .github/workflows/codex.yml
name: Codex Review

on: push

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run Codex
        run: |
          codex --non-interactive \
            --file ${{ github.event.pull_request.diff_url }} \
            "审查代码变更" \
            > review.md
      
      - name: Upload Review
        uses: actions/upload-artifact@v3
        with:
          name: codex-review
          path: review.md
```

### 3. 批量处理

```bash
#!/bin/bash
# scripts/batch-process.sh

files=(src/**/*.ts)

for file in "${files[@]}"; do
  echo "处理 $file..."
  codex --non-interactive \
    --file "$file" \
    "添加 JSDoc 注释" \
    --output "$file.doc"
done
```

## 配置选项

### JSON 配置

```json
{
  "non_interactive": {
    "default_model": "codex-latest",
    "timeout": 300,
    "max_tokens": 4096,
    "stream": false,
    "json_output": true
  }
}
```

### 环境变量

```bash
export CODEX_NON_INTERACTIVE=true
export CODEX_MODEL=codex-latest
export CODEX_TIMEOUT=300
export CODEX_OUTPUT_FORMAT=json
```

## 输出格式

### 纯文本输出

```bash
codex --non-interactive "解释代码" > output.txt
```

### JSON 输出

```bash
codex --non-interactive \
  --output-format json \
  "分析代码" > output.json
```

JSON 输出结构：
```json
{
  "success": true,
  "content": "分析结果...",
  "tokens": {
    "input": 150,
    "output": 500
  },
  "model": "codex-latest",
  "duration_ms": 2500
}
```

### Markdown 输出

```bash
codex --non-interactive \
  --output-format markdown \
  "生成文档" > README.md
```

## 高级用法

### 链式调用

```bash
# 多步骤处理
codex --non-interactive "添加类型" < input.ts \
  | codex --non-interactive "添加注释" \
  | codex --non-interactive "格式化" \
  > output.ts
```

### 条件处理

```bash
if codex --non-interactive "检查是否有 bug" < code.js; then
  echo "代码安全检查通过"
else
  echo "发现安全问题，停止部署"
  exit 1
fi
```

### 并行处理

```bash
#!/bin/bash
# 并行处理多个文件

parallel -j 4 codex --non-interactive \
  "添加类型注解" \
  --file {} \
  --output {}.typed \
  ::: src/**/*.ts
```

## 错误处理

### 退出码

| 退出码 | 说明 |
|-------|------|
| 0 | 成功 |
| 1 | 一般错误 |
| 2 | 认证失败 |
| 3 | 超时 |
| 4 | API 错误 |

### 错误输出

```bash
codex --non-interactive "无效请求" 2>&1 | jq .error
```

### 重试逻辑

```bash
#!/bin/bash
# 带重试的调用

max_retries=3
retry_count=0

while [ $retry_count -lt $max_retries ]; do
  if codex --non-interactive "处理请求" < input.txt; then
    break
  fi
  retry_count=$((retry_count + 1))
  sleep 2
done

if [ $retry_count -eq $max_retries ]; then
  echo "超过最大重试次数"
  exit 1
fi
```

## 实用示例

### 自动生成 PR 描述

```bash
#!/bin/bash
# scripts/generate-pr-description.sh

DIFF=$(git diff main...HEAD)

DESCRIPTION=$(codex --non-interactive \
  "根据以下代码变更生成 PR 描述：
   
   要求：
   1. 简要说明变更内容
   2. 列出主要修改
   3. 说明测试方法
   
   变更内容：
   $DIFF")

echo "$DESCRIPTION" > pr-description.md
```

### 自动代码审查

```bash
#!/bin/bash
# scripts/auto-review.sh

git fetch origin main
DIFF=$(git diff origin/main...HEAD)

REVIEW=$(codex --non-interactive \
  "审查以下代码变更，找出问题：
   
   $DIFF")

if [ -n "$REVIEW" ]; then
  echo "$REVIEW" | gh pr comment $PR_NUMBER --body-file -
fi
```

### 批量文档生成

```bash
#!/bin/bash
# scripts/generate-docs.sh

for file in src/functions/*.py; do
  codex --non-interactive \
    "为以下 Python 函数生成文档字符串：
    
    $(cat $file)" \
    > "$file.docs"
done
```

## 性能优化

### 批处理请求

```bash
# 不好：多次调用
for file in src/**/*.ts; do
  codex --non-interactive "添加类型" < $file
done

# 好：批量处理
cat src/**/*.ts | codex --non-interactive "为所有文件添加类型"
```

### 使用缓存

```bash
# 启用响应缓存
export CODEX_CACHE_ENABLED=true
export CODEX_CACHE_DIR=~/.cache/codex
```

## 安全考虑

### 敏感数据

```bash
# 不要在命令行中传递敏感数据
codex --non-interactive "使用密钥 $API_KEY"  # 不安全！

# 使用环境变量
export API_KEY
codex --non-interactive "使用安全的密钥处理方式"
```

### 命令注入

```bash
# 不要直接拼接用户输入
USER_INPUT="$1"
codex --non-interactive "处理 $USER_INPUT"  # 有风险！

# 使用文件传递
echo "$USER_INPUT" > /tmp/input.txt
codex --non-interactive --file /tmp/input.txt
```

## 下一步

- [CLI 参考](/cli/reference) - CLI 完整文档
- [GitHub Action](/github-action) - CI/CD 集成
- [工作流](/workflows) - 自动化工作流
