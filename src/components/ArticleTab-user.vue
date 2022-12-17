<template>
    <div class="container article-tab">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link" id="nav-for-you-tab" data-bs-toggle="tab" data-bs-target="#nav-for-you"
                    type="button" role="tab" aria-controls="nav-for-you" aria-selected="true">For you</button>
                <button class="nav-link" id="nav-following-tab" data-bs-toggle="tab" data-bs-target="#nav-following"
                    type="button" role="tab" aria-controls="nav-following" aria-selected="false">Following</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-for-you" role="tabpanel" aria-labelledby="nav-for-you-tab"
                tabindex="0">
                <ArticleList :articleList=articles></ArticleList>
            </div>
            <div class="tab-pane fade" id="nav-following" role="tabpanel" aria-labelledby="nav-following-tab"
                tabindex="0">
                <ArticleList :articleList=articles></ArticleList>
            </div>
        </div>
        <div class="page-nav d-flex justify-content-around mt-3">
            <button @click="prevPage()">
                &laquo;
            </button>
            <h5>{{ page + 1 }}</h5>
            <button @click="nextPage()">
                &raquo;
            </button>
        </div>
    </div>
</template>

<script>
import ArticleList from './ArticleList-user.vue'
import axios from "axios"

export default {
    name: 'App',
    components: {
        ArticleList
    },

    data() {
        return {
            result: [],
            articles: [],
            length: 0,
            page: 0,
            searchVal: ''
        }
    },
    methods: {
        prevPage() {
            if (this.page > 0) {
                this.page = this.page - 1
            }
            axios
                .get(`http://localhost:4000/artikel/publish?page=${this.page}&search=${this.searchVal}`)
                .then(response => {
                    this.result = response.data
                    this.articles = this.result.data
                    this.length = (this.result.totalRows % 5 == 0) ? this.result.totalRows / 5 : Math.round((this.result.totalRows / 5)) + 1
                    console.log(this.length)
                    console.log(`http://localhost:3000/artikel/publish?page=${this.page}`)
                })
                .catch(error => console.log(error))
        },
        nextPage() {
            if (this.page < this.length - 1) {
                this.page = this.page + 1
            }
            axios
                .get(`http://localhost:4000/artikel/publish?page=${this.page}`)
                .then(response => {
                    this.result = response.data
                    this.articles = this.result.data
                    this.length = (this.result.totalRows % 5 == 0) ? this.result.totalRows / 5 : Math.round((this.result.totalRows / 5)) + 1
                    console.log(this.length)
                    console.log(`http://localhost:3000/artikel/publish?page=${this.page}`)
                })
                .catch(error => console.log(error))
        },
    },
    mounted() {
        axios
            .get(`http://localhost:4000/artikel/publish?page=${this.page}`)
            .then(response => {
                this.result = response.data
                this.articles = this.result.data
                this.length = (this.result.totalRows % 5 == 0) ? this.result.totalRows / 5 : Math.round((this.result.totalRows / 5)) + 1
                console.log(this.length)
                console.log(`http://localhost:3000/artikel/publish?page=${this.page}`)
            })
            .catch(error => console.log(error))
    },

}
</script>

<style scoped>
.container {
    margin: 10px 0;
}

.article-tab {
    position: relative;
    left: 2%;
    top: 3%;
    border: none;
}

#nav-tab {
    width: 90%;
    border-bottom: solid 1.2px black;
}

.nav-tabs {
    --bs-nav-tabs-border-width: 1px;
    --bs-nav-tabs-border-color: #dee2e6;
    --bs-nav-tabs-border-radius: 0;
    --bs-nav-tabs-link-hover-border-color: black;
    --bs-nav-tabs-link-active-color: #495057;
    --bs-nav-tabs-link-active-bg: rgba(245, 245, 245, 1);
    --bs-nav-tabs-link-active-border-color: black;
    border-bottom: 2px solid var(--bs-nav-tabs-border-color);
}

.nav-tabs .nav-link {
    margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
    background: none;
    border: none;
}

.nav-link.active {
    color: var(--bs-nav-tabs-link-active-color);
    background-color: var(--bs-nav-tabs-link-active-bg);
    border-color: var(--bs-nav-tabs-link-active-border-color);
}

.nav-link {
    color: #000;
    border-top: 0;
    border-bottom: solid 1px black;
}

.nav-link:active {
    border-bottom: solid 2px black;
    color: rgba(0, 0, 0, 1);
}

.nav-link:focus {
    border-bottom: solid 1.5px black;
    color: #000;
}

.nav-link:hover {
    background-color: inherit;
    border-bottom: solid 1.5px black;
    color: #000;
}

.tab-pane {
    height: 200vh;
    width: 90%;
}

.page-nav {
    width: 200px;
    margin: 0 auto;
}
</style>