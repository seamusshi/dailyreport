# OpenClaw Daily Report

🤖 每日 AI Agent 行业情报自动采集与发布平台

🔗 **在线访问**: https://seamusshi.github.io/dailyreport/

## 📊 覆盖范围

- **OpenClaw** - 开源 AI Agent 框架
- **腾讯 WorkBuddy** - 企业级 AI 助手
- **Kimi Claw** - 月之暗面出品
- **MaxClaw**
- **阿里 CoPaw**
- **EasyClaw**（猎豹移动）
- **ArkClaw**（字节跳动）

## ⏰ 更新频率

每日 **8:17 AM**（北京时间）自动更新

## 🛠️ 技术栈

- **网站**: 纯静态 HTML + CSS
- **部署**: GitHub Pages
- **自动化**: OpenClaw Cron

## 📁 目录结构

```
dailyreport/
├── .github/workflows/    # GitHub Actions 配置
├── css/                  # 样式文件
├── posts/                # 日报内容
├── index.html            # 首页
├── archive.html          # 归档页
├── about.html            # 关于页
└── README.md
```

## 🤖 自动化流程

1. **触发**: OpenClaw Cron 每天 8:17 触发
2. **采集**: AI 搜索行业资讯
3. **生成**: 自动创建 HTML 日报
4. **推送**: 提交到 GitHub 仓库
5. **部署**: GitHub Actions 自动部署

## 📝 License

MIT
