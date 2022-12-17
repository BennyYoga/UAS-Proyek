<template>
    <div class="article-list">
        <ul>
            <li v-for="article in articleList" :key="article._id">
                <ArticleCard :Preview=article></ArticleCard>
            </li>
        </ul>
    </div>
</template>

<script>
import ArticleCard from './ArticleCard.vue'

export default {
    name: 'App',
    components: {
        ArticleCard
    },
    props: {
        articleList: Array
    }

}
</script>

<style>
.article-list {
    margin-right: 30px;
    max-width: 90%;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>