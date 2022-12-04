<template>
  <div class="article-page d-flex">
    <ArticleNavbar></ArticleNavbar>
    <div class="col col-xl article">
      <ArticleTab></ArticleTab>
      <div class="right-bar">
        <div class="container side-bar px-4">
          <div class="container text-center button-group py-5">
            <!-- <div class="row">
              <button class="col btn1" type="button">Get Started</button>
              <button class="col btn2" type="button">Sign In</button>
            </div> -->
            <div class="row">
              <button
                class="col btn3 btn-primary text-light"
                type="button"
                @click="speak()"
              >
                <div
                  class="d-flex justify-content-start align-items-center px-3"
                >
                  <img src="../assets/texttospeech1.svg" alt="" />
                  <p class="px-2 m-0">Dengarkan</p>
                </div>
              </button>
            </div>
            <div class="gambar">
              <div class="d-flex align-items-center">
                <div class="image-title d-inline-flex align-items-center">
                  <img
                    src="../assets/empty pic.png"
                    class="mx-auto w-50"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="flex-item">
              <h6 class="card-title d-flex justify-content-between mt-4">
                <h5 class="card-subtitle mb-2">{{ form.id_user }}</h5>
                <span style="float: right">
                  <img src="../assets/report.svg" alt="" />
                </span>
              </h6>
              <h6 class="d-flex justify-content-start text-secondary">
                Username
              </h6>
              <p class="card-text mt-3 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                veroquos, saepe atque quae nostrum numquam sequi quis minus
              </p>
            </div>
            <div class="row subs">
              <div class="col-md-6 p-0 subscription">
                <p class="m-0">10</p>
                <p class="m-0">Subscription</p>
              </div>
              <div class="col-md-6 p-0 subscriber">
                <p class="m-0">15k</p>
                <p class="m-0">Subscriber</p>
              </div>
            </div>
            <div class="row">
              <button
                class="col-md-6 d-flex justify-content-center btn1 mt-4"
                type="button"
              >
                Unsubscribe
              </button>
            </div>
            <div class="row">
              <div class="col-md-12 d-flex">
                <h5 class="card-subtitle mb-2 mt-4">More from this creator</h5>
              </div>
            </div>
            <div class="row">
              <div class="d-flex flex-column mb-3 p-0">
                <div class="py-4">
                  <a href="" class="card w-auto text-decoration-none">
                    <div class="card-body d-flex">
                      <img
                        class="flex-item preview-pict w-25"
                        src="../assets/image.svg"
                        alt=""
                      />
                      <div class="d-flex align-items-center">
                        <div class="">
                          <h5 class="article-title m-0 d-flex px-2 text-dark">
                            Lorem Ipsum
                          </h5>
                          <p
                            class="
                              card-text
                              px-2
                              text-secondary
                              recommendation-text
                            "
                          >
                            Lobortis auctor mauris malestie
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="">
                  <a class="card w-auto text-decoration-none" href="">
                    <div class="card-body d-flex">
                      <img
                        class="flex-item preview-pict w-25"
                        src="../assets/image.svg"
                        alt=""
                      />
                      <div class="d-flex align-items-center">
                        <div class="">
                          <h5 class="article-title m-0 d-flex px-2 text-dark">
                            Lorem Ipsum
                          </h5>
                          <p
                            class="
                              card-text
                              px-2
                              text-secondary
                              recommendation-text
                            "
                          >
                            Lobortis auctor mauris malestie
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="py-4">
                  <a class="card w-auto text-decoration-none" href="">
                    <div class="card-body d-flex">
                      <img
                        class="flex-item preview-pict w-25"
                        src="../assets/image.svg"
                        alt=""
                      />
                      <div class="d-flex align-items-center">
                        <div class="">
                          <h5 class="article-title m-0 d-flex px-2 text-dark">
                            Lorem Ipsum
                          </h5>
                          <p
                            class="
                              card-text
                              px-2
                              text-secondary
                              recommendation-text
                            "
                          >
                            Lobortis auctor mauris malestie
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleNavbar from "./ArticleNavbar.vue";
import ArticleTab from "./ArticleTab.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    ArticleNavbar,
    ArticleTab,
  },
  data() {
    return {
      form: {
        id_artikel: "",
        id_user: "",
        cover_artikel: "",
        judul_artikel: "",
        deskripsi_artikel: "",
        isi_artikel: "",
      },
      speakData: {
        synth: window.speechSynthesis,
        validation: false,
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
    speak() {
      if (this.speakData.synth.speaking) {
        console.error("speechSynthesis.speaking");
        this.speakData.synth.cancel();
        return;
      }

      if (this.form.isi_artikel !== "") {
        this.speakData.validation = false;
        const data =
          "Judul : " +
          this.form.judul_artikel +
          "\n\n\n" +
          "Deskripsi : " +
          this.form.deskripsi_artikel +
          "\n\n\n" +
          "Isi : " +
          this.form.isi_artikel;
        let sInstance = new SpeechSynthesisUtterance(data);
        sInstance.lang = "id-ID";
        sInstance.pitch = "1.0";
        this.speakData.synth.speak(sInstance);
      } else {
        this.speakData.validation = true;
      }
    },
  },
  mounted() {
    this.getItem();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-body {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.subs {
  color: #309c9f;
}

.subs .subscription {
  border-right: solid 1px;
}

.subs .subscriber {
  border-left: solid 1px;
}

.side-bar {
  height: 0px;
}

.article-page {
  background-color: #309c9f;
  height: 200vh;
  margin: 0;
}

.article {
  border-radius: 50px 0 0 0;
  background: #e5e5e5;
  display: inline-flex;
}

.right-bar {
  width: 35%;
  border-radius: 50px 0 0 0;
  background: #fff;
  position: relative;
}

.button-group {
  position: relative;
  top: 10%;

  padding: 20px;
}

.tombol-atas {
  margin-top: -180px;
}

.btn1 {
  background: #309c9f;
  color: #e5e5e5;
  padding: 5px 1px;
  margin: 5px;
  border-radius: 15px;
  border-color: #309c9f;
}

.btn2 {
  background: #e5e5e5;
  color: #309c9f;
  padding: 5px 1px;
  margin: 5px;
  border-radius: 15px;
  border-color: #e5e5e5;
}

.btn3 {
  background: #309c9f;
  color: #e5e5e5;
  padding: 5px 1px;
  margin: 5px;
  border-radius: 15px;
  border-color: #309c9f;
  width: 75%;
}

.card-text {
  text-align: left;
}

.image-title {
  width: 105px;
  height: 105px;
  background-color: #ced4da;
  border-radius: 50%;
}

.gambar {
  margin-top: 24px;
}

.card-subtitle {
  color: #309c9f;
}

.recommendation-text {
  font-size: 13px;
}
</style>
