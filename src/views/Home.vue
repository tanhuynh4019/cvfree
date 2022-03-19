<template>
  <div>
    <Search />
    <CompanyVip />
    <CreateCV />
    <div
      class="mt-10"
      style="
        background: transparent linear-gradient(179deg, #edfff5, #fff) 0 0
          no-repeat padding-box;
      "
    >
      <ListFeatureJobs />
    </div>
    <SelfGrowth />
    <Download />
    <AboutUs />
    <AchievementAward />
  </div>
</template>

<script>
import Search from "../components/Home/Search.vue";
import CreateCV from "../components/Home/CreateCV.vue";
import SelfGrowth from "../components/Home/SelfGrowth.vue";
import Download from "../components/Home/Download.vue";
import AboutUs from "../components/Home/AboutUs.vue";
import AchievementAward from "../components/Home/AchievementAward.vue";
import ListFeatureJobs from "../components/Job/ListFeatureJobs.vue";
import CompanyVip from "../components/Home/CompanyVip.vue";
export default {
  name: "Home",
  components: {
    Search,
    CreateCV,
    SelfGrowth,
    Download,
    AboutUs,
    AchievementAward,
    ListFeatureJobs,
    CompanyVip
  },
};
</script>
