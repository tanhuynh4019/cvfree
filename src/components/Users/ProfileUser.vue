<template>
  <div>
    <v-row>
      <v-col cols="3" sm="4" md="4" lg="3">
        <v-avatar width="100%" height="60">
          <img :src="user.avatar" alt="John" />
        </v-avatar>
        <center>
          <v-btn
            @click="clickChangeAvatar"
            text
            class="mt-1 w-100"
            style="font-size: 10px"
            >Cập nhật ảnh</v-btn
          >
        </center>
      </v-col>
      <v-col cols="8" sm="8" md="8" lg="9">
        <div>Chào bạn trở lại,</div>
        <h5>{{ user.fullname }}</h5>
        <div style="font-size: 12px">
          {{
            !user.isEmail ? "Tài khoản chưa xác thực" : "Tài khoản đã xác thực"
          }}
        </div>
        <v-btn v-if="!user.vip" class="mt-3 w-100" small color="#004D40" dark
          >Nâng cấp tài khoản</v-btn
        >
        <v-btn
          v-if="user.vip && user.roleVip == 'vip1'"
          class="mt-3 w-100"
          small
          color="#004D40"
          dark
          >Nâng cấp theo gói tháng</v-btn
        >
        <v-btn
          v-if="user.vip && user.roleVip == 'vip2'"
          class="mt-3 w-100"
          small
          color="#004D40"
          dark
          >Tối ưu thành viên cao cấp</v-btn
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
              <v-radio color="#004D40" label="CV Online" value="1"></v-radio>
              <v-radio color="#004D40" label="Hồ sơ TopCV" value="2"></v-radio>
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
    <v-dialog v-model="dialogChangeAvatar" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Thay đổi avatar</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="formAvatar.valid" ref="formAvatar">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="formAvatar.value.avatar"
                    placeholder="Nhập link hình ảnh"
                    label="Link avatar"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogChangeAvatar = false">
            Hủy
          </v-btn>
          <v-btn color="blue darken-1" text @click="changeAvatar">
            Lưu
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  </div>
</template>

<script>
import Candidate from "../../apis/candidate.api";
export default {
  name: "ProfileUser",
  async created() {
    const candidate = await Candidate.secret();
    this.user = candidate;

    this.formProfile.waitingJob = candidate.isSeachJob;
    this.formProfile.allowViewContact = candidate.isContactEmployer;
    this.formProfile.profileIsActive = String(candidate.typeContactEmployer);

    this.formAvatar.value.avatar = candidate.avatar;
  },
  data() {
    return {
      multiLine: true,
      snackbar: false,
      text: ``,
      user: {},
      dialogChangeAvatar: false,
      waitingJob: false,
      formProfile: {
        waitingJob: false,
        allowViewContact: true,
        profileIsActive: null,
      },
      formAvatar: {
        valid: true,
        validate: true,
        value: {
          avatar: "",
        },
      },
    };
  },
  methods: {
    clickChangeAvatar() {
      let that = this;
      that.dialogChangeAvatar = true;
    },
    async changeAvatar()
    {
      let that = this;
      const formData = new FormData();
      formData.append("avatar", that.formAvatar.value.avatar);

      const changeAvatar = await Candidate.editAvatar(formData);
      if(changeAvatar.success) {
        that.snackbar = true;
        that.text = changeAvatar.message;

        that.dialogChangeAvatar = false;

        location.reload(true)
      }

      if(changeAvatar.error) {

      }

    }
  },
};
</script>

<style></style>
