<template>
  <div class="container mt-4">
    <div class="container" style="width: fit-content" id="blur">
      <div class="flex-item">
        <div class="card-title d-flex justify-content-between align-items-center">
          <div>
            <div class="d-flex align-items-center">
              <div class="image-title d-inline-flex align-items-center ms-2">
                <img class="mx-auto d-block" src="../assets/empty-pic.png" alt="" />
              </div>
              <div class="px-3">
                <h5 class="mb-0 fs-5">{{ userData.nama_lengkap }}</h5>
                <p class="mb-0 fs-6">{{ articleData.waktu_publish }}</p>
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
        <div class="container" id="blur">
          <div class="content">
            <h1 class="fs-2 mt-5">{{ articleData.judul_artikel }}</h1>
            <p class="card-text w-100 mt-3 text-secondary col-md-6">
              {{ articleData.deskripsi_artikel }}
            </p>
            <img src="../assets/poto-artikel.jpg" class="img-fluid m-auto mt-2 pointer" v-on:click="toggle()" />
            <p class="mt-4 description mb-100px">
              {{ articleData.isi_artikel }}
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <Comments></Comments>
    <div id="popup" class="popupnya">
      <img src="../assets/poto-artikel.jpg" class="img-fluid mt-5 mb-5" />
      <a href="#" class="text-decoration-none text-light" v-on:click="toggle()">close</a>
    </div>
  </div>
</template>

<script>
import Comments from './CommentsContainer.vue'
export default {
  name: "App",
  components: {
    Comments
  },
  props: ['articleData', 'userData']
};
</script>

<style scoped>
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

/* .image-title img {
  width: 40px;
} */

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.popupnya {
  position: relative;
  z-index: 1;
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

.pointer {
  cursor: pointer;
}
</style>