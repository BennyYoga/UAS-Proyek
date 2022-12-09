import { createApp } from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue';
import router from './routers/index'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"
// import VueCookie from 'vue-cookie';
// import { globalCookiesConfig } from "vue3-cookies";

// // Require dependencies
// var Vue = require('vue');
// var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin

// globalCookiesConfig({
//     expireTimes: "30d",
//     path: "/",
//     domain: "",
//     secure: true,
//     sameSite: "None",
//   });

createApp(App).use(router).use( CKEditor ).mount('#app')
