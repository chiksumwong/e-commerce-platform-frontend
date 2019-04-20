<template>
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
          v-model="name"
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
          v-model="description"
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
          v-model="price"
        >
      </div>
    </div>

    <div class="form-group">
      <label for="image">Product image</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-camera-retro"></i>
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          name="image"
          id="image"
          placeholder="Enter Product Image URL"
          v-model="image"
        >
      </div>
    </div>

    <div class="form-group">
      <button type="button" class="btn btn-success btn-block" @click="createProduct">CREATE</button>
    </div>
  </form>
</template>

<script>
import ProductAPI from "@/api/Product";

export default {
  data() {
    return {
      name: "",
      description: "",
      price: null,
      image: ""
    };
  },
  methods: {
    async createProduct() {
        let user_id = this.$store.state.user.user_id

         const payload = {
          name: this.name,
          description: this.description,
          selling_price: this.price,
          marked_price: this.price,
          seller: user_id,
          images:[{path:this.image}]
        }

        const res = await ProductAPI.createProduct(payload)

        if (res.data) {
          console.log("create product success", res.data)
          this.$router.push('/')
        } else {
          console.log('Fail', res.err);
        }
    }
  }
};
</script>

<style>
</style>
