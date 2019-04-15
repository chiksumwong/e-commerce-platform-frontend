<template>

  <div class="container-fluid">
    <div class="container">

      <h2 class="text-center text-uppercase">Registration</h2>
      <hr>

      <div class="row">
        <div class="col-md-3">
        </div>

        <div class="col-md-6">

          <form role="form" method="post" action="register.php">
            <fieldset>
              <div class="form-group">
                <input type="text" name="username" id="username" v-model="username" class="form-control input-lg" placeholder="User Name">
              </div>

              <div class="form-group">
                <input type="email" name="email" id="email" v-model="email" class="form-control input-lg" placeholder="Email Address">
              </div>
              <div class="form-group">
                <input type="password" name="password" id="password" v-model="password" class="form-control input-lg"
                  placeholder="Password">
              </div>
              <div class="form-group">
                <input type="password" name="password_confirm" id="password2" class="form-control input-lg"
                  placeholder="Password Confirm">
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input">
                  By Clicking register you're agree to our <a href="">policy & terms</a>
                </label>
              </div>

              <br>
              <div>
                <input type="submit" class="btn btn-md btn-primary" value="Register" @click="register">
              </div>

            </fieldset>
          </form>

        </div>
        <div class="col-md-3">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import UserAPI from '@/api/User'

  export default {
        data(){
            return{
                username:'',
                email:'',
                password:''
            }
        },
        methods: {
            register() {
              let username = this.username;
              let email = this.email;
              let password = this.password;

              const params = {
                username:username,
                email: email,
                password: password
              }
              const res = await UserAPI.register(params);

              if (res.data.result){
                  this.$store.dispatch('user/login', { email, password });
              }else{
                  console.log('loginFailure', res.data.error_message);
              }
            },
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