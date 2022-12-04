import { createApp } from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue';
import router from './routers/index'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"


createApp(App).use(router).use( CKEditor ).mount('#app')
