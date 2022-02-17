<template>
  <v-app id="inspire">
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
.v-btn {
  text-transform: none;
}
.container {
  max-width: 1200px;
}
</style>
