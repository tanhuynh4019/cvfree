<template>
  <div>
    <v-container>
      <v-row class="mt-4">
        <v-col cols="12" sm="12" md="6">
          <h2>Chào mừng bạn trở lại,</h2>
          <p>
            Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
            tưởng
          </p>
          <v-form v-model="formCandidate.valid" ref="formCandidate">
            <label>Email</label>
            <v-text-field
              class="mt-2"
              v-model="formCandidate.value.email"
              ref="name"
              prepend-inner-icon="mdi-gmail"
              color="#004D40"
              placeholder="Nhập email của bạn"
              required
              outlined
              dense
            ></v-text-field>

            <label>Mật khẩu</label>
            <v-text-field
              class="mt-2"
              type="password"
              ref="address"
              v-model="formCandidate.value.password"
              prepend-inner-icon="mdi-shield-key"
              color="#004D40"
              placeholder="Nhập mật khẩu"
              required
              outlined
              dense
            ></v-text-field>
            <v-btn class="w-100" color="#004D40" dark @click="login"
              >Đăng nhập</v-btn
            >
            <center class="mt-1">hoặc</center>
            <v-row class="mt-1">
              <v-col sm="4">
                <v-btn dark color="#2374e1" width="100%">
                  <v-icon>mdi-facebook</v-icon>
                  <span>Facebook</span>
                </v-btn>
              </v-col>
              <v-col sm="4">
                <v-btn color="#d93025" dark width="100%">
                  <v-icon>mdi-gmail</v-icon>
                  <span>Gmail</span>
                </v-btn>
              </v-col>
              <v-col sm="4">
                <v-btn color="#0a66c2" dark width="100%">
                  <v-icon>mdi-linkedin</v-icon>
                  <span>Linkedin</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
          <v-row class="mt-3">
            <v-col sm="6">
              Bạn chưa có tài khoản?
              <router-link
                style="color: #004d40"
                class="font-weight-bold"
                :to="url.signUp"
                >Đăng ký ngay</router-link
              >
            </v-col>
            <v-col sm="6">
              <div class="float-end">
                <router-link
                  style="color: #004d40"
                  class="font-weight-bold"
                  :to="url.forgotPassword"
                  >Quên mật khẩu</router-link
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
      <v-snackbar
        style="z-index: 1300 !important"
        top
        v-model="snackbar"
        :multi-line="multiLine"
      >
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
            Đóng
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import Candidate from "../../apis/candidate.api";
export default {
  name: "Login",
  async created() {
    const candidate = await Candidate.secret();
    if (candidate) {
      window.location.href = '/viec-lam'
    }
  },
  data() {
    return {
      multiLine: true,
      snackbar: false,
      text: ``,
      url: {
        signUp: "/sign-up",
        forgotPassword: "/forgot-password",
      },
      formCandidate: {
        validate: {},
        valid: true,
        value: {
          email: "",
          password: "",
        },
      },
    };
  },
  methods: {
    async login() {
      let that = this;
      const formData = new FormData();
      formData.append("email", `${that.formCandidate.value.email}_candidate`);
      formData.append("password", that.formCandidate.value.password);

      const candidate = await Candidate.login(formData);
      if (candidate.error) {
        that.snackbar = true;
        that.text = candidate.message;
      }

      if (candidate.success) {
        localStorage.setItem("token_candidate", candidate.token);
        window.location.href = "/viec-lam";
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
