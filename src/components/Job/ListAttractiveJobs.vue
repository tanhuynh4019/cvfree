<template>
  <div>
    <v-card style="border-radius: 5px 5px 0px 0px">
      <v-toolbar color="#fafafa">
        <v-toolbar-title class="font-weight-bold">
          <v-icon color="#004D40">mdi-cards-heart</v-icon>
          VIỆC LÀM HẤP DẪN
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text color="#004D40">
          <v-icon>mdi-chevron-double-right</v-icon>
          Xem tất cả
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-card style="border-radius: 0px 0px 5px 5px">
      <v-carousel cycle height="100%" show-arrows-on-hover>
        <v-carousel-item v-for="n in 5" :key="n">
          <div class="p-4">
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="6"
                lg="6"
                class="mt-2"
                v-for="n in 10"
                :key="n"
              >
                <v-card
                  link
                  :to="{ name: 'DetailsJob', params: { slug: 'details' } }"
                >
                  <div class="p-3">
                    <v-row>
                      <v-col cols="3" sm="3">
                        <div>
                          <v-img
                            src="https://cdn.topcv.vn/44/company_logos/tap-doan-dai-ichi-life-5cd946aa74307.jpg"
                            width="100%"
                            height="46"
                          ></v-img>
                        </div>
                      </v-col>
                      <v-col cols="7" sm="7">
                        <h6 style="font-size: 14px">
                          Nhân Viên Media (8-12 Triệu)...
                        </h6>
                        <p style="font-size: 12px">
                          CÔNG TY TNHH VJS VIỆT NAM...
                        </p>
                      </v-col>
                      <v-col cols="2" sm="2">
                        <v-btn icon>
                          <v-icon>mdi-heart-box-outline</v-icon>
                        </v-btn>
                      </v-col>
                      <v-col cols="12" sm="12" style="margin-top: -35px">
                        <v-chip label class="ml-1" small>Trên 40 triệu</v-chip>
                        <v-chip label small class="ml-1">Hồ Chí Minh</v-chip>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ListAttractiveJobs",
};
</script>

<style></style>
