<template>
    <div class="layer"></div>    
    <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
        <div class="page-flex">          
          <SideBar/>
          <div class="main-wrapper">            
            <nav-bar-pengguna/>                                    
            <akun-pengguna/>
        </div>
    </div>
  </template>
  
  
  <script>
  import SideBar from '../components/SideBar.vue';
  import "bootstrap/dist/css/bootstrap.min.css";
  import NavBarPengguna from '../components/NavBarPengguna.vue';
  import AkunPengguna from '@/components/AkunPengguna.vue';
  
  export default {
    name: "App",
    components: {
      SideBar,
      NavBarPengguna,
      AkunPengguna,
    }
  }
  </script>
  