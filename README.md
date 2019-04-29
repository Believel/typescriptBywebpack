利用 webpack 实时监视编译 ts 文件

1. 命令行编译
   `tsc 02class.ts`
   `tsc -t es5 02class.ts` // 指定编译成 es5 版本
2. webpack 编译
   `npm run server`

# xxx

> `.d.ts` 文件扩展名指定这个文件是一个声明文件，里面可以定义声明语句，例如`declare var jQuery: (selector: string) => any`

### 第三方声明文件

1. `jQuery`的声明文件不需要我们定义了，社区已经帮我们定义好了

```js
npm install @types/jquery --save-dev
npm install jquery --save-dev
```

2. 在指定的文件内引入

```js
import * as $ from "jquery";
```
