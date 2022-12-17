<template >
    <div class="container text-center d-block button-group mt-3 ">
        <div class="row d-flex justify-content-between ">
            <button class="btn btn-tosca btn-45" type="button">Get Started</button>
            <button class="btn btn-white btn-45" type="button">Sign In</button>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
.button-group {
    position: relative;
    top: 10%;
    width: 100%;
}

.btn {
    padding: 3px 2px;
    border-radius: 15px;
    font-size: 12px;
}

.btn-45 {
    width: 45%;
}

.btn-tosca {
    background: #309C9F;
    border-color: #309C9F;
    color: white;
}

.btn-tosca:active {
    border-color: #309C9F;
}

.btn-white {
    border-color: #309C9F;
}

.btn-white {
    border-color: #309C9F;
}

.btn-white:active {
    background-color: #309C9F;
    border-color: #309C9F;
    color: white;
}

.btn-tosca:hover {
    color: black;
    border-color: black;
    background-color: white;
}
</style>