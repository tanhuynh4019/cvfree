<template>
  <div class="manage_cv" style="background-color: #f0f0f0" v-resize="onResize">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <a target="_blank" href=""
            ><img
              src="https://static.topcv.vn/manual/dich-vu-tu-van-tim-viec-topcv.png"
              class="manage_cv_banner"
              alt="Dịch vụ Tư vấn CV và Định hướng tìm việc"
              width="100%"
          /></a>
          <v-card>
            <div class="mt-4 p-4">
              <v-row>
                <v-col cols="12" sm="8" md="8">
                  <h3 class="box-title text-gray">
                    Tạo CV đầu tiên trên TopCV
                  </h3>
                  <div class="box-content text-dark-gray">
                    <p>Bạn muốn nhà tuyển dụng chú ý đến bản thân?</p>
                    <p>
                      Hãy tạo ngay CV đồng bộ với CV trên TopCV để có được ấn
                      tượng sâu sắc đầu tiên từ nhà tuyển dụng.
                    </p>
                  </div>
                  <div class="box-footer">
                    <button type="submit" class="btn-create">
                      Tính bảo hiểm
                    </button>
                  </div>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                  <img
                    v-if="common.imageRight"
                    src="https://www.topcv.vn/v3/images/create-first-cv-logo.png"
                    style="width: 100%; max-width: 220px"
                  />
                </v-col>
              </v-row>
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
  name: "MeCVs",
  components: {
    ProfileUser,
    NoteCv,
  },
  data() {
    return {
      common: {
        imageRight: true,
      },
      windowSize: {
        x: 0,
        y: 0,
      },
    };
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (this.windowSize.x < 600) {
        this.common.imageRight = false;
      } else if (this.windowSize.x < 960) {
        this.common.imageRight = true;
      } else {
        this.common.imageRight = true;
      }
    },
  },
};
</script>

<style>
.manage_cv .desc {
  background-color: #fcfcfc;
  border: 1px dashed #ccc;
  color: #666;
  line-height: 25px;
  margin-bottom: 30px;
  margin-left: 15px;
  padding: 10px;
}

.manage_cv .manage_cv_banner {
  width: 100%;
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 3px 4px rgb(0 0 0 / 10%);
}

.manage_cv .box-title {
  font-size: 20px;
  margin: 10px 0;
}

.manage_cv .box-content {
  padding: 10px 0;
}

.manage_cv .text-gray {
  color: #999;
}

.manage_cv h3 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
.manage_cv .btn-create {
  font-weight: 700;
  padding: 10px 20px;
  background-color: #004d40;
  color: white;
  border-radius: 4px;
}

.manage_cv .footer a {
  color: #004d40;
  text-decoration: none;
  font-weight: 400;
}

.manage_cv .footer-cv {
  color: #004d40;
  font-size: 20px;
  text-align: center;
}
</style>