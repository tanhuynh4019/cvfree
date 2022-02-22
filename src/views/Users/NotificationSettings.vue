<template>
  <div class="notification" style="background-color: #f0f0f0">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <div class="title">
            <a href="#">Cài đặt kênh thông báo qua email</a>
          </div>
          <v-card>
            <div class="mt-3 p-4">
              <div class="notification-cv">
                Đánh dấu
                <i class="mdi mdi-close" style="color: #d0011b"></i> vào những
                email bạn không muốn nhận
              </div>
              <v-row>
                <v-cols cols="12">
                  <h3>1. Email Thông báo từ hệ thống</h3>
                  <div class="checkbox">
                    <v-checkbox
                      v-model="ex4"
                      label="Cập nhật quan trọng từ hệ thống"
                      color="red darken-3"
                      value="red darken-3"
                      hide-details
                    ></v-checkbox>
                  </div>
                  <div class="checkbox">
                    <v-checkbox
                      v-model="ex4"
                      label="Thông báo NTD đã xem CV"
                      color="red darken-3"
                      value="red darken-3"
                      hide-details
                    ></v-checkbox>
                  </div>
                  <div class="checkbox">
                    <v-checkbox
                      v-model="ex4"
                      label="Thông báo tính năng & mẫu CV mới từ TopCV"
                      color="red darken-3"
                      value="red darken-3"
                      hide-details
                    ></v-checkbox>
                  </div>
                  <div class="checkbox">
                    <v-checkbox
                      v-model="ex4"
                      label="Thông báo khác từ hệ thống"
                      color="red darken-3"
                      value="red darken-3"
                      hide-details
                    ></v-checkbox>
                  </div>
                </v-cols>
                <v-cols cols="12">
                  <h3>2. Email Nhận cơ hội việc làm</h3>
                  <div class="checkbox">
                    <v-checkbox
                      v-model="ex4"
                      label="Thông báo việc làm phù hợp từ TopCV"
                      color="red darken-3"
                      value="red darken-3"
                      hide-details
                    ></v-checkbox>
                  </div>
                  <div class="checkbox">
                    <v-checkbox
                      v-model="ex4"
                      label="Thông báo NTD gửi lời mời Phỏng vấn / Ứng tuyển"
                      color="red darken-3"
                      value="red darken-3"
                      hide-details
                    ></v-checkbox>
                  </div>
                </v-cols>
                <v-cols cols="12">
                  <h3 class="mt-5">3. Email Giới thiệu dịch vụ</h3>
                  <div class="checkbox">
                    <v-checkbox
                      v-model="ex4"
                      label="Giới thiệu các dịch vụ"
                      color="red darken-3"
                      value="red darken-3"
                      hide-details
                    ></v-checkbox>
                  </div>
                  <div class="checkbox">
                    <v-checkbox
                      v-model="ex4"
                      label="Giới thiệu chương trình, sự kiện"
                      color="red darken-3"
                      value="red darken-3"
                      hide-details
                    ></v-checkbox>
                  </div>
                  <div class="checkbox">
                    <v-checkbox
                      v-model="ex4"
                      label="Quà tặng / Mã giảm giá từ các đối tác của TopCV"
                      color="red darken-3"
                      value="red darken-3"
                      hide-details
                    ></v-checkbox>
                  </div>
                </v-cols>
              </v-row>
              <div class="footer" style="text-align: center">
                <input type="submit" value="Lưu" class="btn-save" />
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col md="4">
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
  name: "EmailReceivingSettings",
  components: {
    ProfileUser,
    NoteCv,
  },
};
</script>

<style>
.notification h3 {
  font-size: 18px;
  margin: 20px 0;
  font-weight: 500;
  margin-bottom: -5px;
}

.notification .v-input--selection-controls .v-input__slot > .v-label,
.v-input--selection-controls .v-radio > .v-label {
  color: black;
  font-size: 14px;
}

.notification .title a {
  color: #666;
  text-decoration: none;
  font-weight: 400;
}

.notification .checkbox {
  margin-bottom: -8px;
  font-weight: 400;
  font-size: 14px;
}

.notification .btn-save {
  font-weight: 700;
  padding: 10px 20px;
  background-color: #004d40;
  color: white;
  border-radius: 4px;
  margin-top: 35px;
}

.notification .footer a {
  color: #004d40;
  text-decoration: none;
  font-weight: 400;
}

.notification .footer-cv {
  color: #004d40;
  font-size: 20px;
  text-align: center;
}

.notification .notification-cv {
  border: 1px dashed #ccc;
  padding: 10px;
  background-color: #fcfcfc;
  color: #666;
  line-height: 25px;
  margin-bottom: 10px;
  font-weight: 500;
}

.notification .mdi-checkbox-marked::before {
  content: "\00d7";
  background-color: #d0011b;
  color: white;
  font-weight: bold;
  height: 26px;
  width: 27px;
  text-align: center;
  font-size: 28px;
}
</style>