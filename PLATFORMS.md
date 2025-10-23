# 🚀 NCE Flow 多平台构建指南

## 📋 已配置平台

✅ **Web (PWA)** - 可离线使用的渐进式Web应用  
✅ **iOS** - iPhone和iPad原生应用  
✅ **Android** - Android手机和平板原生应用  
✅ **Electron** - Mac/Windows/Linux桌面应用  

---

## 🛠️ 前置要求

### 基础环境
- Node.js >= 16.0.0
- npm >= 7.0.0

### iOS开发（仅Mac）
- Xcode（从App Store安装）
- CocoaPods：`sudo gem install cocoapods`
- Apple开发者账号（发布需要）

### Android开发
- Android Studio
- Android SDK (API Level 33+)
- 配置ANDROID_HOME环境变量

### 桌面端开发
- 无额外要求（Electron已集成）

---

## 🎯 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 构建项目
```bash
# 构建所有静态文件到www目录
./build.sh
```

---

## 📱 各平台构建命令

### Web (PWA)
```bash
# 本地测试
npm run serve

# 构建
./build.sh

# 部署到服务器
# 将www目录内容上传到你的Web服务器即可
```

### iOS
```bash
# 在iOS模拟器运行
npm run ios

# 打开Xcode项目
npm run build:ios

# 在Xcode中：
# 1. 选择目标设备
# 2. Product > Run 测试
# 3. Product > Archive 打包
```

### Android
```bash
# 在Android模拟器运行
npm run android

# 打开Android Studio
npm run build:android

# 在Android Studio中：
# 1. Build > Build Bundle(s) / APK(s) > Build APK(s)
# 2. 或使用 Build > Generate Signed Bundle / APK
```

### Electron (桌面端)
```bash
# 运行桌面应用
npm run electron

# 构建安装包
npm run build:electron

# 在electron目录下会生成：
# - Mac: .dmg文件
# - Windows: .exe安装程序
# - Linux: .AppImage文件
```

---

## 📦 发布准备

### iOS发布到App Store
1. 在Xcode中配置：
   - Bundle ID: com.nceflow.app
   - 版本号和构建号
   - 应用图标和启动画面
   - 签名证书

2. 创建Archive：
   ```
   Product > Archive
   ```

3. 上传到App Store Connect

### Android发布到Google Play
1. 生成签名密钥：
   ```bash
   keytool -genkey -v -keystore nce-flow.keystore -alias nce-flow -keyalg RSA -keysize 2048 -validity 10000
   ```

2. 在Android Studio中：
   - Build > Generate Signed Bundle / APK
   - 选择AAB (Android App Bundle)
   - 使用生成的密钥签名

3. 上传到Google Play Console

### PWA部署
1. 确保HTTPS访问
2. 上传www目录到服务器
3. 配置服务器支持Service Worker

推荐部署平台：
- Vercel
- Netlify  
- GitHub Pages
- 任何静态网站托管服务

---

## 🔧 常见问题

### iOS构建失败
```bash
cd ios/App
pod install
npx cap sync ios
```

### Android Gradle错误
```bash
cd android
./gradlew clean
npx cap sync android
```

### Electron构建失败
```bash
cd electron
npm install
npm run build
```

### 清理重建所有平台
```bash
rm -rf node_modules ios android electron www
npm install
./build.sh
npx cap add ios
npx cap add android
npx cap add @capacitor-community/electron
```

---

## 📝 项目结构

```
NCE/
├── www/              # 构建输出目录
├── ios/              # iOS项目文件
├── android/          # Android项目文件  
├── electron/         # Electron项目文件
├── images/           # 应用图标
├── NCE1-4/          # 课程内容
├── assets/          # 前端资源
├── build.sh         # 构建脚本
├── package.json     # 项目配置
├── capacitor.config.json  # Capacitor配置
├── manifest.json    # PWA配置
└── service-worker.js # PWA离线支持
```

---

## 🎨 自定义配置

### 修改应用信息
编辑 `capacitor.config.json`:
```json
{
  "appId": "com.yourcompany.app",
  "appName": "Your App Name"
}
```

### 替换应用图标
1. 准备1024x1024的PNG图标
2. 使用工具生成各尺寸：
   - iOS: 使用Xcode的Asset Catalog
   - Android: 使用Android Studio的Image Asset
   - Web: 替换images/目录下的图标

### 配置启动画面
- iOS: 在Xcode中编辑LaunchScreen.storyboard
- Android: 替换android/app/src/main/res/drawable/splash.png

---

## 📱 测试检查清单

- [ ] PWA可以添加到主屏幕
- [ ] PWA离线功能正常
- [ ] iOS真机测试通过
- [ ] Android真机测试通过
- [ ] 音频播放功能正常
- [ ] 进度保存功能正常
- [ ] 横竖屏切换正常
- [ ] 桌面端各平台测试

---

## 🚀 下一步

1. **优化性能**
   - 压缩音频文件
   - 实现懒加载
   - 优化图片资源

2. **增强功能**
   - 添加推送通知
   - 实现云同步
   - 添加社交分享

3. **发布上架**
   - 准备应用商店资料
   - 创建隐私政策
   - 提交审核

---

## 💡 提示

- 首次构建需要下载依赖，请耐心等待
- iOS发布需要付费开发者账号
- Android建议使用AAB格式发布
- 定期更新Capacitor版本以获得最新功能

---

## 📞 支持

遇到问题？查看：
- [Capacitor文档](https://capacitorjs.com/docs)
- [项目Issues](https://github.com/baifan-cn/NCE/issues)
- todo.md文件中的详细步骤
