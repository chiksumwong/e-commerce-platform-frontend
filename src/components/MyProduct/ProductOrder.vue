<template>
  <div>
    <b-table striped hover :fields="fields" :items="orders" v-if="orders.length > 0">
      <template slot="actions" slot-scope="row">
        <b-button size="sm" @click="updateOrderStates(row.item)" class="mr-1">Delivered</b-button>
      </template>
    </b-table>

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
        },
        { key: "actions", label: "Actions" }
      ]
    };
  },
  methods: {
    async loadOrders() {
      const seller_id = this.$store.state.user.user_id;
      const res = await OrderAPI.getOrderBySellerId(seller_id);

      if (res.data) {
        // console.log("myorder processing",res.data);

        let products = [];

        res.data.forEach(order => {
          order.products.forEach(product => {
            products.push(product);
          });
        });

        let filterProcessOrder = products.filter(function(item, index, array) {
          return item.order_states == 1;
        });

        console.log("orders :", filterProcessOrder);

        this.orders = filterProcessOrder;
      } else {
        console.log("Fail", res.err);
      }
    },

    async updateOrderStates(item) {
      let productId = item._id;
      const payload = {
        order_states: 2
      };

      const res = await OrderAPI.updateOrderStates(productId, payload);

      if (res.data) {
        this.loadOrders();
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