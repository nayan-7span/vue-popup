import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import vClickOutside from "click-outside-vue3";

const app = createApp(App);
app.use(vClickOutside);

app.mount("#app");
