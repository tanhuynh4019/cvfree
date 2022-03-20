<template>
  <div>
    <v-container>
      <h3>Việc làm phổ biến</h3>
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="(job, i) in jobPopulas" :key="i">
          <v-menu
            style="width: 300px !important"
            open-on-hover
            :close-on-content-click="false"
            offset-x
          >
            <template v-slot:activator="{ on, attrs }">
              <v-card
                height="320"
                v-bind="attrs"
                v-on="on"
                link
                style="box-shadow: 0px 0px 0px 0px"
                class="border item-job"
                :to="{name: 'DetailsJob', params: { slug: job.slug}}"
              >
                <div style="padding: 30px 50px">
                  <center>
                    <img height="60" width="90" :src="job.idCompany.srcLogo" />
                  </center>
                </div>

                <v-card-title
                  :style="`color: ${job.idCompany.color}; font-size: 16px`"
                  >{{ job.name.length > 40 ? `${job.name.substring(0, 40)}...` : job.name }}</v-card-title
                >

                <v-card-text>
                  <div>
                    <router-link
                      style="text-decoration: none"
                      class="blue-grey--text text--darken-4"
                      :to="{
                        name: 'DetailsCompanies',
                        params: { slug: job.idCompany.slug },
                      }"
                      ><b>{{ job.idCompany.name }}</b></router-link
                    >
                  </div>
                  Cập nhật: Hôm nay - Bạn còn <b>27</b> ngày để ứng tuyển
                  <div class="mt-4">
                    <div>
                      <v-chip
                        v-if="job.salaryType == 'Trong khoảng'"
                        label
                        outlined
                        color="#004D40"
                      >
                        Từ {{ job.salaryTo }} đến {{ job.salaryfrom }} &nbsp;
                        <span v-if="job.currency == 'VNĐ'">triệu</span>
                        <span v-if="job.currency == '$'">$</span>
                      </v-chip>
                      <v-chip label outlined color="#004D40" class="ml-2">
                        {{ job.workLocation }}
                      </v-chip>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </template>

            <v-card>
              <div style="padding: 20px; font-size: 14px">
                <h6 class="red--text text--darken-4">{{ job.name }}</h6>
                <h6>Quyền lợi</h6>
                <div v-html="job.benefit"></div>
              </div>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="primary" text @click="menu = false">
                  Chi tiết
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Job from "../../apis/job.api";
export default {
  name: "ListFeatureJobs",
  async created() {
    this.jobPopulas = await Job.getAllJobStatus("populas");
  },
  data() {
    return {
      jobPopulas: [],
    };
  },
};
</script>

<style>
.item-job:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px !important;
}
</style>
