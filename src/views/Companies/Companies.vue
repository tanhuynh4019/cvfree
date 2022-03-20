<template>
  <div
    v-resize="onResize"
    style="
      background: transparent linear-gradient(179deg, #edfff5, #fff) 0 0
        no-repeat padding-box;
    "
    class="company"
  >
    <div class="company-header">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="9">
            <template>
              <v-tabs>
                <v-tab class="tab-1">Danh sách công ty</v-tab>
                <v-tab class="tab-2">Top công ty</v-tab>
              </v-tabs>
            </template>
            <h3 class="title">Khám phá 100.000+ công ty nổi bật</h3>
            <p>
              Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất dành
              cho bạn
            </p>
            <form class="form-search" :style="common.inputSearch.style">
              <i class="mdi mdi-search-web"></i>
              <input
                class="form-control"
                placeholder="Nhập tên công ty"
                id="keyword"
                name="keyword"
              />
              <button class="btn btn-search btn-primary-hover">Tìm kiếm</button>
            </form>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-img
              v-if="common.imageRight"
              width="100%"
              src="https://www.topcv.vn/v4/image/company-billBoard.svg"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <template>
      <div class="company-body">
        <div class="list">DANH SÁCH CÁC CÔNG TY NỔI BẬT</div>
        <v-container>
          <v-row>
            <v-col md="4" sm="6" v-for="item in company" :key="item._id">
              <v-card link :to="'cong-ty/none'">
                <v-img height="150px" :src="item.banner"> </v-img>
                <v-card-title class="white--text mt-8">
                  <v-avatar size="62">
                    <img alt="user" :src="item.logo" />
                  </v-avatar>
                </v-card-title>
                <v-card-text>
                  <div class="name" v-text="item.title"></div>
                  <p class="text-dark" v-text="item.content"></p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="company-body">
        <div class="list">DANH SÁCH CÁC CÔNG TY MỚI NHẤT</div>
        <v-container>
          <v-row>
            <v-col md="4" sm="6" v-for="item in companysNew" :key="item._id">
              <v-card
                link
                :to="{ name: 'DetailsCompanies', params: { slug: item.slug } }"
              >
                <v-img
                  height="150px"
                  :src="
                    !item.srcBanner
                      ? 'https://www.topcv.vn/images/default_cover/default_normal_cover.jpg'
                      : item.srcBanner
                  "
                >
                </v-img>
                <v-card-title class="white--text mt-8">
                  <v-avatar size="62" color="white">
                    <img alt="user" :src="item.srcLogo" class="border" />
                  </v-avatar>
                </v-card-title>
                <v-card-text>
                  <div class="name" v-text="item.name"></div>
                  <p
                    class="text-dark"
                    v-html="
                      item.introduct == ''
                        ? 'Chưa giới thiệu'
                        : `${item.introduct.substring(0, 200)}...`
                    "
                  ></p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </template>
  </div>
</template>
  </div>
</template>

<script>
import Company from "../../apis/company.api";
export default {
  name: "Companies",
  async created() {
    const companyNew = await Company.getAllCompany("new");
    this.companysNew = companyNew;
  },
  data() {
    return {
      common: {
        imageRight: true,
        inputSearch: {
          style: "width: 50%",
        },
      },
      windowSize: {
        x: 0,
        y: 0,
      },
      company: [
        {
          _id: 1,
          banner:
            "https://static.topcv.vn/company_covers/iBFOjYmzKzY9i37pWMEk.jpg",
          logo: "https://cdn.topcv.vn/140/company_logos/cong-ty-tnhh-khu-du-lich-vinh-thien-duong-alma-591a6f04eae05_rs.jpg",
          title: "CÔNG TY TNHH KHU DU LỊCH VỊNH THIÊN ĐƯỜNG (ALMA)",
          content:
            '"VỀ CÔNG TYCông ty TNHH Khu Du Lịch Vịnh Thiên Đường (ALMA) hoạt động trong lĩnh vực du lịch nghỉ dưỡng. Chính thức ra mắt với công chúng từ năm 2013, trải qua quá trình phát triển, Công ty TNHH Khu Du Lịch Vịnh Thiên Đường – Công ty ALMA bao gồm 4 chi nhánh hoạt động tại các thành phố lớn là Hà Nội, Hồ Chí Minh và Nha..."',
        },
        {
          _id: 2,
          banner:
            "https://static.topcv.vn/company_covers/cong-ty-co-phan-tap-doan-hoa-sen-7bef20231b5608ec54165567c1aba4c5-606d650d0d14c.jpg",
          logo: "https://cdn.topcv.vn/140/company_logos/cong-ty-co-phan-tap-doan-hoa-sen-5abef8f2b83d1_rs.jpg",
          title: "Công ty Cổ phần Tập đoàn Hoa Sen",
          content:
            '" Công ty Cổ Phần Tập Đoàn Hoa Sen là một Doanh nghiệp chuyên sản xuất và kinh doanh Tôn – Thép – Ống Nhựa - Sản phẩm Thương mại với hơn 600 chi nhánh trải dài trên cả nước. Quy mô: Từ 5.000-10.000 người. Chúng tôi tự hào về một nền văn hóa Doanh nghiệp đặc biệt gắn liền với sự phát triển bản thân và chia sẻ lợi ích..."',
        },
        {
          _id: 3,
          banner:
            "https://static.topcv.vn/company_covers/cong-ty-tnhh-cmc-global-5e3dc09f007df09930dcb7b36f9cbd11-60c33177cb4c7.jpg",
          logo: "https://cdn.topcv.vn/140/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          title: "CÔNG TY TNHH CMC GLOBAL",
          content:
            '" CMC Global ra đời từ kinh nghiệm 25 năm trong lĩnh vực ICT và hơn 10 năm kinh nghiệm trong lĩnh vực Outsourcing của Tập đoàn công nghệ CMC, với sứ mệnh trở thành đơn vị cung cấp nhân lực kỹ sư phần mềm chất lượng cao, cung cấp các giải pháp, dịch vụ CNTT cho thị trường quốc tế. Hiện CMC Global đang sở hữu đến 700++ nhân viên,..."',
        },
      ],
      companysNew: [],
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
        this.common.inputSearch = {
          style: "width: 100%",
        };
      } else if (this.windowSize.x < 960) {
        this.common.imageRight = true;
        this.common.inputSearch = {
          style: "width: 100%",
        };
      } else {
        this.common.imageRight = true;
        this.common.inputSearch = {
          style: "width: 50%",
        };
      }
    },
  },
};
</script>

