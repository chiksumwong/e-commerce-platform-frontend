<template>
  <div>
    <Navbar />
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from "@/components/Layout/WebsiteLayout/Navbar";
// import Footer from "@/components/Layout/WebsiteLayout/Footer";

export default {
  components: {
    Navbar
    // Footer
  }
};
</script>

