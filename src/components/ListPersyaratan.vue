<template>
  <link
    rel="stylesheet"
    href="http://localhost:8080/assets/css/style.min.css"
  />
  <div class="row">
    <div class="col-sm-12">
      <div style="float: right">
        <label class="search-label">
          <input
            class="search-bar"
            type="text"
            v-model="search"
            placeholder="Search.."
          />
        </label>
        <h5 class="label-kategori">Total Persyaratan : {{ resultCount }}</h5>
      </div>
    </div>
  </div>
  <div class="container" id="blur">
    <table class="table">
      <thead class="header">
        <tr>
          <th scope="col">Nama Persyaratan</th>
          <th scope="col">Jenis Persyaratan</th>
          <th scope="col"></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="persyaratan in persyaratans"
          :key="persyaratan.id_persyaratan"
        >
          <td>{{ persyaratan.nama_persyaratan }}</td>
          <td v-if="persyaratan.id_jenis_persyaratan == 1">File</td>
          <td v-else-if="persyaratan.id_jenis_persyaratan == 2">Gambar</td>
          <td v-else-if="persyaratan.id_jenis_persyaratan == 3">Text</td>
          <td v-else-if="persyaratan.id_jenis_persyaratan == 4">Vidio</td>
          <td v-else-if="persyaratan.id_jenis_persyaratan == 5">Gif</td>
          <td v-else-if="persyaratan.id_jenis_persyaratan == 6">Slide</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-dark"
              v-on:click="toggle2(), Edit(persyaratan)"
            >
              Edit
            </button>
            <div class="btn btn-outline-dark m-2">
              <button
                type="button"
                class="container"
                v-on:click="toggle(persyaratan)"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div id="popup" class="popupnya">
    <div class="card">
      <h3 class="card-header">Delete User</h3>
      <div class="card-body">
        <p class="card-text">Anda yakin ingin menghapus akun ini?</p>
      </div>
      <div class="card-footer">
        <div class="posisi-btn">
          <div class="btn-outline-dark m-2">
            <button
              id="blur"
              class="container button"
              v-on:click="toggle(persyaratan)"
            >
              Tidak
            </button>
          </div>
          <div class="btn-outline-dark m-2">
            <button
              id="blur"
              class="container button-hapus"
              v-on:click="Delete(form), toggle(persyaratan)"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="popup2" class="popupnya">
    <div class="container2 crd">
      <button class="mt-3">
        <!-- <img  src="../assets/x icon 1.svg" alt=""> -->
      </button>
      <form>
        <div class="ket">
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
            type="text"
            placeholder="Masukan Deskripsi"
            v-model="this.form.deskripsi_persyaratan"
          />
        </div>
      </form>
      <div class="posisi2-btn">
        <div class="btn-outline-dark m-2">
          <button id="blur" class="container button" v-on:click="toggle2()">
            Close
          </button>
        </div>
        <div class="btn-outline-dark m-2">
          <button
            id="blur"
            class="container button-hapus"
            v-on:click="Update(form), toggle2()"
          >
            Submit
          </button>
        </div>
      </div>

      <!-- <button class="sub" v-on:click="(Update(form),toggle2())">Submit</button>  -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import EditPersyaratan from './EditPersyaratan.vue';

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
    toggle(persyaratan) {
      var blur = document.getElementById("blur");
      blur.classList.toggle("active");
      var popup = document.getElementById("popup");
      popup.classList.toggle("active");
      this.form.id_persyaratan = persyaratan.id_persyaratan;
    },
    toggle2() {
      var blur = document.getElementById("blur");
      blur.classList.toggle("active");
      var popup2 = document.getElementById("popup2");
      popup2.classList.toggle("active");
    },
    getItem() {
      axios
        .get("http://localhost:5050/persyaratan")
        .then((response) => {
          this.persyaratans = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log("Error Get Data", error);
        });
    },
    Delete(form) {
      axios
        .delete(`http://localhost:5050/persyaratan/${form.id_persyaratan}`)
        .then(() => {
          this.getItem();
          this.form.nama_persyaratan = "";
          alert("Data berhasil terhapus");
        })
        .catch(() => {
          console.log("Error Hapus Data");
          alert("test");
        });
    },
    Edit(persyaratan) {
      this.updateSubmit = true;
      this.form.id_persyaratan = persyaratan.id_persyaratan;
      this.form.nama_persyaratan = persyaratan.nama_persyaratan;
      this.form.id_jenis_persyaratan = persyaratan.id_jenis_persyaratan;
      this.form.deskripsi_persyaratan = persyaratan.deskripsi_persyaratan;
      this.form.stuatus_persyaratan = persyaratan.stuatus_persyaratan;
    },
    Update(form) {
      console.log("TEST");
      console.log("ini formnya ", form.nama_persyaratan);
      axios
        .patch(`http://localhost:5050/persyaratan/${form.id_persyaratan}`, {
          nama_persyaratan: this.form.nama_persyaratan,
          deskripsi_persyaratan: this.form.deskripsi_persyaratan,
          id_jenis_persyaratan: this.form.id_jenis_persyaratan,
        })
        .then(() => {
          this.getItem();
          this.form.id_persyaratan = "";
          this.form.nama_persyaratan = "";
          this.form.deskripsi_persyaratan = "";
          this.form.id_jenis_persyaratan = "";
          alert("Data terupdate...");
        })
        .catch((err) => {
          console.log(err);
          console.warn();
          alert("!Error update data");
        });
    },
  },
  computed: {
    resultCount() {
      return this.persyaratans && this.persyaratans.length;
    },
    filteredPersyaratans() {
      return this.persyaratans.filter((r) => {
        return (
          r.nama_persyaratan.toLowerCase().indexOf(this.search.toLowerCase()) !=
          -1
        );
      });
    },
  },
  mounted() {
    this.getItem();
  },
};
</script>

