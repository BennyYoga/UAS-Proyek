<template>
    <div class="article-page d-flex">
      <ArticleNavbar></ArticleNavbar>
      <div class="col col-xl article">
        <div class=""  v-html="this.$route.params.ArticleData">
          
        </div>
      </div>  
  
    </div>
    <PageFooter />
  </template>
  
  <script>
  import ArticleNavbar from '@/components/ArticleNavbar.vue'
  import PageFooter from '@/components//PageFooter.vue'
//   import ArticleTab from '@/components//ArticleTab.vue'
//   import SideBarPublish from '@/components//SideBarPublished.vue'
//   import UserCard from '@/components//UserCard.vue';
  export default {
    name: 'PreviewPage',
    components: {
      ArticleNavbar,
    //   ArticleTab,
    //   SideBarPublish,
    //   UserCard,
      PageFooter
    },
    mounted(){
        // console.log(this.$route.params.ArticleData);
        // alert(this.$route.params.ArticleData)
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
  