<template>
    <div class="container text-center d-block mb-3">
      <h6 class="head-category">Category</h6>
      <ul>
        <li>
          <a href="" class="category-filter">
            <div class="rect" id="makanan">
              <div class="rect-backdrop">
                <h5>Makanan</h5>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="category-filter">
            <div class="rect" id="restoran">
              <div class="rect-backdrop">
                <h5>Restoran</h5>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="category-filter">
            <div class="rect" id="penginapan">
              <div class="rect-backdrop">
                <h5>Penginapan</h5>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="category-filter">
            <div class="rect" id="wisata">
              <div class="rect-backdrop">
                <h5>Wisata</h5>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </template>
  <script>
  export default {
  
  }
  </script>
  <style>
  .head-category {
    text-align: left;
  }
  
  .category-filter {
    text-decoration: none;
    color: #393a3a;
    width: 100%;
  }
  
  
  
  .rect {
    margin: 10px auto;
    padding: 0;
    display: block;
    border: solid 1px #393a3a;
    width: 100%;
    height: 50px;
    background-size: cover;
    place-items: center;
    border-style: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  
  .rect:hover {
    scale: 1.05;
  }
  
  .rect:active {
    scale: 1.15;
  }
  
  .rect-backdrop {
    background-color: rgba(255, 255, 255, 0.025);
    -webkit-backdrop-filter: brightness(60%);
    backdrop-filter: brightness(60%);
    padding: 10px 0;
    height: 101%;
    width: 100%;
  }
  
  .rect-backdrop>h5 {
    color: white;
  }
  
  #makanan {
    background-image: url(../assets/makanan.jpg);
  }
  
  #restoran {
    background-image: url(../assets/restoran.jpg);
  }
  
  #penginapan {
    background-image: url(../assets/penginapan.jpg);
  }
  
  #wisata {
    background-image: url(../assets/wisata.jpg);
  }
  </style>