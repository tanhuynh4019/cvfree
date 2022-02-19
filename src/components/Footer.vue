<template>
  <div class="footer">
    <KeywordSeo />
    <Menu />
    <Bottom />
  </div>
</template>

<script>
import Bottom from "../components/Footer/Bottom.vue";
import Menu from "../components/Footer/Menu.vue";
import KeywordSeo from "../components/Footer/KeywordSeo.vue";
export default {
  name: "Footer",
  components: {
    Menu,
    Bottom,
    KeywordSeo,
  },
};
</script>

<style></style>
