<template>
  <div>
    <div class="container">
        <br>
        <!-- Product Items -->
        <div class="row">

          <div v-for="product in products" :key="product.id" class="col-lg-4 col-md-6 mb-3">
            <div class="card">

              <!-- image -->
              <a :href="'/product/'+product._id"><img class="card-img-top" :src="product.images[0].path" alt=""></a>

              <!-- card body -->
              <div class="card-body">
                <h4 class="card-title">
                  <a :href="'/product/'+product._id">{{product.name}}</a>
                </h4>
                <p class="card-text">{{product.description}}</p>
              </div>
              <!-- card footer -->
              <div class="card-footer">
                <h5>$ {{product.selling_price}}</h5>
              </div>

            </div>
          </div>

        </div>
    </div>
  </div>
</template>

<script>
import ProductAPI from '@/api/Product'
  export default {
    data() {
      return {
        products: []
      }
    },
    methods:{
      async loadProducts(){
        const res = await ProductAPI.getAllProduct()
        if (res.data) {
          console.log("load products success", res.data)

          this.products = res.data

        } else {
          console.log('Fail', res.err);
        }
      }
    },
    mounted(){
      this.loadProducts()
    },
  }
</script>

<style scoped>

</style>