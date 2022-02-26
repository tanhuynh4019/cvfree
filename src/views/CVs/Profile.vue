<template>
  <div v-resize="onResize">
    <div class="profile-header">
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" md="8" sm="8">
            <div class="profile-header-text">
              <h4>TopCV Profile</h4>
              <b class="mt-5">
                Công cụ tạo dấu ấn cá nhân, gây ấn tượng với nhà tuyển dụng
              </b>
              <p class="mt-3">
                TopCV Profile là bản hồ sơ năng lực giúp bạn xây dựng thương
                hiệu cá nhân, thể hiện thế mạnh của bản thân thông qua việc đính
                kèm các dự án, sản phẩm đã thực hiện - điều mà CV chưa thể hiện
                được. Chi tiết hơn, ấn tượng hơn và hiệu quả hơn nữa.
              </p>
            </div>
            <div>
              <v-btn class="btn-profile" small tile color="#004d40">
                Khởi tạo TopCV Profile &nbsp;
                <v-icon left> mdi-arrow-right </v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" xs="12" md="4" sm="4">
            <img
              src="https://www.topcv.vn/v4/image/profile/profile.png"
              width="100%"
              alt=""
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="content-profile mt-5 mb-5">
      <v-container>
        <h4 class="text-center">Tại sao bạn nên sử dụng TopCV Profile</h4>
        <div v-for="(item, i) in listContent" :key="i">
          <v-row v-if="item.type == 1" class="content-align mt-3">
            <v-col cols="12" class="content-font" sm="6" xs="12" md="6">
              <h6>{{ item.name }}</h6>
              <p>
                {{ item.content }}
              </p>
            </v-col>
            <v-col cols="12" sm="6" xs="12" md="6">
              <img :src="item.img" width="100%" alt="" />
            </v-col>
          </v-row>
          <v-row v-if="item.type == 2" class="content-align mt-3">
            <v-col cols="12" sm="6" xs="12" md="6">
              <img :src="item.img" width="100%" alt="" />
            </v-col>
            <v-col class="content-font" cols="12" sm="6" xs="12" md="6">
              <h6>{{ item.name }}</h6>
              <p>
                {{ item.content }}
              </p>
            </v-col>
          </v-row>
        </div>
        <div class="text-center mt-5">
          <v-btn class="btn-profile" small tile color="#004d40">
            Trải nghiệm ngay
          </v-btn>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0,
      },
      listContent: [
        {
          name: 'Cập nhật hình đại diện (Avatar) và ảnh bìa (Cover)',
          content:
            'TopCV Profile là bản hồ sơ năng lực giúp bạn xây dựng thương hiệu cá nhân, thể hiện thế mạnh của bản thân thông qua việc đính kèm các dự án, sản phẩm đã thực hiện - điều mà CV chưa thể hiện được. Chi tiết hơn, ấn tượng hơn và hiệu quả hơn nữa.',
          img: 'https://www.topcv.vn/v4/image/profile/1.png',
          type: 1,
        },
        {
          name: 'Thêm video, đính link về dự án, sản phẩm',
          content:
            'Đính kèm ảnh hay video vào hồ sơ sẽ rất tốn dung lượng, đôi khi làm giảm chất lượng hay lỗi không đáng có. TopCV Profile là một lựa chọn tối ưu. Khi bạn chỉ cần đính kèm link và nhà tuyển dụng sẽ nhìn thấy phần prereview hấp dẫn.',
          img: 'https://www.topcv.vn/v4/image/profile/2.png',
          type: 2,
        },
        {
          name: 'Theo dõi số liệu để hoàn thiện Profile',
          content:
            'Bao nhiêu người đã xem và quan tâm tới thông tin của bạn? Hãy để ý những con số biết nói này để cập nhật đúng lúc. Giúp bạn đánh giá, hoàn thiện Profile thông qua báo cáo cập nhật mỗi ngày, tiến gần tới công việc mơ ước',
          img: 'https://www.topcv.vn/v4/image/profile/3.png',
          type: 1,
        },
      ],
    }
  },
  mounted() {
    this.onResize()
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }

      if (this.windowSize.x < 600) {
      } else if (this.windowSize.x < 960) {
      } else {
      }
    },
  },
}
</script>

<style>
.profile-header {
  background: #e5f7ed;
  padding-top: 38px;
}
.btn-profile {
  border: 1px solid #004d40;
  border-radius: 5px;
  box-shadow: -1px 1px 6px rgb(0 0 0 / 5%);
  box-sizing: border-box;
  padding: 14px 20px;
}
.btn-profile span {
  color: #fff;
}
.profile-header-text h4 {
  color: #004d40;
}
.profile-header-text b {
  font-size: 16px;
}
.profile-header-text {
  padding-right: 50px;
}
.content-profile .content-align .content-font h6 {
  font-weight: normal;
}
.content-align {
  align-items: center;
  padding-left: 70px;
  padding-right: 70px;
}
</style>
