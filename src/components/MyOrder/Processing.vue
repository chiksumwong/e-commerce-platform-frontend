<template>
  <div>
    <div v-for="order in orders" :key="order.id">
      <div v-for="product in order.products" :key="product.id">
          <p>Product Name: {{product.product_name}}</p>
          <p>Quantity: {{product.quantity}}</p>
          <P>Address : {{order.address}}</P>
          <P>Addressee: {{order.addressee}}</P>
          <P>Phone Number :{{order.phone_number}}</P>
          <P>Order States :{{orderStates(order.order_states)}}</P>
          <hr/>
      </div>
          
    </div>
  </div>
</template>

<script>
import OrderAPI from "@/api/Order";

export default {
  data() {
    return {
      orders: []
    };
  },
  methods: {
    async loadOrders() {
      const user_id = this.$store.state.user.user_id;
      const res = await OrderAPI.getOrderByUserId(user_id);

      if (res.data) {
        console.log("load orders by user id success", res.data);

        let filterProcessOrder = res.data.filter(function(item, index, array){
            return item.order_states == 1
        })

        this.orders = filterProcessOrder;
      } else {
        console.log("Fail", res.err);
      }
    },

    orderStates(statesNumber){
      if(statesNumber == 1){
        return "Processing"
      }else if(statesNumber == 2){
        return "Delivered"
      }else{
        return "Receipted"
      }
    }
  },
  mounted() {
    this.loadOrders();
  }
};
</script>

<style>
</style>