<style scoped>
.container2 {
  background-color: transparent;
}

.container#blur.active {
  filter: blur(20px);
  pointer-events: none;
  user-select: none;
}

#popup {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
}
#popup2 {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
}

#popup.active {
  top: 50%;
  visibility: visible;
  opacity: 1;
  transition: 0.5s;
}
#popup2.active {
  top: 50%;
  visibility: visible;
  opacity: 1;
  transition: 0.5s;
}

.header {
  background: #309c9f;
  border: 1px solid #309c9f;
}

.seacrh-bar-content {
  width: 100%;
}

.search-bar {
  width: 300px;
  text-align: right;
}

.card {
  width: 570px;
  height: 265px;
  background: #ffffff;
  border-radius: 30px;
  color: #ffffff;
}

.search-label {
  position: relative;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #727272;
}

.search-label:before {
  content: "";
  position: absolute;
  left: 85%;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url("../assets/search.svg") center / contain no-repeat;
}

.search-bar {
  width: 13rem;
  height: 2rem;
  background: #ececec;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 8px;
  margin: 2.5rem 0;
  padding: 10px 30px;
}

.btn.btn-outline-dark {
  width: 100px;
}

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

.container {
  background-color: transparent;
}

.container#blur.active {
  filter: blur(20px);
  pointer-events: none;
  user-select: none;
}

#popup {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
}

#popup.active {
  top: 50%;
  visibility: visible;
  opacity: 1;
  transition: 0.5s;
}

.header {
  background: #309c9f;
  border: 1px solid #309c9f;
}

.seacrh-bar-content {
  width: 100%;
}

.search-bar {
  width: 300px;
  text-align: right;
}

.card {
  width: 570px;
  height: 265px;
  background: #ffffff;
  border-radius: 30px;
  color: #ffffff;
}

.search-label {
  position: relative;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #727272;
}

.search-label:before {
  content: "";
  position: absolute;
  left: 85%;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url("../assets/search.svg") center / contain no-repeat;
}

.search-bar {
  width: 13rem;
  height: 2rem;
  background: #ececec;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 8px;
  margin: 2.5rem 0;
  padding: 10px 30px;
}

.btn {
  width: 123px;
  height: 37px;
}

.button {
  border-radius: 5px;
  color: #ececec;
  border: none;
  margin: 5px;
  width: 98px;
  height: 37px;
  left: 1045px;
  top: 369px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: black;
}

.button-hapus {
  border-radius: 5px;
  background-color: #309c9f;
  border: none;
  margin: 5px;
  width: 173px;
  height: 37px;
  left: 1045px;
  top: 369px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}

.posisi {
  display: flex;
}

.posisi-btn {
  display: flex;
  margin-left: 200px;
}
.posisi2-btn {
  display: flex;
  margin-left: 600px;
  margin-top: 100px;
}

p {
  color: black;
}

.card h3 {
  color: black;
}

.dropdown1 {
  position: relative;
  display: inline-block;
  background-color: #ffffff;
  left: 1%;
}

.dropdown1-content1 {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown1:hover .dropdown1-content1 {
  display: block;
}

.drop {
  background-color: #309c9f;
  width: 190px;
  height: 45px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 8px;
  margin: 2.5rem 0;
  padding: 10px 10px;
}

.down {
  background-color: #ffffff;
}
</style>
