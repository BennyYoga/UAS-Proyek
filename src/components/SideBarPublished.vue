<template>
    <div class="col col-xl">
        <div class="right-bar">
            <div class="container side-bar px-4">
                <div class="container text-center button-group py-5">
                    <div class="gambar">
                        <div class="d-flex align-items-center">
                            <div class="image-title">
                                <img src="../assets/empty-pic.png" class="w-auto" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="flex-item">
                        <h6 class="card-title d-flex justify-content-between mt-4">
                            <h5 class="card-subtitle mb-2">{{ form.id_user }}</h5>
                        </h6>
                        <h6 class="d-flex justify-content-start text-secondary">
                            Username
                        </h6>
                        <p class="card-text mt-3 mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                            veroquos, saepe atque quae nostrum numquam sequi quis minus
                        </p>
                    </div>
                    <div class="row subs">
                        <div class="col-md-6 p-0 subscription">
                            <p class="m-0">10</p>
                            <p class="m-0">Subscription</p>
                        </div>
                        <div class="col-md-6 p-0 subscriber">
                            <p class="m-0">15k</p>
                            <p class="m-0">Subscriber</p>
                        </div>
                    </div>
                    <div class="row">
                        <router-link to="/profile/edit">
                            <button class="col-md-6 d-flex justify-content-center btn1 mt-4" type="button">
                                Edit Profile
                            </button>
                        </router-link>
                    </div>
                    <div class="row">
                        <div class="col-md-12 d-flex">
                            <h5 class="card-popular mb-2 mt-4">Popular on Geowisata!</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="d-flex flex-column mb-3 p-0">
                            <div class="py-4">
                                <div class="card w-auto">
                                    <div class="card-body d-flex">
                                        <img class="flex-item preview-pict w-25" src="../assets/image.svg" alt="" />
                                        <div class="d-flex align-items-center">
                                            <div class="">
                                                <h5 class="article-title m-0 d-flex px-2">
                                                    {{ form.judul_artikel }}
                                                </h5>
                                                <p class="card-text px-2 text-secondary recommendation-text">
                                                    {{ form.deskripsi_artikel }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="card w-auto">
                                    <div class="card-body d-flex">
                                        <img class="flex-item preview-pict w-25" src="../assets/image.svg" alt="" />
                                        <div class="d-flex align-items-center">
                                            <div class="">
                                                <h5 class="article-title m-0 d-flex px-2">
                                                    {{ form.judul_artikel }}
                                                </h5>
                                                <p class="
                                card-text
                                px-2
                                text-secondary
                                recommendation-text
                              ">
                                                    {{ form.deskripsi_artikel }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="py-4">
                                <div class="card w-auto">
                                    <div class="card-body d-flex">
                                        <img class="flex-item preview-pict w-25" src="../assets/image.svg" alt="" />
                                        <div class="d-flex align-items-center">
                                            <div class="">
                                                <h5 class="article-title m-0 d-flex px-2">
                                                    {{ form.judul_artikel }}
                                                </h5>
                                                <p class="card-text px-2 text-secondary recommendation-text">
                                                    {{ form.deskripsi_artikel }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                cover_artikel: "",
                id_kategori: "",
                _id: "",
                catatan_editor: "",
            },
        };
    },

    methods: {
        getItem() {
            axios
                .get("http://localhost:5000/artikel/publish?page=0")
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
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.subs {
    color: #309c9f;
}

.subs .subscription {
    border-right: solid 1px;
}

.subs .subscriber {
    border-left: solid 1px;
}

.side-bar {
    height: 0px;
}

.article-page {
    background-color: #309c9f;
    height: 200vh;
    margin: 0;
}

.article {
    border-radius: 50px 0 0 0;
    background: #e5e5e5;
    display: flex;
}

.right-bar {
    border-radius: 50px 0 0 0;
    background: #fff;
    position: relative;
}

.button-group {
    position: relative;
    top: 10%;

    padding: 20px;
}

.tombol-atas {
    margin-top: -180px;
}

.btn1 {
    background: #309c9f;
    color: #e5e5e5;
    padding: 5px 1px;
    margin: 5px;
    border-radius: 15px;
    border-color: #309c9f;
}

.btn2 {
    background: #e5e5e5;
    color: #309c9f;
    padding: 5px 1px;
    margin: 5px;
    border-radius: 15px;
    border-color: #e5e5e5;
}

.btn3 {
    background: #309c9f;
    color: #e5e5e5;
    padding: 5px 1px;
    margin: 5px;
    border-radius: 15px;
    border-color: #309c9f;
    width: 75%;
}

.card-text {
    text-align: left;
}

.image-title {
    width: 105px;
    height: 105px;
    background-color: #ced4da;
    border-radius: 50%;
}

.image-title img {
    position: static;
    padding-top: 20%;
    height: 60%;
}

.gambar {
    margin-top: 24px;
}

.card-subtitle {
    font-family: 'Abhaya Libre';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #194D5A;
}

.card-popular {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    color: #194D5A;
}

.recommendation-text {
    font-size: 13px;
}
</style>
  