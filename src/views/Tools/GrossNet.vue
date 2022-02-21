<template>
  <div v-resize="onResize" class="grossnet-font">
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" xs="6" lg="8">
          <div v-for="(item, i) in listForm" :key="i" class="box-gray">
            <h4 style="color: #004d40">
              {{ item.name }}
            </h4>
            <div v-for="(items, j) in item.listContent" :key="j">
              <i>
                {{ items.content }}
              </i>
            </div>
            <v-form action="">
              <div
                class="salary-calculate-box"
                v-for="(item, i) in listContentForm"
                :key="i"
              >
                <b class="mr-12 float-left">{{ item.name }}</b>
                <v-radio-group class="radio-style" v-model="row_rule" row>
                  <div v-for="(items, j) in item.radio" :key="j">
                    <v-radio
                      :label="items.label"
                      color="#004D40"
                      :value="items.value"
                      class="float-left"
                    ></v-radio>
                    <span class="custom-box-span">
                      {{ items.text }}
                      <v-btn icon small>
                        <v-icon style="font-size: 16px" class="mr-3">
                          {{ items.icon }}
                        </v-icon>
                      </v-btn>
                    </span>
                  </div>
                </v-radio-group>
                <hr />
                <div class="mb-2">
                  <v-row>
                    <v-col v-for="(item, i) in listTable" :key="i" sm="4">
                      <b>{{ item.name }}</b>
                      <p style="color: #004d40">{{ item.cost }}</p>
                    </v-col>
                  </v-row>
                </div>
              </div>
              <div class="mt-5 text-field-box">
                <v-row>
                  <v-col sm="6">
                    <b class="mr-5 mt-2 float-left">Thu nhập:</b>
                    <v-text-field
                      dense
                      outlined
                      placeholder="VD: 10,000,000"
                      suffix="(VNĐ)"
                      prepend-inner-icon="mdi-cash"
                      color="#004D40"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
              <div class="mt-3">
                <b class="mr-5 mt-2 float-left">Mức lương bảo hiểm:</b>
                <v-radio-group v-model="row_insurance" row>
                  <v-row>
                    <v-col sm="5">
                      <v-radio
                        label="Trên lương chính thức"
                        value="insurance_1"
                        color="#004D40"
                      ></v-radio>
                    </v-col>
                    <v-col sm="7">
                      <v-row>
                        <v-col sm="4">
                          <v-radio
                            color="#004D40"
                            label="Khác:"
                            value="insurance_2"
                          ></v-radio>
                        </v-col>
                        <v-col class="text-field-box" sm="8">
                          <v-text-field
                            dense
                            outlined
                            suffix="(VNĐ)"
                            prepend-inner-icon="mdi-cash"
                            color="#004D40"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-radio-group>
              </div>
              <div class="mt-5">
                <b class="mr-5 float-left">
                  Vùng:
                  <a class="custom-box-text"> (Giải thích) </a>
                </b>
                <v-radio-group class="radio-insurance" v-model="row_line" row>
                  <v-radio
                    v-for="item in radioWage"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    color="#004d40"
                  ></v-radio>
                </v-radio-group>
              </div>
              <div class="mt-5 text-field-box">
                <v-row>
                  <v-col sm="6">
                    <b class="mr-5 float-left mt-2">Số người:</b>
                    <v-text-field
                      dense
                      outlined
                      placeholder="Người"
                      prepend-inner-icon="mdi-account-multiple"
                      color="#004D40"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
              <div class="mt-5 text-center">
                <v-row>
                  <v-col cols="12" sm="6" xs="12" md="6">
                    <v-btn
                      color="#004D40"
                      class="mr-4 span-btn"
                      @click="validate"
                    >
                      GROSS → NET
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="6" xs="12" md="6">
                    <v-btn
                      outlined
                      color="#004D40"
                      class="mr-4"
                      @click="validate"
                    >
                      NET → GROSS
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-form>
          </div>
          <div class="box-gray">
            <div>
              <v-btn
                rounded
                color="#004D40"
                x-small
                class="mr-1 span-btn btn-span"
              >
                <v-icon style="font-size: 12px" class="mr-1">mdi-bell</v-icon>
                Thông báo mới nhất
              </v-btn>
            </div>
            <div class="text-des-notice mt-3">
              <h5>Mức lương cơ sở năm 2021 của cán bộ, công chức, viên chức</h5>
              <p>
                Ngày 12/11/2020, tại kỳ họp thứ 10, Quốc hội khóa XIV, Quốc hội
                đã chính thức thông qua Nghị quyết về dự toán ngân sách Nhà nước
                năm 2021. Một trong điểm nội dung đáng chú ý trong Nghị quyết
                lần này là trong năm 2021 sẽ
                <b>không tăng lương cơ sở cho cán bộ, công chức, viên chức.</b>
              </p>
              <p>
                Cụ thể,
                <b>lương cơ sở năm 2021 vẫn là 1,49 triệu đồng/tháng</b> như
                hiện nay, căn cứ theo
                <a
                  href="https://luatvietnam.vn/lao-dong/nghi-dinh-ve-tang-luong-co-so-172634-d1.html"
                  >Nghị định số 38 năm 2019 của Chính phủ</a
                >.
                <span
                  >Ngoài ra, lương và phụ cấp theo lương của cán bộ, công chức,
                  viên chức cũng không thay đổi.</span
                >
              </p>
            </div>
          </div>
          <div class="box-gray">
            <div class="btn-header mb-5">
              <v-btn color="primary" x-small class="mr-1 btn-span span-btn">
                <v-icon style="font-size: 12px" class="mr-1"
                  >mdi-facebook</v-icon
                >
                Khuyên dùng 709
              </v-btn>
              <v-btn color="primary" x-small class="mr-1 btn-span">
                Chia sẻ
              </v-btn>
            </div>
            <div v-for="(item, i) in listPageContent" :key="i">
              <h5>{{ item.name }}</h5>
              <a :href="item.link">
                <img :src="item.image" width="100%" alt="" class="mb-3" />
              </a>
              <p v-for="(items, j) in item.listContent" :key="j">
                <b>{{ items.name }}</b> {{ items.content }}
              </p>
              <p :class="item.class">
                {{ item.description }}
                <i style="color: rgb(132, 133, 132); font-size: 0.9em">{{
                  item.time
                }}</i>
              </p>
            </div>
            <div
              v-for="(item, i) in listLicenseTable"
              :key="i"
              class="text-licensetable"
            >
              <span>
                {{ item.name }} <a :href="item.link">{{ item.text }}</a>
              </span>
            </div>
            <div class="btn-bottom mb-3 mt-3">
              <v-btn color="primary" x-small class="mr-1 btn-span">
                <v-icon style="font-size: 12px" class="mr-1"
                  >mdi-facebook</v-icon
                >
                Khuyên dùng 709
              </v-btn>
              <v-btn color="primary" x-small class="mr-1 btn-span">
                Chia sẻ
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="4" xs="6" lg="4">
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
      listForm: [
        {
          name: "Công cụ tính lương Gross sang Net / Net sang Gross chuẩn 2022",
          listContent: [
            {
              content:
                "Áp dụng mức giảm trừ gia cảnh mới nhất 11 triệu đồng/tháng (132 triệu đồng/năm) với nguời nộp thuế và 4,4 triệu đồng/tháng với mỗi người phụ thuộc (Theo Nghị quyết số 954/2020/UBTVQH14)",
              type: "1",
              text: "",
              link: "",
            },
            {
              content:
                "Áp dụng mức lương tối thiểu vùng mới nhất có hiệu lực từ ngày 1/1/2020 (Theo điều 3, Nghị định 90/2019/NĐ-CP)",
              type: "2",
              text: "tối thiểu vùng",
              link: "https://www.topcv.vn/tinh-luong-gross-net#",
            },
          ],
        },
      ],
      listTable: [
        {
          name: "Lương cơ sở:",
          cost: "1,490,000đ",
        },
        {
          name: "Giảm trừ gia cảnh bản thân:",
          cost: "11,000,000đ",
        },
        {
          name: "Người phụ thuộc:",
          cost: "4,400,000đ",
        },
      ],
      listContentForm: [
        {
          name: "Áp dụng quy định:",
          radio: [
            {
              label: "Từ 1/7/2020",
              value: "rule_1",
              text: "(Mới nhất)",
              icon: "mdi-help-circle",
            },
            {
              label: "Từ 1/1/2020 - 30/6/2020",
              value: "rule_2",
              text: "",
              icon: "mdi-help-circle",
            },
          ],
        },
      ],
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
      listPageContent: [
        {
          name: "Lương Gross là gì? Lương Net là gì?",
          image: "",
          link: "",
          listContent: [
            {
              name: "Lương Gross",
              content:
                "là tổng thu nhập của người lao động, bao gồm cả các khoản đóng bảo hiểm và thuế. Mức lương thực nhận của bạn thuờng sẽ thấp hơn mức này vì bạn phải trích ra một phần để đóng bảo hiểm và nộp thuế thu nhập cá nhân.",
            },
            {
              name: "Lương Net",
              content:
                "là lương thực nhận của bạn sau khi đã trừ hết các khoản chi phí bảo hiểm và thuế thu nhập cá nhân, hiểu đơn giản nó chính là số tiền bạn có thể bỏ túi.",
            },
            {
              name: "Diễn giải quan hệ giữa lương Gross và lương Net bằng công thức:",
              content: "",
            },
          ],
          description:
            "LUƠNG NET = LƯƠNG GROSS - (BHXH + BHYT + BHTN + THUẾ TNCN)",
          time: "",
          class: "content-dash-center",
        },
        {
          name: "Lương Gross hay lương Net có lợi hơn cho người lao động?",
          image: "",
          link: "",
          listContent: [
            {
              name: "",
              content:
                "Nếu thoạt nhìn có thể bạn cho rằng lương Net có lợi hơn vì đó chính là số tiền bạn nhận được, còn lương Gross thì bạn có cảm giác bị mất đi một khoản khi nhận lương.",
            },
            {
              name: "",
              content:
                "Trên thực tế khi bạn quy đổi lương Net sang Gross hay từ Gross sang Net thì số tiền bạn nhận được không đổi, dù bạn đàm phàn với nhà tuyển dụng bằng cách nào nào thì nhà tuyển dụng sẽ tính toán để lương Net và lương Gross ở mức tương đương nhau.",
            },
          ],
          description:
            "Ví dụ: Mức lương Gross là 15,000,000 VND sẽ tương đương với mức lương Net 13,303,750 VND trong trường hợp đóng bảo hiểm trên lương chính thức Vậy nên khi nhà tuyển dụng quyết định trả bạn mức lương Gross là 15,000,000 VND, nếu bạn đàm phán mức lương Net thì lương của bạn sẽ là 13,303,750 VND và ngược lại. Về cơ bản lương bạn nhận được vẫn không đổi dù bạn đàm phán lương Net hay Gross.",
          time: "Theo quy định mới nhất (Từ 1/7/2020)",
          class: "content-dash",
        },
        {
          name: "",
          image: "",
          link: "",
          listContent: [
            {
              name: "",
              content:
                "Tuy nhiên nếu tinh ý, bạn sẽ thấy rằng khi sử dụng lương Gross mức lương bạn nhận được sẽ minh bạch hơn. Với mức lương Gross bạn sẽ chủ động tính toán được mức lương Net của mình và biết được các khoản bảo hiểm, thuế mà công ty đóng cho bạn, nguợc lại với lương Net có thể bạn sẽ không biết được mức bảo hiểm công ty đóng cho mình là bao nhiêu.",
            },
          ],
          description:
            "Ví dụ: Mức lương Net là 13,500,000 VND - Trường hợp đóng bảo hiểm trên mức lương chính thức lương Gross sẽ là 15,230,815 VND - Trường hợp đóng bảo hiểm ở mức 5,000,000 VND lương Gross sẽ là 14,156,579 VND Như ví dụ trên, bạn có thể thấy cùng một mức lương Net nhưng với mức đóng bảo hiểm khác nhau mức lương Gross bạn nhận được chênh nhau khá nhiều, lương Gross sẽ thể hiện chính xác quyền lợi bạn nhận được hơn là lương Net.",
          time: "Theo quy định mới nhất (Từ 1/7/2020)",
          class: "content-dash",
        },
        {
          name: "Cách chuyển đổi lương Gross sang Net / Lương Net sang Gross",
          image:
            "https://static.topcv.vn/manual/cong-cu-tinh-luong-gross-net-topcv.png",
          link: "http://localhost:8080/tinh-luong-gross-net#",
          listContent: [
            {
              name: "",
              content:
                "Cách đơn giản nhất là các bạn có thể sử dụng công cụ chuyển đổi lương Net sang Gross và Gross sang Net của TopCV. Bạn chỉ cần cung cấp các thông số: Lương, mức đóng bảo hiểm, vùng và số người phụ thuộc, công cụ sẽ tính toán và phân tích diễn giải từng loại chi phí để bạn hiểu rõ nhất mức lương của mình.",
            },
          ],
          description: "",
          time: "",
          class: "",
        },
      ],
      listLicenseTable: [
        {
          name: "Bản quyền nội dung thuộc về TopCV.vn, được bảo vệ bởi Luật bảo vệ bản quyền tác giả",
          link: "https://www.dmca.com/Protection/Status.aspx?ID=1b16a667-a95e-4730-846f-46f962522fce",
          text: "DMCA.",
        },
        {
          name: "Vui lòng không trích dẫn nội dung trang web khi chưa được sự cho phép của TopCV.",
          link: "",
          text: "",
        },
      ],
      radioWage: [
        {
          label: "I",
          value: "wage-1",
        },
        {
          label: "II",
          value: "wage-2",
        },
        {
          label: "III",
          value: "wage-3",
        },
        {
          label: "IV",
          value: "wage-4",
        },
      ],
      row_rule: "rule_1",
      row_insurance: "insurance_1",
      row_line: "wage-1",
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
.radio-style label,
.radio-insurance label {
  font-size: 14px;
}
.radio-insurance {
  margin-top: -35px !important;
  padding-top: 0 !important;
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
.custom-box-text {
  color: red !important;
  font-size: 12px;
  font-weight: normal;
  text-decoration: none;
}
.custom-box-text:hover {
  text-decoration: underline;
  color: red;
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
.span-btn {
  color: #fff !important;
  font-weight: normal;
}
.btn-span span {
  font-size: 10px !important;
}
.content-dash-center {
  padding: 20px;
  text-align: center;
  font-size: 18px;
  border: 1px dashed rgb(102, 102, 102);
}
.content-dash {
  padding: 20px;
  text-align: justify;
  font-size: 14px;
  border: 1px dashed rgb(102, 102, 102);
}
.text-des-notice a {
  text-decoration: none;
  color: #999999 !important;
}
.text-des-notice a:hover {
  text-decoration: underline;
}
.text-des-notice h5 {
  font-weight: normal;
}
.text-licensetable span {
  color: red;
  font-size: 14px;
  line-height: 1.6em;
  text-align: justify;
  margin: 0 0 10px;
}
.text-licensetable a {
  color: red !important;
  text-decoration: none;
  font-weight: bold;
}
.text-licensetable a:hover {
  color: red;
  text-decoration: underline;
}
.v-radio label {
  font-size: 14px !important;
}
.float-right {
  float: right;
}
</style>
