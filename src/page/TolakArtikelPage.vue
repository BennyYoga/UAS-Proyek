<template>
    <div class="layer"></div>    
    <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
        <div class="page-flex">          
          <SideBarEditor/>
          <div class="main-wrapper">            
            <nav-bar-tolak-artikel/>                                    
            <TolakArtikel/>
        </div>
    </div>
  </template>
  
  
  <script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import TolakArtikel from '@/components/TolakArtikel.vue';
  import NavBarTolakArtikel from '@/components/NavBarTolakArtikel.vue';
  import SideBarEditor from '../components/SideBarEditor.vue';
  
  export default {
    name: "App",
    components: {
    TolakArtikel,
    NavBarTolakArtikel,
    SideBarEditor,
}
  }
  </script>
  