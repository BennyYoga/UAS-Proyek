<template>
  <link
    rel="stylesheet"
    href="http://localhost:8080/assets/css/style.min.css"
  />
  <div class="col col-xl">
    <div class="container">
      <div class="ket">
        <form>
          <div class="box-ket mt-5">Catatan :</div>
          <textarea
            class="input2 mt-3"
            type="text"
            id="w3review"
            name="w3review"
            rows="15"
            cols="50"
          >
          </textarea>
        </form>
      </div>
    </div>
    <div class="posisi-btn">
      <div class="btn-outline-dark m-2">
        <button id="blur" class="button" v-on:click="toggle()">
          Dikembalikan
        </button>
      </div>
    </div>
    <div id="popup" class="popupnya">
      <div class="card">
        <h3 class="card-header">Success!</h3>
        <div class="card-body">
          <p class="card-text">Artikel telah dikembalikan.</p>
        </div>
        <div class="card-footer">
          <div class="posisi-btn-modal">
            <div class="btn-outline-dark m-2">
              <button
                id="blur"
                class="container button-hapus"
                v-on:click="toggle()"
              >
                Tutup
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
  width: 854px;
  height: 468px;
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
  margin: 5px;
  width: 123px;
  height: 48px;
  left: 995px;
  top: 550px;
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
  background-color: #309c9f;
  border: none;
  margin: 5px;
  width: 88px;
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
  margin-left: 400px;
}

.container {
  background-color: transparent;
}

.container.button-hapus {
  background-color: #309c9f;
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