<template>
  <div v-resize="onResize" class="grossnet-font">
    <v-container>
      <v-row>
        <v-col sm="8">
          <div class="box-gray">
            <h4>
              Công cụ tính lương Gross sang Net / Net sang Gross chuẩn 2022
            </h4>
            <span>
              Áp dụng mức giảm trừ gia cảnh mới nhất 11 triệu đồng/tháng (132
              triệu đồng/năm) với nguời nộp thuế và 4,4 triệu đồng/tháng với mỗi
              người phụ thuộc (Theo Nghị quyết số 954/2020/UBTVQH14) Áp dụng mức
              lương <span>tối thiểu vùng</span> mới nhất có hiệu lực từ ngày
              1/1/2020 (Theo điều 3, Nghị định 90/2019/NĐ-CP)
            </span>
            <form class="salary-calculate-box" action="">
              <div>
                <b class="mr-12 float-left">Áp dụng quy định:</b>
                <v-radio-group class="radio-style" v-model="row" row>
                  <v-radio
                    label="Từ 1/7/2020"
                    color="#004D40"
                    value="radio-1"
                  ></v-radio>
                  <span class="custom-box-span">
                    (Mới nhất)
                    <v-btn icon small>
                      <v-icon style="font-size: 16px; margin-right: 15px"
                        >mdi-help-circle</v-icon
                      >
                    </v-btn>
                  </span>
                  <v-radio
                    label="Từ 1/1/2020 - 30/6/2020"
                    color="#004D40"
                    value="radio-2"
                  ></v-radio>
                  <v-btn icon small>
                    <v-icon style="font-size: 16px; margin-left: -15px"
                      >mdi-help-circle</v-icon
                    >
                  </v-btn>
                </v-radio-group>
              </div>
              <hr />
              <div class="mb-2">
                <table class="table-items">
                  <thead>
                    <tr>
                      <th>Lương cơ sở:</th>
                      <th>Giảm trừ gia cảnh bản thân:</th>
                      <th>Người phụ thuộc:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1,490,000đ</td>
                      <td>11,000,000đ</td>
                      <td>4,400,000đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <v-row>
                  <v-col sm="6">
                    <v-text-field
                      label="Thu thập"
                      prepend-inner-icon="mdi-cash"
                      color="#004D40"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </form>
          </div>
        </v-col>
        <v-col sm="4">
          <div class="box-img">
            <a
              href="https://tuyendung.topcv.vn/?utm_source=tool-tinh-luong-gross-net&utm_campaign=refer-kenh-tuyendung&utm_medium=topcv-seo"
            >
              <img
                src="https://static.topcv.vn/manual/dang-tin-tuyen-dung-mien-phi-tim-kiem-ung-vien-topcv.png"
                alt=""
                width="100%"
              />
            </a>
          </div>
          <div v-for="(item, i) in listBoxRelated" :key="i" class="box-gray">
            <p class="title-box">
              <v-icon color="#004D40"> {{ item.icon }} </v-icon>
              {{ item.name }}
            </p>
            <hr />
            <div v-if="item.type == 1">
              <v-list class="box-list-gray">
                <v-list-item v-for="(items, j) in item.listContent" :key="j">
                  <a :href="items.link">{{ items.name }}</a>
                </v-list-item>
              </v-list>
            </div>
            <div v-if="item.type == 2">
              <v-list class="box-list-gray-2">
                <v-list-item v-for="(items, j) in item.listContent" :key="j">
                  <p>
                    {{ items.name }}
                    <a :href="items.link">{{ items.nameLink }}</a>
                  </p>
                </v-list-item>
              </v-list>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "GrossNet",
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0,
      },
      listBoxRelated: [
        {
          name: "Bài viết liên quan",
          icon: "mdi-text-box",
          type: 1,
          listContent: [
            {
              name: "Giấy tờ thủ tục hồ sơ xin việc",
              link: "https://www.topcv.vn/giay-to-thu-tuc-ho-so-xin-viec",
            },
            {
              name: "Tải mẫu sơ yếu lý lịch chuẩn miễn phí",
              link: "https://www.topcv.vn/tai-mau-so-yeu-ly-lich-chuan-mien-phi",
            },
            {
              name: "Cách viết Email xin việc tiếng Anh",
              link: "https://www.topcv.vn/cach-viet-email-xin-viec-bang-tieng-anh",
            },
            {
              name: "Các mẫu CV tham khảo theo nhóm ngành",
              link: "https://www.topcv.vn/tong-hop-cv-tham-khao-cac-nhom-nganh",
            },
            {
              name: "Mẫu đơn xin nghỉ việc chuẩn",
              link: "https://www.topcv.vn/mau-don-xin-nghi-viec",
            },
            {
              name: "Hướng dẫn viết CV tiếng Nhật",
              link: "https://www.topcv.vn/huong-dan-viet-cv-tieng-nhat",
            },
            {
              name: "Các mẫu CV tham khảo theo nhóm ngành",
              link: "https://www.topcv.vn/tong-hop-cv-tham-khao-cac-nhom-nganh",
            },
          ],
        },
        {
          name: "Hỗ trợ",
          icon: "mdi-email",
          type: 2,
          listContent: [
            {
              name: "Bạn có chia sẻ hay cần tư vấn về cách tính lương",
              nameLink: "Gross/Net?",
              link: "",
            },
            {
              name: "Hãy gửi email đề xuất tới",
              nameLink: "hotro@topcv.vn.",
              link: "hotro@topcv.vn",
            },
          ],
        },
      ],
      row: null,
    };
  },
  mounted() {
    this.onResize();
  },

  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (this.windowSize.x < 600) {
        this.common.image = {
          width: "75%",
          height: "75%",
        };
      } else if (this.windowSize.x < 960) {
        this.common.image = {
          width: "90%",
          height: "90%",
        };
      } else {
        this.common.image = {
          width: "100%",
          height: "100%",
        };
      }
    },
  },
};
</script>

<style>
.grossnet-font {
  font-size: 14px;
}
.radio-style {
  padding-top: 0 !important;
}
.radio-style label {
  font-size: 14px;
}
.box-gray {
  background: #fafafa;
  border-radius: 8px;
  box-shadow: -1px 1px 6px rgb(0 0 0 / 5%);
  margin-bottom: 16px;
  overflow: hidden;
  padding: 16px;
}
.box-img {
  border-radius: 8px;
  box-shadow: -1px 1px 6px rgb(0 0 0 / 5%);
  margin-bottom: 16px;
}
.salary-calculate-box {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  padding: 16px;
  margin-bottom: 12px;
  margin-top: 12px;
}
.custom-box-span {
  color: red;
  font-size: 12px;
  margin-left: -15px;
}
.float-left {
  float: left;
}
.table-items {
  width: 100%;
}
.title-box {
  font-size: 19px;
  color: #004d40;
}
.box-list-gray,
.box-list-gray-2 {
  background-color: #fafafa !important;
  padding: 0 0;
}
.box-list-gray a {
  text-decoration: none;
  color: black !important;
}
.box-list-gray a:hover {
  text-decoration: underline;
  cursor: pointer;
}
.box-list-gray-2,
.box-list-gray {
  font-size: 15px;
}
.box-list-gray-2 a {
  text-decoration: none;
  color: #004d40 !important;
}
.box-list-gray-2 a:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
