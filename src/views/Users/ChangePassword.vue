<template>
  <div class="changepassword" style="background-color: #f0f0f0">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <div class="title">
            <a href="#">Cài đặt kênh thông báo qua email</a>
          </div>
          <v-card>
            <div class="mt-3 p-3">
              <div class="mb">
                <v-row>
                  <v-col cols="4">
                    <label
                      class="font-weight-bold float-right mt-2"
                      style="color: #666"
                      >Email đăng nhập</label
                    >
                  </v-col>
                  <v-col cols="8">
                    <v-text-field dense disabled filled></v-text-field>
                  </v-col>
                </v-row>
              </div>
              <div class="mb">
                <v-row>
                  <v-col cols="4">
                    <label
                      class="font-weight-bold float-right mt-2"
                      style="color: #666"
                      >Mật khẩu hiện tại</label
                    >
                  </v-col>
                  <v-col cols="8">
                    <v-text-field
                      dense
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye-off' : 'mdi-eye'"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      @click:append="show1 = !show1"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
              <div class="mb">
                <v-row>
                  <v-col cols="4">
                    <label
                      class="font-weight-bold float-right mt-2"
                      style="color: #666"
                      >Mật khẩu mới</label
                    >
                  </v-col>
                  <v-col cols="8">
                    <v-text-field
                      dense
                      v-model="password"
                      :append-icon="show2 ? 'mdi-eye-off' : 'mdi-eye'"
                      :type="show2 ? 'text' : 'password'"
                      name="input-10-1"
                      @click:append="show2 = !show2"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
              <div class="mb">
                <v-row>
                  <v-col cols="4">
                    <label
                      class="font-weight-bold float-right mt-2"
                      style="color: #666"
                      >Nhập lại mật khẩu mới</label
                    >
                  </v-col>
                  <v-col cols="8">
                    <v-text-field
                      dense
                      v-model="password"
                      :append-icon="show3 ? 'mdi-eye-off' : 'mdi-eye'"
                      :type="show3 ? 'text' : 'password'"
                      name="input-10-1"
                      @click:append="show3 = !show3"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
              <div class="footer" style="text-align: center">
                <input type="submit" value="Lưu" class="btn-save" />
              </div>
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
    </v-container>
  </div>
</template>

<script>
import ProfileUser from "../../components/Users/ProfileUser.vue";
import NoteCv from "../../components/CVs/NoteCv.vue";
export default {
  name: "ChangePassword",
  components: {
    ProfileUser,
    NoteCv,
  },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      password: "",
    };
  },
};
</script>

<style>
.changepassword .title a {
  color: #666;
  text-decoration: none;
  font-weight: 400;
}

.changepassword .mb {
  margin-bottom: -27px;
}

.changepassword .title a:hover {
  color: #004d40;
}

.changepassword .btn-save {
  font-weight: 700;
  padding: 10px 20px;
  background-color: #004d40;
  color: white;
  border-radius: 4px;
  margin-top: 35px;
}

.changepassword .footer {
  margin-bottom: 20px;
  margin-top: -55px;
}

.changepassword .footer a {
  color: #004d40;
  text-decoration: none;
  font-weight: 400;
}
</style>