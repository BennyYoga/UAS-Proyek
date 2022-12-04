<template>
  <div class="article-page d-flex">
    <ArticleNavbar></ArticleNavbar>

    <div class="col col-xl article">
      <div class="container">
        <div class="backround d-flex p-5">

          <button class="close">
            <img src="" class="w-auto" alt="#">
          </button>

          <div class="head d-flex p-1">
            <hr />
            Edit Profil

          </div>
          <hr />
          <div class="kotak">
            <hr />
            <img class="preview-pict mt-4" src="../assets/image.svg" alt="">
            <div class="flex-item">
              <div class="fn mb-0">
                Full Name
              </div>
              <div class="m">
                Username
              </div>
            </div>
          </div>

          <div class="ket">
            <div class="fn">BIO</div>
            <div class=" bio mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Eleifend dignissim venenatis in id dictumst varius vulput
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend dignissim venenatis in id dictumst
              varius vulput
              <hr />
            </div>


            <form>
              <div class="box-ket mt-5">
                Nama
              </div>
              <input class="input mt-3" type='text' placeholder='Enter your name...' />
            </form>

            <form class="kir">
              <div class="box-ket mt-5">
                Jenis Kelamin
              </div>
              <input class="input mt-3" type='text' placeholder='Enter your Gender...' />
            </form>


            <form class="gender">
              <div class="box-ket mt-5 col-6">
                Email

              </div>
              <input class="input mt-3 col-2" type='text' placeholder='Enter your Email...' />

            </form>

            <form class="bakir">
              <div class="box-ket mt-5 ">
                Nomor Telefon

              </div>
              <input class="input mt-3 col-2" type='text' placeholder='Enter your Number...' />

            </form>




            <button class="cancel">
              Cancel
            </button>
            <button class="Save">
              Save
            </button>
          </div>


        </div>
      </div>
    </div>


  </div>
</template>

<script>
import ArticleNavbar from '@/components/ArticleNavbar.vue';
export default {
  name: 'EditProfile',
  components: {
    ArticleNavbar,

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-page {
  background-color: #309C9F;
  height: 200vh;
  margin: 0;
}

.cancel {
  box-sizing: border-box;

  position: absolute;
  width: 87px;
  height: 38px;
  margin-top: 200px;
  margin-left: 275px;
  border: 1px solid #309C9F;
  border-radius: 15px;
}

.Save {
  position: absolute;
  width: 87px;
  height: 38px;
  margin-top: 200px;
  margin-left: 405px;
  background: #309C9F;
  border-radius: 15px;

}

.gender {
  margin-top: 9rem;
}

.preview-pict {
  width: 144px;
  height: 144px;
  margin: 10px 25px;
  border-radius: 85px;
}

.email {
  margin-left: 35rem;
}

.ket {
  margin-left: 248px;
  margin-top: 574px;
  margin-right: 250px;
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

.kir {
  margin-left: 425px;
  margin-top: -66px;
}

.bakir {
  margin-left: 425px;
  margin-top: -66px;
}

.kotak {
  position: absolute;
  width: 903px;
  height: 219px;
  margin-left: 174px;
  margin-top: 270px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
}

.input {
  box-sizing: border-box;

  position: absolute;
  width: 315px;
  height: 48px;


  background: #EBEBEB;
  border: 1px solid #309C9F;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.input-jk {
  margin-top: 798px;
  margin-left: 721px;
  box-sizing: border-box;

  position: absolute;
  width: 315px;
  height: 48px;


  background: #EBEBEB;
  border: 1px solid #309C9F;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.backround {
  border-radius: 50px 0 0 0;
  background: #fff;
  height: 1500px;
}

.right-bar {
  border-radius: 50px 0 0 0;
  background: #fff;
  position: relative;
}

.box-ket {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  color: #7A7A7A;
}

.bio {
  font-family: 'Abhaya Libre';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  color: rgba(0, 0, 0, 0.55);
}

.head {
  position: absolute;
  width: 171px;
  height: 47px;
  margin-left: 189px;
  margin-top: 182px;

  font-family: 'Abhaya Libre';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 47px;

  color: #000000;
}

.close {
  position: absolute;
  width: 36px;
  height: 36px;
  margin-left: 59px;
  margin-top: 49px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.flex-item {
  margin-left: 200px;
  margin-top: -110px;

}

.fn {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
}

.username {}

@media (min-width: 1200px) {
  .right-bar {
    width: fit-content;
    border-radius: 50px 0 0 0;
    background: #fff;
    position: relative;
  }
}
</style>
