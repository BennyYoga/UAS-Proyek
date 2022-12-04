<template>
    <LandingUpdateVue />
    <CrouselCardVue />
    <CardListCompVue />
    <SideBarAdminVue />
    <FooterCompVue />
</template>  
<script>
import FooterCompVue from '../components/FooterComp.vue';
import LandingUpdateVue from '../views/LandingUpdate.vue';
import CrouselCardVue from '../components/CrouselCard.vue';
import SideBarAdminVue from '../components/SideBarAdmin.vue';
import CardListCompVue from '../components/CardListComp.vue';

export default {
    name: 'LandingPage',
    components: {
        LandingUpdateVue,
        FooterCompVue,
        CrouselCardVue,
        SideBarAdminVue,
        CardListCompVue

    }
}

</script>
  
<style>

</style>
  