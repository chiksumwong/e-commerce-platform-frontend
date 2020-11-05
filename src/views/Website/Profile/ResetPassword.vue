<template>
   <div class="container">
    <br>
    <div class="card" style="width: 18rem;">

      <div class="card-header bg-primary text-light text">
        <i class="fas fa-file-alt"></i>
        resetpassword Password
      </div>

      <div class="card-body">
        <form>

          <div class="form-group">
            <label for="newPassword">Old Password</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
              </div>
              <input type="text" class="form-control" name="newPassword" id="newPassword" placeholder="Enter Email" v-model="newPassword"/>
            </div>
          </div>

          <div class="form-group">
            <label for="password">New Password</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
              </div>
              <input type="password" class="form-control" name="password" id="password" placeholder="Enter User Name" v-model="password"/>
            </div>
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
              </div>
              <input type="confirmPassword" class="form-control" name="confirmPassword" id="confirmPassword" placeholder="Enter User Name" v-model="confirmPassword"/>
            </div>
          </div>

          <div class="form-group ">
            <button type="button" class="btn btn-success btn-block" @click="resetPassword">Submit</button>
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
                newPassword: '',
                password: '',
                confirmPassword: '',
            }
        },
        methods: {
            resetPassword(){
                this.$router.push('/')
            },
           
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