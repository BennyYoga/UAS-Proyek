<template>
  <!-- Custom styles -->
    <link rel="stylesheet" href="http://localhost:8080/assets/css/style.min.css" />
    <div class="layer"></div>
    <!-- ! Body -->
    <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
        <div class="page-flex">
          <!-- ! SidebarEditor -->
          <SideBarEditorVue/>
          <div class="main-wrapper">
            <!-- ! Main nav -->
            <NavBarEditorVue/>
            <!-- ! Main -->
            <MainEditor/>
            <!-- ! Footer -->
  
        </div>
    </div>
  </template>
  
    <!-- Chart library -->
    <!-- <script src="http://localhost:8080/assets/plugins/chart.min.js"></script> -->
    <!-- Icons library -->
    <!-- <script src="http://localhost:8080/assets/plugins/feather.min.js"></script> -->

    <!-- <script src="http://localhost:8080/assets/js/script.js"></script> -->

  <script>
  import SideBarEditorVue from '@/components/SideBarEditor.vue';
  import NavBarEditorVue from '@/components/NavBarEditor.vue';
  import MainEditor from '@/components/MainEditor.vue';
  // import SideBarEditorVue from './components/SideBarEditor.vue';
  // import NavBarEditorVue from './components/NavBarEditor.vue';
  // import MainEditor from './components/MainEditor.vue';
  
// import 'http://localhost:8080/assets/plugins/chart.min.js'
// import 'http://localhost:8080/assets/plugins/feather.min.js'
// import 'http://localhost:8080/assets/js/script.js'

  export default {
    name: "App",
    components: {
        SideBarEditorVue,
        NavBarEditorVue,
        MainEditor,
    //   SideBarEditorVue,
    //   NavBarEditorVue,
    //   MainEditor,
    }
  }
  </script>