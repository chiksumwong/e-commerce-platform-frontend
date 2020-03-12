<template>
  <div>
    <b-container>

      <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="loadUser"
          required
          placeholder="Enter name"
          disabled
        ></b-form-input>
      </b-form-group>

      <b-button type="reset" variant="primary" @click="toResetAccount()">Reset Password</b-button> <br><br>

      <b-button type="submit" variant="danger" @click="deleteAccount()" v-show="!isAdmin">Delete Account</b-button>

    </b-form>


    </b-container>
  </div>
</template>

<script>
import UserAPI from "@/api/user";
  export default {
    data() {
      return {
        show: true
      }
    },
    methods: {
      toResetAccount(){
        this.$router.push('/resetpassword')
      },
      async deleteAccount(){
        this.$notice.error({
          title: 'Account Deleted',
          description: 'Bye Bye!'
        })
        const res = await UserAPI.deleteUserById(this.$store.state.user.user_id);
        this.$store.dispatch('user/logout')
      },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    computed: {
      isAdmin(){
        if (this.$store.state.user.username === "Admin") {
          return true
        }else {
          return false
        }
      },
      loadUser(){
        return this.$store.state.user.username
      }
    }    
  }
</script>

<style>

</style>