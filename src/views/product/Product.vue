<template>
  <div class="container">

    <!-- Portfolio Item Heading -->
    <h1 class="my-4">{{product.name}}
      <small>${{product.selling_price}}</small>
    </h1>

    <!-- Portfolio Item Row -->
    <div class="row">

      <div class="col-md-8">
        <img class="img-fluid" :src="product.images[0].path" alt="">
      </div>

      <div class="col-md-4">
        <h3 class="my-3">Description:</h3>
        <p>{{product.description}}</p>
      </div>

    </div>
    <!-- /.row -->

    <!-- Related Projects Row -->
    <h3 class="my-4">More Picture</h3>

    <div class="row">

      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" :src="product.images[0].path" alt="">
        </a>
      </div>

      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" :src="product.images[0].path" alt="">
        </a>
      </div>

      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" :src="product.images[0].path" alt="">
        </a>
      </div>

      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" :src="product.images[0].path" alt="">
        </a>
      </div>

    </div>
    <!-- /.row -->
    <b-input-group prepend="Quantity:" class="mt-2" size="lg">
      <b-form-input class="text-right" v-model="quantity"></b-form-input>
      <b-input-group-append>
        <b-button block variant="success" v-show="isLogin" @click="addToCart(product._id, quantity)">Add To Cart</b-button>
      </b-input-group-append>
    </b-input-group>
     
     <br/><br/>

  </div>
  <!-- /.container -->
</template>

<script>
import ProductAPI from '@/api/Product'
  export default {
  data() {
      return {
        product: {
          images:[{
            path:''
          }]
        },
        quantity:1
      }
  },
  methods:{
      async loadProduct(){
        const res = await ProductAPI.getProductById(this.$route.params.id)
        if (res.data) {
          console.log("load product success", res.data)

          this.product = res.data

        } else {
          console.log('Fail', res.err);
        }
      },

      async addToCart(productId, quantity){
        let userId = this.$store.state.user.user_id

        const res = await ProductAPI.getProductById(productId)

        let productName = ""
        let productImage = ""
        let sellingPrice = 0
        let seller = ""

        if(res.data){
          productName = res.data.name 
          productImage = res.data.images[0].path
          sellingPrice = res.data.selling_price
          seller = res.data.seller
        }

        const payload = {
          user_id: userId,
          product_id: productId,
          product_name:productName,
          product_image:productImage,
          selling_price:sellingPrice,
          seller: seller,
          quantity: quantity,
          is_active: 1
        }

        console.log("add to cart payload",payload)

        const cart_res = await ProductAPI.addProductToCart(payload)

        if(cart_res.data){
          console.log("add to cart success", cart_res.data)
          // update carts
          this.$store.dispatch('cart/getCartsByUserId', cart_res.data._id);
        }
      }
    },
    mounted(){
      this.loadProduct()
    },
    computed: {
      isLogin() {
        return this.$store.state.user.status.isLogin
      }
    },
    watch:{
      '$route': 'loadProduct'
    }
  }
</script>

<style>

</style>