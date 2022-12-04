<template>
  <div class="container article-list">
    <div class="flex-item">
      <div class="card-title d-flex justify-content-between align-items-center">
        <div>
          <div class="d-flex align-items-center">
            <div class="image-title">
              <img src="../assets/empty pic.png" alt="" />
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
      <p v-html="form.isi_artikel" class="mt-4 description"></p>
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
        .get("http://localhost:3000/artikel/publish/ART00000000050")
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
.description {
  text-align: justify;
}

.image-title {
  width: 50px;
  height: 50px;
  background-color: #ced4da;
  border-radius: 50%;
}

.image-title img {
  line-height: 50px;
  position: relative;
  margin-left: 4px;
  margin-top: 14px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>