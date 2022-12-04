<template>
    <div class="layer"></div>    
    <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
        <div class="page-flex">          
          <SideBar/>
          <div class="main-wrapper">            
            <nav-bar-buat-kateg/>                                    
            <BuatKategori/>
        </div>
    </div>
  </template>
  
  
  <script>
  import SideBar from '../components/SideBar.vue';
  import "bootstrap/dist/css/bootstrap.min.css";
  import NavBarBuatKateg from '../components/NavBarBuatKateg.vue';
  import BuatKategori from '../components/BuatKategori.vue';
  
  export default {
    name: "App",
    components: {
      SideBar,
      NavBarBuatKateg,
      BuatKategori,
    }
  }
  </script>
  