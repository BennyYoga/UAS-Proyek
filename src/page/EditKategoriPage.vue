<template>
    <div class="layer"></div>    
    <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
        <div class="page-flex">          
          <SideBar/>
          <div class="main-wrapper">            
            <nav-bar-edit-kategori/>                                    
            <edit-kategori/>
        </div>
    </div>
  </template>
  
  
  <script>
  import SideBar from '../components/SideBar.vue';
  import "bootstrap/dist/css/bootstrap.min.css";
  import NavBarEditKategori from '@/components/NavBarEditKategori.vue';
  import EditKategori from '@/components/EditKategori.vue';
  
  export default {
    name: "App",
    components: {
      SideBar,
      NavBarEditKategori,
      EditKategori,

    }
  }
  </script>
  