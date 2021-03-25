import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';
// createApp(App).mount('#app')
// import "element-ui/lib/theme-chalk/index.css";
// import Element from 'element-ui';

const app = createApp(App);
// app.use(Element);
app.use(router);

app.mount('#app');
