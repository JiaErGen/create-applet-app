## 概述
applet-script

使用webpack，babel 编译的支付宝小程序项目

### 快速创建一个小程序应用
- 支持es2021，比如 ?? 语法等，js压缩
- 支持less scss，样式压缩
- 支持typescript
- 支持eslint代码检查
- 支持stylelint代码检查
- 本地mock

### 创建项目
```js
npx create-applet-app <name>
// 例如 npx create-applet-app demo
```

#### script-config 配置文件
```js
module.exports = {
  entry: 'src', // 项目入口目录
  output: 'dist', // 项目打包存放目录
  "@babel/preset-env": { // @babel/preset-env 配置
    targets: { // babel 编译生成的版本 https://babeljs.io/docs/en/babel-preset-env#targets
      chrome: "58",
    },
  },
  keep: /(node_modules)|(\.mini-ide)|(mini\.project\.json)/, // 打包时不删除的文件 https://webpack.docschina.org/configuration/output/#outputclean
  mockPort: false, // 默认设置为false关闭mock， 如果设置为mock: 7000 那么 http://localhost:7000 可以访问到mock数据
  webpackConfig: {}, // 你的 webpack 配置
}
```

#### mock
###### 读取 mock/index.js 文件内容产生mock，端口号读取配置，默认关闭。
###### mock/index.js 内容如下
###### 参考 https://www.expressjs.com.cn/starter/hello-world.html
```js
module.exports = (app) => {
  app.post('/home', (req, res) => {
    res.json({
      test: 'home'
    });
  })

  app.get('/', (req, res) => {
    res.json({
      test: 'hello'
    });
  })
};
```

### 运行
如果已经创建好项目，并且安装好依赖

运行 npm run dev 然后使用小程序模拟器打开dist目录即可

### api
|  命令行   | 说明  |
|  ----  | ----  |
| npm run dev | 启动开发，不压缩 js & css，eslint检测 |
| npm run build  | 生产环境打包，js & css 压缩 |
| npm run eslint-fix | 自动修复eslint |
| npm run stylelint-fix | 自动修复 stylelint |
