#!/usr/bin/env node
/**
 * OpenClaw Daily Report - 数据采集脚本
 * 
 * 运行方式: node scripts/collect.js
 * 
 * 这个脚本会：
 * 1. 搜索各产品的最新资讯
 * 2. 生成 Markdown 格式的日报
 * 3. 保存到 src/content/posts/ 目录
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 竞品列表
const COMPETITORS = [
    { name: 'OpenClaw', keywords: ['OpenClaw release', 'OpenClaw update', 'OpenClaw AI agent'] },
    { name: '腾讯 WorkBuddy', keywords: ['腾讯 WorkBuddy', 'WorkBuddy AI'] },
    { name: 'Kimi Claw', keywords: ['Kimi Claw', 'Kimi AI agent'] },
    { name: 'MaxClaw', keywords: ['MaxClaw'] },
    { name: '阿里 CoPaw', keywords: ['阿里 CoPaw', 'CoPaw AI'] },
    { name: 'EasyClaw', keywords: ['EasyClaw 猎豹移动', '猎豹 EasyClaw'] },
    { name: 'ArkClaw', keywords: ['ArkClaw 字节跳动', '字节 ArkClaw'] },
];

// 获取今天的日期
function getToday() {
    const now = new Date();
    return now.toISOString().split('T')[0];
}

// 生成日报文件名
function getFileName(date) {
    return `${date}.md`;
}

// 生成日报内容
function generateReport(date, data) {
    return `---
title: "OpenClaw Daily - ${date}"
description: "AI Agent 行业每日情报"
pubDate: "${date}"
category: "日报"
---

## 📌 今日概览

${data.overview || '今日暂无重大更新。'}

---

## 🔥 OpenClaw 官方动态

${data.openclaw || '- 暂无更新'}

---

## 📊 竞品动态

${COMPETITORS.filter(c => c.name !== 'OpenClaw').map(comp => {
    const news = data.competitors?.[comp.name];
    return `### ${comp.name}
${news || '- 暂无更新'}
`;
}).join('\n')}

---

## 💼 企业落地案例

${data.enterprise || '- 暂无更新'}

---

## 📈 数据与融资

${data.funding || '- 暂无更新'}

---

## 🔗 延伸阅读

${data.links?.map(link => `- [${link.title}](${link.url})`).join('\n') || '- 暂无'}

---

*本报告由 OpenClaw 自动生成于 ${date} 08:17*
`;
}

// 主函数
async function main() {
    const date = getToday();
    const postsDir = join(__dirname, '..', 'src', 'content', 'posts');
    
    // 确保目录存在
    if (!existsSync(postsDir)) {
        mkdirSync(postsDir, { recursive: true });
    }
    
    // TODO: 这里应该调用 kimi_search 或其他搜索 API 来获取真实数据
    // 目前使用占位数据
    const data = {
        overview: '数据采集功能正在开发中。',
        openclaw: '- 数据采集脚本已创建',
        competitors: {},
        enterprise: '- 待收集',
        funding: '- 待收集',
        links: [
            { title: 'OpenClaw 官方文档', url: 'https://docs.openclaw.ai' },
            { title: 'OpenClaw GitHub', url: 'https://github.com/openclaw/openclaw' }
        ]
    };
    
    const content = generateReport(date, data);
    const filePath = join(postsDir, getFileName(date));
    
    writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ 日报已生成: ${filePath}`);
}

main().catch(console.error);
