//index.js
import TestBtn from './button/TestBtn.vue'; // 引入封装好的组件

export { TestBtn }; //实现按需引入*

const components = [TestBtn];
const install = function (App, options) {
  components.forEach((component) => {
    App.component(component.name, component);
  });
};
export default { install }; // 批量的引入*
