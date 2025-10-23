# 🚀 NCE Flow 部署指南

本文档详细说明了 NCE Flow 项目的多平台部署流程。

## 📋 目录

- [GitHub Actions 自动化部署](#github-actions-自动化部署)
- [本地构建](#本地构建)
- [平台特定部署](#平台特定部署)
- [环境变量配置](#环境变量配置)
- [故障排除](#故障排除)

## 🔄 GitHub Actions 自动化部署

### 工作流概览

项目包含以下 GitHub Actions 工作流：

1. **主构建部署流程** (`.github/workflows/build-deploy.yml`)
   - 代码质量检查
   - Web 应用构建
   - 多平台构建 (Android, iOS, Electron)
   - 自动部署到 GitHub Pages

2. **安全扫描** (`.github/workflows/security.yml`)
   - 依赖漏洞扫描
   - 代码安全分析
   - 敏感数据检查

3. **代码质量检查** (`.github/workflows/code-quality.yml`)
   - ESLint 检查
   - Prettier 格式化
   - 可访问性测试
   - 性能测试

4. **依赖缓存** (`.github/workflows/cache.yml`)
   - 优化构建速度
   - 缓存依赖和构建产物

### 触发条件

- **推送到主分支**: 自动构建和部署 Web 应用到 GitHub Pages
- **创建 Release**: 构建所有平台应用并上传到 Release
- **Pull Request**: 运行代码质量检查和安全扫描

## 🛠️ 本地构建

### 环境要求

- Node.js 18+
- npm 或 yarn
- Git

### 安装依赖

```bash
npm install
```

### 构建命令

```bash
# 构建所有平台
npm run build:all

# 仅构建 Web 应用
npm run build:web

# 生产构建（包含优化）
npm run build:prod

# 构建 Android APK
npm run build:android

# 构建 iOS 应用
npm run build:ios

# 构建 Electron 应用
npm run build:electron
```

### 开发服务器

```bash
# 启动开发服务器
npm run dev

# 预览构建结果
npm run preview
```

## 📱 平台特定部署

### Web 应用部署

#### 自动部署到 GitHub Pages

1. 确保 GitHub 仓库设置中启用了 GitHub Pages
2. 在仓库设置中配置 GitHub Pages 源为 `gh-pages` 分支
3. 推送到主分支将自动触发部署

#### 手动部署

```bash
# 构建项目
npm run build:web

# 部署到 GitHub Pages
npx gh-pages -d www

# 或使用其他静态托管服务
# - Netlify: 拖拽 www 文件夹到 Netlify 部署界面
# - Vercel: 连接 GitHub 仓库自动部署
# - Firebase Hosting: firebase deploy
```

### Android 应用部署

#### 环境准备

```bash
# 安装 Android SDK
# 配置 JAVA_HOME
# 创建 Android 签名密钥
```

#### 签名配置

在 GitHub 仓库设置中添加以下 Secrets：

- `ANDROID_KEYSTORE_BASE64`: Base64 编码的 keystore 文件
- `ANDROID_KEY_ALIAS`: 密钥别名
- `ANDROID_KEY_PASSWORD`: 密钥密码

#### 构建发布版本

```bash
# 本地构建
npm run build:android:release

# 输出位置
# android/app/build/outputs/apk/release/app-release.apk
```

#### 发布到 Google Play

1. 创建 Google Play 开发者账户
2. 上传 APK 到 Google Play Console
3. 填写应用信息和描述
4. 提交审核

### iOS 应用部署

#### 环境准备

- macOS 设备
- Xcode 最新版本
- Apple 开发者账户 ($99/年)

#### 配置 Apple 开发者账户

在 GitHub 仓库设置中添加以下 Secrets：

- `APPLE_ID`: Apple ID 邮箱
- `APPLE_ID_PASSWORD`: App-specific password
- `APPLE_TEAM_ID`: 开发者团队 ID

#### 本地构建

```bash
# 同步 iOS 项目
npm run sync:ios

# 打开 Xcode 项目
npm run build:ios

# 在 Xcode 中配置签名和证书
# 构建 Archive
# 导出 IPA
```

#### 发布到 App Store

1. 使用 Xcode Archive 构建
2. 使用 Transporter 上传到 App Store Connect
3. 在 App Store Connect 中配置应用信息
4. 提交审核

### Electron 应用部署

#### 环境准备

```bash
# 初始化 Electron 项目（如果尚未初始化）
npx @capacitor-community/cli electron:init

# 安装 Electron 依赖
cd electron
npm install
```

#### 构建各平台版本

```bash
# 构建所有平台
npm run build:electron

# 手动构建特定平台
cd electron

# Windows
npm run build:win

# macOS
npm run build:mac

# Linux
npm run build:linux
```

#### 分发选项

1. **GitHub Releases**: 自动上传构建产物
2. **Electron 发布**: 使用 electron-updater 实现自动更新
3. **应用商店**: 发布到 Microsoft Store、Mac App Store

## ⚙️ 环境变量配置

### GitHub Secrets

在 GitHub 仓库设置 > Secrets and variables > Actions 中配置：

#### Android 签名（可选）
```
ANDROID_KEYSTORE_BASE64=base64编码的keystore文件内容
ANDROID_KEY_ALIAS=your-key-alias
ANDROID_KEY_PASSWORD=your-key-password
```

#### iOS 签名（可选）
```
APPLE_ID=your-apple-id@email.com
APPLE_ID_PASSWORD=your-app-specific-password
APPLE_TEAM_ID=your-team-id
APP_PROFILE_NAME=your-provisioning-profile-name
```

#### 第三方服务（可选）
```
SNYK_TOKEN=your-snyk-token
FIREBASE_TOKEN=your-firebase-token
```

### 本地环境变量

创建 `.env.local` 文件（不要提交到 Git）：

```bash
# API 配置
API_BASE_URL=https://your-api.example.com

# 分析服务
GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX

# 功能开关
FEATURE_BETA_MODE=true
```

## 🔧 故障排除

### 常见问题

#### 1. 构建失败：Node.js 版本不兼容

```bash
# 确保使用正确的 Node.js 版本
nvm use 18
node --version  # 应该是 v18.x.x
npm --version   # 应该是 9.x.x 或更高
```

#### 2. Android 构建失败：SDK 路径问题

```bash
# 设置 ANDROID_HOME 环境变量
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

#### 3. iOS 构建失败：证书问题

- 确保 provisioning profile 有效
- 检查 Bundle Identifier 是否匹配
- 验证开发者证书状态

#### 4. GitHub Actions 权限问题

在仓库设置中确保 Actions 有足够权限：

1. Settings > Actions > General > Workflow permissions
2. 选择 "Read and write permissions"
3. 勾选 "Allow GitHub Actions to create and approve pull requests"

### 性能优化

#### 1. 缓存优化

```bash
# 清理 npm 缓存
npm cache clean --force

# 清理构建缓存
npm run clean

# 重新安装依赖
rm -rf node_modules package-lock.json
npm install
```

#### 2. 构建优化

```bash
# 生产构建（包含压缩和优化）
npm run build:prod

# 分析包大小
npm run analyze

# 运行性能测试
npm run lighthouse
```

## 📊 监控和分析

### GitHub Actions 监控

1. 查看 Actions 标签页的构建状态
2. 设置构建失败通知
3. 监控构建时间和成功率

### 应用性能监控

```bash
# 运行 Lighthouse 性能测试
npm run lighthouse

# 检查包大小
find www -name "*.js" -exec du -h {} + | sort -hr

# 分析加载性能
npm run analyze
```

## 🚀 发布流程

### 版本发布

1. 更新版本号
```bash
npm version patch  # 1.0.1
npm version minor  # 1.1.0
npm version major  # 2.0.0
```

2. 创建 Git 标签
```bash
git tag v1.0.1
git push origin v1.0.1
```

3. 在 GitHub 上创建 Release
- 自动构建所有平台
- 上传构建产物到 Release
- 生成发布说明

### 持续部署

- 主分支更新自动部署到 GitHub Pages
- Release 触发全平台构建
- Pull Request 运行质量检查

## 📞 支持

如果遇到部署问题，请：

1. 查看 [GitHub Actions 日志](https://github.com/your-repo/actions)
2. 检查 [Issues 页面](https://github.com/your-repo/issues)
3. 创建新的 Issue 描述问题

---

**注意**: 确保在生产环境中正确配置所有安全密钥和证书，避免敏感信息泄露。