<template>
  <div v-resize="onResize" style="background-color: #fafafa">
    <v-container class="mt-5">
      <h2>Phát triển bản thân và sự nghiệp</h2>
      <v-row class="mt-5">
        <v-col
          sm="12"
          md="6"
          v-for="(item, i) in selfGrowths"
          :key="i"
          cols="12"
        >
          <v-card class="p-4">
            <v-row>
              <v-col cols="12" md="2">
                <center>
                  <img
                    :width="common.image.width"
                    :height="common.image.height"
                    :src="item.image"
                    :class="common.image.class"
                  />
                </center>
              </v-col>
              <v-col cols="12" md="10">
                <div style="padding: 0px 20px">
                  <h6 class="font-weight-bold">{{ item.name }}</h6>
                  <p style="font-size: 12px">
                    {{ item.description }}
                  </p>
                  <div>
                    <v-row>
                      <v-col cols="12" sm="4" md="6" v-for="(chip, j) in item.chips" :key="j">
                        <v-chip label class="w-100" small>{{ chip.name }}</v-chip>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
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
        {
          image: "https://www.topcv.vn/v4/image/welcome/ic3.svg",
          name: "Quỹ ý tưởng phát triển nghề nghiệp TopCareer",
          description:
            "Giúp học sinh, sinh viên hiểu về tầm quan trọng của giáo dục hướng nghiệp, nhận diện nghề và nâng cao năng lực ứng tuyển",
          chips: [
            {
              name: "Tìm hiểu thêm",
              link: "",
              active: false,
            },
          ],
        },
        {
          image: "https://www.topcv.vn/v4/image/welcome/ic4.svg",
          name: "TopCV Contest - Cổng học tập và đánh giá năng lực",
          description:
            "Cung cấp các khóa học, các kỳ thi giúp ứng viên hiểu rõ về xu hướng việc làm và những tiêu chuẩn mới về Năng lực chuyên môn",
          chips: [
            {
              name: "Tìm hiểu thêm",
              link: "",
              active: false,
            },
          ],
        },
        {
          image: "https://www.topcv.vn/v4/image/welcome/ic5.svg",
          name: "Chương trình bệ phóng sự nghiệp 4.0",
          description:
            "Cung cấp cho sinh viên thông tin về thị trường tuyển dụng và đào tạo kỹ năng ứng tuyển, kết nối Nhà trường và Doanh nghiệp",
          chips: [
            {
              name: "Tìm hiểu thêm",
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
          width: 64,
          height: 64,
          class: "none",
        };
      }
    },
  },
};
</script>

<style></style>
