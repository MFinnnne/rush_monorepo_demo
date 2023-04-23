# rush_monorepo_demo
利用rush.js搭建monorepo仓库的示例

## 目录结构

- **ui/**：
  - vue2-ui：基于vite的vue2简易组件库
  - vue3-ui：基于vite的vue3简易组件库
- **tools**
  - mat：基于roullup构建，ts编写的简易数学库（copy的）
  - my-utils：基于roullup构建，ts编写的简易库（主要就是示范作用）
- **doc**：
  -  docs：基于vitepress的静态网页，主要用来写文档。目前只是初始样子并未做任何修改
- **app**：
  - my-app-vue2:  vue2网页示例
  - my-app-vue3:  vue2网页示例
- **common**：rushjs的相关配置


> deploy.py 只是进行了docker 镜像构建和推送到远程仓库的作用 并未登录到docker，所以直接使用会失败。登录操作需要集成到ci中使用相关功能确保密码和用户名不会泄露。不能把密码等敏感参数写在脚本里面

## 快速体验

- clone仓库

> git clone git@github.com:MFinnnne/rush_monorepo_demo.git

- 进入项目目录后执行

> rush update   \# 按需安装 NPM 包

- 进入某个项目内然后build

> rush rebuild  # 清理并重新构建所有项目
>
> 或者开启监听模式下的自动build
>
> rush te  或者 rush build:watch --to-except my-app-vue2 

-  进入 my-app-vue2项目运行， 假设 package.json 内存在 "start" 指令。 (通过 "rushx" 来查看可用的命令)

> rushx serve

当你开启监听模式的build，当你更改 mat项目或者utils项目下的代码时就会自动更新依赖



