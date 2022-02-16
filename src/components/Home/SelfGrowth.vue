<template>
  <div v-resize="onResize">
    <v-container class="mt-5">
      <h1>Phát triển bản thân và sự nghiệp</h1>
      <v-row class="mt-5">
        <v-col
          sm="12"
          md="6"
          v-for="(item, i) in selfGrowths"
          :key="i"
          cols="12"
          class="mt-3"
        >
          <v-card elevation="2">
            <v-row>
              <v-col cols="12" md="2">
                <center >
                  <v-img
                    :width="common.image.width"
                    :height="common.image.height"
                    :src="item.image"
                    :class="common.image.class"
                  ></v-img>
                </center>
              </v-col>
              <v-col cols="12" md="10">
                <div style="padding: 0px 20px;">
                  <h6 class="font-weight-bold">{{ item.name }}</h6>
                  <p>
                    {{ item.description }}
                  </p>
                  <div>
                    <v-chip
                      :class="j == 0 ? '' : 'ml-1'"
                      label
                      v-for="(chip, j) in item.chips"
                      :key="j"
                      >{{ chip.name }}</v-chip
                    >
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <div style="height: 300px"></div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      common: {
        image: {
          width: 64,
          height: 64,
          class: "",
        },
      },
      windowSize: {
        x: 0,
        y: 0,
      },
      selfGrowths: [
        {
          image: "https://www.topcv.vn/v4/image/welcome/ic1.svg",
          name: "Khám phá tính cách và năng lực bản thân",
          description:
            "Lựa chọn nghề nghiệp chính xác hơn thông qua các bài trắc nghiệm về tính cách, khả năng giải quyết vấn đề, trí thông minh,...",
          chips: [
            {
              name: "Trắc nghiệm MBTI",
              link: "",
              active: false,
            },
            {
              name: "Trắc nghiệm MI",
              link: "",
              active: false,
            },
          ],
        },
        {
          image: "https://www.topcv.vn/v4/image/welcome/ic2.svg",
          name: "Tra cứu thông tin sự nghiệp",
          description:
            "Dễ dàng tiếp cận và tìm hiểu về các chế độ, chính sách nhân sự cần biết thông qua các công cụ hữu ích",
          chips: [
            {
              name: "Công cụ tính lương Gross - Net",
              link: "",
              active: false,
            },
            {
              name: "Công cụ tính BHTN",
              link: "",
              active: false,
            },
          ],
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
          width: 33,
          height: 33,
          class: "float-start ml-5",
        };
      } else if (this.windowSize.x < 960) {
          this.common.image = {
          width: 33,
          height: 33,
          class: "float-start ml-5",
        };
      } else {
          this.common.image = {
          width: '100%',
          height: 80,
          class: "float-start",
        };
      }
    },
  },
};
</script>

<style></style>
