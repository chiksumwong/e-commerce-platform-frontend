<template>
  <div class="container">
    <br>

    <div class="card">
      <div class="card-header bg-primary text-light">
        <i class="fas fa-shipping-fast"></i>
        Shipping Information
      </div>

      <div class="card-body">
        <form role="form">

          <div class="form-group">
            <label for="address">Delivery Addressee</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                name="address"
                v-model="addressee"
                placeholder
                required
              >
            </div>
          </div>

          <div class="form-group">
            <label for="address">Delivery Address</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-map-marked-alt"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                name="address"
                v-model="address"
                placeholder
                required
              >
            </div>
          </div>

          <div class="form-group">
            <label for="phone">Phone Number</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-phone"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                name="phone"
                v-model="phone"
                placeholder
                required
              >
            </div>
          </div>
        </form>
      </div>
    </div>

    <br>

    <div class="card">
      <div class="card-header bg-primary text-light">
        <i class="fas fa-cash-register"></i>
        Payment
      </div>

      <div class="card-body">
        <b-tabs>
          <b-tab active>
            <template slot="title">
              <i class="fa fa-credit-card"></i> Credit Card
            </template>
            <div class="p-3">
              <form role="form">
                <div class="form-group">
                  <label for="username">Full name (on the card)</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fa fa-user"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control" name="username" placeholder required>
                  </div>
                </div>

                <div class="form-group">
                  <label for="cardNumber">Card number</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fa fa-credit-card"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control" name="cardNumber" placeholder>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-8">
                    <div class="form-group">
                      <label>
                        <span class="hidden-xs">Expiration</span>
                      </label>
                      <div class="form-inline">
                        <b-form-select
                          v-model="month"
                          :options="monthOptions"
                          class="form-control"
                          style="width:45%"
                        ></b-form-select>

                        <span style="width:10%; text-align: center">/</span>

                        <b-form-select
                          v-model="year"
                          :options="yearOptions"
                          class="form-control"
                          style="width:45%"
                        ></b-form-select>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label
                        data-toggle="tooltip"
                        title
                        data-original-title="3 digits code on back side of the card"
                      >
                        CVV
                        <i class="fa fa-question-circle"></i>
                      </label>
                      <input class="form-control" required type="text">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </b-tab>

          <b-tab>
            <template slot="title">
              <i class="fab fa-paypal"></i> Paypal
            </template>
            <div class="p-3">
              <p>Paypal is easiest way to pay online</p>
              <p>
                <button type="button" class="btn btn-primary" @click="PaymentCompleted">
                  <i class="fab fa-paypal"></i> Log in my
                  Paypal
                </button>
              </p>
              <p>
                <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>

    <br>

    <div class="card">
      <div class="card-body">
        <button
          class="subscribe btn btn-primary btn-block"
          type="button"
          @click="PaymentCompleted"
        >Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
import OrderAPI from "@/api/Order";
import ProductAPI from "@/api/Product";
export default {
  data() {
    return {
      month: null,
      year: null,
      monthOptions: [
        { value: null, text: "MM" },
        { value: "1", text: "01 - Janiary" },
        { value: "2", text: "02 - February" },
        { value: "3", text: "03 - February" }
      ],
      yearOptions: [
        { value: null, text: "YY" },
        { value: "2020", text: "2020" },
        { value: "2021", text: "2021" },
        { value: "2022", text: "2022" }
      ],
      phone: "",
      addressee: "",
      address: ""
    };
  },
  methods: {
    PaymentCompleted() {
      this.addOrder();
      this.$router.push("/payment/completed");
    },

    async addOrder() {
      const carts = this.$store.state.cart.carts;

      const product_info = [];

      carts.forEach(cart => {
        let obj = {};
        obj.product_id = cart.product_id;
        obj.product_name = cart.product_name;
        obj.quantity = cart.quantity;
        obj.seller = cart.seller;
        obj.order_states = 1;
        product_info.push(obj);
      });

      let addressee = this.addressee;
      let address = this.address;
      let phone_number = this.phone;
      let total = this.$store.state.cart.total;
      let buyer_id = this.$store.state.user.user_id;

      const payload = {
        products: product_info,
        total_amount: total,
        addressee: addressee,
        address: address,
        phone_number: phone_number,
        buyer: buyer_id,
        payment_method: 1
      };
      const res = await OrderAPI.addOrder(payload);
      if (res.data) {
        console.log("order create success", res.data);
        this.$store.dispatch("payment/updatePayment", carts);
        this.$store.dispatch("payment/updateTotal", total);
        this.$store.dispatch("cart/clearCarts");
      } else {
        console.log("Fail", res.err);
      }
    }
  }
};
</script>

<style>
</style>