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

- **生成器**: [Astro](https://astro.build)
- **部署**: GitHub Pages
- **自动化**: OpenClaw + GitHub Actions

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 开发服务器
npm run dev

# 构建
npm run build
```

## 📁 目录结构

```
dailyreport/
├── .github/workflows/    # GitHub Actions 配置
├── src/
│   ├── layouts/          # 页面布局
│   ├── pages/            # 路由页面
│   └── content/posts/    # 日报内容
├── public/styles/        # 静态样式
├── scripts/              # 数据采集脚本
└── dist/                 # 构建输出
```

## 🤖 自动化流程

1. **触发**: OpenClaw Cron 每天 8:17 触发
2. **采集**: AI 搜索行业资讯
3. **生成**: 自动创建 Markdown 日报
4. **推送**: 提交到 GitHub 仓库
5. **部署**: GitHub Actions 自动构建发布

## 📝 License

MIT
