<template>
 <div>
    <b-table striped hover :fields="fields" :items="orders" v-if="orders.length > 0"></b-table>

    <b-card class="text-center" v-if="orders.length < 1">
      <div class="bg-secondary text-light">Not Any Order !</div>
    </b-card>
  </div>
</template>

<script>
import OrderAPI from "@/api/Order";

export default {
  data() {
    return {
      orders: [],
      fields: [
        "product_name",
        "quantity",
        {
          key: "order_states",
          label: "States",
          formatter: value => {
            if (value == 1) {
              return "Processing";
            } else if (value == 2) {
              return "Delivered";
            } else {
              return "Receipted";
            }
          }
        }
      ]
    };
  },
  methods: {
    async loadOrders() {
      const user_id = this.$store.state.user.user_id;
      const res = await OrderAPI.getOrdersByBuyerId(user_id);

      if (res.data) {
        // console.log("myorder processing",res.data);

        let products = [];

        res.data.forEach(order => {
          order.products.forEach(product => {
            products.push(product);
          });
        });

        // console.log("products in orders", products)

        let filterProcessOrder = products.filter(function(item, index, array) {
          return item.order_states == 1;
        });

        this.orders = filterProcessOrder;
      } else {
        console.log("Fail", res.err);
      }
    },

    orderStates(statesNumber) {
      if (statesNumber == 1) {
        return "Processing";
      } else if (statesNumber == 2) {
        return "Delivered";
      } else {
        return "Receipted";
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