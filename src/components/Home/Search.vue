<template>
  <div
    v-resize="onResize"
    style="
      background-image: url('https://lh3.googleusercontent.com/fife/AAWUweXNzKYSC3mWJ-0sh325v91gETfpLdWBHJzC9OMYtHvOBgSvwi2Kmq23Q6T9TksHRsaIINyE6JY32Uk7RBPMgiL3Nj0OgkwN3z9KezLOgrlwCOWtdNjn_bTA5CPrG55W2uQT7PxUXwVfUPDEWFIvX93Xpi7r4aEmjH_V3eMlJG0ePMfzXMpIwb6KhWO0F5QaePw38g0wgdK_-SVmzwP9R_eUwGiJY0_uFx6j_Lh9es2vZG-TV1OM5FwBchBkKDOhGzdmMVrM_M1zkncqsL5sf6sIjmk9Vg-XfkU2hNxRZYqUkDHdc6HO7HE4ReZ_nS8YEHVW5r59yxQCFcNIwaicMcqJMtL7qH872boZapy-lnlHF4ROLYoK9UA7bNSSIE2dhgU0nMhIPzgCZIyqsvxXN1Xwel1_urQ08ilwj6ReO6jjD_qZmXIb-tt1JEoUxTWEawnuRTYsgnT31xLwDXblWqZ104z_c3HBp2xp2dVBiRaLgTCyFTA33XbLvl31Xf3YErLuU-RKi5lqnX3MQH3pVN0nlIsqYtrW5yjF0vlvHELJXKuHqgUBimIKk10Q1pD-cFYJftcqUV-kO4EWd-k60bPMbo3ZKZENP8z4YjD86964zBW3hgB0k8HErzsYZSIqCbMufNq1QqUEgrC2BBf34HyPKpu3p0iRrlREK4Er-5k8h-VrnZRU4lYGTX1fBdMCUpA4XGAF-1y5vnFixLf4EOwWHzG1BphbYQE=w1876-h863-ft');
      background-size: 100% 100%;
    "
  >
    <v-container>
      <v-form ref="searchForm" v-model="searchForm.valid">
        <v-row class="mt-5">
          <v-col cols="12" md="8">
            <h2>Tìm việc phù hợp với bạn</h2>
            <v-card
              elevation="1"
              class="box-search mt-2"
              color="hsla(0,0%,100%,.3)"
            >
              <div class="p-3">
                <v-row>
                  <v-col cols="12" sm="8">
                    <v-text-field
                      @click="isSearchAdvanced"
                      v-model="searchForm.value.key"
                      placeholder="Tên công việc, vị trí bạn muốn ứng tuyển ..."
                      prepend-inner-icon="mdi-search-web"
                      solo
                      height="44"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-btn
                      dark
                      depressed
                      color="#004D40"
                      height="48"
                      width="100%"
                      @click="search"
                    >
                      Tìm kiếm ngay
                    </v-btn>
                  </v-col>
                  <v-col sm="8" v-if="advanceSearch">
                    <v-row>
                      <v-col cols="6">
                        <b>Tìm kiếm nâng cao</b>
                      </v-col>
                      <v-col cols="6">
                        <v-btn
                          style="margin-top: -6px"
                          color="#0D47A1"
                          class="float-end"
                          text
                          @click="isSearchAdvanced"
                          >Thu gọn</v-btn
                        >
                      </v-col>
                      <v-col cols="6">
                        <v-autocomplete
                          :items="selected.careers"
                          v-model="searchForm.value.careers"
                          clearable
                          placeholder="Nghành nghề"
                          label="Nghành nghề"
                          solo
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="6">
                        <v-autocomplete
                          clearable
                          :items="selected.companyFields"
                          v-model="searchForm.value.companyFields"
                          placeholder="Lĩnh vực công ty"
                          label="Lĩnh vực công ty"
                          solo
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="6">
                        <v-autocomplete
                          clearable
                          :items="selected.city"
                          v-model="searchForm.value.city"
                          placeholder="Địa điểm"
                          label="Địa điểm"
                          solo
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="6">
                        <v-autocomplete
                          clearable
                          :items="selected.position"
                          v-model="searchForm.value.position"
                          placeholder="Cấp bậc"
                          label="Cấp bậc"
                          solo
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="6">
                        <v-autocomplete
                          clearable
                          :items="selected.type"
                          v-model="searchForm.value.type"
                          placeholder="Hình thức làm việc"
                          label="Hình thức làm việc"
                          solo
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="6">
                        <v-autocomplete
                          clearable
                          :items="selected.salary"
                          v-model="searchForm.value.salary"
                          placeholder="Mức lương"
                          label="Mức lương"
                          solo
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </div>
            </v-card>
            <div class="mt-10">
              <h6 class="font-weight-bold">
                Các công ty tuyển dụng hàng đầu trên TopCV
              </h6>
              <v-row>
                <v-col
                  cols="3"
                  sm="2"
                  md="2"
                  v-for="company in companys.top"
                  :key="company._id"
                >
                  <div class="p-3">
                    <img height="35" width="100%" :src="company.image" />
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <v-img
             v-if="common.imageRight"
              width="100%"
              src="https://www.topcv.vn/v4/image/welcome/image_topcv.png?v=1.0.0"
            ></v-img>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchForm: {
        valid: true,
        value: {
          key: "",
          careers: "",
          companyFields: "",
          city: "",
          position: "",
          type: "",
        },
      },
      advanceSearch: false,
      companys: {
        top: [
          {
            _id: 1,
            image:
              "https://www.topcv.vn/v4/image/welcome/companies/onemoutn.png",
          },
          {
            _id: 2,
            image:
              "https://www.topcv.vn/v4/image/welcome/companies/prudential.png",
          },
          {
            _id: 3,
            image: "https://www.topcv.vn/v4/image/welcome/companies/fpt.png",
          },
          {
            _id: 4,
            image: "https://www.topcv.vn/v4/image/welcome/companies/tiki.png",
          },
          {
            _id: 5,
            image:
              "https://www.topcv.vn/v4/image/welcome/companies/viettel.png",
          },
          {
            _id: 6,
            image:
              "https://www.topcv.vn/v4/image/welcome/companies/teachcombank.png",
          },
        ],
      },
      selected: {
        careers: ["An toàn lao động", "Bán hàng kỷ thuật", "Bán lẻ/ bán sỉ"],
        companyFields: ["Bất động sản", "Cơ khí", "Cơ quan nhà nước"],
        city: ["Hồ Chí Minh", "Bình Dương", "Hà Nội"],
        position: ["Nhân viên", "Trưởng nhóm", "Quản lý/ Giám sát"],
        type: ["Toàn thời gian", "Bán thời gian", "Thực tập"],
        salary: ["Dưới 3 triệu", "3 - 5 triệu", "5 - 7 triệu"],
      },
      windowSize: {
        x: 0,
        y: 0,
      },
      common: {
        imageRight: "",
      },
    };
  },
  mounted() {
    this.onResize();
  },
  methods: {
    isSearchAdvanced() {
      let that = this;
      that.advanceSearch = !that.advanceSearch;
    },
    search() {
      console.log(this.searchForm.value);
    },
    onResize() {
      let that = this;
      that.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (that.windowSize.x < 600) {
        that.common.imageRight = false;
      } else if (that.windowSize.x < 960) {
        that.common.imageRight = false;
      } else {
        that.common.imageRight = true;
      }
    },
  },
};
</script>

<style>
.box-search .v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px !important;
}
.box-search .v-messages {
  min-height: 0px !important;
}
.box-search .v-text-field__details {
  min-height: 0px;
}
</style>
