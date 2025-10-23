# 📱 NCE学习平台 - Capacitor全平台打包TODO列表

## ✅ 项目状态
- 项目类型：纯静态HTML/CSS/JavaScript网站  
- 目标平台：iOS、Android、Web(PWA)、Mac、Windows
- 打包方案：Capacitor全平台方案

---

## 📋 执行清单

### 一、环境准备 🛠️

#### 1.1 基础环境检查
- [ ] 检查Node.js版本（需要 >= 16.0.0）
  ```bash
  node --version
  ```
- [ ] 检查npm版本（需要 >= 7.0.0）
  ```bash
  npm --version
  ```

#### 1.2 iOS开发环境（Mac需要）
- [ ] 安装Xcode（App Store下载）
- [ ] 安装Xcode Command Line Tools
  ```bash
  xcode-select --install
  ```
- [ ] 安装CocoaPods
  ```bash
  sudo gem install cocoapods
  ```

#### 1.3 Android开发环境
- [ ] 安装Android Studio
- [ ] 配置Android SDK（API Level 33+）
- [ ] 设置环境变量
  ```bash
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
  ```

---

### 二、项目初始化 📦

#### 2.1 初始化npm项目
- [ ] 在项目根目录创建package.json
  ```bash
  npm init -y
  ```

#### 2.2 安装Capacitor核心依赖
- [ ] 安装Capacitor CLI和核心包
  ```bash
  npm install -D @capacitor/cli @capacitor/core
  ```

#### 2.3 创建Capacitor配置
- [ ] 初始化Capacitor项目
  ```bash
  npx cap init "NCE Flow" "com.nceflow.app" --web-dir="."
  ```

#### 2.4 调整项目结构
- [ ] 创建www目录（Capacitor默认输出目录）
  ```bash
  mkdir www
  ```
- [ ] 创建构建脚本，将现有文件复制到www
- [ ] 更新capacitor.config.ts配置文件

---

### 三、Web平台配置（PWA）🌐

#### 3.1 创建PWA必需文件
- [ ] 创建manifest.json（Web应用清单）
- [ ] 创建service-worker.js（离线支持）
- [ ] 创建各尺寸图标（192x192, 512x512等）
- [ ] 在index.html添加PWA meta标签

#### 3.2 配置离线缓存
- [ ] 配置音频文件缓存策略
- [ ] 配置静态资源缓存
- [ ] 实现离线播放功能

---

### 四、iOS平台配置 📱

#### 4.1 添加iOS平台
- [ ] 安装iOS平台包
  ```bash
  npm install @capacitor/ios
  ```
- [ ] 添加iOS项目
  ```bash
  npx cap add ios
  ```

#### 4.2 配置iOS项目
- [ ] 设置应用图标（AppIcon）
- [ ] 设置启动画面（LaunchScreen）
- [ ] 配置Info.plist权限
- [ ] 设置Bundle ID和签名证书

#### 4.3 iOS特定优化
- [ ] 适配安全区域（Safe Area）
- [ ] 配置音频后台播放
- [ ] 处理iOS音频播放限制

---

### 五、Android平台配置 🤖

#### 5.1 添加Android平台
- [ ] 安装Android平台包
  ```bash
  npm install @capacitor/android
  ```
- [ ] 添加Android项目
  ```bash
  npx cap add android
  ```

#### 5.2 配置Android项目
- [ ] 设置应用图标
- [ ] 设置启动画面
- [ ] 配置AndroidManifest.xml权限
- [ ] 设置应用包名和签名

#### 5.3 Android特定优化
- [ ] 处理Android音频焦点
- [ ] 配置通知栏音频控制
- [ ] 优化WebView性能

---

### 六、桌面端配置（Electron）💻

#### 6.1 添加Electron支持
- [ ] 安装Electron平台包
  ```bash
  npm install -D @capacitor-community/electron
  ```
- [ ] 添加Electron项目
  ```bash
  npx cap add @capacitor-community/electron
  ```

#### 6.2 配置桌面应用
- [ ] 设置应用图标（.icns for Mac, .ico for Windows）
- [ ] 配置应用菜单
- [ ] 设置窗口大小和位置
- [ ] 配置自动更新

