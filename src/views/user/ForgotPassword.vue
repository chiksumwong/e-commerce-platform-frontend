<template>
   <div class="container">
    <br>
    <div class="card" style="width: 18rem;">

      <div class="card-header bg-primary text-light text">
        <i class="fas fa-file-alt"></i>
        Forgot Password
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
            <label for="username">Your User Name</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
              </div>
              <input type="username" class="form-control" name="username" id="username" placeholder="Enter User Name" v-model="username"/>
            </div>
          </div>

          <div class="form-group ">
            <button type="button" class="btn btn-success btn-block" @click="forgotPassword">Submit</button>
            <button type="button" class="btn btn-primary btn-block" @click="toLogin">Back to Login</button>
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
                username: ''
            }
        },
        methods: {
            forgotPassword(){
                this.$router.push('/resetpassword')
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