<template>
    <div class="layer"></div>    
    <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
        <div class="page-flex">          
          <side-bar-editor/>
          <div class="main-wrapper">            
            <NavBarArtikelTolak/>                                    
            <ListArtikelTolak/>
        </div>
    </div>
  </template>
  
  
  <script>
  import SideBarEditor from '@/components/SideBarEditor.vue';
  import "bootstrap/dist/css/bootstrap.min.css";
  import NavBarArtikelTolak from '@/components/NavBarArtikelTolak.vue';
  import ListArtikelTolak from '@/components/ListArtikelTolak.vue';
  
  
  export default {
    name: "App",
    components: {
    SideBarEditor,
    NavBarArtikelTolak,
    ListArtikelTolak,
}
  }
  </script>
  