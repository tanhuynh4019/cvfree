<template>
  <div>
    <Search />
    <CreateCV />
  </div>
</template>

<script>
import Search from "../components/Home/Search.vue";
import CreateCV from "../components/Home/CreateCV.vue";
export default {
  name: "Home",
  components: {
    Search,
    CreateCV,
  },
};
</script>
