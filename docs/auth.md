# 认证

Codex 的登录方式

## OpenAI 认证

Codex 支持两种使用 OpenAI 模型时的登录方式：

- **使用 ChatGPT 登录** - 获得订阅制访问权限
- **使用 API 密钥登录** - 获得按用量计费的访问权限

### 重要说明

- **Codex Cloud** 需要使用 ChatGPT 登录
- **Codex CLI 和 IDE 扩展** 支持两种登录方式
- **CLI 默认行为**：当没有有效会话时，默认使用 ChatGPT 登录

### 权限和数据处理策略

你的登录方式决定了适用的管理控制和数据处理策略：

| 登录方式 | 适用的策略 |
|---------|-----------|
| ChatGPT 登录 | 遵循 ChatGPT 工作区权限、RBAC、ChatGPT Enterprise 保留和区域设置 |
| API 密钥 | 遵循 API 组织的保留和数据共享设置 |

---

## 使用 ChatGPT 登录

当你从 Codex 应用、CLI 或 IDE 扩展使用 ChatGPT 登录时，Codex 会打开一个浏览器窗口让你完成登录流程。登录后，浏览器会将访问令牌返回给 CLI 或 IDE 扩展。

### 登录流程

1. 在 Codex 中选择"使用 ChatGPT 登录"
2. 浏览器自动打开
3. 完成 ChatGPT 登录
4. 访问令牌自动返回给 Codex

---

## 使用 API 密钥登录

你也可以使用 API 密钥登录 Codex 应用、CLI 或 IDE 扩展。

### 获取 API 密钥

从 OpenAI 仪表板获取你的 API 密钥：[platform.openai.com/api-keys](https://platform.openai.com/api-keys)

### 计费说明

- OpenAI 通过 OpenAI Platform 账户按标准 API 费率计费
- 查看 [API 定价页面](/pricing) 了解详情

### 功能限制

使用 API 密钥登录时，某些依赖 ChatGPT 积分的功能（如快速模式）可能不可用。

### 推荐用途

**推荐在以下场景使用 API 密钥认证：**

- 程序化 Codex CLI 工作流
- CI/CD 作业
- 自动化脚本

> **安全警告**：不要在不受信任或公共环境中暴露 Codex 执行。

---

## 保护你的 Codex Cloud 账户

Codex Cloud 直接与你的代码库交互，因此需要比许多其他 ChatGPT 功能更强的安全性。

### 启用多因素认证 (MFA)

如果你使用社交登录提供商（Google、Microsoft、Apple），虽然不强制要求在你的 ChatGPT 账户上启用 MFA，但你可以设置它。

### MFA 设置指南

- [Google MFA 设置](https://support.google.com/accounts/answer/185833)
- [Microsoft MFA 设置](https://support.microsoft.com/account-billing/how-to-use-two-step-verification-with-your-microsoft-account-7c88c44061b9)
- [Apple MFA 设置](https://support.apple.com/en-us/HT204152)

### SSO 用户

如果你通过单点登录 (SSO) 访问 ChatGPT，你的组织的 SSO 管理员应该为所有用户强制执行 MFA。

### 邮箱和密码登录

- 如果使用邮箱和密码登录，**必须**在访问 Codex Cloud 之前设置 MFA
- 如果你的账户支持多种登录方式，其中一种是邮箱和密码，那么即使你使用其他方式登录，也必须在访问 Codex 之前设置 MFA

---

## 登录缓存

当你使用 ChatGPT 或 API 密钥登录 Codex 应用、CLI 或 IDE 扩展时，Codex 会缓存你的登录信息并在下次启动时重用。

### 缓存特性

- **共享缓存**：CLI 和扩展共享相同的缓存登录信息
- **登出影响**：从任一客户端登出后，下次启动时需要重新登录
- **缓存位置**：
  - `~/.codex/auth.json`（纯文本文件）
  - 或操作系统特定的凭据存储

### 自动刷新

对于 ChatGPT 登录会话，Codex 会在过期前自动刷新令牌，因此活动会话通常不需要重新登录。

---

## 凭据存储配置

使用 `cli_auth_credentials_store` 配置 Codex CLI 存储缓存凭据的位置：

```json
{
  "cli_auth_credentials_store": "file | keyring | auto"
}
```

### 选项说明

| 选项 | 说明 |
|------|------|
| `file` | 将凭据存储在 CODEX_HOME 下的 auth.json（默认为 ~/.codex） |
| `keyring` | 将凭据存储在操作系统凭据存储中 |
| `auto` | 可用时使用操作系统凭据存储，否则回退到 auth.json |

> **安全警告**：如果使用基于文件的存储，请将 `~/.codex/auth.json` 视为密码。

---

## 强制执行登录方式或工作区

在托管环境中，管理员可以限制用户的认证方式：

```json
{
  "allowed_auth_methods": ["chatgpt", "api_key"],
  "required_workspace": "your-workspace-id"
}
```

- 只允许 ChatGPT 登录或只允许 API 密钥登录
- 如果活动凭据与配置的限制不匹配，Codex 会将用户登出并退出
- 这些设置通常通过托管配置应用，而不是每个用户设置

---

## 登录诊断

直接运行 `codex login` 会将日志写入专用的 `codex-login.log` 文件。

---

## 自定义 CA 证书包

如果你的网络使用企业 TLS 代理或私有根 CA，请在登录前设置 `CODEX_CA_CERTIFICATE`：

```bash
export CODEX_CA_CERTIFICATE=/path/to/corporate-root-ca.pem
```

- 当 `CODEX_CA_CERTIFICATE` 未设置时，Codex 回退到 `SSL_CERT_FILE`
- 相同的变量适用于 CLI 和 IDE 扩展

---

## 在无头设备上登录

在某些情况下，基于浏览器的登录界面可能无法工作：

- 在远程或无头环境中运行 CLI
- 本地网络配置阻止了 Codex 用于返回 OAuth 令牌的 localhost 回调

### 首选方案：设备代码认证（Beta）

1. 在你的 ChatGPT 安全设置（个人账户）或 ChatGPT 工作区权限（工作区管理员）中启用设备代码登录

2. 在运行 Codex 的终端中，选择以下选项之一：
   - 在交互式登录界面中选择"使用设备代码登录"
   - 直接运行 `codex login --device-auth`

3. 在浏览器中打开链接，登录，然后输入一次性代码

> 如果服务器未启用设备代码登录，Codex 将回退到标准的基于浏览器的登录流程。

### 备选方案：在本地认证并复制凭据缓存

如果你可以在有浏览器的设备上完成登录流程，可以将缓存的凭据复制到无头设备：

1. 在可以使用浏览器登录的设备上运行 `codex login`
2. 确认登录缓存存在于 `~/.codex/auth.json`
3. 复制文件到无头设备：

```bash
# 复制到远程机器（SSH）
ssh user@remote 'mkdir -p ~/.codex'
scp ~/.codex/auth.json user@remote:~/.codex/auth.json

# 或使用免 scp 的一行命令
ssh user@remote 'mkdir -p ~/.codex && cat > ~/.codex/auth.json' < ~/.codex/auth.json

# 复制到 Docker 容器
docker cp ~/.codex/auth.json MY_CONTAINER:~/.codex/auth.json
```

> **安全警告**：`~/.codex/auth.json` 包含访问令牌，不要提交到版本控制、粘贴到工单或在聊天中分享。

---

## 相关文档

- [配置基础](/config-basic)
- [Agent 审批和安全](/agent-approvals-security)
- [远程连接](/remote-connections)
