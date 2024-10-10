# 打造个人网站

- [x] 搭建个人网站
- [x] 采用工业风格

## 使用create-react-app脚手架快速搭建

- mock数据实现
- csdn论坛订阅实现
- 反向滚动实现
- 自定义webpack插件实现
- 路由跳转接入nprogress
- 接入vercel
- 实现保护屏功能
- 通过服务器代理，实现iframe打开被拒绝的站点
- 添加无缝轮播图
- 接入iconfont(在线方式)
- 接入groq语言大模型
- 按秒实现b站短视频功能
  - 1. 以1秒为一个step,跨度太大，视频跳动太多，不丝滑
- 按帧实现短视频播放功能

  - 1. 由于会接入自己的进度条，拖拽按帧数为一个step,会丝滑很多，而且我们可以看到视频每一帧的画面
  -

  > 针对以上的两种方案实现短视频的播放功能，对于用户来说，体验上会有很大的区别，我猜测比较主流的短视频网站，他们的播放速度都是按帧播放的，

- 大资源图片加载优化，预加载

# 待办项

- [x] 接入eslist [https://eslint.org/docs/latest/use/getting-started]
  - 1. 最新版本9.x
  - 2. 接入pre-commit, 用来提交前的代码格式检测
    - package.json中增加一下配置，意思就是git commit之前会先跑npm run lint
    ```
      "pre-commit": [
        "lint"
      ]
    ```
    - 安装命令：`npm i -D pre-commit`
- [x] 接入prettier [https://www.prettier.cn/]
  - 1. 固定版本安装 `--save-exact` 记录该软件包的精确版本号
  - 2. 默认会按照.gitignore文件过滤，当我们加入了.prettierignore文件，也会过滤，两个是同时配置规则
  - 3. 配合eslint使用，使用eslint-config-prettier
  - 4. 接入到pre-commit钩子，在提交前检测代码格式
- [x] 接入qiankun框架，感受微前端的魅力

  - [x] 微应用为：原生的js项目
    - 1. 禁用缓存，不让缓存已经加载的内容
  - [ ] 微应用为：react项目
  - [x] 微应用为：vue项目
    - 1. 开启缓存，并且设置样式隔离 打开shodow-dom
  - [x] 微应用为：umi项目

- [x] 限制项目使用指定的node版本
  - 1. 配置package.json文件，配置engines字段，指定node版本
  - 2. .npmrc文件中，开启严格node版本检测 `engine-strict=true`
  - 3. package-lock.json文件版本校验，确保 多人开发时 package-lock.json 的冲突
  - 4. 接入到pre-commit钩子，在提交前package-lock.json文件版本校验
- [ ] 实现自己的组件库
- [ ] nextjs 服务端渲染应用

# 技术栈

- react
- react-router-dom
- webpack
- koa nodejs
- groq [https://console.groq.com/docs/models]

## scripts

```bash

npm run build
npm run start
# 运行后自动打开浏览器
npm run start --open
# eslint的检测和修复
npm run lint
npm run lint:fix
# prettier的检测和修复
npm run format:check
npm run format:fix
# 检查lockfile的版本
npm run check:lockfile
```

## git commit追加

```bash
git commit --amend --no-edit
```

## 采用scss module开发

- 避免样式出现和微应用的样式混乱
