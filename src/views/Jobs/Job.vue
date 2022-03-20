<template>
  <div>
    <Search />
    <div style="background-color: #f0f0f0">
      <BannerVip />
      <ListFeatureJobs />
      <BannerCenter />
      <v-container>
        <v-row>
          <v-col cols="12" sm="8">
            <ListAttractiveJobs />
          </v-col>
          <v-col cols="12" sm="4">
            <BannerRight />
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <ListStatusJobs
              :icon="'mdi-cash'"
              :name="'VIỆC LÀM LƯƠNG CAO'"
              :linkMore="'/'"
              :status="'salary-high'"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <ListStatusJobs
              :icon="'mdi-cash'"
              :name="'VIỆC LÀM QUẢN LÝ'"
              :linkMore="'/'"
              :status="'manager'"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <ListStatusJobs
              :icon="'mdi-cash'"
              :name="'VIỆC LÀM IT'"
              :linkMore="'/'"
              :status="'it'"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <ListStatusJobs
              :icon="'mdi-cash'"
              :name="'VIỆC LÀM BÁN THỜI GIAN'"
              :linkMore="'/'"
              :status="'partime'"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <ListStatusJobs
              :icon="'mdi-cash'"
              :name="'TUYỂN THỰC TẬP SINH'"
              :linkMore="'/'"
              :status="'intern'"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <ListStatusJobs
              :icon="'mdi-cash'"
              :name="'VIỆC LÀM MỚI'"
              :linkMore="'/'"
              :status="'new'"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <ListTopCompanies />
    </v-container>
    <v-container>
      <Hotline />
    </v-container>
    <v-container>
      <Content />
    </v-container>
    <v-container>
      <Categories />
    </v-container>
  </div>
</template>

<script>
import Search from "../../components/Job/Search.vue";
import BannerVip from "../../components/Banners/BannerVip.vue";
import BannerCenter from "../../components/Banners/BannerCenter.vue";
import BannerRight from "../../components/Banners/BannerRight.vue";
import ListFeatureJobs from "../../components/Job/ListFeatureJobs.vue";
import ListAttractiveJobs from "../../components/Job/ListAttractiveJobs.vue";
import ListStatusJobs from "../../components/Job/ListStatusJobs.vue";
import ListTopCompanies from "../../components/Companies/ListTopCompanies.vue";
import Hotline from "../../components/Contact/Hotline.vue";
import Content from "../../components/Seo/Content.vue";
import Categories from "../../components/Seo/Categories.vue";
export default {
  name: "Job",
  components: {
    Search,
    BannerVip,
    ListFeatureJobs,
    BannerCenter,
    ListAttractiveJobs,
    BannerRight,
    ListStatusJobs,
    ListTopCompanies,
    Hotline,
    Content,
    Categories
  },
  data() {
    return {};
  },
};
</script>

<style></style>
