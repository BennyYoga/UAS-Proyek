<template>

    <div class="card" v-for="form in form" :key="form.id">
        <div class="card-body d-flex ">
            <img class="preview-pict" src="../assets/image.svg" alt="">
            <div class="flex-item">
                <h6 class="card-title">
                    <span>
                        <img src="../assets/creator.png" alt="">
                    </span>
                    {{ form.id_user }}
                    <span style="float : right">
                        <img src="../assets/save.svg" alt="">
                        <img src="../assets/delete.svg" alt="">
                    </span>
                </h6>
                <h4 class="card-subtitle mb-2">{{ form.judul_artikel }}</h4>
                <p class="card-text">{{ form.deskripsi_artikel }}</p>
                <p href="#" class="card-info">
                    <span class="publish-date">
                        {{ form.waktu_draft }}
                    </span>
                    <span class="category">
                        {{ form.id_kategori }}
                    </span>
                    <span class="icons">
                        <span>
                            <img src="../assets/views.svg" alt=""> 0
                        </span>
                        <span>
                            <img src="../assets/comment.svg" alt=""> 0
                        </span>

                    </span>
                </p>
            </div>
        </div>
    </div>

</template>

<script>
import axios from "axios";
export default {
    name: "PublishedCard",
    data() {
        return {
            form: {
                id_user: "",
                judul_artikel: "",
                deskripsi_artikel: "",
                waktu_draft: "",
                cover_artikel: "",
                id_kategori: "",
            },
            showDialog: false
        };
    },

    methods: {
        getItem() {
            axios
                .get("http://localhost:5000/artikel/publish/limit/3")
                .then((response) => {
                    this.form = response.data.data;
                    console.log("datanya" + this.form);
                })
                .catch((error) => {
                    console.log("Error get Datanya", error);
                });
        },
    },
    mounted() {
        this.getItem();
    },
};
</script>

<style scoped>
a {
    color: black;
    text-decoration: none;
}

.card {
    z-index: 1;
    border-radius: 0;
    border: 0 0 1px 1px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px, rgba(0, 0, 0, 0.23) 0px 3px 6px 0px;
    margin: 0px 10px 40px 0px;
    background: rgba(255, 255, 255, 1);
    transition: 400ms;
    width: 950px;
    left: 490px;
}

.card:hover {
    scale: 1.03;
}

.card-body {
    height: 200px;
}

.card-text {
    max-height: 50px;
    text-overflow: ellipsis;
    overflow: hidden;
}

.flex-item {
    margin-left: 30px;
}

.preview-pict {
    width: 120px;
    margin: 10px 25px;
}

.card-info {
    font-size: 14px;
}

.publish-date {
    font-size: 14px;

}

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