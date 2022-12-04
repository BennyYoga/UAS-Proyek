<template >
    <div class="card-user">
        <img class="img-writer" src="../assets/writer1.svg" alt="">
        <div class="text">
            <p>Hello, User!</p>
        </div>
        <div class="text-desc">
            <p>Kami menyimpan beberapa data untuk anda.</p>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.card-user {
    position: relative;
    width: 95%;
    height: 220px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    margin: 90px 0 0px 20px;
}

.img-writer {
    position: relative;
    width: 409px;
    height: 409px;
    left: 480px;
    top: -133px
}

.text {
    position: relative;
    width: 168px;
    height: 36px;
    left: 62px;
    top: -325px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    color: #309C9F;
}

.text-desc {
    position: relative;
    width: 379px;
    height: 22px;
    left: 62px;
    top: -330px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    color: #3D3D3D;
}
</style>