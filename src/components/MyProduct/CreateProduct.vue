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

  <!-- Image upload -->
  <div class="form-group">
      <label for="image">Product image</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-camera-retro"></i>
          </span>
        </div>
        <input type="file" @change="onFileSelected">
      </div>
    </div>


    <div class="form-group">
      <button type="button" class="btn btn-success btn-block" @click="uploadImage">CREATE</button>
    </div>
  </form>
</template>

<script>
import ProductAPI from "@/api/Product";
import axios from 'axios';

export default {
  data() {
    return {
      name: "",
      description: "",
      price: null,
      image: "",
      sellectedFile:null
    };
  },
  methods: {
    onFileSelected(event){
      this.sellectedFile = event.target.files[0]
    },

    uploadImage(){
      var self = this;
      const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dvfyipg5k/image/upload'
      const CLOUDINARY_UPLOAD_PRESET = 'drfll21r'

      let formData = new FormData();
      formData.append('file', this.sellectedFile);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      let image_url;

      axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data:formData
      }).then(function(res){
        console.log(res);   
        console.log("image url :", res.data.url);  
        self.createProduct(res.data.url)
      }).catch(function(err){
        console.log(err);
      });
    },

     async createProduct(image_url) {   

      let user_id = this.$store.state.user.user_id;
      const payload = {
        name: this.name,
        description: this.description,
        selling_price: this.price,
        marked_price: this.price,
        seller: user_id,
        images: [{ path: image_url }]
      };

      const res = await ProductAPI.createProduct(payload);

      if (res.data) {
        console.log("create product success", res.data);
         this.$notice.success({
              title: 'Prodcut Created',
          })
        this.$router.push("/");
      } else {
        console.log("Fail", res.err);
      }
    },


  }
};
</script>

<style>
</style>
