<template>
  <div class="article-page d-flex">
    <ArticleNavbar></ArticleNavbar>

    <div class="col col-xl article">
      <div class="container">
        <UserCard></UserCard>
        <ArticleTab></ArticleTab>
      </div>
      <div class="right-bar">
        <SideBarPublish></SideBarPublish>

      </div>
    </div>


  </div>
  <PageFooter />
</template>

<script>
import ArticleNavbar from './ArticleNavbar.vue'
import PageFooter from './PageFooter.vue'
import ArticleTab from './ArticleTab.vue'
import SideBarPublish from './SideBarPublished.vue'
import UserCard from './UserCard.vue';
export default {
  name: 'App',
  components: {
    ArticleNavbar,
    ArticleTab,
    SideBarPublish,
    UserCard,
    PageFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-page {
  background-color: #309C9F;
  height: 200vh;
  margin: 0;
}

.article {
  border-radius: 50px 0 0 0;
  background: rgba(245, 245, 245, 1);
  display: flex;
}

@media (min-width: 1200px) {
  .right-bar {
    width: 48%;
    border-radius: 50px 0 0 0;
    background: #fff;
    position: relative;
  }
}
</style>
