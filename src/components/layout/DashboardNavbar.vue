<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">

      <b-navbar-brand href="/dashboard">{{ $t("dashboard") }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Left items -->
        <b-navbar-nav>
          <!-- Search -->
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->
        </b-navbar-nav>


        <!-- Right items -->
        <b-navbar-nav class="ml-auto">

          <!-- Login and register button -->
          <b-nav-form v-show="!isLogin">
            <b-button size="sm" variant="success" href="/login" class="mr-sm-2" @click="login">Login</b-button>
          </b-nav-form>
          <b-nav-form v-show="!isLogin">
            <b-button size="sm" variant="success" href="/register" class="my-2 my-sm-0" @click="register">Register
            </b-button>
          </b-nav-form>

          <!-- User -->
          <b-nav-item-dropdown right v-show="isLogin">
            <template slot="button-content" class="text-uppercase"><em>{{username}}</em></template>
            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
            <b-dropdown-item @click="home">Back to Home</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
import UserAPI from "@/api/user";
  export default {
    data() {
      return {}
    },
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
      home(){
        this.$router.push('/')
      },
      toCart() {
        this.$router.push('/cart')
      },
      toMyOrders() {
        this.$router.push('/myorder')
      },
      toMyProducts() {
        this.$router.push('/myproduct')
      },
      toProduct(id) {
        this.$router.push('/product/' + id)
      },
      removeProductFromCart(carts, productId) {
        const index = carts.map(e => e.product_id).indexOf(productId);
        carts.splice(index, 1);
        this.$store.dispatch('cart/updateCarts', carts)
      },
      async deleteAccount(){
        this.$notice.error({
          title: 'Account Deleted',
          description: 'Bye Bye!'
        })
        const res = await UserAPI.deleteUserById(this.$store.state.user.user_id);
        this.$store.dispatch('user/logout')
      }
    },
    computed: {
      isLogin() {
        return this.$store.state.user.status.isLogin
      },
      username() {
        return this.$store.state.user.username
      },
      carts() {
        console.log('found carts', this.$store.state.cart.carts)
        return this.$store.state.cart.carts
      }
    }
  }
</script>

<style scoped>
  .cart {
    min-width: 400px;
  }

  .cart .item-left img,
  .cart .item-left span.item-info {
    float: left;
  }

  .cart .item-left span.item-info {
    margin-left: 10px;
  }

  .cart .item-left span.item-info span {
    display: block;
  }

  .cart .item-right {
    float: right;
  }

  .cart .item-right button {
    margin-top: 5px;
  }
</style>