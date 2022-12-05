<template>
    <div class="vh-100 w-100 page-body" id="mainBgn">
    </div>
    <div id="mainContent">
        <div class="d-flex justify-content-between w-100">
            <div class="logo">
                <router-link to="/">
                    <img src="../assets/LOGO.svg" alt="">
                </router-link>
            </div>
            <button class="signup-btn">Sign-In</button>
        </div>
        <!--COMPONENT DIBAWA SINI-->
        <loginForm></loginForm>
    </div>
</template>

<style scoped>
@import url('../assets/styles/base-style.css');
</style>

<script>
import loginForm from '@/components/login-form.vue';

export default {
    components: {
        loginForm
    }
}
</script>