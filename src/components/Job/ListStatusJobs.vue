<template>
  <div>
    <v-card style="border-radius: 5px 5px 0px 0px">
      <v-toolbar color="#fafafa">
        <v-toolbar-title class="font-weight-bold">
          <v-icon size="30" color="#004D40">{{ icon }}</v-icon>
          {{ name }}
        </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
    </v-card>
    <v-card
      v-scroll.self="onScroll"
      class="overflow-y-auto"
      max-height="630"
      style="border-radius: 0px 0px 0px 0px"
    >
      <v-card
        v-for="(n, i) in 10"
        :key="i"
        class="mt-1"
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
              <h6 style="font-size: 14px">Nhân Viên Media (8-12 Triệu)...</h6>
              <p style="font-size: 12px">CÔNG TY TNHH VJS VIỆT NAM...</p>
            </v-col>
            <v-col cols="2" sm="2">
              <v-btn icon>
                <v-icon>mdi-heart-box-outline</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" sm="12" style="margin-top: -35px">
              <v-chip label small>Trên 40 triệu</v-chip>
              <v-chip label small class="ml-1">Hồ Chí Minh</v-chip>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-card>
    <v-card style="border-radius: 0px 0px 5px 5px">
      <center>
        <v-btn text color="#004D40" :to="linkMore">
          <v-icon>mdi-text-box</v-icon>
          Xem thêm
        </v-btn>
      </center>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ListStatusJobs",
  props: ["status", "icon", "name", "linkMore"],
};
</script>

<style></style>
