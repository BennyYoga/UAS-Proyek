<template>
  <div class="article-page">
    <div class="d-flex">
      <ArticleNavbar></ArticleNavbar>
      <div class="col col-xl article">
        <div class="container">
          <ArticleTab></ArticleTab>
        </div>
        <div class="right-bar">
          <SideBar></SideBar>
        </div>
      </div>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import ArticleNavbar from '../components/ArticleNavbar-user.vue'
import ArticleTab from '../components/ArticleTab-user.vue'
import SideBar from '../components/SideBar-user.vue'
import PageFooter from '../components/PageFooter.vue'
export default {
  name: 'App',
  components: {
    ArticleNavbar,
    ArticleTab,
    SideBar,
    PageFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-page {
  background-color: #309C9F;
  height: 225vh;
  margin: 0;
}

.article {
  border-radius: 50px 0 0 0;
  background: rgba(245, 245, 245, 1);
  display: flex;
}

.container {
  height: fit-content;
}

.right-bar {
  width: 35%;
  border-radius: 50px 0 0 0;
  background: #fff;
  position: relative;
}
</style>
