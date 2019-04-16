<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h2 class="text-center text-uppercase">Login</h2>
                <hr>
                <form role="form">
                    <fieldset>
                        <div class="form-group">
                            <input type="email" name="username" id="username" v-model="email"
                                class="form-control input-lg" placeholder="E-mail">
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" id="password" v-model="password"
                                class="form-control input-lg" placeholder="Password">
                        </div>
                        <div>
                            <input type="submit" class="btn btn-md btn-primary" value="Login" @click="login">
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            // login() {
            //     const email = this.email;
            //     const password = this.password;
            //     if (email && password) {
            //         this.$store.dispatch('user/login', {
            //             email,
            //             password
            //         });
            //     }
            // },
        },
    }
</script>


<style scoped>
    .container-fluid {
        padding: 50px;
    }

    .container {
        background-color: white;
        padding: 50px;
    }
</style>