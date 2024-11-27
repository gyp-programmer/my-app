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
- three.js 的案例和学习
  - 1. 实现一个机器人，会跳舞
  - 2. 更新一个类似[小米su7](https://gamemcu.com/su7/)的动画

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
- [x] 实现自己的组件库 ==gyp-gao-ui==
  - 1. 开发一个编写博客的组件
  - 2. `npm i gyp-gao-ui`
- [x] nextjs 服务端渲染应用
  - 1. 实现服务端渲染的博客应用

# 技术栈

- react
- react-router-dom
- webpack
- koa nodejs
- groq [https://console.groq.com/docs/models]
- threejs

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

# 记录

1. verdor-islands.js
   修改部分：

   - 大概1001行 更改为
     `location.origin + "/api/global-footer"`

2. webapp-mobile-islands.js
   修改部分：

   - 替换domain domain: "www.tiktok.com" -> domain: location.origin
   - 22630行 更改内容为
     ```js
       rootApi: location.origin,
       starling: location.origin + '/straling',
       tea: location.origin + '/tea',
       libraWebSDK: location.origin | '/abtea',
     ```
   - 22650行 更改内容为
     不用去#api-domain的script中获取domain,删除部分代码
   - 20491行 20559 更改内容为

   ```js
     domain: location.host,
   ```

   - 10693 ${location.origin}

3. webapp-mobile.js

   - 替换domain domain: "www.tiktok.com" -> domain: location.origin
   - 替换domain domain: ".tiktok.com" -> domain: location.origin
   - 13720 ${location.origin}

4. verdor.js

   - 12348行 `location.origin + "/api/global-footer"`
   - 14128行 `location.origin + "/api/v1/web-cookie-privacy/config"`

5. verdor-islands.js
   - 39929行 `${location.origin}/api/v1/web-cookie-privacy/config`
   - 1001 `location.origin + "/api/global-footer"`
6. weapp-login-page.js
   - 57808行 `this.fetch.post(`${location.origin}/passport/web/region/?domain=${e}``
   - 57868行 `this.fetch.post(`新的服务/passport/web/store_region/?domain=${e}`,
   - "/api/compliance/settings/" 替换为 `${location.origin}/api/compliance/settings/`
   - 57676行 `${location.origin}/passport/web/auth_broadcast/?domain=${t}`
   - initAccountSdkInstance方法中，getDynamicConfig方法里面的baseURL 改为 location.origin 并且param增加domain: t
   - domain: location.origin 涉及到fpCookieOption这个配置的domain 全局搜索 fpCookieOption
7. 3152.js
   - 286行 ${location.origin}
8. headSideEffect.island.js
   - 2817行 apiDomain: location.origin,
9. runtime.js
   - 421行 替换js的加载地址
10. zti.js

    - 3623行 location.hostname 改为 ‘www.tiktok.com’
    - 3300 行 location.hostname 改为 ‘www.tiktok.com’

待办事项：
npm-d801507b.d4925c9ee893afeaaf0c.js 文件需要更换
