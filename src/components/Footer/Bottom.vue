<template>
  <div class="border-top" v-resize="onResize">
    <v-container>
      <v-row class="mt-5 bottom-fontsize">
        <v-col cols="12" sm="8">
          {{ description }} <b>{{ describle }}</b>
          <div v-for="(item, i) in address" :key="i">
            <b class="font-weight-bold">{{ item.name }}</b>
            <p>{{ item.content }}</p>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <v-row>
            <v-col cols="6" sm="12" md="6" v-for="(item, j) in images" :key="j">
              <img
                :class="common.image.class"
                :width="common.image.width"
                :height="common.image.height"
                :src="item.image"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  data() {
    return {
      common: {
        image: {
          width: "100%",
          height: 60,
          class: "",
        },
      },
      windowSize: {
        x: 0,
        y: 0,
      },
      description: "© 2014 - 2022",
      describle: "Công ty cổ phần TopCV Việt Nam",
      address: [
        {
          name: "Trụ sở HN:",
          content:
            "Tầng 03, Tòa nhà Goldseason, 47 Nguyễn Tuân, Thanh Xuân, Hà Nội",
        },
        {
          name: "Chi nhánh TP HCM:",
          content:
            "Tòa nhà cao ốc Nam Giao 1, số 261 - 263 Phan Xích Long, Phường 2, Quận Phú Nhuận, TP Hồ Chí Minh",
        },
      ],
      images: [
        {
          image: "https://www.topcv.vn/images/bct.jpg",
        },
        {
          image: "https://www.topcv.vn/v3/images/topcv-logo-4.png?v=1.0.1",
        },
      ],
    };
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (this.windowSize.x < 600) {
        this.common.image = {
          width: "100%",
          height: 80,
          class: "mb-5",
        };
      } else if (this.windowSize.x < 960) {
        this.common.image = {
          width: "100%",
          height: 70,
          class: "mr-3",
        };
      } else {
        this.common.image = {
          width: "100%",
          height: 60,
          class: "ml-2 mr-3 mt-5",
        };
      }
    },
  },
};
</script>

<style>
.bottom-fontsize {
  font-size: 13px;
}
</style>
