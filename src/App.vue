<template>
  <v-app id="inspire">
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
