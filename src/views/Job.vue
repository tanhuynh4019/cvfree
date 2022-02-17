<template>
  <div>
    <Search />
    <div style="background-color: #f0f0f0">
      <BannerVip />
    </div>
  </div>
</template>

<script>
import Search from "../components/Job/Search.vue"
import BannerVip from "../components/Job/BannerVip.vue"
export default {
  name: "Job",
  components: {
    Search,
    BannerVip
  },
  data() {
    return {
    };
  },
};
</script>

<style></style>
