<template>
  <div class="container">
    <br>
    <div class="card">
      <div class="card-header bg-primary text-light">
        <i class="fas fa-clipboard-list"></i>
        Order List
      </div>

      <div class="card-body">
        <b-tabs content-class="mt-3">
          <b-tab title="All Order" active>
            <AllOrder/>
          </b-tab>
          <b-tab title="Processing">
            <Processing/>
          </b-tab>
          <b-tab title="Delivered">
            <Delivered/>
          </b-tab>
          <b-tab title="Receipted">
            <Receipted/>
          </b-tab>
        </b-tabs>
      </div>
      
    </div>
  </div>
</template>

<script>
import AllOrder from "@/components/my-order/AllOrder";
import Processing from "@/components/my-order/Processing";
import Delivered from "@/components/my-order/Delivered";
import Receipted from "@/components/my-order/Receipted";

export default {
  components: {
    AllOrder,
    Processing,
    Delivered,
    Receipted
  }
};
</script>

<style scoped>
</style>