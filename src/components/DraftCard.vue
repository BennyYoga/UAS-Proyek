<template>
    <div class="card w-100" v-for="form in form" :key="form.id">
        <div class="card-body d-flex">
            <img class="preview-pict flex-item" src="../assets/image.svg" alt="">
            <div class="flex-item">
                <h6 class="card-title">
                    <span>
                        <img src="../assets/creator.png" alt="">
                    </span>
                    {{ form.id_artikel }}
                </h6>
                <h4 class="card-subtitle mb-2">{{ form.judul_artikel }}</h4>
                <p class="card-text"> {{ form.deskripsi_artikel }}
                </p>
                <div href="#" class="card-info">
                    <span class="publish-date">
                        {{ form.waktu_draft }}
                    </span>
                    <span class="category">
                        {{ form.id_kategori }}
                    </span>
                    <span class="icons">
                        <router-link :to="{ name: 'EditArtikel', params: { id: `${form.id_artikel}` } }">
                            <img src="../assets/edit.svg" alt=""> edit
                        </router-link>
                    </span>
                    <span>
                        <button @click="deleteArtikel(form.id_artikel)">
                            <img src="../assets/delete.svg" alt="">
                        </button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "App",
    components: {},
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
        };
    },

    methods: {
        deleteArtikel(id) {
            try {
                axios.delete(`http://localhost:5000/artikel/draft/${id}`)
                    .then(() => {
                        this.form = this.form.filter(function (form) {
                            return form.id !== id
                        })
                    })
            }
            catch (error) {
                console.log("Data Error");
            }
        },
    },

    mounted() {
        axios
            .get("http://localhost:4000/artikel/draft?page=0")
            .then((response) => {
                this.form = response.data.data;
                console.log("datanya" + this.form);
            })
            .catch((error) => {
                console.log("Error get Datanya", error);
            });
    },
};
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
    margin: 25px 0 10px 0;
    background: rgba(255, 255, 255, 1);
    transition: 400ms;
    min-width: 400px;
    padding-top: 30px;
}

.card:hover {
    scale: 1.03;
}

.card-body {
    height: 200px;
    width: 100%;
    margin: 0 auto;
}

.card-text {
    max-height: 50px;
    text-overflow: ellipsis;
    overflow: hidden;
}

.flex-item {
    margin: 0 60px;
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