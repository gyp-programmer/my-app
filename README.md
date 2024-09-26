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
- [x] 接入eslist  [https://eslint.org/docs/latest/use/getting-started]
  - 1. 最新版本9.x
  - 2. 接入pre-commit, 用来提交前的代码格式检测
    - package.json中增加一下配置，意思就是git commit之前会先跑npm run lint
    ```
      "pre-commit": [
        "lint"
      ]
    ```
    - 安装命令：`npm i -D pre-commit`
- [ ] 接入prettier [https://www.prettier.cn/]

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
```