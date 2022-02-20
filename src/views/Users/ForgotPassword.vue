<template>
  <div>
    <v-container>
      <v-row class="mt-4">
        <v-col cols="12" sm="12" md="6">
          <h2>Quên mật khẩu</h2>
          <v-form class="mt-5">
            <label>Email</label>
            <v-text-field
              class="mt-2"
              ref="name"
              prepend-inner-icon="mdi-gmail"
              color="#004D40"
              placeholder="Nhập email của bạn"
              required
              outlined
              dense
            ></v-text-field>
            <p>
              Bằng việc thực hiện đổi mật khẩu, bạn đã đồng ý với Điều khoản
              dịch vụ và Chính sách bảo mật của chúng tôi
            </p>
            <v-btn class="w-100" color="#004D40" dark>Đổi mật khẩu</v-btn>
          </v-form>
          <v-row class="mt-3">
            <v-col sm="6">
              <router-link
                style="color: #004d40"
                class="font-weight-bold"
                :to="url.login"
                >Quay lại đăng nhập</router-link
              >
            </v-col>
            <v-col sm="6">
              <div class="float-end">
                <router-link
                  style="color: #004d40"
                  class="font-weight-bold"
                  :to="url.signUp"
                  >Đăng ký tài khoản mới</router-link
                >
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <p class="font-weight-bold">Bạn gặp khó khăn khi tạo tài khoản?</p>
          <p>Vui lòng gọi tới số (024) 6680 5588 (giờ hành chính).</p>
        </v-col>
        <v-col
          md="6"
          cols="12"
          sm="12"
          style="
            background: transparent
              linear-gradient(
                90deg,
                rgba(61, 217, 131, 0.05),
                rgba(0, 255, 85, 0.05)
              )
              0 0 no-repeat padding-box;
          "
        >
          <v-carousel
            cycle
            height="500"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item>
              <center>
                <img
                  src="https://www.topcv.vn/v4/image/tool-cv.png"
                  class="w-75"
                  height="350"
                />
                <h5>Công cụ viết CV đẹp Miễn phí</h5>
                <p>
                  Nhiều mẫu CV đẹp, phù hợp nhu cầu ứng tuyển các vị trí khác
                  nhau. Dễ dàng chỉnh sửa thông tin, tạo CV online nhanh chóng
                  trong vòng 5 phút.
                </p>
              </center>
            </v-carousel-item>
            <v-carousel-item height="300">
              <center>
                <img
                  src="https://www.topcv.vn/v4/image/tool-cv.png"
                  class="w-75"
                  height="400"
                />
                <h5>Công cụ viết CV đẹp Miễn phí</h5>
                <p>
                  Nhiều mẫu CV đẹp, phù hợp nhu cầu ứng tuyển các vị trí khác
                  nhau. Dễ dàng chỉnh sửa thông tin, tạo CV online nhanh chóng
                  trong vòng 5 phút.
                </p>
              </center>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      url: {
        login: "/login",
        signUp: "/sign-up",
        forgotPassword: "/forgot-password",
      },
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
