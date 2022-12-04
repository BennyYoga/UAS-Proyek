<template>
  <div class="container article-list">
    <div class="flex-item">
      <div class="card-title d-flex justify-content-between align-items-center">
        <div>
          <div class="d-flex align-items-center">
            <div class="image-title d-inline-flex align-items-center">
              <img
                class="mx-auto d-block"
                src="../assets/empty pic.png"
                alt=""
              />
            </div>
            <div class="px-3">
              <h5 class="mb-0">{{ form.id_user }}</h5>
              <p v-html="form.waktu_publish" class="mb-0"></p>
            </div>
          </div>
        </div>
        <div>
          <span style="float: right">
            <img src="../assets/save.svg" alt="" />
            <img src="../assets/report.svg" alt="" />
          </span>
        </div>
      </div>
      <h1 class="card-subtitle mt-5">{{ form.judul_artikel }}</h1>
      <p
        v-html="form.deskripsi_artikel"
        class="card-text w-100 mt-3 text-secondary col-md-6"
      ></p>
      <div>
        <img :src="form.cover_artikel" class="img-fluid mt-2" alt="..." />
      </div>
      <p class="mt-4 description mb-100px">
        radarutama.com – Mantan Kepala Badan Nasional Penanggulangan Bencana
        (BNPB) Letnan Jenderal TNI (Purn) Ganip Warsito mengungkapkan alasannya
        bergabung menjadi kader PDI Perjuangan ( PDI-P ). Ganip mengungkapkan,
        sebagai individu yang masih memiliki kemampuan berfikir, tenaga,
        memiliki keinginan melanjutkan perjuangan demi rakyat, bangsa dan
        negara. “Kenapa saya memilih PDI-P? Karena saya melihat sejarah
        idealisme, ideologi dan nasionalisme ini PDI-P. Saya merasa pas untuk
        masuk ke sana dan saya ingin memperjuangkan juga karena saya mantan TNI,
        tentunya memperjuangkan TNI dan rakyat yang kuat untuk bangsa dan negara
        ini,” kata Ganip di Sekolah PDI-P, Lenteng Agung, Jakarta, Minggu
        (30/10/2022).
      </p>
      <hr />
      <div class="d-flex justify-content-start mt-5">
        <p class="fs-6 fw-bolder">Comments</p>
        <p class="fs-6 fw-bolder">(</p>
        <p class="fs-6 fw-bolder"></p>
        <p class="fs-6 fw-bolder">)</p>
      </div>
      <div class="input-group mb-3 boxinput">
        <span class="input-group-text left-comment px-1 rounded-0"></span>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGroup1"
            placeholder="write something..."
          />
          <label for="floatingInputGroup1">write something...</label>
        </div>
      </div>
      <!-- comments -->
      <div class="row">
        <div class="d-flex align-items-center py-3 px-3 mt-2">
          <div class="image-replay d-inline-flex align-items-center">
            <img
              class="mx-auto d-block w-auto"
              src="../assets/empty pic.png"
              alt=""
            />
          </div>
          <div class="px-3">
            <p class="mb-0 fw-bolder">{{ form.id_user }}</p>
            <p class="mb-0">
              Lorem ipsum dolor sit amet,consectur adispiscing elit. Amet,
              vierra mauris sociis velit egetnon
            </p>
            <button
              type="button"
              class="btn btn-link text-decoration-none p-0 text-dark"
            >
              Reply
            </button>
          </div>
        </div>
        <!-- reply -->
        <div class="d-flex align-items-center py-3 reply-line">
          <div class="image-replay d-inline-flex align-items-center">
            <img
              class="mx-auto d-block w-auto"
              src="../assets/empty pic.png"
              alt=""
            />
          </div>
          <div class="px-3 comment-reply">
            <p class="mb-0 fw-bolder">{{ form.id_user }}</p>
            <p class="mb-0">
              Lorem ipsum dolor sit amet,consectur adispiscing elit. Amet,
              vierra mauris sociis velit egetnon
            </p>
            <button
              type="button"
              class="btn btn-link text-decoration-none p-0 text-dark"
            >
              Reply
            </button>
            <hr class="hr" />
          </div>
        </div>
        <div class="d-flex align-items-center py-3 reply-line">
          <div class="image-replay d-inline-flex align-items-center">
            <img
              class="mx-auto d-block w-auto"
              src="../assets/empty pic.png"
              alt=""
            />
          </div>
          <div class="px-3 comment-reply">
            <p class="mb-0 fw-bolder">{{ form.id_user }}</p>
            <p class="mb-0">
              Lorem ipsum dolor sit amet,consectur adispiscing elit. Amet,
              vierra mauris sociis velit egetnon
            </p>
            <button
              type="button"
              class="btn btn-link text-decoration-none p-0 text-dark"
            >
              Reply
            </button>
            <hr class="hr" />
          </div>
        </div>
        <div class="row mx-5">
          <div class="align-items-center more-replies py-4 mb-3">
            <a href="" class="text-decoration-none">Show More Replies</a>
          </div>
        </div>
        <div class="d-flex align-items-center py-3 px-3">
          <div class="image-replay d-inline-flex align-items-center">
            <img
              class="mx-auto d-block w-auto"
              src="../assets/empty pic.png"
              alt=""
            />
          </div>
          <div class="px-3">
            <p class="mb-0 fw-bolder">{{ form.id_user }}</p>
            <p class="mb-0">
              Lorem ipsum dolor sit amet,consectur adispiscing elit. Amet,
              vierra mauris sociis velit egetnon sectur adispiscing elit. Amet,
              vierra mau...
            </p>
            <a href="" class="text-decoration-none">Read More...</a>
            <div>
              <button
                type="button"
                class="btn btn-link text-decoration-none p-0 text-dark mt-1"
              >
                Reply
              </button>
            </div>
            <hr class="hr" />
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
        id_artikel: "",
        id_user: "",
        cover_artikel: "",
        judul_artikel: "",
        deskripsi_artikel: "",
        isi_artikel: "",
        waktu_publish: "",
      },
    };
  },
  methods: {
    getItem() {
      axios
        .get("http://localhost:3000/artikel/publish/ART00000000041")
        .then((response) => {
          this.form = response.data;
          console.log(this.form);
        })
        .catch((error) => {
          console.log("Error Get Data ", error);
        });
    },
  },
  mounted() {
    this.getItem();
  },
};
</script>

<style>
.hr {
  margin-top: 16px;
  margin-bottom: 0;
}

.more-replies {
  color: none;
  margin-left: 15px;
  border-left: 1px solid rgb(182, 181, 181);
  /* border-bottom: 1px solid rgb(182, 181, 181); */
}

.reply-line {
  margin-left: 75px;
  border-left: 1px solid rgb(182, 181, 181);
}

.button {
  background: transparent;
  border: transparent;
}
.boxinput {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.left-comment {
  background-color: #309c9f;
}

.description {
  text-align: justify;
}
.mb-100px {
  margin-bottom: 100px;
}

.image-title {
  width: 50px;
  height: 50px;
  background-color: #ced4da;
  border-radius: 50%;
}

.image-replay {
  width: 45px;
  height: 45px;
  background-color: #ced4da;
  border-radius: 50%;
}

/* .image-title img {
  width: 40px;
} */

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>