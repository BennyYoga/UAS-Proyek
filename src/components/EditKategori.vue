<template>
  <link
    rel="stylesheet"
    href="http://localhost:8080/assets/css/style.min.css"
  />
  <div class="col col-xl">
    <div class="container">
      <div class="ket">
        <div for="nama" class="box-ket mt-5">Nama</div>
        <input
          class="input mt-3"
          type="text"
          v-model="this.form.nama_kategori"
          id="nama_kategori"
        />
        <div class="ket2">
          <div for="deskripsi-text" class="box-ket mt-5">Deskripsi</div>
          <textarea
            class="input2"
            id="deskripsi-text"
            v-model="this.form.deskripsi_kategori"
            name="w3review"
            rows="15"
            cols="50"
          >
          </textarea>
        </div>
      </div>
    </div>
    <div class="posisi-btn">
      <div class="btn-outline-dark m-2">
        <button id="blur" class="button" v-on:click="toggle()">Submit</button>
      </div>
    </div>
    <div id="popup" class="popupnya">
      <div class="card">
        <h3 class="card-header">Edit Kategori</h3>
        <div class="card-body">
          <p class="card-text">Simpan perubahan?</p>
        </div>
        <div class="card-footer">
          <div class="posisi-btn-modal">
            <div class="btn-outline-dark m-2">
              <button
                id="blur"
                class="container button-tidak"
                v-on:click="toggle()"
              >
                Tidak
              </button>
            </div>
            <div class="btn-outline-dark m-2">
              <button
                id="blur"
                class="container button-hapus"
                v-on:click="toggle(), Update(form)"
              >
                Ya,simpan
              </button>
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
  name: "FormControl",
  data() {
    return {
      form: {
        id_kategori: "",
        nama_kategori: "",
        deskripsi_kategori: "",
      },
      kategoris: [],
    };
  },
  methods: {
    Edit(kategori) {
      this.updateSubmit = true;
      this.form.id_kategori = kategori.id_kategori;
      this.form.nama_kategori = kategori.nama_kategori;
      this.form.deskripsi_kategori = kategori.deskripsi_kategori;
    },
    Update(form) {
      axios
        .patch(`http://localhost:3011/kategori/${form.id}`, {
          nama: this.form.nama_kategori,
          deskripsi_kategori: this.form.deskripsi_kategori,
        })
        .then(() => {
          this.getItem();
          this.form.id_kategori = "";
          this.form.nama_kategori = "";
          this.form.deskripsi_kategori = "";
          alert("Data terupdate...");
        })
        .catch((err) => {
          console.log(err);
          console.warn();
          alert("!Error update data");
        });
    },
    toggle() {
      var blur = document.getElementById("blur");
      blur.classList.toggle("active");
      var popup = document.getElementById("popup");
      popup.classList.toggle("active");
    },
  },
};
</script>

<style scoped>
.article-page {
  background-color: #309c9f;
  height: 200vh;
  margin: 0;
}

.ket {
  margin-left: 248px;
  margin-top: -100px;
}

.ket2 {
  margin-left: 0px;
  margin-top: 125px;
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
  width: 615px;
  height: 38px;
  background: #ffffff;
  border: 1px solid #309c9f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.input2 {
  box-sizing: border-box;
  position: absolute;
  width: 615px;
  height: 308px;
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

.button {
  position: absolute;
  border-radius: 5px;
  background-color: #309c9f;
  border: none;
  margin: 0px;
  width: 106px;
  height: 48px;
  left: 758px;
  top: 560px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}

.button-tidak {
  border-radius: 5px;
  border: none;
  margin: 5px;
  width: 98px;
  height: 37px;
  left: 975px;
  top: 575px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}

.button-hapus {
  border-radius: 5px;
  border: none;
  margin: 5px;
  width: 126px;
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

.posisi-btn {
  display: flex;
  margin-left: 1000px;
  margin-top: 400px;
}

.posisi-btn-modal {
  display: flex;
  margin-left: 270px;
}

.container {
  background-color: transparent;
}

.container.button-hapus {
  background-color: #309c9f;
}

.container.button-tidak {
  background-color: #858585;
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

p {
  color: black;
}

.card h3 {
  color: black;
}

.btn.btn-outline-dark {
  width: 100px;
}

.card {
  width: 570px;
  height: 265px;
  background: #ffffff;
  border-radius: 30px;
  color: #ffffff;
}
</style>