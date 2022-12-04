<template>
    <div class="col-1 side-nav">
        <a class="logo" aria-current="page" href="#">
            <img class="logo-img" src="../assets/LOGO.svg" alt="">
        </a>
        <nav class="nav flex-column d-inline-flex">
            <a class="nav-link active" aria-current="page" href="#">
                <img src="../assets/home.svg" alt="">
            </a>
            <a class="nav-link" href="#">
                <img src="../assets/profile.svg" alt="">
            </a>
            <a class="nav-link" href="#">
                <img src="../assets/write.svg" alt="">
            </a>
        </nav>
    </div>
</template>
  
<script>

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-nav {
    background-color: #309C9F;
    position: relative;
    width: fit-content;
    display: flex;
    flex-direction: column;
}

.logo {
    margin: 0 10px 0 10px;
}

.logo-img {
    width: 85px;
}

nav {
    position: relative;
    top: 35%;
    transform: translateY(-50%);
}

nav a {
    margin-top: 30px;
    margin-bottom: 30px;
}

nav a img {
    display: block;
    margin: auto;
}

/* home 1 */
</style>