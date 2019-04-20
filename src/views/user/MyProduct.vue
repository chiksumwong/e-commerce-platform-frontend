<template>
  <div class="container">
    <br>
    <div class="card">
      <div class="card-header bg-primary text-light">
        <i class="fas fa-boxes"></i>
        Product List
      </div>

      <div class="card-body">
        <b-tabs content-class="mt-3">
          <b-tab title="All Products" active>
            <AllProduct/>
          </b-tab>
          <b-tab title="Product Order">
            <ProductOrder/>
          </b-tab>
          <b-tab title="Create Product">
            <CreateProduct/>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import ProductOrder from "@/components/MyProduct/ProductOrder";
import AllProduct from "@/components/MyProduct/AllProducts";
import CreateProduct from "@/components/MyProduct/CreateProduct";
export default {
  components: {
    ProductOrder,
    AllProduct,
    CreateProduct
  }
};
</script>

<style scoped>
</style>