<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">

      <b-navbar-brand href="/">E-COMMERCE PLATFORM</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Left items -->
        <b-navbar-nav>
          <!-- Search -->
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
        <!-- Right items -->
        <b-navbar-nav class="ml-auto">
          <!-- Login and register button -->
          <b-nav-form v-show="!isLogin">
            <b-button size="sm" variant="success" href="/login" class="mr-sm-2" @click="login">Login</b-button>
          </b-nav-form>
          <b-nav-form v-show="!isLogin">
            <b-button size="sm" variant="success" href="/register" class="my-2 my-sm-0" @click="register">Register</b-button>
          </b-nav-form>
          <!-- Shopping Cart -->
          <b-nav-item-dropdown right v-show="isLogin">
            <span slot="button-content"><i class="fas fa-shopping-cart"></i></span>

            <b-dropdown-item class="cart">

              <span class="item">
                    <span class="item-left" @click="toCart">
                        <img src="http://lorempixel.com/50/50/" alt="" />
                        <span class="item-info">
                            <span>Item name</span>
                            <span>23$</span>
                        </span>
                    </span>
                    <span class="item-right">
                        <button class="btn btn-xs btn-danger pull-right">X</button>
                    </span>
              </span>

            </b-dropdown-item>
          

            <b-dropdown-item @click="toCart">
              <b-button block variant="primary">View Cart</b-button>
            </b-dropdown-item>

          </b-nav-item-dropdown>
          <!-- User -->
          <b-nav-item-dropdown right v-show="isLogin">
            <template slot="button-content" class="text-uppercase"><em>{{username}}</em></template>
            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
  export default {
    methods: {
      register() {
        this.$router.push('/register')
      },
      login() {
        this.$router.push('/login')
      },
      logout() {
        this.$store.dispatch('user/logout')
      },
      toCart(){
        this.$router.push('/cart')
      }
    },
    computed: {
      isLogin() {
        return this.$store.state.user.status.isLogin
      },
      username(){
        return this.$store.state.user.username
      }
    }
  }
</script>

<style scoped>
.cart{
    min-width:300px;
}
.cart .item-left img,
.cart .item-left span.item-info{
    float:left;
}
.cart .item-left span.item-info{
    margin-left:10px;   
}
.cart .item-left span.item-info span{
    display:block;
}
.cart .item-right{
    float:right;
}
.cart .item-right button{
    margin-top:5px;
}
</style>