<template>
    <div class="layer"></div>    
    <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
        <div class="page-flex">          
          <side-bar-editor/>
          <div class="main-wrapper">            
            <NavBarListArtikelPublish/>                                    
            <list-artikel-publish/>
        </div>
    </div>
  </template>
  
  
  <script>
  import SideBarEditor from '@/components/SideBarEditor.vue';
  import "bootstrap/dist/css/bootstrap.min.css";
  import ListArtikelPublish from '@/components/ListArtikelPublish.vue';
  import NavBarListArtikelPublish from '@/components/NavBarListArtikelPublish.vue';
  
  
  export default {
    name: "App",
    components: {
    SideBarEditor,
    ListArtikelPublish,
    NavBarListArtikelPublish,
}
  }
  </script>
  