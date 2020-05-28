<template>
  <v-app id="inspire">
      <Navbar />
      <v-content class="mx-4 mb-4">
        <router-view></router-view>  
      </v-content>
           
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
