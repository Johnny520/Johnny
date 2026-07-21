# Johnny · 文强哥 (Johnny520)

> 个人主页 / 作品集 —— **液态玻璃（Liquid Glass）UI** 风格，零外部依赖，直接部署于 GitHub Pages。

作者：**文强哥 (Johnny520)** · GitHub：<https://github.com/Johnny520>

## 站点内容

- **关于**：Android 个人开发者简介与技能栈。
- **项目**：聚合开源项目（分区清理大师、anti-detect、JohnnyAdBlock、企信查系列等）。
- **留言**：本地保存的轻量留言板（localStorage，不上传服务器）。
- **友链**：`friend.html` 友链申请页，可一键生成友链代码。

## 设计特性

- 液态玻璃 UI：半透明毛玻璃卡片 + `backdrop-filter` 真模糊 + 渐变流动光斑背景。
- 暗色 / 亮色双主题，记忆用户选择，默认跟随系统。
- 模拟 + 数字双时钟、动态光点背景。
- 单文件自包含，不依赖任何第三方 CDN，Pages 上开箱即用。

## 本地预览

```bash
# 任选其一
python3 -m http.server 8080
# 然后浏览器打开 http://localhost:8080
```

## 部署

通过 `.github/workflows/pages.yml` 在 push 到 `main` 时自动部署到 GitHub Pages。
源分支为仓库根目录（`path: '.'`），入口页面为 `index.html`。

## 目录

```
Johnny/
├── index.html        # 主站（液态玻璃）
├── friend.html       # 友链申请页
├── README.md
└── .github/workflows/pages.yml   # Pages 部署
```

© 文强哥 (Johnny520) · 版权所有
