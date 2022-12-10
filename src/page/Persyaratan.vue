<template>
  <link
    rel="stylesheet"
    href="http://localhost:8080/assets/css/style.min.css"
  />
  <div class="layer"></div>
  <!-- ! Body -->
  <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
  <div class="page-flex">
    <!-- ! Sidebar -->
    <SideBar />
    <div class="main-wrapper">
      <!-- ! Main nav -->
      <NavBar />
      <!-- ! Main -->
      <!-- <MainTable/> -->
      <!-- <MainAdmin/> -->
      <ListPersyaratan />
      <!-- ! Footer -->
    </div>
  </div>
</template>

    
<script>
// import SideBar from '..SideBar.vue';
// import NavBar from '.NavBar.vue';
// import MainAdmin from '..MainAdmin.vue';
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBarListPersyaratan.vue";
// import MainAdmin from '../components/MainAdmin.vue';
import ListPersyaratan from "../components/ListPersyaratan.vue";

export default {
  name: "App",
  components: {
    SideBar,
    NavBar,
    // MainAdmin,
    ListPersyaratan,
  },
};
</script>