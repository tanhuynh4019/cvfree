<template>
  <div style="background: #f0f0f0">
    <v-container>
      <v-row>
        <v-col sm="8">
          <v-card>
            <div class="p-4">
              <center>
                <h4>Chưa có Nhà tuyển dụng nào xem hồ sơ của bạn</h4>
                <p>
                  Để nhận được cơ hội việc làm từ Nhà tuyển dụng, hãy viết CV và
                  cài đặt gợi ý việc làm.
                </p>
                <v-btn class="mt-1 ml-1" color="#004D40" dark small
                  >Viết CV</v-btn
                >
                <v-btn class="mt-1 ml-1" color="#004D40" dark small
                  >Cài đặt gợi ý việt làm</v-btn
                >
              </center>
            </div>
          </v-card>
        </v-col>
        <v-col sm="4">
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
  name: "ViewProfile",
  components: {
    ProfileUser,
  },
};
</script>

<style></style>
