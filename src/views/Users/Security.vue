<template>
  <div class="security" style="background-color: #f0f0f0">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <div class="title">
            <a href="#">Thay đổi cài đặt bảo mật</a>
          </div>
          <v-card>
            <div class="mt-3 p-2">
              <v-row>
                <v-cols cols="12">
                  <div class="checkbox">
                    <v-checkbox
                      v-model="ex4"
                      label="Trạng thái đang tìm việc"
                      color="success"
                      value="success"
                      hide-details
                      class="font-weight-bold"
                    ></v-checkbox>
                    <div class="desc mt-2">
                      Bật trạng thái tìm việc để nhà tuyển dụng có thể chủ động
                      liên hệ với bạn.
                    </div>
                  </div>
                </v-cols>
                <v-cols cols="12">
                  <div class="checkbox">
                    <v-checkbox
                      v-model="ex4"
                      label="Nhận cơ hội việc làm tốt hơn từ TopCV"
                      color="success"
                      value="success"
                      hide-details
                      class="font-weight-bold"
                    ></v-checkbox>
                    <div class="desc mt-2">
                      Nhận cơ hội việc làm với mức lương cao hơn 20 - 50% lương
                      hiện tại. Mỗi khi có công việc phù hợp, TopCV sẽ gửi thông
                      báo tới bạn qua email hoặc điện thoại.
                    </div>
                  </div>
                </v-cols>
                <v-cols cols="12">
                  <div class="checkbox">
                    <v-checkbox
                      v-model="ex4"
                      label="Cho phép nhà tuyển dụng uy tín xem CV Online của bạn"
                      color="success"
                      value="success"
                      hide-details
                      class="font-weight-bold"
                    ></v-checkbox>
                    <div class="desc mt-2">
                      Nhà tuyển dụng uy tín là các đơn vị tuyển dụng uy tín,
                      Headhunter đã được TopCV xác thực. Giúp bạn tăng cơ hội
                      nhận việc làm mới tốt hơn.
                    </div>
                  </div>
                </v-cols>
                <v-cols cols="12">
                  <div class="checkbox">
                    <v-checkbox
                      v-model="ex4"
                      label="Cho phép TopCV hỗ trợ sửa và đánh giá CV"
                      color="success"
                      value="success"
                      hide-details
                      class="font-weight-bold"
                    ></v-checkbox>
                    <div class="desc mt-2">
                      TopCV giúp bạn cải thiện chất lượng CV.
                    </div>
                  </div>
                </v-cols>
              </v-row>
              <div class="footer" style="text-align: center">
                <input type="submit" value="Lưu" class="btn-save" />
                <p class="mt-4">
                  Tìm hiểu thêm về <a href="">Chính sách bảo mật</a> và
                  <a href="">Điều khoản dịch vụ</a>
                </p>
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProfileUser from "../../components/Users/ProfileUser.vue";
export default {
  name: "Security",
  components: {
    ProfileUser,
  },
};
</script>

<style>
.security .desc {
  background-color: #fcfcfc;
  border: 1px dashed #ccc;
  color: #666;
  line-height: 25px;
  margin-bottom: 30px;
  margin-left: 15px;
  padding: 10px;
}

.security .title a {
  color: #666;
  text-decoration: none;
  font-weight: 400;
}

.security .checkbox {
  margin-bottom: -27px;
}

.security .btn-save {
  font-weight: 700;
  padding: 10px 20px;
  background-color: #004d40;
  color: white;
  border-radius: 4px;
  margin-top: 35px;
}

.security .footer a {
  color: #004d40;
  text-decoration: none;
  font-weight: 400;
}

.security .footer-cv {
  color: #004d40;
  font-size: 20px;
  text-align: center;
}
</style>