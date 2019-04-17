<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h2 class="text-center text-uppercase">Registration</h2>
        <hr>
        <form>
          <div class="form-group">
            <input type="text" name="username" id="username" v-model="username" class="form-control input-lg"
              placeholder="User Name">
          </div>

          <div class="form-group">
            <input type="email" name="email" id="email" v-model="email" class="form-control input-lg"
              placeholder="Email Address">
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
            <b-btn variant="primary" :block="true" class="mt-4" @click="register">Register</b-btn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import UserAPI from '@/api/User.js'

  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      }
    },
    methods: {
      async register() {
        let username = this.username;
        let email = this.email;
        let password = this.password;

        const payload = {
          username: username,
          email: email,
          password: password
        }

        const res = await UserAPI.register(payload)

        if (res.data) {
          console.log("register success", res.data)
          this.$store.dispatch('user/login', { email, password });
        } else {
          console.log('Fail', res.err);
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