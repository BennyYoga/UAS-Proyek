<template>
    <div class="layer"></div>    
    <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
        <div class="page-flex">          
          <SideBar/>
          <div class="main-wrapper">            
            <nav-bar-kategori/>                                    
            <ListKategori/>
        </div>
    </div>
  </template>
  
  
  <script>
  import SideBar from '../components/SideBar.vue';
  import "bootstrap/dist/css/bootstrap.min.css";
  import NavBarKategori from '../components/NavBarKategori.vue';
  import ListKategori from '../components/ListKategori.vue';
  
  export default {
    name: "App",
    components: {
      SideBar,
      NavBarKategori,
      ListKategori,
    }
  }
  </script>
  