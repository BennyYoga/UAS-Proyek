<template>
    <div class="body">
        <div class="text-popular">
            POPULAR ON GEOWISATA
        </div>
        <div class="card-article" v-for="article in article" :key="article._id">
            <!-- <img src="../assets/CILETUH.svg" alt="logo" class="gambar-article" />
            <div class="card-article-body">
                <div class="nama-kreator">
                    HA
                </div>
                <div class="judul-article">
                    H
                </div>
            </div> -->

            <div class="judul-article">
                {{ article.id_artikel }}
            </div>
            <!-- <img src={{ article.cover_artikel}} alt="logo" class="gambar-article" /> -->
            <div class="nama-kreator">
                {{ article.cover_artikel }}
                {{ article.id_user }}

            </div>

        </div>
    </div>

</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            form: {
                _id: "",
                id_artikel: "",
                id_user: "",
                cover_artikel: ""

            },
            article: [],
        };
    },
    //func
    methods: {
        getItem() {
            axios
                .get("http://localhost:3000/artikel/publish/limit/3")
                .then((response) => {
                    this.article = response.data;
                    console.log(response);
                })
                .catch((err) => {
                    console.log("Error :", err);
                    alert("error");
                });
        },
    },
    mounted() {
        this.getItem();
    },
};
</script>

<style>
.judul-article {
    position: absolute;
    width: 135px;
    height: 29px;
    left: 104px;
    top: 15px;

    font-family: 'Abhaya Libre';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 29px;

    color: #000000;
}

.nama-kreator {
    position: absolute;
    width: 55px;
    height: 18px;
    left: 100px;
    top: 131.03px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;

    color: #757575;
}

.card-article {
    position: absolute;
    width: 325px;
    height: 322.97px;
    left: 100px;
    top: 121.03px;

    background: #D9D9D9;
    box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
}

.gambar-article {
    width: 326.04px;
    height: 241px;
    left: 0px;
    top: px;


}

.body {
    position: absolute;
    width: 1391.14px;
    height: 432px;
    left: 70px;
    top: 1142px;
}

.text-popular {
    position: absolute;
    width: 620px;
    height: 44px;
    left: 45px;
    top: 7px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;

    color: #000000;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#makanan {
    background-image: url(../assets/makanan.jpg);
}

#restoran {
    background-image: url(../assets/restoran.jpg);
}

#penginapan {
    background-image: url(../assets/penginapan.jpg);
}

#wisata {
    background-image: url(../assets/wisata.jpg);
}
</style>
