<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="name">Product Name</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-box"></i>
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            name="name"
            id="name"
            placeholder="Enter Product Name"
            v-model="product.name"
          >
        </div>
      </div>

      <div class="form-group">
        <label for="description">Product Description</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-file-alt"></i>
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            name="description"
            id="description"
            placeholder="Enter Product Description"
            v-model="product.description"
          >
        </div>
      </div>

      <div class="form-group">
        <label for="price">Product Price</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-dollar-sign"></i>
            </span>
          </div>
          <input
            type="number"
            class="form-control"
            name="price"
            id="price"
            placeholder="Enter Product Price"
            v-model="product.selling_price"
          >
        </div>
      </div>

      <div class="form-group">
        <button type="button" class="btn btn-success btn-block" @click="UpdateProduct">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import ProductAPI from "@/api/Product";

export default {
  data() {
    return {
      product: {
        images: [
          {
            path: ""
          }
        ]
      }
    };
  },
  methods: {
    onFileSelected(event) {
      this.sellectedFile = event.target.files[0];
    },
    async loadProducts() {
      const res = await ProductAPI.getProductById(this.$route.params.id);

      if (res.data) {
        console.log("load products update success", res.data);

        this.product = res.data;
      } else {
        console.log("Fail", res.err);
      }
    },
    async UpdateProduct() {
      let user_id = this.$store.state.user.user_id;
      let product_id = this.$route.params.id;

      const payload = {
        name: this.product.name,
        description: this.product.description,
        selling_price: this.product.selling_price,
        marked_price: this.product.selling_price,
        seller: user_id,
        images: [{ path: this.product.images[0].path }]
      };

      console.log("load payload", payload);

      const res = await ProductAPI.updateProductById(product_id, payload);

      if (res.data) {
        console.log("create product success", res.data);
        this.$notice.success({
          title: 'Product Updated',
      })
        this.$router.push("/myproduct");
      } else {
        console.log("Fail", res.err);
      }
    }
  },
  mounted() {
    this.loadProducts();
  }
};
</script>

<style>
</style>
