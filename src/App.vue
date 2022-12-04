<template>
  <transition name="fade">
    <router-view />
  </transition>
</template>

<script>
// import PreviewPage from './page/PreviewPage.vue';


export default {
  name: 'App',
  components: {
    // PreviewPage
}
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
