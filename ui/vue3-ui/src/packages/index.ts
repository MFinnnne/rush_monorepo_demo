import { DefineComponent, ComputedOptions, MethodOptions, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue'
import TestBtn from './button/TestButton.vue'
export { TestBtn }

const components = [TestBtn]
const install = function (App: { component: (arg0: string, arg1: DefineComponent<{}, {}, any, ComputedOptions, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>) => void }) {
	components.forEach((component) => {
		App.component(component.name, component)
	})
}
export default { install } // 批量的引入*
