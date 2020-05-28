<template>
  <v-app id="inspire">
      <Navbar />
      <router-view></router-view>     
  </v-app>

</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>

<style>
  body {
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  }
</style>
