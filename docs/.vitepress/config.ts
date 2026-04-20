import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenAI Codex 中文文档",
  description: "OpenAI Codex 官方文档中文版 - 系统学习 Codex 编程助手",
  lang: "zh-CN",
  base: '/codex-docs/',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/quickstart' },
      { text: '使用案例', link: '/use-cases' },
      { text: '概念', link: '/concepts/' },
      { text: '指南', link: '/guides/' },
      { text: '配置', link: '/config-basic' }
    ],

    sidebar: {
      '/quickstart': [
        {
          text: '快速开始',
          items: [
            { text: '快速开始', link: '/quickstart' },
            { text: '认证', link: '/auth' }
          ]
        }
      ],
      '/concepts/': [
        {
          text: '核心概念',
          items: [
            { text: '定制化', link: '/concepts/customization' },
            { text: '沙箱', link: '/concepts/sandboxing' },
            { text: '子代理', link: '/concepts/subagents' },
            { text: '网络安全', link: '/concepts/cyber-safety' }
          ]
        }
      ],
      '/app/': [
        {
          text: 'Codex App',
          items: [
            { text: '概述', link: '/app/' },
            { text: '功能特性', link: '/app/features' },
            { text: '设置', link: '/app/settings' },
            { text: '代码审查', link: '/app/review' },
            { text: '自动化', link: '/app/automations' },
            { text: '工作树', link: '/app/worktrees' },
            { text: '本地环境', link: '/app/local-environments' },
            { text: '内置浏览器', link: '/app/browser' },
            { text: '电脑操作', link: '/app/computer-use' },
            { text: '命令', link: '/app/commands' },
            { text: 'Windows', link: '/app/windows' },
            { text: '故障排除', link: '/app/troubleshooting' }
          ]
        }
      ],
      '/ide/': [
        {
          text: 'IDE 集成',
          items: [
            { text: '概述', link: '/ide/' },
            { text: '功能特性', link: '/ide/features' },
            { text: '设置', link: '/ide/settings' },
            { text: 'IDE 命令', link: '/ide/commands' },
            { text: 'Slash 命令', link: '/ide/slash-commands' }
          ]
        }
      ],
      '/cli/': [
        {
          text: '命令行工具',
          items: [
            { text: '概述', link: '/cli/' },
            { text: '功能特性', link: '/cli/features' },
            { text: '命令参考', link: '/cli/reference' },
            { text: 'Slash 命令', link: '/cli/slash-commands' }
          ]
        }
      ],
      '/cloud/': [
        {
          text: 'Codex Cloud',
          items: [
            { text: '概述', link: '/cloud/' },
            { text: '环境', link: '/cloud/environments' },
            { text: '网络访问', link: '/cloud/internet-access' }
          ]
        }
      ],
      '/integrations/': [
        {
          text: '集成',
          items: [
            { text: 'GitHub', link: '/integrations/github' },
            { text: 'Slack', link: '/integrations/slack' },
            { text: 'Linear', link: '/integrations/linear' }
          ]
        }
      ],
      '/guides/': [
        {
          text: '指南',
          items: [
            { text: 'AGENTS.md', link: '/guides/agents-md' },
            { text: 'Agents SDK', link: '/guides/agents-sdk' },
            { text: '构建 AI 原生工程团队', link: '/guides/build-ai-native-engineering-team' },
            { text: '最佳实践', link: '/learn/best-practices' }
          ]
        }
      ],
      '/config': [
        {
          text: '配置',
          items: [
            { text: '配置基础', link: '/config-basic' },
            { text: '高级配置', link: '/config-advanced' },
            { text: '配置参考', link: '/config-reference' },
            { text: '配置示例', link: '/config-sample' }
          ]
        }
      ],
      '/security/': [
        {
          text: '安全',
          items: [
            { text: '概述', link: '/security/' },
            { text: '设置', link: '/security/setup' },
            { text: '威胁模型', link: '/security/threat-model' },
            { text: 'FAQ', link: '/security/faq' }
          ]
        }
      ],
      '/enterprise/': [
        {
          text: '企业版',
          items: [
            { text: '管理员设置', link: '/enterprise/admin-setup' },
            { text: '治理', link: '/enterprise/governance' },
            { text: '托管配置', link: '/enterprise/managed-configuration' }
          ]
        }
      ],
      '/': [
        {
          text: '入门',
          items: [
            { text: '快速开始', link: '/quickstart' },
            { text: '使用案例', link: '/use-cases' },
            { text: '定价', link: '/pricing' },
            { text: '模型', link: '/models' }
          ]
        },
        {
          text: '核心功能',
          items: [
            { text: '提示工程', link: '/prompting' },
            { text: '记忆', link: '/memories' },
            { text: '工作流', link: '/workflows' },
            { text: '技能', link: '/skills' },
            { text: '规则', link: '/rules' },
            { text: '钩子', link: '/hooks' }
          ]
        },
        {
          text: '高级主题',
          items: [
            { text: 'MCP', link: '/mcp' },
            { text: '插件', link: '/plugins/' },
            { text: 'SDK', link: '/sdk' },
            { text: '开源', link: '/open-source' },
            { text: '速度优化', link: '/speed' }
          ]
        },
        {
          text: '其他',
          items: [
            { text: '更新日志', link: '/changelog' },
            { text: '视频', link: '/videos' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/anthropics/claude-code' },
      { icon: 'twitter', link: 'https://twitter.com/OpenAIDevs' }
    ],

    footer: {
      message: '基于 OpenAI Codex 官方文档翻译',
      copyright: 'Copyright © 2026-present'
    },

    editLink: {
      pattern: 'https://github.com/your-org/codex-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})
