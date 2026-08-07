# Rain Portfolio

一个基于 React、Vite 和 Markdown 构建的个人网站，用于整理和展示作品、文章、学习笔记与其他公开内容。

网站将页面代码与内容分离：React 负责界面和交互，Markdown 负责正文，Pages CMS 提供可视化内容编辑，GitHub Actions 负责自动构建并部署到 GitHub Pages。

## 在线访问

- [访问个人网站](https://dhdsb.github.io/rain-portfolio/#/)
- [查看项目仓库](https://github.com/DHDSB/rain-portfolio)

## 项目特点

- 多页面结构：首页、作品、内容、搜索、关于和详情页
- 使用 Markdown 管理作品、文章和记录
- 使用 YAML Front Matter 管理内容元数据
- 通过 Pages CMS 可视化新增和编辑公开内容
- 支持草稿、发布状态和首页精选控制
- 支持封面图片与 Markdown 正文图片
- 支持标签筛选和全站搜索
- 支持内容按发布日期排序
- 支持列表“加载更多”
- 自动计算预计阅读时间
- 支持 Markdown 标题、列表、链接、引用、表格和代码块
- 支持 Open Graph 分享封面和基础 SEO
- 使用 GitHub Actions 自动构建和部署
- 页面文案可通过 Pages CMS 管理

## 技术栈

- React
- Vite
- Tailwind CSS
- React Router
- react-markdown
- remark-gfm
- Pages CMS
- GitHub Actions
- GitHub Pages

## 本地开发

### 1. 克隆仓库

```bash
git clone https://github.com/DHDSB/rain-portfolio.git
cd rain-portfolio
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发环境

```bash
npm run dev
```

### 4. 执行生产构建

```bash
npm run build
```

### 5. 预览生产构建

```bash
npm run preview
```

## 内容管理

公开内容保存在：

```text
src/content/
```

每篇内容是一个独立的 Markdown 文件，并通过 YAML Front Matter 定义元数据。

示例：

```markdown
---
id: example-article
title: 示例文章
category: 文章
date: 2026-08-07
featured: true
published: true
cover: /images/covers/example-cover.webp
tags:
  - React
  - Markdown
description: 这是一篇示例文章摘要。
---

## 正文标题

这里是 Markdown 正文。
```

### 字段说明

- `id`：内容唯一标识，也用于详情页路由
- `title`：标题
- `category`：作品、文章或记录
- `date`：发布日期
- `featured`：是否显示在首页精选区域
- `published`：是否在公开网站中显示
- `cover`：封面图片路径
- `tags`：标签列表
- `description`：内容摘要

> `published: false` 只会让内容不出现在网站页面中。仓库是公开的，因此任何敏感或私密内容都不应写入仓库或 Pages CMS。

## Pages CMS

Pages CMS 配置文件位于：

```text
.pages.yml
```

Pages CMS 当前用于管理：

- 作品、文章和记录
- Markdown 正文
- 标题、摘要、日期、标签和封面
- 首页精选状态
- 发布状态
- 首页、About、Contact、Footer 等页面文案
- 图片与媒体文件

通过 Pages CMS 保存内容后，会在 GitHub 仓库生成提交，并触发 GitHub Actions 自动构建和部署。

## 图片管理

图片统一放置在：

```text
public/images/
```

推荐目录结构：

```text
public/images/
├── covers/
│   └── 内容封面
└── content/
    └── <内容 ID>/
        └── Markdown 正文图片
```

例如：

```text
public/images/covers/rain-portfolio-cover.png
public/images/content/rain-portfolio/portfolio-home.png
```

Markdown 中使用公开路径：

```markdown
![首页截图](/images/content/rain-portfolio/portfolio-home.png)
```

建议在上传图片前完成文件命名。已分类的图片不要在 Pages CMS 的媒体页面中再次重命名，以免文件被移动到媒体根目录。

## 项目结构

```text
rain-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── covers/
│       └── content/
├── src/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .pages.yml
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 路由

```text
/             首页
/works        作品页
/writing      内容页
/search       搜索页
/about        关于页
/content/:id  内容详情页
*             404 页面
```

项目使用 `HashRouter` 兼容 GitHub Pages，因此线上地址会包含 `#/`。

## 自动部署

部署工作流位于：

```text
.github/workflows/deploy.yml
```

推送到 `main` 分支后，GitHub Actions 会：

1. 检出仓库代码
2. 安装 Node.js 依赖
3. 执行生产构建
4. 上传 `dist` 构建产物
5. 部署到 GitHub Pages

Vite 的部署基础路径配置为：

```javascript
base: "/rain-portfolio/"
```

如果将来改用自定义域名，需要同步检查 Vite `base`、Open Graph 图片地址以及 GitHub Pages 的自定义域名配置。

## 常用工作流

### 修改代码

```bash
npm run build
git add .
git commit -m "描述本次修改"
git pull --rebase origin main
git push origin main
```

### Pages CMS 已产生远程提交时

先同步远程更新，再继续本地开发：

```bash
git pull --rebase origin main
```

不要使用强制推送覆盖 Pages CMS 产生的内容提交。

## 当前内容方向

网站不会被限定为单一主题，当前主要用于：

- 记录学习过程
- 整理技术实践
- 展示个人项目
- 保存可长期维护的笔记
- 分享公开内容与思考

## 后续方向

- 持续增加真实作品和文章
- 优化移动端阅读体验
- 根据内容数量增加相关文章推荐
- 增加 RSS 或邮件订阅
- 配置自定义域名
- 探索 AI 阅读助手
- 在真实需求出现后评估账号系统与后端数据库

## 隐私与安全

本仓库和 GitHub Pages 网站均用于公开内容。

请勿提交：

- 密码、Token、API Key 或私钥
- 公司内部代码、日志、域名或 IP
- 未公开的项目、产品或客户信息
- 个人隐私数据
- 任何不适合公开传播的材料

## License

当前项目暂未添加开源许可证。在明确许可证前，仓库公开可见不等于允许复制、修改或重新分发全部内容。
