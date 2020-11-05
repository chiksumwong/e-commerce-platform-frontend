<template>
  <div>
      <Navbar/>
      <!-- <Sidebar/> -->
      <router-view></router-view>
      <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/DashboardNavbar'
import Sidebar from '@/components/layout/DashboardSidebar'
import Footer from '@/components/layout/DashboardFooter'

export default {
  components:{
    Navbar,
    Sidebar,
    Footer
  }
}
</script>

<style>

</style>