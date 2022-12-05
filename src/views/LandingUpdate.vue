<template >
    <div class="Home d-none d-sm-block ">
        <img src="../assets/LOGO.svg" alt="" class="Logo">

        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Write</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        <div class="text">
            <h2>GEOWISATA</h2>
            <h1>ARTICLE</h1>
            <div class="Line1" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante enim, sem consequat aliquam arcu</p>
            <div class="buttonsign">
                <router-link to="/login">
                    <button class="ini-button">SignIn</button>
                </router-link>
            </div>
            <div class="buttonsignup">
                <router-link to="/register">
                    <button class="ini-button2">SignUp</button>
                </router-link>
            </div>
            <div class="Line2" />
        </div>

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/CILETUH.svg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/CILETUH.svg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/CILETUH.svg" class="d-block w-100" alt="...">
                </div>
            </div>
        </div>

    </div>





    <div class="Home2 d-sm-none d-md-block d-md-none">
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Write</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/CILETUH.svg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/CILETUH.svg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/CILETUH.svg" class="d-block w-100" alt="...">
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style >
.buttonsign {
    position: absolute;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.ini-button {
    position: absolute;
    top: 250px;
    padding: 14px 50px;
    border: 0px solid transparent;
    background-color: #309C9F;
}

.ini-button:hover {
    transition: 0.3s;
    padding: 14px 52px;
    color: #309C9F;
    border: 1px solid #309C9F;
    background-color: transparent;
}

.ini-button2 {
    position: absolute;
    color: #FFFFFF;
    padding: 12px 46px;
    left: 220px;
    top: 385px;
    border-color: #e8eeee;
    background-color: transparent;
}

.ini-button2:hover {
    transition: 0.3s;
    padding: 14px 50px;
    color: #030303;
    top: 385px;
    background-color: #e8eeee;
}

.home {
    position: relative;
}

.Home .navbar {
    top: 40px;
    left: 820px;
    position: absolute;
    z-index: 1;
    height: 40px;
    background: rgba(0, 0, 0, 0.27);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.Home2 .navbar {
    position: absolute;
    z-index: 1;
}

.nav-link {
    color: #FFFFFF;

}

.nav-item {
    padding: 0px 60px;
}

.Logo {
    top: 15px;
    left: 3%;
    position: absolute;
    z-index: 1;
    height: 70px;
}

.text {
    position: absolute;
    z-index: 1;
    font-family: 'Inter';
    font-style: normal;
    color: #FFFFFF;
    left: 10%;
    top: 30%;
}

.text .Line1 {
    top: 140%;
    position: absolute;
    left: -1%;
    border: 1px solid #FFFFFF;
    height: 90%;
    z-index: 1;
}

.text .Line2 {
    top: 350%;
    position: absolute;
    left: -1%;
    border: 1px solid #FFFFFF;
    height: 0;
    width: 100%;
    z-index: 1;
}

.text h1 {
    margin-left: -1%;
    font-size: 90px;
    font-family: 'Inter';
    font-style: normal;
}

.text h2 {
    margin-bottom: -20px;
    font-family: 'Inter';
    font-style: normal;
}

.text p {
    left: 5%;
    position: absolute;
    margin-top: 15%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
}
</style>