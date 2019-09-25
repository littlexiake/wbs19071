nodejs

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型（读取文件、数据库、网络等等都是异步编程），使其轻量又高效。 

JavaScript是一门全栈语言，不再是只能运行在浏览器端的脚本语言（实现表单校验、dom操作，动画等等）
可以实现模块化编程、IO、数据库访问、Web服务器编程等等（这里编程称作服务器端编程或者桌面应用程序编程）！

Nodejs就是基于JavaScript语言编程！
它内置或者引用第三方组件，实现了全栈开发！

特点：
1、使用JS编码（包括ES6特性）
2、不再依赖于浏览器运行
3、基于 Chrome V8 引擎的JavaScript运行环境
4、轻量高效（没有BOM browser和DOM document对象——不需要做DOM操作和css渲染）
5、事件驱动（异步编程）
6、跨平台（一次编写，任意平台windows, linux, mac等可以直接运行——前提是在所有机器上安装nodejs环境）

-------------------------------------------------------------------------------------------------

node.exe命令执行js程序或者脚本

这种命令行界面我们称作REPL（诸如mysql的命令行终端）

Read    读取命令行
Eval    运行和执行命令
Print   打印结果
Loop    以此往复

node -v

> .exit     // 退出终端

> 在终端提示符下，^D退出终端
> 在终端提示符下，^C退出当前执行的程序
> 在终端提示符下，两次^C退出终端

----------------------------------------------------------------------------------------------

1、直接在REPL中写脚本

d:\nodejs>node
Welcome to Node.js v12.10.0.
Type ".help" for more information.
> Math.PI.toFixed(3)
'3.142'
> let i = 10 ** 2;
undefined
> i
100

2、直接在REPL中加载并执行js文件

> .load test.js

3、直接通过node.exe执行js文件（注意路径）

d:\nodejs>node test.js
9801
d:\nodejs>node d:\nodejs\test.js
9801

---------------------------------------------------------------------------------------------------

关于nodejs中的三种组件：

1、**核心组件**：直接在js文件中就可以使用，不需要下载，也不需要导入
2、**内置组件**：不需要下载，但是需要手动导入（nodejs环境中已经有了）
3、**第三方组件**：需要手动下载（肯定也需要手动导入）

下面介绍process核心组件（进程），用于获取当前js程序的环境参数！

我想实现一个加法计算器（小桌面程序），通过参数传入要累加的数值，计算出结果后，打印输出！
node add.js 10 20 30 40 50

---------------------------------------------------------------------------------------------------

使用npm（node package manager）工具去从网上搜索、下载、配置nodejs工程中所需要的组件！

npm -v

如何管理？
1、先创建一个nodejs工程

2、再用npm工具去管理工程中的第三方组件

搜索组件
npm search jquery

查看最新组件信息
npm info jquery

查看所有版本信息
npm view jquery versions

查看指定版本信息
npm info jquery@1.11.2

下载最新版本组件（覆盖安装）
npm install jquery
npm i jquery

下载指定版本组件（覆盖安装）
npm install jquery@1.11.2
npm i jquery@1.11.2

卸载项目中的依赖组件
npm uninstall jquery
npm un jquery

升级项目中的依赖组件（当前主版本号的最新版，如果是1.11.2，升级到1.12.4，不会升级到2.x或者3.x版本）
npm update jquery
npm up jquery

可以在配置文件中将版本号前面的^去掉，这样该组件就不会被升级
或者
在下载安装组件时，指定--save-exact，那么版本前也不会自动加^符号

查看当前项目中的依赖组件
npm list
npm ls

重新下载项目中的依赖（在拷贝项目时，只需要拷贝源码和配置清单即可）
npm i





















