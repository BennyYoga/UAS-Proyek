<template>
    <div class="display-all-content">
        <div class="display-row-content container">
            <div class="  row">
                <div class="col-1"></div>
                <div class="col-4 kontent-kiri">
                    <h2><b>Ooops, This Page Could Not Be Found.</b></h2>
                    <p>The page you are looking for might have been removed gad itsname changed or is temporality
                        unavailabed</p>
                    <router-link to="/">
                        <button type="button" class="btn btn-light">
                            <b>Back To Home</b>
                        </button>
                    </router-link>
                </div>
                <div class="col-6">
                    <img src="../assets/NotFound.png" alt="">
                </div>
                <div class="col-1"></div>
            </div>
        </div>
    </div>
</template>

<style>
.display-all-content {
    width: 100%;
    min-height: 750px;
    background-color: #57CBD2;
    display: flex;
}

.display-row-content {
    margin: auto;
}

.display-row-content button {
    width: 400px;
    height: 60px;
    border-radius: 40px;
    color: #57CBD2;
}

.display-row-content img {
    width: 600px;
    height: 600px;
}

.kontent-kiri {
    padding-top: 200px;
}
</style>