<style>
.v-application .mt-8 {
  margin-top: 0px !important;
}

.company .container {
  max-width: 1320px;
}

.company .company-header {
  padding-bottom: 14px;
}

.company .company-header .tab-1 {
  text-transform: initial;
  font-weight: 600;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: black !important;
}

.company .company-header .tab-2 {
  text-transform: initial;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: black !important;
}

.company .company-header .v-tabs-slider {
  background-color: black;
  height: 100%;
  width: 100%;
}

.company .company-header .theme--light.v-tabs > .v-tabs-bar {
  background-color: unset;
}

.company .company-header .title {
  color: #00b14f;
  font-size: 24px !important;
  letter-spacing: 0 !important;
  padding-top: 33px;
  padding-bottom: 12px;
  text-align: left;
  font-weight: 400;
}

.company .company-header .form-search {
  background: #fff 0 0 no-repeat padding-box;
  border: 1px solid #fff;
  border-radius: 100px;
  display: flex;
  height: 50px;
  overflow: hidden;
  position: relative;
  width: 512px;
  height: 48px;
}

.company .company-header .form-search:hover {
  border: 1px solid #00b14f;
}

.company .company-header .form-search i {
  left: 32px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.company .company-header .form-search #keyword {
  border-color: transparent;
  box-shadow: none;
  font-size: 14px;
  height: 100%;
  outline: none;
  padding-left: 62px;
  width: 100%;
}

.company .company-header .btn-search {
  background: #00b14f;
  border-radius: 100px;
  color: #fff;
  position: absolute;
  right: 7px;
  top: 50%;
  transform: translateY(-50%);
}

.company .company-body .list {
  color: #333;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  padding: 24px 0;
}

.company .company-body .v-avatar {
  align-items: center;
  display: block;
  border-radius: 0%;
  justify-content: center;
  line-height: normal;
  position: initial;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  margin-top: -13%;
  z-index: 10000 !important;
}

.company .company-body .name {
  margin-bottom: 12px;
  font-weight: 600;
  color: black;
}

.company .company-body .name:hover {
  text-decoration: underline;
}
</style>
