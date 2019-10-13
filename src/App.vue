<template>
  <v-app id="app">
    <app-header></app-header>
    <div class="container--fluid">
      <app-home></app-home>
    </div>
    <!--<app-footer></app-footer>-->
  </v-app>
</template>

<script>
  import Header from "@/components/Header";
  // import Footer from "@/components/Footer";
  import Home from "@/components/Home";

  export default {
    // created() {
    // 	this.$store.dispatch('fetchMovies')
    // },
    components: {
      'appHeader': Header,
      // 'appFooter': Footer,
      'appHome': Home
    }
  }
</script>
<style scoped>
  #app {
    background-color: aquamarine;
  }
</style>
