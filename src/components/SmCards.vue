<template>
    <div class="container text-center d-block mt-4 mb-3">
        <h6 class="head-category">Popular on Geowisata!</h6>
        <ul>
            <li class="card-list mt-3 mb-3">
                <a href="" class="article-card">
                    <div class="sm-card card">
                        <div class="sm-card-body d-flex">
                            <div class="flex-item my-auto">
                                <img src="../assets/empty-pic.svg" alt="" style="width:50px; margin:6px">
                            </div>

                            <div class="flex-item article-preview">
                                <h6>Article Title</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi, consequatur
                                    quaerat quam asperiores eveniet dolorem deserunt laboriosam veritatis, mollitia
                                    quidem enim porro quo quis quae eligendi repudiandae quia. Ab.</p>
                            </div>
                        </div>
                    </div>
                </a>
            </li>

        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
ul {
    list-style: none;
    padding: 0;
}

.article-card {
    text-decoration: none;
    color: #393a3a;
    width: 100%;
}

.sm-card {
    margin: 0 auto;
    position: relative;
    display: flex;
    width: 100%;
    height: 80px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.sm-card-body {
    width: 85%;
    margin: auto 4px;
    padding: 0;
}

.article-preview {
    max-width: 125px;
    padding: 15px 5px 15px 0;
    text-align: left;
    margin: 10 5px;
    white-space: nowrap;
    line-height: normal;
    overflow: hidden;
    text-overflow: clip;
}

.article-preview>p {
    font-size: 12px;
    margin: 0;
    height: 15px;
    overflow: hidden;
}
</style>