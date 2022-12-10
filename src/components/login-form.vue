<template>

    <button @click="logout"> Logout </button>
    <div class="formContainer">
        <div class="text-center m-4">
            <h1 class="text-light">Login</h1>
        </div>

        <form class="text-center" v-on:submit.prevent="PostItem">
            <div class="my-3">
                <input v-model="form.username" type="text" class="form-control" name="emailid"
                    placeholder="Username / Email">
            </div>
            <div class="my-3">
                <input v-model="form.password" type="password" class="form-control" name="password"
                    placeholder="Password">
            </div>
            <a href="" class="text-start forget-pw">
                <h5>
                    Lupa Password >>>
                </h5>
            </a>
            <button class="d-block btn-glass w-25" type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
// import { useCookies } from "vue3-cookies"
// Require dependencies
// var Vue = require('vue');
// var VueCookie = require('vue-cookie');
// // Tell Vue to use the plugin
// Vue.use(VueCookie);

export default {
    data() {
        return {
            visibleTop: false,
            form: {
                username: "",
                password: ""
            },
            signuppembaca: [],
            updateSubmit: false,
        }
    },
    // setup() {
    // const { cookies } = useCookies();
    // return { cookies };
    //   },
    methods: {
        PostItem: function () {
            try {
                axios
                    .post("http://localhost:4000/user/login", this.form, { withCredentials: true })
                    .then((response) => {
                        console.log(response)
                        console.log(response.data.token)
                        localStorage.setItem('token-front', response.data.token)
                        this.form.username = "";
                        this.form.password = "";
                    })
            } catch (error) {
                console.log(error);
            }
            this.$router.push('/');
        },
        logout: function () {
            try {
                axios
                    .get("http://localhost:4000/user/logout", { withCredentials: true })
                    .then((response) => {
                        console.log(response)
                    })
                localStorage.removeItem('token-front');
                // localStorage.removeItem('user');
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>

<style>
.formContainer {
    padding-top: 5%;
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
</style>

<script>
</script>