<template>
  <div>
    <b-table striped hover :fields="fields" :items="orders"></b-table>
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
      const res = await OrderAPI.getOrderByUserId(user_id);

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
          return item.order_states == 3;
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
    this.$root.$on('statesChanged', () =>{
      this.loadOrders();
    })
  }
};
</script>

<style>
</style>