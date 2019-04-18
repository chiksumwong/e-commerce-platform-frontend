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
                                <tr>
                                    <td class="col-md-9"><em>Baked Rodopa Sheep Feta</em></h4>
                                    </td>
                                    <td class="col-md-1" style="text-align: center"> 2 </td>
                                    <td class="col-md-1 text-center">$13</td>
                                    <td class="col-md-1 text-center">$26</td>
                                </tr>
                                <tr>
                                    <td class="col-md-9"><em>Lebanese Cabbage Salad</em></h4>
                                    </td>
                                    <td class="col-md-1" style="text-align: center"> 1 </td>
                                    <td class="col-md-1 text-center">$8</td>
                                    <td class="col-md-1 text-center">$8</td>
                                </tr>
                                <tr>
                                    <td class="col-md-9"><em>Baked Tart with Thyme and Garlic</em></h4>
                                    </td>
                                    <td class="col-md-1" style="text-align: center"> 3 </td>
                                    <td class="col-md-1 text-center">$16</td>
                                    <td class="col-md-1 text-center">$48</td>
                                </tr>
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td class="text-right">
                                        <p>
                                            <strong>Subtotal: </strong>
                                        </p>
                                    </td>
                                    <td class="text-center">
                                        <p>
                                            <strong>$6.94</strong>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td class="text-right">
                                        <h4><strong>Total: </strong></h4>
                                    </td>
                                    <td class="text-center text-danger">
                                        <h4><strong>$31.53</strong></h4>
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
                this.$router.push('/')
            }
        }
    }
</script>

<style>

</style>