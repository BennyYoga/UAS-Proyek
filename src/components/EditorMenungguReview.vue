<template>
  <link
    rel="stylesheet"
    href="http://localhost:8080/assets/css/style.min.css"
  />
  <div class="row">
    <div class="col-sm-11">
      <div style="float: right">
        <label class="search-label">
          <input
            class="search-bar"
            type="text"
            v-model="search"
            placeholder="Search.."
          />
        </label>
        <h5 class="label-kategori">Total Artikel : {{ resultCount }}</h5>
      </div>
    </div>
  </div>
  <div class="container">
    <table class="table">
      <thead class="header">
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Judul</th>
          <th scope="col">Tanggal</th>
          <th scope="col">Batas Review</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="menunggureview in filteredMenungguReviews"
          :key="menunggureview.id_artikel"
        >
          <td>{{ menunggureview.id_user }}</td>
          <td>{{ menunggureview.judul_artikel }}</td>
          <td>{{ menunggureview.waktu_publish }}</td>
          <td>{{ menunggureview.waktu_terbit }}</td>
          <td class="posisi">
            <div class="btn-outline-dark m-2">
              <button class="button">Review</button>
            </div>
            <div class="btn-outline-dark m-2">
              <button class="button">Publish</button>
            </div>
            <div class="btn-outline-dark m-2">
              <button class="button">Tolak</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FormControl",
  data() {
    return {
      form: {
        id_artikel: "",
        id_user: "",
        judul_artikel: "",
        waktu_publish: "",
        waktu_terbit: "",
        // JenisArtikel: "",
      },
      menunggureviews: [],
      search: "",
    };
  },
  methods: {
    getItem() {
      axios
        .get("http://localhost:3011/artikel/editor/inreview")
        .then((response) => {
          this.menunggureviews = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log("Error Get Data", error);
        });
    },
  },
  computed: {
    resultCount() {
      return this.menunggureviews && this.menunggureviews.length;
    },
    filteredMenungguReviews() {
      return this.menunggureviews.filter((r) => {
        return (
          r.judul_artikel.toLowerCase().indexOf(this.search.toLowerCase()) != -1
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

/* .btn-outline-dark {
      display: flex;
    } */

.posisi {
  display: flex;
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

.card h3 {
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

p {
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