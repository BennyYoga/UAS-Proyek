<template>
    <div class="col-1 side-nav">

        <a class="logo" aria-current="page" href="#">
            <img class="logo-img" src="../assets/logo.png" alt="">
        </a>
        <nav class="nav flex-column d-inline-flex">
            <a class="nav-link active" aria-current="page" href="">
                <img class="nav-icon" src="../assets/home.svg" alt="">
            </a>
            <a class="nav-link" href="#">
                <img class="nav-icon" src="../assets/profile.svg" alt="">
            </a>
            <a class="nav-link" href="#">
                <img class="nav-icon" src="../assets/write.svg" alt="">
            </a>
        </nav>
    </div>
</template>
  
<script>

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-nav {
    position: relative;
    width: fit-content;
    display: flex;
    flex-direction: column;
}

.logo {
    position: relative;
    top: 20px;
    margin: 0 auto;
}

.logo-img {
    width: 65px;
}

nav {
    position: relative;
    top: 30%;
    transform: translateY(-50%);
}

.nav-link {
    padding: 8px 8px;
    width: 60px;
}

nav a {
    margin-top: 30px;
    margin-bottom: 30px;
}

nav a img {
    display: block;
    margin: 0 auto;
}

.nav-icon {
    width: 30px;
    margin: 0 auto;
}

.nav-icon:hover {
    scale: 1.1;
}

/* home 1 */
</style>