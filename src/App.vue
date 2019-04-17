<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
  import Navbar from '@/components/layout/Navbar.vue'
  import Footer from '@/components/layout/Footer.vue'

  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>

<style>
  #app {
    min-height: 100%;
    position: relative;
    padding-bottom: 60px;
  }
</style>