#### 6.3 平台特定配置
- [ ] Mac：配置代码签名和公证
- [ ] Windows：配置安装程序（NSIS）

---

### 七、功能适配和优化 🔧

#### 7.1 响应式布局优化
- [ ] 优化移动端触摸体验
- [ ] 适配不同屏幕尺寸
- [ ] 处理横竖屏切换

#### 7.2 音频播放优化
- [ ] 添加Capacitor音频插件支持
- [ ] 实现后台播放（iOS/Android）
- [ ] 添加耳机控制支持

#### 7.3 本地存储优化
- [ ] 迁移localStorage到Capacitor Storage
- [ ] 实现数据备份和恢复
- [ ] 处理存储权限

#### 7.4 性能优化
- [ ] 优化首屏加载时间
- [ ] 实现懒加载
- [ ] 压缩静态资源

---

### 八、构建和打包 📦

#### 8.1 构建脚本配置
- [ ] 创建build.sh构建脚本
- [ ] 配置不同平台的构建命令
- [ ] 设置环境变量

#### 8.2 各平台构建
- [ ] Web构建（生成dist目录）
  ```bash
  npm run build:web
  ```
- [ ] iOS构建（生成.ipa文件）
  ```bash
  npm run build:ios
  ```
- [ ] Android构建（生成.apk/.aab文件）
  ```bash
  npm run build:android
  ```
- [ ] Mac构建（生成.dmg文件）
  ```bash
  npm run build:mac
  ```
- [ ] Windows构建（生成.exe安装程序）
  ```bash
  npm run build:windows
  ```

---

### 九、测试和发布 🚀

#### 9.1 本地测试
- [ ] Web端测试
  ```bash
  npx cap serve
  ```
- [ ] iOS模拟器测试
  ```bash
  npx cap run ios
  ```
- [ ] Android模拟器测试
  ```bash
  npx cap run android
  ```
- [ ] 真机测试

#### 9.2 发布准备
- [ ] 准备应用商店截图
- [ ] 编写应用描述
- [ ] 准备隐私政策
- [ ] 设置版本号

#### 9.3 发布渠道
- [ ] Apple App Store提交
- [ ] Google Play Store提交
- [ ] Mac App Store提交
- [ ] Microsoft Store提交
- [ ] GitHub Releases发布
- [ ] Web部署（Vercel/Netlify）

---

### 十、维护和更新 🔄

#### 10.1 版本管理
- [ ] 设置版本更新策略
- [ ] 配置自动更新机制
- [ ] 创建更新日志

#### 10.2 监控和分析
- [ ] 集成崩溃报告
- [ ] 添加使用分析
- [ ] 设置性能监控

---

## 📝 注意事项

1. **iOS发布需要**：
   - Apple开发者账号（$99/年）
   - Mac电脑进行构建

2. **Android发布需要**：
   - Google Play开发者账号（$25一次性）

3. **代码签名**：
   - iOS需要证书和Provisioning Profile
   - Android需要keystore文件
   - Windows需要代码签名证书

4. **音频文件处理**：
   - 考虑音频文件大小，可能需要优化压缩
   - 评估是否需要流媒体方案

5. **更新策略**：
   - 热更新 vs 应用商店更新
   - 版本兼容性处理

---

## 🎯 预期成果

完成所有步骤后，将获得：
1. ✅ iOS应用（可上架App Store）
2. ✅ Android应用（可上架Google Play）
3. ✅ PWA网页应用（可离线使用）
4. ✅ Mac桌面应用（.dmg安装包）
5. ✅ Windows桌面应用（.exe安装程序）

---

## 📅 时间预估

- 环境准备：2-3小时
- 项目配置：3-4小时  
- 平台适配：4-6小时
- 构建测试：2-3小时
- 发布准备：2-3小时

**总计：13-19小时（约2-3个工作日）**

---

## 🆘 常见问题解决

1. **Capacitor同步失败**
   ```bash
   npx cap sync
   ```

2. **iOS构建错误**
   ```bash
   cd ios/App
   pod install
   ```

3. **Android Gradle错误**
   ```bash
   cd android
   ./gradlew clean
   ```

4. **清理和重建**
   ```bash
   rm -rf node_modules
   npm install
   npx cap sync
   ```
