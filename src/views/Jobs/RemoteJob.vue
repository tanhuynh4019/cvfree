<template>
  <div class="mt-5" v-resize="onResize">
    <v-container>
      <v-card color="#004D40" dark style="border-radius: 5px 5px 0px 0px">
        <v-row>
          <v-col cols="12" sm="9">
            <div class="p-3">
              <h4>Việc làm từ xa (Remote)</h4>
              <p>
                Trong tương lai, việc làm từ xa sẽ sớm trở thành xu hướng tất
                yếu trong thời kì công nghệ số bùng nổ. Cùng tìm kiếm công việc
                phù hợp ngay hôm nay tại TopCV !
              </p>
              <div>
                <v-chip small class="ma-2" color="white" text-color="#004D40">
                  <v-avatar left>
                    <v-icon>mdi-check-circle</v-icon>
                  </v-avatar>
                  Làm việc tại nhà
                </v-chip>
                <v-chip small class="ma-2" color="white" text-color="#004D40">
                  <v-avatar left>
                    <v-icon>mdi-check-circle</v-icon>
                  </v-avatar>
                  Linh hoạt thời gian
                </v-chip>
                <v-chip small class="ma-2" color="white" text-color="#004D40">
                  <v-avatar left>
                    <v-icon>mdi-check-circle</v-icon>
                  </v-avatar>
                  Gia tăng thu nhập
                </v-chip>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="3">
            <div class="p-4">
              <v-img
                v-if="common.imageRight"
                width="100%"
                height="100%"
                src="https://www.topcv.vn/v4/image/remote/background.png"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="box-search" style="border-radius: 0px 0px 0px 0px">
        <div class="p-3">
          <v-row>
            <v-col sm="8">
              <v-text-field
                placeholder="Tên công việc, vị trí bạn muốn ứng tuyển ..."
                prepend-inner-icon="mdi-search-web"
                solo
                height="44"
              ></v-text-field>
            </v-col>
            <v-col sm="2">
              <v-autocomplete
                :items="selected.careers"
                prepend-inner-icon="mdi-office-building"
                clearable
                placeholder="Nghành nghề"
                label="Nghành nghề"
                solo
              ></v-autocomplete>
            </v-col>
            <v-col sm="2">
              <v-btn class="w-100" dark depressed color="#004D40" height="48">
                <v-icon>mdi-card-search</v-icon>
                <span class="ml-1">Tìm kiếm</span>
              </v-btn>
            </v-col>
            <v-col sm="12">
              <v-chip-group style="margin-top: -20px">
                <v-chip v-for="item in keywords" :key="item._id" width="100">
                  {{ item.name }}
                  <v-avatar
                    right
                    class="indigo darken-4 text-white font-weight-bold"
                  >
                    {{ item.count }}
                  </v-avatar>
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
        </div>
      </v-card>
      <v-card style="border-radius: 0px 0px 0px 0px">
        <div class="p-3">
          <div>
            Tìm thấy <b style="color: #004d40">97</b> việc làm phù hợp với yêu
            cầu của bạn.
          </div>
        </div>
      </v-card>
      <v-card style="border-radius: 0px 0px 0px 0px">
        <div class="p-3">
          <v-card>
            <v-row>
              <v-col sm="2">
                <div class="p-2">
                  <center>
                    <v-img
                      width="70%"
                      height="90"
                      src="https://cdn.topcv.vn/80/company_logos/197da107841bf0b3ca67db3c5bf07571-61dfd5470d712.jpg"
                    ></v-img>
                  </center>
                </div>
              </v-col>
              <v-col sm="8">
                <div class="p-2">
                  <h5>
                    Cộng Tác Viên Tìm Kiếm Khách Hàng - Phát Triển Thị Trường
                  </h5>
                  <p>CÔNG TY TNHH TRUYỀN THÔNG F.WORLD</p>
                </div>
              </v-col>
              <v-col sm="2"> 
                  Còn <b>8</b> ngày để ứng tuyển
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "RemoteJob",
  data() {
    return {
      common: {
        imageRight: true,
      },
      windowSize: {
        x: 0,
        y: 0,
      },
      selected: {
        careers: ["An toàn lao động", "Bán hàng kỷ thuật", "Bán lẻ/ bán sỉ"],
        companyFields: ["Bất động sản", "Cơ khí", "Cơ quan nhà nước"],
        city: ["Hồ Chí Minh", "Bình Dương", "Hà Nội"],
        position: ["Nhân viên", "Trưởng nhóm", "Quản lý/ Giám sát"],
        type: ["Toàn thời gian", "Bán thời gian", "Thực tập"],
        salary: ["Dưới 3 triệu", "3 - 5 triệu", "5 - 7 triệu"],
      },
      keywords: [
        {
          _id: 1,
          name: "Tất cả",
          count: 305,
          link: "",
        },
        {
          _id: 2,
          name: "Công tác viên",
          count: 98,
          link: "",
        },
        {
          _id: 3,
          name: "Fulltime Remote",
          count: 167,
          link: "",
        },
        {
          _id: 4,
          name: "Chuyên gia",
          count: 41,
          link: "",
        },
        {
          _id: 5,
          name: "Freelancer",
          count: 97,
          link: "",
        },
        {
          _id: 6,
          name: "Khác",
          count: 54,
          link: "",
        },
      ],
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
