<template>
  <div>
    <div v-if="products.length > 0">
      <div class="row p-1" v-for="product in products" :key="product.id">
        <div class="col-12 col-sm-12 col-md-2 text-center">
          <img
            class="img-responsive"
            :src="product.images[0].path"
            alt="prewiew"
            width="120"
            height="80"
          >
        </div>

        <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
          <h4 class="product-name">
            <router-link :to="{ path: '/product/' + product._id }">
              <strong>{{product.name}}</strong>
            </router-link>
          </h4>
        </div>

        <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
          <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 10px">
            <h6>
              <strong>${{product.selling_price}}</strong>
            </h6>
          </div>
           <!-- Update Button -->
          <div class="col-2 col-sm-2 col-md-2 text-right">
            <button type="button" class="btn btn-outline-success btn-xs" @click="toUpdateProduct(product._id)">
              <i class="fas fa-edit" aria-hidden="true"></i>
            </button>
          </div>

          <!-- Delete Button -->
          <div class="col-2 col-sm-2 col-md-2 text-right">
            <button type="button" class="btn btn-outline-danger btn-xs" @click="deleteProduct(product._id)">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <b-card class="text-center" v-if="products.length < 1">
        <div class="bg-secondary text-light">Not Any Product !</div>
      </b-card>
    </div>
  </div>
</template>

<script>
import ProductAPI from "@/api/Product";

export default {
  data() {
    return {
      products: [{ images: [{ path: "" }] }]
    };
  },
  methods: {
    async loadProducts() {
      const user_id = this.$store.state.user.user_id;
      const res = await ProductAPI.getProductsBySellerId(user_id);

      if (res.data) {
        // console.log("load products by user id success", res.data);

        this.products = res.data;
      } else {
        console.log("Fail", res.err);
      }
    },
    async deleteProduct(product_id) {
      const res = await ProductAPI.deleteProductById(product_id);
      this.$notice.error({
          title: 'Product Deleted',
      })
      this.loadProducts();
    },
    toUpdateProduct(product_id){
      this.$router.push('/product/update/' + product_id)
    }
  },
  mounted() {
    this.loadProducts();
  }
};
</script>

<style>
</style>
