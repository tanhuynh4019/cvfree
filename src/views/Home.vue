<template>
  <div>
    <Search />
    <CreateCV />
    <ListFeatureJobs />
    <SelfGrowth />
    <Download />
    <AboutUs />
    <AchievementAward />
  </div>
</template>

<script>
import Search from "../components/Home/Search.vue";
import CreateCV from "../components/Home/CreateCV.vue";
import SelfGrowth from "../components/Home/SelfGrowth.vue"
import Download from "../components/Home/Download.vue";
import AboutUs from "../components/Home/AboutUs.vue"
import AchievementAward from "../components/Home/AchievementAward.vue"
import ListFeatureJobs from "../components/Home/ListFeatureJobs.vue"
export default {
  name: "Home",
  components: {
    Search,
    CreateCV,
    SelfGrowth,
    Download,
    AboutUs,
    AchievementAward,
    ListFeatureJobs
  },
};
</script>
