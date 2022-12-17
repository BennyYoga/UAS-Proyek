<template>
    <div>
        <main class="main users chart-page" id="skip-target">
            <div class="row stat-cards">
                <div class="col-md-6 col-xl-12">
                    <article class="stat-cards-item-white">
                        <div class="stat-cards-info">
                            <p class="stat-cards-info__path">
                                <span class="stat-cards-info__profit success"> </span>
                                Home /&nbsp; 
                                <a href="#"> <b> Dashboard</b></a>
                            </p>
                        </div>
                    </article>
                </div>
            </div>
                <br>
            <div class="container">
                <div class="row stat-cards">
                <div class="col-4">
                    <article class="stat-cards-item">
                    <div class="stat-cards-info">
                        <p class="stat-cards-info__num">New Article Report</p>
                        <div id="card">
                            <p class="stat-cards-info__title"> 69
                                {{info_article_report}}
                            </p>
                        </div>
                        <p class="stat-cards-info__progress">
                        <span class="stat-cards-info__profit success">
                            <a href="">
                                More info
                            </a>
                        </span>
                        </p>
                    </div>
                    </article>
                </div>
                <div class="col-4">
                    <article class="stat-cards-item1">
                    <div class="stat-cards-info">
                        <p class="stat-cards-info__num">New Kontributor Report</p>
                        <p class="stat-cards-info__title">69</p>
                        <p class="stat-cards-info__progress">
                        <span class="stat-cards-info__profit success">
                            <a href="">
                                More info
                            </a>
                        </span>
                        </p>
                    </div>
                    </article>
                </div>
                <div class="col-4">
                    <article class="stat-cards-item2">
                    <div class="stat-cards-info">
                        <p class="stat-cards-info__num">New Kontributor Registration</p>
                        <p class="stat-cards-info__title">69</p>
                        <p class="stat-cards-info__progress">
                        <span class="stat-cards-info__profit danger">
                            <a href="">
                                More info
                            </a>
                        </span>
                        </p>
                    </div>
                    </article>
                </div>
                </div>
            </div>
            <div class="card-editor d-flex justify-content-center"></div>
        </main>
    </div>
</template>

<script>
import axios from "axios";
export default {
    el: '#card',
    data() {
    return {
        info_article: null
    }
    },
    mounted () {
    axios
    .get('p')
    .then(response => (this.info_article = response))
    }
}
</script>

<style scoped>
/* @import 'D:\Semester 3\Proyek 3\template\AdminVue\template\vuetemplate\public\assets\css\baru.css'; */

</style>