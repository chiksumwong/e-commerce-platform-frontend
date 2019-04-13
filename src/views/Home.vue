<template>
  <div class="container">
    <div class="row">

      <div class="col-lg-3">
        <br>
        <div class="list-group">
          <a href="#" class="list-group-item">Clothing</a>
          <a href="#" class="list-group-item">Electronics</a>
          <a href="#" class="list-group-item">Backpacks</a>
        </div>
      </div>

      <div class="col-lg-9">
        <br>
        <!-- Product Items -->
        <div class="row">

          <div v-for="product in products" class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a :href="'/product/'+product.id"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a :href="'/product/'+product.id">{{product.name}}</a>
                </h4>
                <h5>{{product.price}}</h5>
                <p class="card-text">{{product.description}}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products: [{
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }, {
          id: '1',
          name: 'Item One',
          price: '$24.99',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }]
      }
    }

  }
</script>

<style scoped>

</style>