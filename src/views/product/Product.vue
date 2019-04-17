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

  </div>
  <!-- /.container -->
</template>

<script>
import ProductAPI from '@/api/Product.js'
  export default {
  data() {
      return {
        product: {
          images:[{
            path:''
          }]
        }
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
      }
    },
    mounted(){
      this.loadProduct()
    }
  }
</script>

<style>

</style>