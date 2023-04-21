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

