<template>
    <link rel="stylesheet" href="http://localhost:8080/assets/css/style.min.css" />
  <div class="container" id="blur">
    <div class="row">
      <div class="col-sm-11">
        <div class="dropdown1">
          <select name="dog-names" id="dog-names" class="drop">
            <option class="down" value="rigatoni">All</option>
            <option class="down" value="dave">Active</option>
            <option class="down" value="pumpernickel">Inactive</option>
          </select>
        </div>
        <div style="float: right;">
          <label class="search-label">
            <input class="search-bar" type="text" placeholder="Search..">
          </label>
          <h5 class="label-kategori">Total User : {{ resultCount }}</h5>
        </div>
      </div>
    </div>
    <table class="table">
      <thead class="header">
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>User1</td>
          <td>user1@gmail.com</td>
          <td><button type="button" class="btn btn-success">Active</button></td>
          <td class="posisi">
            <div class="btn-outline-dark m-2">
              <button class="button" v-on:click="toggle()">Delete</button>
            </div>
            <div class="btn-outline-dark m-2">
              <button class="button" v-on:click="myFunction()">Details</button>
            </div>
            <!-- <button type="button" class="container btn btn-outline-dark" v-on:click="toggle1()">Detail</button> -->
          </td>
        </tr>
        <tr>
          <td>User2</td>
          <td>user2@gmail.com</td>
          <td><button type="button" class="btn btn-danger">Inactive</button></td>
          <td class="posisi">
            <div class="btn-outline-dark m-2">
              <button class="button" v-on:click="toggle()">Delete</button>
            </div>
            <div class="btn-outline-dark m-2">
              <button class="button" v-on:click="myFunction()">Details</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div id="popup" class="popupnya">
    <div class="card">
      <h3 class="card-header ">Delete User</h3>
      <div class="card-body">
        <p class="card-text">Anda yakin ingin menghapus akun ini?</p>
      </div>
      <div class="card-footer ">
        <div class="posisi-btn">
          <div class="btn-outline-dark m-2">
            <button id="blur" class="container button" v-on:click="toggle()">Tidak</button>
          </div>
          <div class="btn-outline-dark m-2">
            <button id="blur" class="container button-hapus" v-on:click="toggle()">Ya,hapus akun</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="popup1">
    <div class="card1">
      <div class="card-header">
        <!-- <h3 class="card-title ">Delete Kategory</h3> -->
        <button id="blur" type="button" class="btn-close" v-on:click="myFunction()"></button>
      </div>
      <div class="card-body">
        <div class="ket">
          <div class="box-ket mt-5">
            Nama
          </div>
          <input class="input mt-3" type='text'/>
          <div class="ket2">
            <div class="box-ket mt-5">
              Email
            </div>
            <input class="input mt-3" type='text'/>
          </div>
          <div class="ket2">
            <div class="box-ket mt-5">
              Status
            </div>
            <input class="input mt-3" type='text'/>
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
      myFunction() {
        var blur = document.getElementById("blur");
        blur.classList.toggle("show");
        var popup1 = document.getElementById("popup1");
        popup1.classList.toggle("show");
      },
    },
  }
</script>

<style scoped>
  .input {
    box-sizing: border-box;
    position: absolute;
    width: 815px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #309C9F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
  }

  .ket {
    margin-left: 70px;
    margin-top: -40px;
  }

  .ket2 {
    margin-left: 0px;
    margin-top: 125px;
  }

  .box-ket {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;

    color: #7A7A7A;
  }

  .table {
    border: 1px solid grey;
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

  #popup1 {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
  }

  #popup1.show {
    top: 50%;
    visibility: visible;
    opacity: 1;
    transition: 0.5s;
  }

  #popup.active {
    top: 50%;
    visibility: visible;
    opacity: 1;
    transition: 0.5s;
  }

  .header {
    background: #309C9F;
    border: 1px solid #309C9F;
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
    background: #FFFFFF;
    border-radius: 30px;
    color: #FFFFFF;
  }

  .card1 {
    width: 982px;
    height: 460px;
    background: #FFFFFF;
    border-radius: 30px;
    border: 1px solid grey;
    color: #FFFFFF;
  }

  .search-label {
    position: relative;
    font-family: 'Inter';
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
    /* background: url('../assets/search.svg') center / contain no-repeat; */
  }

  .search-bar {
    width: 13rem;
    height: 2rem;
    background: #ECECEC;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 8px;
    margin: 2.5rem 0;
    padding: 10px 30px;
  }

  .btn {
    width: 123px;
    height: 37px;
  }

  .btn-close{
    margin-left: 20px;
    margin-top: 20px;
  }

  .button {
    border-radius: 5px;
    color: #ECECEC;
    border: none;
    margin: 5px;
    width: 98px;
    height: 37px;
    left: 1045px;
    top: 369px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: black;
  }

  .button-hapus {
    border-radius: 5px;
    background-color: #309C9F;
    border: none;
    margin: 5px;
    width: 173px;
    height: 37px;
    left: 1045px;
    top: 369px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
  }

  .posisi {
    display: flex;
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


  .dropdown1 {
    position: relative;
    display: inline-block;
    background-color: #FFFFFF;
    left: 1%;
  }

  .dropdown1-content1 {
    display: none;
    position: absolute;
    background-color: #FFFFFF;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
  }

  .dropdown1:hover .dropdown1-content1 {
    display: block;
  }

  .drop {
    background-color: #309C9F;
    width: 190px;
    height: 45px;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 8px;
    margin: 2.5rem 0;
    padding: 10px 10px;
  }

  .down {
    background-color: #FFFFFF;
  }
</style>