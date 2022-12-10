<template>
  <link
    rel="stylesheet"
    href="http://localhost:8080/assets/css/style.min.css"
  />
  <div class="container crd">
    <button class="mt-3">
      <!-- <img  src="../assets/x icon 1.svg" alt=""> -->
    </button>
    <div class="ket">
      <form>
        <input
          type="hidden"
          v-model="this.form.id_persyaratan"
          class="form-control3"
          id="id_persyaratan"
        />
        <div class="box-ket mt-5">Nama Kategori</div>
        <input
          class="input mt-3"
          type="text"
          placeholder="Ubah Nama Persyaratan"
          v-model="this.form.nama_persyaratan"
        />
      </form>
    </div>
    <div class="ket2">
      <form>
        <div class="box-ket mt-5">Tipe Data</div>
        <select
          class="input mt-3"
          name="Tipe Data"
          id="Tipe Data"
          v-model="this.form.id_jenis_persyaratan"
        >
          <option value="1">String</option>
          <option value="2">Integer</option>
          <option value="3">Floating</option>
          <option value="4">Character</option>
          <option value="5">Boolean</option>
          <option value="6">Array</option>
        </select>
      </form>
    </div>

    <div class="ket3">
      <form>
        <div class="box-ket mt-5">Deskripsi</div>
        <input
          class="input mt-3"
          type="text"
          placeholder="Masukan Deskripsi"
          v-model="this.form.deskripsi_persyaratan"
        />
      </form>
    </div>
    <button class="sub" v-on:click="Update(form)">Submit</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
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
    toggle2() {
      var blur = document.getElementById("blur");
      blur.classList.toggle("active");
      var popup2 = document.getElementById("popup2");
      popup2.classList.toggle("active");
    },
    Update(form) {
      console.log("TEST");
      console.log("ini formnya ", form.nama_persyaratan);
      axios
        .patch(`http://localhost:3000/${form.id_persyaratan}`, {
          nama_persyaratan: this.form.nama_persyaratan,
          deskripsi_persyaratan: this.form.deskripsi_persyaratan,
        })
        .then(() => {
          this.getItem();
          this.form.id_persyaratan = "";
          this.form.nama_persyaratan = "";
          this.form.deskripsi_persyaratan = "";
          alert("Data terupdate...");
        })
        .catch((err) => {
          console.log(err);
          console.warn();
          alert("!Error update data");
        });
    },
  },
};
</script>
<style scoped>
.crd {
  background: #ffffff;
  width: 977px;
  height: 636px;
  border-radius: 30px;
  margin-top: 200px;
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
  margin-top: 160px;
  margin-left: 49rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
}

.ket {
  margin-left: 70px;
  margin-top: 45px;
}

.ket2 {
  margin-left: 70px;
  margin-top: 118px;
}

.ket3 {
  margin-left: 70px;
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