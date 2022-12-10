<template>
  <link
    rel="stylesheet"
    href="http://localhost:8080/assets/css/style.min.css"
  />
  <div class="col col-xl">
    <div class="container">
      <div class="ket">
        <div class="ket2">
          <div class="box-ket mt-5">Nama Lengkap</div>
          <input
            class="input mt-3"
            type="text"
            placeholder="Enter your name..."
          />
        </div>
        <div class="ketNIK">
          <div class="box-ket mt-5">NIK</div>
          <input
            class="input mt-3"
            type="text"
            placeholder="Enter your NIK..."
          />
        </div>
        <div class="ket2">
          <div class="box-ket mt-5">Alamat</div>
          <input
            class="input mt-3"
            type="text"
            placeholder="Enter your address..."
          />
        </div>
        <div class="kettgl">
          <div class="box-ket mt-5">Tanggal Lahir</div>
          <input
            class="input mt-3"
            type="text"
            placeholder="Enter your date..."
          />
        </div>
        <div class="ket2">
          <div class="box-ket mt-5">Kota</div>
          <input
            class="input mt-3"
            type="text"
            placeholder="Enter your city..."
          />
        </div>
        <div class="ketprovinsi">
          <div class="box-ket mt-5">Provinsi</div>
          <input
            class="input mt-3"
            type="text"
            placeholder="Enter your province..."
          />
        </div>
        <div class="ket2">
          <div class="box-ket mt-5">Negara</div>
          <input
            class="input mt-3"
            type="text"
            placeholder="Enter your countries..."
          />
        </div>
        <div class="ketkodepos">
          <div class="box-ket mt-5">Kode Pos</div>
          <input
            class="input mt-3"
            type="text"
            placeholder="Enter your code..."
          />
        </div>
        <div class="ket2">
          <div class="box-ket mt-5">Jenis Kelamin</div>
          <input
            class="input mt-3"
            type="text"
            placeholder="Enter your gender..."
          />
        </div>
        <div class="ket2">
          <div class="box-ket mt-5">Email</div>
          <input
            class="input mt-3"
            type="text"
            placeholder="Enter your email..."
          />
        </div>
        <div class="ketnomor">
          <div class="box-ket mt-5">Nomor Telepon</div>
          <input
            class="input mt-3"
            type="text"
            placeholder="Enter your number..."
          />
        </div>
        <div class="ket2">
          <div class="box-ket mt-5">Username</div>
          <input
            class="input mt-3"
            type="text"
            placeholder="Enter your username..."
          />
        </div>
        <div class="ketpw">
          <div class="box-ket mt-5">Password</div>
          <input
            class="input mt-3"
            type="text"
            placeholder="Enter your password..."
          />
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
        <h3 class="card-header">Buat Akun</h3>
        <div class="card-body">
          <p class="card-text">Apa anda yakin ingin submit?</p>
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
                v-on:click="toggle()"
              >
                Ya,Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
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
  margin-left: 300px;
  margin-top: -100px;
}

.ket2 {
  margin-left: -100px;
  margin-top: 100px;
}

.ketNIK {
  margin-left: 400px;
  margin-top: -65px;
}

.kettgl {
  margin-left: 400px;
  margin-top: -65px;
}

.ketprovinsi {
  margin-left: 400px;
  margin-top: -65px;
}

.ketkodepos {
  margin-left: 400px;
  margin-top: -65px;
}

.ketnomor {
  margin-left: 400px;
  margin-top: -65px;
}

.ketpw {
  margin-left: 400px;
  margin-top: -65px;
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
  width: 315px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #309c9f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.box-ket {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400px;
  font-size: 20px;
  line-height: 18px;
  color: #7a7a7a;
}

.button {
  position: absolute;
  border-radius: 5px;
  background-color: #309c9f;
  border: none;
  margin: 5px;
  width: 106px;
  height: 48px;
  left: 975px;
  top: 875px;
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