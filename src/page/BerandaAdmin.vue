<template>
    <div class="layer">
        <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
        <div class="page-flex">
            <!-- ! Sidebar -->
            <SideBar />
            <div class="main-wrapper">
                <!-- ! Main nav -->
                <NavBar />
                <!-- ! Main -->
                <!-- <MainTable/> -->
                <MainAdmin />
                <!-- ! Footer -->

            </div>
        </div>
    </div>
</template>

    
<script>
// import SideBar from '..SideBar.vue';  
// import NavBar from '.NavBar.vue';
// import MainAdmin from '..MainAdmin.vue';
import SideBar from '../components/SideBarAdmin.vue';
import NavBar from '../components/NavBarAdmin.vue';
import MainAdmin from '../components/MainAdmin.vue';

export default {
    name: "App",
    components: {
        SideBar,
        NavBar,
        MainAdmin,
    }
}
</script>