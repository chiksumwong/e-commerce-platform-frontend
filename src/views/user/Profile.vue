<template>
  <div>
    <b-container>

      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="If your change the email, please contact the Admin to change it!"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
          disabled
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
          disabled
        ></b-form-input>
      </b-form-group>

      <b-button type="reset" variant="primary">Reset Password</b-button> <br><br>

      <b-button type="submit" variant="danger">Delete Account</b-button>

    </b-form>


    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: 'Admin@test.com',
          name: 'Admin',
        },
        show: true
      }
    },
    methods: {
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
    }
  }
</script>

<style>

</style>