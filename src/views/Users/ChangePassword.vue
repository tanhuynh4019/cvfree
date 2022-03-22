<template>
  <div class="changepassword" style="background-color: #f0f0f0">
    <v-container>
      <v-form v-model="formCandidate.valid" ref="formCandidate">
        <v-row>
          <v-col cols="12" md="8" sm="8">
            <v-card>
              <div class="p-4">
                <center>
                  <img
                    height="50"
                    width="50"
                    src="https://lh3.googleusercontent.com/fife/AAWUweV86Rm7DqfomnIyjaazqHa31PknGHSQlEzcP5FpnhyfOYqUW6VkG5bz0ZGBtroQqgHvG2d3Q7oJqwJm5e8DG9YTgur7SchaD9zIe5e-HJeJyQavn2wp8HcAIypZeOC5HE3TrLOSleayykdDUSALK9OzkCPZmydz8f53rj4qXAc77vdbc-m22d6h5aA6VR6P5LkV-E9p_QJiObZU2wAy0BCixznwZvqSx0cKqfqJJaj-Pj4idxsQVlu44z4lHFTwiZfIKmphNtD7h01iS8NGAfQwX7ZibEs0N6ryYqbzo06lPz6E0KSWhR1flDq905K-U7TbJI_O4djmbYEXvILH3d_VIQgGd3AG--LKGXbz5Aflzf15jQpT31bLfMoYR9_z1IUXaWZRqrNNcncLvyQSYnmdilp2IIVo0GFfXEy1iLILVioXh9Pre6zSF0hxzbsbwMpq7pV3dcufHjKU6DpIK5NyAdVvbtBhgjgdRO30K9YgKS7AvRN-myTVDEK4DG7jbIKwYH7Ma_bPZFNqCbRdw97HX1qwOUZgyMkQrJnpgziTSt88gLlCQlkuDpaOHjE5IwUW1CfcAL8MMXdGgABbJM5sJNsE9B3tSbV_UlH7Ddy6gyXQzTzYjXQ2gXb9Mg7KRtJNOQqEGLjTDUIhnKuxpMQxo2UMcA5FnZPKVYX0cWgvxCvYP55jYB4nGT-mWIATm8bhTl_DOjgdJp9UoOBGZPQN62QWlTCMEVOwnrU1XazRASS9hKJE_O9ic52NPN1MtgrKFbcTWjzqMlypb1UACaA4dCIqsV2zKavXtBSSPoBlHFW11ZoFGlYPMI7CTxexwU9eg_6ihAToIw5mTngq=w1876-h912"
                  />
                  <h3>Đổi mật khẩu</h3>
                </center>
                <v-row class="mt-5">
                  <v-col cols="4">
                    <v-subheader>Email đăng nhập</v-subheader>
                  </v-col>
                  <v-col cols="8">
                    <v-text-field
                      dense
                      :value="user.email"
                      disabled
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <v-subheader>Mật khẩu hiện tại</v-subheader>
                  </v-col>
                  <v-col cols="8">
                    <v-text-field
                      dense
                      v-model="formCandidate.value.passwordOld"
                      placeholder="Nhập mật khẩu hiện tại"
                      type="password"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <v-subheader>Mật khẩu mới</v-subheader>
                  </v-col>
                  <v-col cols="8">
                    <v-text-field
                      dense
                      v-model="formCandidate.value.passwordNew"
                      placeholder="Nhập mật khẩu mới"
                      type="password"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <v-subheader>Xác nhân mật khẩu</v-subheader>
                  </v-col>
                  <v-col cols="8">
                    <v-text-field
                      dense
                      v-model="formCandidate.value.passwordRepeat"
                      placeholder="Nhập lại mật khẩu mới"
                      type="password"
                      outlined
                    ></v-text-field>
                    <v-icon>mdi-shield-lock</v-icon>
                    Mật mã tại cvfree luôn được mã hoá và bảo mật tuyệt đối.
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4"> </v-col>
                  <v-col cols="8">
                    <v-btn color="#004D40" dark large @click="changePassword"
                      >Đổi mật khẩu</v-btn
                    >
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
          <v-col md="4" sm="4">
            <v-card>
              <div style="padding: 20px">
                <ProfileUser />
              </div>
            </v-card>
            <v-card class="mt-5">
              <div style="padding: 20px">
                <NoteCv />
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-form>
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
import ProfileUser from "../../components/Users/ProfileUser.vue";
import NoteCv from "../../components/CVs/NoteCv.vue";

import Candidate from "../../apis/candidate.api";
export default {
  name: "ChangePassword",
  async created() {
    const candidate = await Candidate.secret();
    if (!candidate) {
      window.location.href = "/login";
    }
    this.user = candidate;
  },
  components: {
    ProfileUser,
    NoteCv,
  },
  data() {
    return {
      multiLine: true,
      snackbar: false,
      text: ``,
      formCandidate: {
        valid: true,
        validate: true,
        value: {
          passwordOld: "",
          passwordNew: "",
          passwordRepeat: "",
        },
      },
      user: {},
    };
  },
  methods: {
    async changePassword() {
      let that = this;
      const formData = new FormData();
      formData.append("password", that.formCandidate.value.passwordOld);
      formData.append("passwordNew", that.formCandidate.value.passwordNew);
      formData.append(
        "passwordRepeat",
        that.formCandidate.value.passwordRepeat
      );
      formData.append("email", `${that.user.email}_candidate`);

      const changePassword = await Candidate.changePassword(formData);

      if (changePassword.error) {
        that.snackbar = true;
        that.text = changePassword.message;
      }

      if (changePassword.success) {
        that.snackbar = true;
        that.text = changePassword.message;
        that.clearFormPassword();
      }
    },
    clearFormPassword() {
      let that = this;
      that.formPassword.value = {
        passwordOld: "",
        passwordNew: "",
        passwordRepeat: "",
      };
    },
  },
};
</script>

<style>
</style>