import * as components from "./components";

const defaultComponents = components?.default;
const vueComponents = {
  install(Vue) {
    Object.keys(defaultComponents).forEach((name) => {
      console.log("the key is", name);
      Vue.component(name, defaultComponents[name]);
    });
  },
};
export default vueComponents;
