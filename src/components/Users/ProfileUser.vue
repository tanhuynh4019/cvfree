<template>
  <div>
    <v-row>
      <v-col cols="3" sm="4" md="4" lg="3">
        <v-avatar width="100%" height="65">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <center>
          <p style="font-size: 12px">Cập nhật ảnh</p>
        </center>
      </v-col>
      <v-col cols="8" sm="8" md="8" lg="9">
        <div>Chào bạn trở lại,</div>
        <h5>Tấn Huỳnh</h5>
        <div style="font-size: 12px">Tài khoản chưa xác thực</div>
        <v-btn class="mt-3 w-100" small color="#004D40" dark
          >Nâng cấp tài khoản</v-btn
        >
      </v-col>
      <v-col cols="12" sm="12" style="margin-top: -30px">
        <div>
          <v-switch
            v-model="formProfile.waitingJob"
            class="font-weight-bold"
            color="#004D40"
            :label="
              waitingJob
                ? 'Trạng thái tìm việc đang bật'
                : 'Trạng khái tìm việc đã tắt'
            "
          ></v-switch>

          <div style="font-size: 13px">
            Bật tìm việc để nhận được nhiều cơ hội việc làm tốt nhất từ TopCV.
          </div>
        </div>
        <div>
          <v-switch
            v-model="formProfile.allowViewContact"
            class="font-weight-bold"
            color="#004D40"
            :label="
              waitingJob
                ? 'Cho phép NTD liên hệ bạn qua'
                : 'Cho phép NTD liên hệ bạn qua'
            "
          ></v-switch>

          <div v-if="formProfile.allowViewContact">
            <v-radio-group v-model="formProfile.profileIsActive" row>
              <v-radio color="#004D40" label="CV Online" value="cv-online-isActive"></v-radio>
              <v-radio color="#004D40" label="Hồ sơ TopCV" value="file-isActive"></v-radio>
            </v-radio-group>
          </div>

          <div style="font-size: 13px">
            Cho phép các Nhà tuyển dụng đã được TopCV xác thực xem CV Online để
            có thể liên hệ với bạn.
          </div>
        </div>
        <div class="red--text mt-3" style="font-size: 13px">
          Khởi tạo TopCV Profile để gia tăng 300% cơ hội việc làm tốt
        </div>
        <v-btn color="#004D40" dark small class="mt-2">Tạo TopCV Profile</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProfileUser",
  data() {
    return {
      waitingJob: false,
      formProfile: {
        waitingJob: false,
        allowViewContact: true,
        profileIsActive: 'cv-online-isActive'
      },
    };
  },
};
</script>

<style></style>
