#!/bin/bash

echo "🔍 NCE Flow GitHub Actions 状态检查"
echo "=================================="

# 检查最新运行
echo "📊 最新 5 次运行状态："
gh run list --limit 5 --json status,conclusion,headBranch,workflowName,createdAt | \
  jq -r '.[] | "• \(.workflowName): \(.conclusion // .status) (\(.headBranch)) - \(.createdAt)"'

echo ""
echo "🔧 各工作流状态："
gh workflow list --json name,state | \
  jq -r '.[] | "• \(.name): \(.state)"'

echo ""
echo "⚡ 最近的成功运行："
gh run list --status success --limit 3 --json workflowName,conclusion,headBranch,createdAt | \
  jq -r '.[] | "✅ \(.workflowName) (\(.headBranch)) - \(.createdAt)"'

echo ""
echo "❌ 最近的失败运行："
gh run list --status failure --limit 3 --json workflowName,conclusion,headBranch,createdAt | \
  jq -r '.[] | "❌ \(.workflowName) (\(.headBranch)) - \(.createdAt)"'

echo ""
echo "🌐 打开 Actions 页面："
echo "https://github.com/baifan-cn/NCE/actions"