<template>
  <div class="container">
    <br>
    <div class="card" style="width: 18rem;">

      <div class="card-header bg-primary text-light text">
        <i class="fas fa-file-alt"></i>
        Login
      </div>

      <div class="card-body">
        <form>

          <div class="form-group">
            <label for="email">Your Email</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
              </div>
              <input type="text" class="form-control" name="email" id="email" placeholder="Enter Email" v-model="email"/>
            </div>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
              </div>
              <input type="password" class="form-control" name="password" id="password" placeholder="Enter Password" v-model="password"/>
            </div>
          </div>

          <a href="/forgotpassword">Forgot Password</a>

          <div class="form-group ">
            <button type="button" class="btn btn-success btn-block" @click="login">Login</button>
            <button type="button" class="btn btn-primary btn-block" @click="toRegister">Register</button>
            <button type="button" class="btn btn-info btn-block" @click="loginAdmin">Login As Admin</button>
          </div>

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
            loginAdmin(){
              const email = "admin@test.com";
                const password = "test";
                if (email && password) {
                    this.$store.dispatch('user/login', {
                        email,
                        password
                    });
                }
            },
            login() {
                const email = this.email;
                const password = this.password;
                if (email && password) {
                    this.$store.dispatch('user/login', {
                        email,
                        password
                    });
                }
            },
            toRegister(){
                this.$router.push('/register')
            }
        },
    }
</script>


<style scoped>
  .card {
    margin: 0 auto;
    float: none;
    margin-bottom: 10px;
  }

  i {
    margin-right: 10px;
  }
</style>