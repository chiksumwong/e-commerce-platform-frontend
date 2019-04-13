<template>

    <div class="container-fluid">
        <div class="container">

            <h2 class="text-center text-uppercase">Login</h2>
            <hr>

            <div class="row">
                <div class="col-md-3">
                </div>
                <div class="col-md-6">
                    <form role="form">
                        <fieldset>
                            <div class="form-group">
                                <input type="email" name="username" id="username" class="form-control input-lg"
                                    placeholder="username">
                            </div>
                            <div class="form-group">
                                <input type="password" name="password" id="password" class="form-control input-lg"
                                    placeholder="Password">
                            </div>
                            <div>
                                <input type="submit" class="btn btn-md btn-primary" value="Login">
                            </div>
                        </fieldset>
                    </form>
                </div>

                <div class="col-md-3">
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    export default {

    }
</script>


<style scoped>
    .container-fluid {
        padding: 50px;
    }

    .container {
        background-color: white;
        padding: 50px;
    }
</style>