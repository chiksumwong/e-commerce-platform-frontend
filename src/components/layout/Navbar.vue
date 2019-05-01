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
            <b-button size="sm" variant="success" href="/register" class="my-2 my-sm-0" @click="register">Register
            </b-button>
          </b-nav-form>


          <!-- Shopping Cart -->
          <b-nav-item-dropdown right v-show="isLogin">
            <span slot="button-content"><i class="fas fa-shopping-cart"></i></span>

            <b-dropdown-item class="cart" v-for="cart in carts" :key="cart.id">
              <span class="item">
                <span class="item-left" @click="toProduct(cart.product_id)">
                  <img :src="cart.product_image" style="width: 70px;height: 50px;" alt="" />
                  <span class="item-info">
                    <span>{{cart.product_name}}</span>
                    <span>${{cart.selling_price}} x {{cart.quantity}}</span>
                  </span>
                </span>
                <span class="item-right">
                  <button class="btn btn-xs btn-danger pull-right" @click="removeProductFromCart(carts, cart.product_id)">X</button>
                </span>
              </span>
            </b-dropdown-item>

            <b-dropdown-item @click="toCart">
              <b-button block variant="primary" v-if="carts.length > 0">View Cart</b-button>
            </b-dropdown-item>

            <div class="text-center" v-if="carts.length < 1">
              <p>Nothing in Cart</p>
            </div>

          </b-nav-item-dropdown>

          <!-- User -->
          <b-nav-item-dropdown right v-show="isLogin">
            <template slot="button-content" class="text-uppercase"><em>{{username}}</em></template>
            <b-dropdown-item @click="toMyOrders">My Orders</b-dropdown-item>
            <b-dropdown-item @click="toMyProducts">My Products</b-dropdown-item>
            <b-dropdown-item @click="deleteAccount">Delete Account</b-dropdown-item>
            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
import UserAPI from "@/api/User";
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