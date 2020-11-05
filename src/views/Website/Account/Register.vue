<template>
  <div class="container">
    <br>
    <div class="card" style="width: 18rem;">

      <div class="card-header bg-primary text-light text">
        <i class="fas fa-file-alt"></i>
        Register
      </div>

      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="name">User Name</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-user"></i></span>
              </div>
              <input type="text" class="form-control" name="name" id="name" placeholder="Enter User Name" v-model="username"/>
            </div>
          </div>

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

          <div class="form-group">
            <label for="confirm">Confirm Password</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
              </div>
              <input type="password" class="form-control" name="confirm" id="confirm"
                placeholder="Confirm Password" />
            </div>
          </div>

          <div class="form-group ">
            <button type="button" class="btn btn-success btn-block" @click="register">Register</button>
            <button type="button" class="btn btn-primary btn-block" @click="toLogin">Login</button>
          </div>

        </form>

      </div>

    </div>
  </div>

</template>

<script>
  import UserAPI from '@/api/user'

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
          this.$store.dispatch('user/login', {
            email,
            password
          });
        } else {
          console.log('Fail', res.err);
        }

      },
      toLogin(){
        this.$router.push('/login')
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