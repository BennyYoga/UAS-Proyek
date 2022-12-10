<template>
  <!-- <button type="button" class="container">
      <a class="show-cat-btn" href="##">
        All
      </a>
      <ul class="cat-sub-menu">
        <li>
          <a href="#">List Pengguna</a>
        </li>
        <li>
          <a href="#">List Editor</a>
        </li>
        <li>
          <a href="#">Buat Akun Editor</a>
        </li>
      </ul>
    </button> -->
  <link
    rel="stylesheet"
    href="http://localhost:8080/assets/css/style.min.css"
  />
  <div class="row">
    <div class="col-sm-12">
      <div style="float: right">
        <label class="search-label">
          <input class="search-bar" type="text" placeholder="Search.." />
        </label>
        <h5 class="label-kategori">Total User : {{ resultCount }}</h5>
      </div>
    </div>
  </div>
  <div class="container" id="blur">
    <table class="table">
      <thead class="header">
        <tr>
          <th scope="col">Nama Kategori</th>
          <!-- <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th> -->
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Makanan</td>
          <td class="posisi">
            <div class="btn-outline-dark m-2">
              <button class="button" v-on:click="toggle()">Edit</button>
            </div>
            <div class="btn-outline-dark m-2">
              <button class="button" v-on:click="toggle()">Delete</button>
            </div>
            <div class="btn-outline-dark m-2">
              <button class="button" v-on:click="toggle()">Details</button>
            </div>
            <!-- <button type="button" class="container btn btn-outline-dark" v-on:click="toggle1()">Detail</button> -->
          </td>
        </tr>
        <tr>
          <td>Penginapan</td>
          <td class="posisi">
            <div class="btn-outline-dark m-2">
              <button class="button" v-on:click="toggle()">Edit</button>
            </div>
            <div class="btn-outline-dark m-2">
              <button class="button" v-on:click="toggle()">Delete</button>
            </div>
            <div class="btn-outline-dark m-2">
              <button class="button" v-on:click="toggle()">Details</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>Wisata</td>
          <td class="posisi">
            <div class="btn-outline-dark m-2">
              <button class="button" v-on:click="toggle()">Edit</button>
            </div>
            <div class="btn-outline-dark m-2">
              <button class="button" v-on:click="toggle()">Delete</button>
            </div>
            <div class="btn-outline-dark m-2">
              <button class="button" v-on:click="toggle()">Details</button>
            </div>
            <!-- <button type="button" class="container btn btn-outline-dark" v-on:click="toggle1()">Detail</button> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div id="popup" class="popupnya">
    <div class="card">
      <h3 class="card-header">Delete Kategory</h3>
      <div class="card-body">
        <p class="card-text">Anda yakin ingin menghapus kategori ini?</p>
      </div>
      <div class="card-footer">
        <div class="posisi-btn">
          <div class="btn-outline-dark m-2">
            <button id="blur" class="container button" v-on:click="toggle()">
              Tidak
            </button>
          </div>
          <div class="btn-outline-dark m-2">
            <button
              id="blur"
              class="container button-hapus"
              v-on:click="toggle()"
            >
              Ya,hapus akun
            </button>
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

.btn.btn-outline-dark {
  width: 100px;
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
  justify-content: flex-end;
}

.posisi-btn {
  display: flex;
  margin-left: 200px;
}

p {
  color: black;
}

.card h3 {
  color: black;
}
</style>