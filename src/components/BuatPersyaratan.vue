<template>
  <link
    rel="stylesheet"
    href="http://localhost:8080/assets/css/style.min.css"
  />
  <form v-on:submit.prevent="PostItem">
    <div class="container">
      <div class="ket">
        <form>
          <div class="box-ket mt-5">Nama</div>
          <input
            class="input mt-3"
            v-model="form.id_persyaratan"
            type="hidden"
            placeholder="Enter your name..."
          />
          <input
            class="input mt-3"
            v-model="form.nama_persyaratan"
            type="text"
            placeholder="Enter your name..."
          />
        </form>
      </div>
      <div class="ket2">
        <div class="box-ket mt-5">Tipe Data</div>
        <select
          class="input mt-3"
          v-model="form.id_jenis_persyaratan"
          name="Tipe Data"
          id="Tipe Data"
        >
          <option value="1">File</option>
          <option value="2">Gambar</option>
          <option value="3">Text</option>
          <option value="4">Vidio</option>
          <option value="5">Gif</option>
          <option value="6">Slide</option>
        </select>
      </div>

      <div class="ket3">
        <div class="box-ket mt-5">Deskripsi</div>
        <input
          class="input mt-3"
          v-model="form.deskripsi_persyaratan"
          type="text"
          placeholder="Please insert your description..."
        />
      </div>

      <div class="ket3">
        <div class="box-ket mt-5">Status</div>
        <input
          class="input mt-3"
          v-model="form.stuatus_persyaratan"
          type="text"
          placeholder="Please insert your status..."
        />
      </div>
    </div>
    <button class="sub" type="submit">Submit</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "FormControl",
  data() {
    return {
      form: {
        id_persyaratan: "",
        id_jenis_persyaratan: "",
        nama_persyaratan: "",
        deskripsi_persyaratan: "",
        stuatus_persyaratan: "",
      },
      persyaratans: [],
    };
  },
  methods: {
    PostItem: function () {
      alert("Ke Save Bro");
      try {
        axios
          .post("http://localhost:5050/persyaratan", this.form)
          .then((response) => {
            this.form = [...this.form, response.persyaratan];
            this.form.id_persyaratan = "";
            this.form.id_jenis_persyaratan = "";
            this.form.nama_persyaratan = "";
            this.form.deskripsi_persyaratan = "";
            this.form.stuatus_persyaratan = "";
          });
      } catch (error) {
        // console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
}
.article-page {
  background-color: #309c9f;
  height: 200vh;
  margin: 0;
}

.sub {
  width: 106px;
  height: 48px;
  border-radius: 15px;
  background: #309c9f;
  margin-top: 200px;
  margin-left: 59rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
}

.ket {
  margin-left: 248px;
  margin-top: 200px;
}

.ket2 {
  margin-left: 248px;
  margin-top: 118px;
}

.ket3 {
  margin-left: 248px;
  margin-top: 100px;
}
.article {
  border-radius: 50px 0 0 0;
  background: rgba(245, 245, 245, 1);
  display: flex;
}
.article {
  border-radius: 50px 0 0 0;
  background: #e5e5e5;
  display: flex;
}
.input {
  box-sizing: border-box;
  position: absolute;
  width: 815px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #309c9f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.input2 {
  box-sizing: border-box;
  position: absolute;
  width: 815px;
  height: 408px;
  background: #ffffff;
  border: 1px solid #309c9f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.box-ket {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 18px;

  color: #7a7a7a;
}
</style>