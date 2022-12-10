<template>
  <div class="layer"></div>
  <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
  <div class="page-flex">
    <SideBar />
    <div class="main-wrapper">
      <NavBarListPersyaratan />
      <ListPersyaratan />
    </div>
  </div>
</template>
  
  
  <script>
import SideBar from "../components/SideBar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ListPersyaratan from "@/components/ListPersyaratan.vue";
import NavBarListPersyaratan from "@/components/NavBarListPersyaratan.vue";

export default {
  name: "App",
  components: {
    SideBar,
    NavBarListPersyaratan,
    ListPersyaratan,
  },
};
</script>
  