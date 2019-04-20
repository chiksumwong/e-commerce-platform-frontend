<template>
  <div class="container">
    <br/>
    <div class="card">

      <div class="card-header bg-primary text-light">
        <i class="fas fa-clipboard-list"></i>
        Order List
      </div>

      <div class="card-body">

        <div class="row p-1" v-for="order in orders" :key="order.id">


          <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
            <h4 class="product-name">
              <strong>{{order.address}}</strong>
            </h4>
          </div>


        </div>
    </div>
  </div>
   </div>
</template>

<script>
import OrderAPI from '@/api/Order'

export default {
    data(){
        return{
            orders:[]
        }
    },
    methods:{
        async loadOrders(){
            const user_id = this.$store.state.user.user_id
            const res = await OrderAPI.getOrderByUserId(user_id)

            if (res.data) {
                console.log("load orders by user id success", res.data)

                this.orders = res.data

            } else {
                console.log('Fail', res.err);
            }
        }
    },
    mounted(){
        this.loadOrders()
    }
};
</script>

<style scoped>

</style>