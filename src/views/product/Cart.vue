<template>
    <div class="container">
        <div class="card shopping-cart">

            <div class="card-header bg-primary text-light">
                <i class="fa fa-shopping-cart"></i>
                Shipping cart
            </div>


            <div class="card-body">

                <!-- PRODUCT -->
                <div class="row p-1" v-for="cart in carts" :key="cart.id">

                    <!-- Product Image -->
                    <div class="col-12 col-sm-12 col-md-2 text-center">
                        <img class="img-responsive" :src="cart.product_image" alt="prewiew" width="120" height="80">
                    </div>

                    <!-- Product Name and Description -->
                    <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                        <h4 class="product-name"><strong>{{cart.product_name}}</strong></h4>
                    </div>

                    <!-- Prices Quantity Delete -->
                    <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">

                        <!-- Prices -->
                        <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 10px">
                            <h6><strong>${{cart.selling_price}} <span class="text-muted">X</span></strong></h6>
                        </div>

                        <!-- Quantity -->
                        <div class="col-4 col-sm-4 col-md-4">
                            <div class="quantity">
                                <input type="button" value="+" class="plus" @click="plusProduct(carts, cart.product_id)">
                                <input type="text" :value="cart.quantity" class="qty" disabled size="4">
                                <input type="button" value="-" class="minus" @click="minusProduct(carts, cart.product_id)">
                            </div>
                        </div>

                        <!-- Delete Button -->
                        <div class="col-2 col-sm-2 col-md-2 text-right">
                            <button type="button" class="btn btn-outline-danger btn-xs" @click="removeProductFromCart(carts, cart.product_id)">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>

                    </div>
                </div>


                <hr>
                <!-- END PRODUCT -->


                <div class="float-right" style="margin: 5px">
                    Total price: <b>HK {{total}}</b>
                </div>

            </div>

            <div class="card-footer">

                <div class="float-right" style="margin: 10px">
                    <a href="/payment" class="btn btn-success float-right">Checkout</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            plusProduct(carts, productId){
                const index = carts.map(e => e.product_id).indexOf(productId);
                let quantity = carts[index].quantity
                carts[index].quantity = quantity + 1
                this.$store.dispatch('cart/updateCarts', carts)
            },
            minusProduct(carts, productId){
                const index = carts.map(e => e.product_id).indexOf(productId);
                let quantity = carts[index].quantity
                carts[index].quantity = quantity - 1
                if( carts[index].quantity == 0){
                    this.removeProductFromCart(carts, productId)
                }else{
                    this.$store.dispatch('cart/updateCarts', carts)
                }
            },
            removeProductFromCart(carts, productId) {
                const index = carts.map(e => e.product_id).indexOf(productId);
                carts.splice(index, 1);
                this.$store.dispatch('cart/updateCarts', carts)
            }
        },
        computed:{
            carts() {
                console.log('shopping carts', this.$store.state.cart.carts)
                return this.$store.state.cart.carts
            },
            total(){
                let sum = 0;
                let carts = this.$store.state.cart.carts;
                carts.forEach(cart => {
                    sum += (parseFloat(cart.selling_price) * parseFloat(cart.quantity));
                });
                return sum;
            }
        },
        watch:{
            carts(){
                if (this.$store.state.cart.carts.length < 1){
                    this.$router.push('/')
                }
            }
        }
    }
</script>

<style scoped>
.quantity {
    float: left;
    margin-right: 15px;
    background-color: #eee;
    position: relative;
    width: 80px;
    overflow: hidden
}

.quantity input {
    margin: 0;
    text-align: center;
    width: 15px;
    height: 15px;
    padding: 0;
    float: right;
    color: #000;
    font-size: 20px;
    border: 0;
    outline: 0;
    background-color: #F6F6F6
}

.quantity input.qty {
    position: relative;
    border: 0;
    width: 100%;
    height: 40px;
    padding: 10px 25px 10px 10px;
    text-align: center;
    font-weight: 400;
    font-size: 15px;
    border-radius: 0;
    background-clip: padding-box
}

.quantity .minus, .quantity .plus {
    line-height: 0;
    background-clip: padding-box;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    -webkit-background-size: 6px 30px;
    -moz-background-size: 6px 30px;
    color: #bbb;
    font-size: 20px;
    position: absolute;
    height: 50%;
    border: 0;
    right: 0;
    padding: 0;
    width: 25px;
    z-index: 3
}

.quantity .minus:hover, .quantity .plus:hover {
    background-color: #dad8da
}

.quantity .minus {
    bottom: 0
}
.shopping-cart {
    margin-top: 20px;
}
</style>