<template>
    <div class="layer"></div>    
    <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
        <div class="page-flex">          
          <side-bar/>
          <div class="main-wrapper">            
            <NavBarListEditor/>                                    
            <ListEditor/>
        </div>
    </div>
  </template>
  
  
  <script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import NavBarListEditor from '@/components/NavBarListEditor.vue';
  import ListEditor from '@/components/ListEditor.vue';
  import SideBar from '@/components/SideBar.vue';
  
  export default {
    name: "App",
    components: {
    NavBarListEditor,
    ListEditor,
    SideBar,
}
  }
  </script>
  