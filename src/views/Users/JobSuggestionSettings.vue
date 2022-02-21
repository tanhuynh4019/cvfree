<template>
  <div style="background: #f0f0f0">
    <v-container>
      <v-row>
        <v-col cols="12" sm="7" md="8">
          <v-card>
            <div class="p-4">
              <h6>TẠI SAO BẠN NÊN CẬP NHẬT THÔNG TIN GỢI Ý VIỆC LÀM?</h6>
              <p>
                TopCV là nền tảng kết nối cơ hội việc làm thông qua CV đầu tiên
                tại Việt Nam, nơi mà ứng viên sẽ được Nhà tuyển dụng chủ động
                săn đón.
              </p>
              <p>Cập nhật thông tin chi tiết ngay, nếu bạn muốn:
                  <ul>
                      <li>Được nhà tuyển dụng chủ động săn đón.</li>
                      <li>Được gợi ý các cơ hội việc làm phù hợp.</li>
                  </ul>
              </p>
              <v-divider></v-divider>
              <center>
                  Bạn vui lòng hoàn thiện các thông tin dưới đây
                  <div>(*) Các thông tin bắt buộc</div>
              </center>
              <div>
                  <h6>THÔNG TIN CÁ NHÂN</h6>
                  <v-row>
                      <v-col sm="3">
                          <div class="float-end mt-2">
                              Họ và tên *
                          </div>
                      </v-col>
                      <v-col sm="9">
                         <v-text-field
                         dense
                         color="#004D40"
                            outlined
                        ></v-text-field>
                      </v-col>
                  </v-row>
                  <h6>KINH NGHIỆM THỰC TẾ</h6>
                  <v-row>
                      <v-col sm="3">
                          <div class="float-end mt-2">
                              Kỹ năng
                          </div>
                      </v-col>
                      <v-col sm="9">
                         <v-text-field
                         dense
                         color="#004D40"
                            outlined
                        ></v-text-field>
                      </v-col>
                  </v-row>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="5" md="4">
          <v-card>
            <div class="p-3">
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
  name: "JobSuggestionSettings",
  components: {
    ProfileUser,
  },
};
</script>

<style></style>
