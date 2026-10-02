# Johnny · 文强哥 (Johnny520) 👿

> 个人主页 / 作品集 —— 基于 **VitePress** 构建，部署于 **GitHub Pages**。

🌐 线上地址：<https://johnny520.github.io/Johnny/>

## 目录结构

```
docs/
├── .vitepress/
│   ├── config.mts              # 站点配置（导航 / 侧边栏 / 搜索 / base）
│   └── theme/
│       ├── index.ts            # 主题入口，注册全局组件
│       └── components/Giscus.vue   # 讨论区（giscus / GitHub Discussions）
├── public/                     # 静态资源（原样拷贝进产物）
│   ├── assets/                 # 图片、音乐等
│   └── legacy/                 # 旧版主页归档（经典版）
├── index.md                    # 首页
├── about.md                    # 关于我
├── projects/                   # 项目介绍
├── friend.md                   # 友链申请
└── discuss.md                  # 讨论区
```

## 本地开发

```bash
npm install          # 安装依赖
npm run docs:dev     # 本地预览 http://localhost:5173/Johnny/
npm run docs:build   # 构建到 docs/.vitepress/dist
npm run docs:preview # 预览构建产物
```

## 部署

推送到 `main` 分支后，GitHub Actions（`.github/workflows/pages.yml`）自动执行
`npm install` → `npm run docs:build` → 部署 `docs/.vitepress/dist` 到 GitHub Pages。

## 说明

- 站点部署在子路径 `/Johnny/`，因此 `config.mts` 中设置了 `base: '/Johnny/'`
- 讨论区复用原站的 giscus 配置（仓库 `Johnny520/Johnny` 的 Announcements 分类）
- 旧版主页（原 `index.html` / `old.html` / 友链旧页）已归档到 `docs/public/legacy/`
