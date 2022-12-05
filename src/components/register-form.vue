<template>
    <div class="formContainer">
        <div class="text-center m-4">
            <h1 class="text-light">Sign Up</h1>
        </div>
        <form class="text-center" v-on:submit.prevent="PostItem">
            <div class="my-3">
                <input v-model="form.nama_lengkap" type="text" class="form-control" name="nama"
                    placeholder="Nama Lengkap">
            </div>
            <div class="my-3 text-light d-flex justify-content-start radio-group">
                <label for="pria">
                    <input v-model="form.jenis_kelamin" type="radio" class="radio-btn" id="pria" name="jenis-kelamin"
                        value="l">
                    <h5>Pria</h5>
                </label>
                <label for="wanita">
                    <input v-model="form.jenis_kelamin" type="radio" class="radio-btn" id="wanita" name="jenis-kelamin"
                        value="p">
                    <h5>Wanita</h5>
                </label>
            </div>
            <div class="my-3">
                <input v-model="form.username" type="text" class="form-control" name="username" placeholder="Username">
            </div>
            <div class="my-3">
                <input v-model="form.email" type="email" class="form-control" name="email" placeholder="Email">
            </div>
            <div class="my-3">
                <input v-model="form.password" type="password" class="form-control" name="password"
                    placeholder="Password">
            </div>
            <button class="d-block btn-glass w-25 mt-5" type="submit">
                Sign Up
            </button>
        </form>
    </div>
</template>

<style>
.formContainer {

    width: 100%;
    max-width: 480px;
    margin: 0 auto;
}

.formContainer input {
    height: 48px;
    padding-left: 48px;
    background: rgba(217, 217, 217, 1);
    border: none;
    border-radius: 15px;
}

.formContainer input::placeholder {
    color: rgba(122, 122, 122, 1) !important;
}

.btn-accent:active {
    box-shadow: 0px 0px 2px #D62822;
}

.formContainer input:focus {
    box-shadow: 0px 0px 2px #D62822;
}

.inputLogo {
    position: absolute;
    margin-top: 12px;
    margin-left: 18px;
    color: #fff
}

form {
    margin: 0 auto;
}

.forget-pw {
    color: #fff;
    text-decoration: none;
}

.forget-pw>h5 {
    margin: 15px 0 15px 30px;
    font-size: 15px;
}

.forget-pw:hover {
    color: rgba(255, 255, 255, 0.489);
}

.btn-glass {
    background: rgba(25, 77, 90, 0.8);
    color: #fff;
    border: none;
    padding: 5px;
    border-radius: 15px;
    margin: 0 auto;
}

.radio-group {
    margin-left: 20px;
}

.radio-group label {
    display: flex;
    width: 100px;
}

.radio-group h5 {
    margin: auto 20px;
}

.btn-radio {
    display: none;
}

.btn-radio label {
    display: inline-block;
    position: relative;
}
</style>

<script>
import axios from "axios";
export default {
    data() {
        return {
            visibleTop: false,
            form: {
                username: "",
                nama_lengkap: "",
                password: "",
                email: "",
                jenis_kelamin: "",
            },
            signuppembaca: [],
            updateSubmit: false,
        }
    },
    methods: {
        PostItem: function () {
            try {
                axios
                    .post("http://localhost:4000/user/pembaca/register", this.form)
                    .then((response) => {
                        alert("Data telah tersimpan")
                        this.form = [...this.form, response.persyaratan]
                        this.form.username = "";
                        this.form.nama_lengkap = "";
                        this.form.password = "";
                        this.form.email = "";
                        this.form.jenis_kelamin = "";
                        this.$router.push('/login');
                    })
            } catch (error) {
                console.log(error);
            }
        }
    },
}

</script>