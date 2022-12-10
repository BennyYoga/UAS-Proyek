<template>
    <div class="layer"></div>    
    <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
        <div class="page-flex">          
          <SideBar/>
          <div class="main-wrapper">            
            <NavBarEditPersyaratanVue/>
            <EditPersyaratanVue/>
        </div>
    </div>
  </template>
  
  
  <script>
  import SideBar from '../components/SideBar.vue';
  import "bootstrap/dist/css/bootstrap.min.css";
  import EditPersyaratanVue from '@/components/EditPersyaratan.vue';
  import NavBarEditPersyaratanVue from '@/components/NavBarBuatPersyaratan.vue';
  
  export default {
    name: "App",
    components: {
      SideBar,
      NavBarEditPersyaratanVue,
      EditPersyaratanVue
    }
  }
  </script>
  