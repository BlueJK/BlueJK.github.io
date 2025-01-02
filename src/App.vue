<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <Navbar />
  </header>
  <div class="container-fluid">
    <RouterView />
  </div>
  
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<style scoped>
.container-bg-color {
  background-color: #8c9baa;
}
.container-color {
  color: #fff;
}
</style>
