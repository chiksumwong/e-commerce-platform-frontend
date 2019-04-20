<template>
  <div>
    <b-table striped hover :items="orders"></b-table>

    <!-- 
    <div v-for="order in orders" :key="order.id">


      <div v-for="product in order.products" :key="product.id">
          <p>Product Name: {{product.product_name}}</p>
          <p>Quantity: {{product.quantity}}</p>
          <P>Address : {{order.address}}</P>
          <P>Addressee: {{order.addressee}}</P>
          <P>Phone Number :{{order.phone_number}}</P>
          <P>Order States : <b-button variant="success" @click="updateState(product.order_id)">{{orderStates(product.order_states)}}</b-button></P>
          <hr/>
      </div>
          
    </div>-->
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
      const seller_id = this.$store.state.user.user_id;
      const res = await OrderAPI.getOrderBySellerId(seller_id);

      if (res.data) {
        // console.log("myorder processing",res.data);

        let products = []

        res.data.forEach(order => {
          order.products.forEach(product => {
            products.push(product)
          });
        });

        // console.log("products in orders", products)

        let filterProcessOrder = products.filter(function(item, index, array){
            return item.order_states == 1
        })

        this.orders = filterProcessOrder
      } else {
        console.log("Fail", res.err);
      }
    },

    async updateOrderStates(){
      let order_id = ""
      const payload = {
        _id: product_id,
        order_states: 2
      }

      const res = await OrderAPI.updateOrderStates(order_id, payload);
    },

    orderStates(statesNumber) {
      if (statesNumber == 1) {
        return "Processing";
      } else if (statesNumber == 2) {
        return "Delivered";
      } else {
        return "Receipted";
      }
    },
    updateState(order_id) {}
  },
  mounted() {
    this.loadOrders();
  }
};
</script>

<style>
</style>