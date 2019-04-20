<template>
    <div class="container">
        <br>
        <div class="card">
            <div class="card-body">


                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6">
                        <address>
                            <strong>E-Commerce PlatForm</strong><br />
                            <i class="fas fa-envelope-square"></i><a href=""> contectplateform@gmail.com</a><br />
                            <i class="fas fa-phone-square"> +852 5555-2368</i>
                        </address>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 text-right">
                        <p>
                            <em>Date: 20th April, 2019</em>
                        </p>
                        <p>
                            <em>Receipt #: 34522677W</em>
                        </p>
                    </div>
                </div>


                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="text-center">
                            <h1>Receipt</h1>
                        </div>



                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>#</th>
                                    <th class="text-center">Price</th>
                                    <th class="text-center">Total</th>
                                </tr>
                            </thead>
                            <tbody>


                                <tr v-for="cart in cartsWithSubTotal" :key="cart.id">
                                    <td class="col-md-9"><h4><em>{{cart.cart.product_name}}</em></h4>
                                    </td>
                                    <td class="col-md-1" style="text-align: center"> {{cart.cart.quantity}} </td>
                                    <td class="col-md-1 text-center">{{cart.cart.selling_price}}</td>
                                    <td class="col-md-1 text-center">{{cart.subtotal}}</td>
                                </tr>


                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td class="text-right">
                                        <h4><strong>Total: </strong></h4>
                                    </td>
                                    <td class="text-center text-danger">
                                        <h4><strong>${{total}}</strong></h4>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                        <button type="button" class="btn btn-success btn-lg btn-block text-uppercase" @click="goHome">continue to shop <i class="fas fa-store"></i></button>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            goHome(){
                this.$store.dispatch('cart/clearCarts')
                this.$router.push('/')
            },
            computeSubTotal(cart) {
                return cart.selling_price * cart.quantity;
            },
        },
        computed:{
            cartsWithSubTotal() {
                return this.$store.state.cart.carts.map(cart => ({
                    cart,
                    subtotal: this.computeSubTotal(cart)
                }))
            },
            total(){
                return this.$store.state.cart.total
            }
        }
    }
</script>

<style>

</style>