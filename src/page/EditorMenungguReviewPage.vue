<template>
    <div class="layer"></div>    
    <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
        <div class="page-flex">          
          <SideBarEditor/>
          <div class="main-wrapper">            
            <nav-bar-editor-menunggu-review/>                                    
            <EditorMenungguReview/>
        </div>
    </div>
  </template>
  
  
  <script>
  import SideBarEditor from '../components/SideBarEditor.vue';
  import "bootstrap/dist/css/bootstrap.min.css";
  import NavBarEditorMenungguReview from '@/components/NavBarEditorMenungguReview.vue';
  import EditorMenungguReview from '@/components/EditorMenungguReview.vue';
  
  
  export default {
    name: "App",
    components: {
    NavBarEditorMenungguReview,
    EditorMenungguReview,
    SideBarEditor,
}
  }
  </script>
  