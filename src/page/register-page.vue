<template>
    <div class="vh-100 w-100 page-body" id="mainBgn">
    </div>
    <div id="mainContent">
        <div class="d-flex justify-content-between w-100">
            <div class="logo">
                <img src="../assets/LOGO.svg" alt="">
            </div>
            <button class="signup-btn">Sign-In</button>
        </div>
        <!--COMPONENT DIBAWA SINI-->
        <registerForm></registerForm>
    </div>
</template>

<style scoped>
@import url('../assets/styles/base-style.css')
</style>

<script>
import registerForm from './register-form.vue';

export default {
    components: {
        registerForm
    }
}
</script>