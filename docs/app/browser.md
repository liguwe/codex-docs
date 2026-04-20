# 浏览器集成

Codex 的浏览器相关功能

## 概述

Codex 可以与浏览器集成，帮助进行 Web 开发、页面分析和自动化测试。

## 浏览器连接

### 连接方式

```
1. 安装浏览器扩展
2. 打开扩展
3. 点击"连接到 Codex"
```

### 支持的浏览器

| 浏览器 | 支持状态 |
|--------|---------|
| Chrome | ✅ 完全支持 |
| Firefox | ✅ 完全支持 |
| Safari | 🟡 部分支持 |
| Edge | ✅ 完全支持 |

## 功能特性

### 1. 实时预览

在 Codex 中预览 Web 更改：

```
修改代码 → 自动刷新 → 查看效果
```

### 2. 元素检查

检查页面元素：

```
选择元素 → 查看代码 → 修改样式
```

### 3. 控制台集成

查看浏览器控制台：

```
Console 面板 → 查看日志和错误
```

## Web 开发

### HTML 编辑

```
用户：把这个 div 改成 flex 布局

Codex:
- 修改 CSS
- 添加类名
- 实时预览
```

### CSS 调试

```
用户：为什么这个元素不居中？

Codex:
- 分析 CSS
- 指出问题
- 提供修复
```

### JavaScript 调试

```
用户：这个点击事件为什么不工作？

Codex:
- 检查事件绑定
- 查看控制台错误
- 提供修复方案
```

## 自动化测试

### E2E 测试

```
用户：为这个页面写 E2E 测试

Codex:
- 使用 Playwright
- 生成测试脚本
- 运行测试
```

### 测试脚本

```typescript
import { test, expect } from '@playwright/test';

test('用户登录', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#email', 'test@example.com');
  await page.fill('#password', 'password');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/dashboard');
});
```

## 页面分析

### 性能分析

```
用户：分析这个页面的性能

Codex:
- LCP: 2.5s
- FID: 100ms
- CLS: 0.1
```

### 可访问性检查

```
用户：检查可访问性问题

Codex:
⚠️ 图片缺少 alt 属性
⚠️ 颜色对比度不足
⚠️ 缺少焦点指示器
```

### SEO 分析

```
用户：检查 SEO

Codex:
✅ 标题存在
⚠️ 缺少 meta 描述
⚠️ 没有结构化数据
```

## 网络请求

### 请求监控

```
查看网络面板:
- 所有请求
- 响应时间
- 错误状态
```

### API 调试

```
用户：调试这个 API 调用

Codex:
- 查看请求头
- 检查响应
- 分析问题
```

## 截图和录制

### 页面截图

```
用户：截取整个页面

Codex:
- 滚动截图
- 保存 PNG
- 标注问题区域
```

### 操作录制

```
用户：录制用户操作流程

Codex:
- 开始录制
- 执行操作
- 生成测试脚本
```

## 跨浏览器测试

### 多浏览器测试

```yaml
browsers:
  - chrome
  - firefox
  - safari

test:
  - 页面加载
  - 功能测试
  - 样式检查
```

### 响应式测试

```
测试视口:
- 桌面：1920x1080
- 平板：768x1024
- 手机：375x667
```

## 浏览器扩展

### 安装扩展

```
Chrome Web Store:
搜索 "Codex DevTools"
添加到 Chrome
```

### 扩展功能

- 快速连接到 Codex
- 元素右键菜单
- 一键生成代码

## 快捷键

| 快捷键 | 功能 |
|--------|------|
| Cmd+Shift+C | 元素检查 |
| Cmd+Shift+J | 打开控制台 |
| Cmd+Shift+R | 强制刷新 |

## 安全考虑

### 本地开发

```
⚠️ 仅连接本地开发服务器
⚠️ 不要连接生产环境
⚠️ 注意敏感数据泄露
```

### 扩展权限

```
扩展请求权限:
- 读取网页内容
- 访问开发者工具
- 拦截网络请求
```

## 下一步

- [Web 开发](/guides/agents-sdk) - Web 项目指南
- [测试](/learn/best-practices) - 测试最佳实践
- [安全](/security/) - 安全开发实践
