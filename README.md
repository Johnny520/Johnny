# Johnny · 文强哥 (Johnny520) 👻

> 个人主页 / 作品集 —— **液态玻璃（Liquid Glass）UI** 风格，零外部依赖，直接部署于 GitHub Pages。
>
> 🎨 专属吉祥物 **小恶魔** 👿 · 🎵 随机背景音乐 · 💬 讨论区（点赞+回复）

作者：**文强哥 (Johnny520)** · GitHub：<https://github.com/Johnny520>

## ✨ 站点内容

### 🌟 关于
Android 个人开发者简介与完整技能栈，涵盖 Android 开发、LSPosed 模块、逆向分析、Flutter、Rust 等。

### 🚀 项目
聚合展示全部开源项目（9+ 个），按类别分组：
- **微信增强系列**：WCX 微信增强模块
- **隐私 & 安全工具**：anti-detect、JohnnyAdBlock
- **系统工具**：分区清理大师
- **逆向分析工具**：APK Analyzer
- **企业信息查询**：企信查 Web / Android / Flutter 三端
- **个人网站**：Johnny 主页源码

### 💬 讨论区
升级后的留言板，支持：
- ✍️ 发布讨论话题
- 👍 点赞互动
- ↩️ 回复评论（多层讨论）
- 💾 本地存储（localStorage），刷新不丢失
- 最多保存 100 条讨论

### 🔗 友链
`friend.html` 友链申请页，可一键生成友链代码，填写站点信息后通过 GitHub Issues 提交。

## 🎨 设计特性

- **液态玻璃 UI**：半透明毛玻璃卡片 + `backdrop-filter` 真模糊 + 渐变流动光斑背景
- **暗色 / 亮色双主题**：记忆用户选择，默认跟随系统
- **模拟 + 数字双时钟**：实时显示当前时间与日期
- **动态光点背景**：Canvas 绘制的星空效果
- **漂浮可爱元素**：随机上升的 emoji 装饰
- **小恶魔吉祥物**：顶部会动的小恶魔，点击撒花 🎉
- **背景音乐**：4 首随机播放，支持演示旋律回退
- **鼠标光晕**：液态玻璃质感的跟随鼠标光晕
- **单文件自包含**：不依赖任何第三方 CDN，Pages 上开箱即用
- **响应式设计**：完美适配手机 / 平板 / 桌面

## 🛠️ 本地预览

```bash
# 任选其一
python3 -m http.server 8080
# 然后浏览器打开 http://localhost:8080
```

## 🚀 部署

通过 `.github/workflows/pages.yml` 在 push 到 `main` 时自动部署到 GitHub Pages。
源分支为仓库根目录（`path: '.'`），入口页面为 `index.html`。

## 📁 目录结构

```
Johnny/
├── index.html              # 主站（液态玻璃 UI + 讨论区）
├── friend.html             # 友链申请页
├── README.md
├── assets/
│   ├── images/             # 图片资源（小恶魔吉祥物等）
│   └── music/              # 背景音乐
└── .github/workflows/
    └── pages.yml           # Pages 自动部署
```

## 🔗 相关链接

- 🌐 在线访问：<https://johnny520.github.io/Johnny/>
- 🐙 GitHub：<https://github.com/Johnny520/Johnny>
- 💬 讨论区：<https://johnny520.github.io/Johnny/#msg>

---

© 文强哥 (Johnny520) · 版权所有 🐾
