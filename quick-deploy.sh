#!/bin/bash
echo "🚀 快速部署..."
echo "正在添加文件..."
git add .
echo "正在提交..."
git commit -m "更新课程内容 $(date '+%Y.%m.%d %H:%M')"
echo "正在推送..."
git push origin main
echo "✅ 完成！Vercel 已开始自动部署"
echo "等待1-2分钟后访问你的网站"
