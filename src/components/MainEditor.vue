<template>
  <div>
    <main class="main users chart-page" id="skip-target">
      <div class="container mt-3">
        <div class="row stat-cards">
          <div class="col-md-3">
          </div>
          <div class="col-md-3 mt-5">
            <article class="stat-cards-item-user">
              <div class="stat-cards-info">
                <p class="stat-cards-info__num">Article telah di cek</p>
                <p class="stat-cards-info__title">{{ form.data_check }}</p>
                <p class="stat-cards-info__progress">
                  <span class="stat-cards-info__profit success"> </span>
                  <a href=""> More info </a>
                </p>
              </div>
            </article>
          </div>
          <div class="col-md-3 mt-5">
            <article class="stat-cards-item-user1">
              <div class="stat-cards-info">
                <p class="stat-cards-info__num">Article yang belum di cek</p>
                <p class="stat-cards-info__title">{{ form.data_uncheck }}</p>
                <p class="stat-cards-info__progress">
                  <span class="stat-cards-info__profit success"> </span>
                  <a href=""> More info </a>
                </p>
              </div>
            </article>
          </div>
          <div class="col-md-3">

          </div>
        </div>
      </div>
      <div class="card-editor d-flex justify-content-center"></div>
    </main>
  </div>
</template>
  
<script>
import axios from 'axios'



export default {
  name: "App",
  components: {},
  data() {
    return {
      form: {
        data_check: "",
        data_uncheck: "",
      },
    };
  },
  methods: {
    getPublish() {
      axios.get('http://localhost:3000/artikel/editor/reqcount/Publish/USR0000000001')
        .then((response) => {
          console.log("ini datanya", response.data.data)
          this.form.data_check = response.data.data
        })
        .catch((error) => {
          console.log("errornya", error)
        })
    },
    getPending() {
      axios.get('http://localhost:3000/artikel/editor/reqcount/Pending/USR0000000001')
        .then((response) => {
          console.log("ini data pending", response.data)
          this.form.data_uncheck = response.data.data
        })
        .catch((error) => {
          console.log("errornya", error)
        })
    }
  },
  mounted: (function () {
    this.getPublish();
    this.getPending();
  })
};

</script>

