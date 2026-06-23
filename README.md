# 职场人格抽样测试

基于 Next.js 的 H5 小工具，适合挂在公众号菜单、阅读原文或后台关键词回复。后续可以继续扩展结果页路由、分享图接口、埋点、题库配置或后台管理。

## 功能

- 从 36 道职场吐槽题里随机抽取 5 道
- 覆盖职场静音人、背锅预警员、工位续命师、会议出窍者、摸鱼战略家、情绪打工皇帝、边界感保安、离职预备役 8 类结果
- 本地计分，无后端依赖
- 结果页生成可保存 PNG 海报
- 海报只包含品牌名和结果，不包含二维码、扫码关注或诱导文案

## 本地预览

安装依赖：

```bash
npm install
```

启动开发服务：

```bash
npm run dev
```

然后访问：

```text
http://127.0.0.1:3000/
```

## 部署建议

推荐使用 Cloudflare Workers + OpenNext 部署，便于后续扩展 API、动态分享图、埋点或后台配置。

本地按 Cloudflare Workers 运行时预览：

```bash
npm run cf:preview
```

部署到 Cloudflare Workers：

```bash
npm run cf:deploy
```

首次部署前请先登录 Cloudflare：

```bash
npx wrangler login
```

部署后的路径可以配置为：

```text
https://workplace.grainbuds.online/
```

公众号入口文案可以用：

```text
随机 5 道职场吐槽题，看看你今天是哪种打工人格
```

适合挂在公众号菜单、文章“阅读原文”或后台关键词回复入口。
