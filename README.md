# NCE - 新概念英语学习平台

> 一个现代化的新概念英语在线学习平台，支持音频播放、中英文字幕同步、学习进度跟踪等功能。

## 📷 界面预览

![首页界面](https://edit-upload-pic.cdn.bcebos.com/a22af0ee29eddc7781115d80419ab667.jpeg?authorization=bce-auth-v1%2FALTAKh1mxHnNIyeO93hiasKJqq%2F2025-10-08T02%3A55%3A21Z%2F3600%2Fhost%2F3df4ef3f78f9191aba92c9904800ba1fd5d047ecf363e69fe2d2d9936a0f7c92)

![课程学习界面](https://edit-upload-pic.cdn.bcebos.com/e947361b80d9536486ed7417f7e39381.jpeg?authorization=bce-auth-v1%2FALTAKh1mxHnNIyeO93hiasKJqq%2F2025-10-08T02%3A55%3A52Z%2F3600%2Fhost%2F8e9eaaed40ab1f2dcd9ad3d8cfcd8f5941fb9b7e2d11b9cc9d20e30c8b9cc433)

## 📚 项目简介

NCE 是一个基于 Web 的新概念英语学习平台，包含完整的四册教材（NCE1-NCE4），提供沉浸式英语学习体验。平台支持音频播放、实时字幕同步、多种语言模式切换和学习进度管理。

## 🎯 核心功能

### 📖 教材内容
- **NCE1**: 144课 (72个音频文件，每课包含2个小节)
- **NCE2**: 96课 (48个音频文件，每课包含2个小节)
- **NCE3**: 60课 (30个音频文件，每课包含2个小节)
- **NCE4**: 48课 (24个音频文件，每课包含2个小节)

### 🎧 学习功能
- **多语言显示**: 支持纯英文、中英双语、纯中文三种显示模式
- **音频播放**: 高品质MP3音频，支持播放/暂停、进度拖拽、音量控制
- **字幕同步**: LRC格式字幕，实现音频与文字实时同步
- **倍速播放**: 支持0.5x - 2x变速播放
- **学习进度**: 自动记录学习时长和连续学习天数
- **收藏功能**: 收藏喜爱的课程

### 🎨 界面特性
- **响应式设计**: 适配桌面和移动端
- **现代化UI**: 采用 shadcn/ui 设计系统
- **主题切换**: 支持明暗主题
- **键盘快捷键**: 支持常用操作快捷键

## 🚀 快速开始

### 本地运行

1. **克隆项目**
```bash
git clone https://github.com/magang0425/NCE
cd NCE
```

2. **启动本地服务器**

使用 Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

使用 Node.js:
```bash
npx serve
```

使用其他静态服务器:
```bash
# 使用 live-server
npm install -g live-server
live-server

# 使用 http-server
npm install -g http-server
http-server
```

3. **访问应用**
打开浏览器访问 `http://localhost:8000`

## 📁 项目结构

```
NCE-Flow/
├── index.html              # 首页 - 课程导航
├── lesson.html            # 课程页 - 音频播放
├── book.html              # 书籍介绍页
├── assets/                # 静态资源
│   ├── styles.css         # 样式文件 (shadcn/ui)
│   ├── app.js           # 应用核心逻辑
│   ├── lesson.js        # 课程页面逻辑
│   ├── progress.js      # 进度管理
│   └── favorites.js     # 收藏功能
├── static/                # 静态数据
│   └── data.json        # 课程数据
├── NCE1/                 # 新概念英语第一册
├── NCE2/                 # 新概念英语第二册
├── NCE3/                 # 新概念英语第三册
└── NCE4/                 # 新概念英语第四册
```

## 🛠️ 使用指南

### 首页导航
1. 选择想要学习的教材册数 (NCE1-NCE4)
2. 查看学习统计数据（已学课程、学习时长、连续天数）
3. 点击课程进入学习页面

### 课程学习
1. **语言模式切换**: 点击顶部按钮切换 EN/EN+CN/CN 显示模式
2. **音频控制**:
   - 播放/暂停: 点击播放按钮或按空格键
   - 进度拖拽: 拖动时间轴
   - 倍速播放: 使用播放器设置
   - 音量调节: 点击音量按钮
3. **字幕同步**: 音频播放时字幕自动高亮当前句子
4. **收藏课程**: 点击收藏按钮保存喜爱的课程

### 学习统计
- 自动记录每节课的学习时长
- 统计连续学习天数
- 累计已学课程数量
- 数据保存在浏览器本地存储

## 🔧 技术栈

- **前端**: HTML5 + CSS3 + Vanilla JavaScript
- **UI框架**: shadcn/ui
- **音频格式**: MP3 (128kbps, 44.1kHz)
- **字幕格式**: LRC 同步字幕
- **数据存储**: localStorage (浏览器本地存储)
- **图标**: Bootstrap Icons

## 📝 LRC字幕格式

```lrc
[ti:课程标题]
[ar:New Concept English]
[al:NCE Book 3]

[00:00.00]Pumas are large, cat-like animals which are found in America.
[00:05.50]美洲狮是一种体型似猫的大动物，产于美洲。
[00:10.00]When reports came into London Zoo...
```

## 📊 课程数据格式

```json
{
  "1": [
    {
      "title": "Excuse Me",
      "filename": "001&002－Excuse Me"
    }
  ]
}
```

## 🚀 部署

### 自动化部署

项目使用 GitHub Actions 实现自动化构建和部署：

- **Web 应用**: 自动部署到 GitHub Pages
- **Android 应用**: 构建并上传到 Releases
- **iOS 应用**: 构建（需要 macOS）
- **Electron 应用**: 构建 Windows、macOS、Linux 版本

### 快速部署

```bash
# 安装依赖
npm install

# 构建所有平台
npm run build:all

# 本地预览
npm run preview
```

详细部署指南请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🔄 CI/CD

### 工作流

- **主构建**: 代码检查、构建、部署
- **安全扫描**: 漏洞扫描、代码安全分析
- **代码质量**: ESLint、Prettier、性能测试
- **依赖缓存**: 优化构建速度

### 状态徽章

![Build Status](https://github.com/baifan-cn/NCE/workflows/Build%20and%20Deploy/badge.svg)
![Security Scan](https://github.com/baifan-cn/NCE/workflows/Security%20Scan/badge.svg)
![Code Quality](https://github.com/baifan-cn/NCE/workflows/Code%20Quality%20Check/badge.svg)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

### 开发规范

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 代码规范

- 使用 ESLint 进行代码检查
- 使用 Prettier 进行代码格式化
- 确保所有测试通过
- 遵循提交信息规范

## 📄 许可证

MIT License