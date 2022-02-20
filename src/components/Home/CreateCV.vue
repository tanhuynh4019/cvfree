<template>
  <div class="mt-5">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6" v-for="(item, i) in createCVs" :key="i">
          <v-card
            style="
              background: transparent linear-gradient(67deg, #e5fff1, #f5f2ff) 0
                0 no-repeat padding-box;
            "
          >
            <div class="p-4">
              <v-row>
                <v-col cols="6" sm="7">
                  <h5>{{ item.name }}</h5>
                  <p>
                    {{ item.description }}
                  </p>
                  <v-btn
                    :disabled="!item.active"
                    color="#004D40"
                    :dark="item.active"
                  >
                    <v-icon>{{ item.iconBtn }}</v-icon>
                    <span class="mt-1">{{ item.textBtn }}</span>
                  </v-btn>
                </v-col>
                <v-col cols="6" sm="5">
                  <img width="100%" height="200px" :src="item.image" />
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CreateCV",
  data() {
    return {
      createCVs: [
        {
          name: "Tạo CV online ấn tượng",
          description:
            "TopCV hiện có 50+ mẫu CV chuyên nghiệp, độc đáo phù hợp với mọi ngành nghề",
          image: "https://www.topcv.vn/v4/image/welcome/mau_cv.png?v=1.0.0",
          textBtn: "Tạo CV ngay",
          iconBtn: "mdi-plus",
          linkBtn: "",
          active: true,
        },
        {
          name: "Sử dụng CV sẵn có để tìm việc",
          description:
            "Cách đơn giản để bắt đầu tìm việc làm tại TopCV, Nhà tuyển dụng sẽ nhìn thấy CV bạn đã tải lên",
          image: "https://www.topcv.vn/v4/image/welcome/upload-cv.png?v=1.0.0",
          textBtn: " Upload CV ngay",
          iconBtn: "mdi-file-upload-outline",
          linkBtn: "",
          active: false,
        },
      ],
    };
  },
};
</script>

<style></style>
