<template>
    <a href="">
        <div class="card">
            <div class="card-body d-flex ">
                <div class="flex-item">
                    <img class="preview-pict" src="../assets/image.svg" alt="">
                </div>
                <div class="flex-item card-content">
                    <div class="card-head">
                        <span>
                            <img src="../assets/creator.png" alt="Author Profile" style="width: 40px;">
                        </span>
                        {{ Preview.id_user }}
                        <span style="float : right">
                            <img src="../assets/save.svg" alt="">
                            <img src="../assets/report.svg" alt="">
                        </span>
                    </div>
                    <div class="card-text">
                        <h4 class="card-subtitle mb-2"> {{ Preview.judul_artikel }} </h4>
                        <p>{{ Preview.isi_artikel }}</p>
                    </div>

                    <p href="#" class="card-info">
                        <span class="publish-date">
                            {{ Preview.waktu_publish }}
                        </span>
                        <span class="category">
                            {{ Preview.id_kategori }}
                        </span>
                        <span class="icons">
                            <span>
                                <img src="../assets/views.svg" alt=""> {{ Preview.id_akses_baca }}
                            </span>
                            <span>
                                <img src="../assets/comment.svg" alt=""> {{ Preview.id_akses_komentar }}
                            </span>

                        </span>
                    </p>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: 'App',
    props: {
        Preview: Object
    }
}
</script>

<style scoped>
a {
    color: black;
    text-decoration: none;
}

.card {
    border-radius: 0;
    border: 0 0 1px 1px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px, rgba(0, 0, 0, 0.23) 0px 3px 6px 0px;
    margin: 25px 0 35px 0;
    background: rgba(255, 255, 255, 1);
    transition: 400ms;
    padding: 15px;
    width: 60vw;
}

.card:hover {
    scale: 1.03;
}

.card-body {
    width: 100%;
    height: 200px;
}

.card-content {
    overflow: hidden;
    width: 68%;
}

.card-head {
    margin-bottom: 20px;
}


.card-text {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
}

.flex-item {
    margin: auto 30px;
}

.preview-pict {
    width: 120px;
}

.card-info {
    font-size: 14px;
    width: 100%;
}

.publish-date {}

.category {
    margin-left: 25px;
    background-color: rgba(184, 184, 184, 1);
    ;
    padding: 0 12px;
    border-radius: 15px;
}

.icons {
    float: right;
    margin-right: 25px;
}

@media only screen and (max-width: 600px) {
    .preview-pict {
        width: 70px;
    }
}
</style>