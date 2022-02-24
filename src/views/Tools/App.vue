<template>
  <div v-resize="onResize" class="app-cv-font">
    <div class="dowload-app-CV mb-5">
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" md="7" sm="7">
            <div class="title-top">
              <h4>ỨNG DỤNG DI ĐỘNG TOPCV</h4>
              <b> CV xịn, việc làm chất, ứng tuyển bất cứ nơi đâu! </b>
              <p>
                Với mong muốn thay đổi cách thức tuyển dụng truyền thống, TopCV
                cho ra đời ứng dụng TopCV, kết nối hàng triệu ứng viên với hàng
                ngàn nhà tuyển dụng uy tín dựa trên nền tảng công nghệ cao, đặc
                biệt là trí tuệ nhân tạo AI. Chỉ với một ứng dụng duy nhất, ứng
                viên có thể tạo CV và Profile ấn tượng, tìm kiếm công việc mơ
                ước và phát triển bản thân, xây dựng con đường sự nghiệp của
                riêng mình. Và ở bất cứ nơi đâu.
              </p>
            </div>
            <div class="title-bottom">
              <h6>Tải ngay ứng dụng</h6>
              <v-row>
                <v-col sm="2">
                  <img
                    src="https://www.topcv.vn/v4/image/welcome/download/qr_code.png"
                    alt=""
                  />
                </v-col>
                <v-col sm="10">
                  <div class="app-store-img">
                    <a
                      href="https://itunes.apple.com/us/app/topcv-t%E1%BA%A1o-cv-t%C3%ACm-vi%E1%BB%87c-l%C3%A0m/id1455928592?ls=1&mt=8"
                    >
                      <img
                        width="115px"
                        height="35px"
                        src="https://www.topcv.vn/v4/image/welcome/download/app_store.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="android-img mt-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.topcv"
                    >
                      <img
                        width="115px"
                        height="35px"
                        src="https://www.topcv.vn/v4/image/welcome/download/chplay.png"
                        alt=""
                      />
                    </a>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col cols="12" xs="12" md="5" sm="5">
            <div class="img-qc">
              <img
                width="100%"
                height="100%"
                src="https://www.topcv.vn/v4/image/welcome/download/mobile.png"
                alt=""
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="feature-box">
      <v-container>
        <h4>Tính năng nổi bật</h4>
        <p>
          Những tính năng của ứng dụng TopCV giúp ứng viên dễ dàng ứng tuyển,
          nâng cao trải nghiệm tìm việc trong kỷ nguyên số
        </p>
        <v-row
          class="content-flex accordion accordion-flush"
          id="accordionFlushExample"
        >
          <v-col cols="12" xs="12" md="7" sm="7" class="item-left">
            <div
              v-for="(item, i) in listReview"
              :key="i"
              data-bs-toggle="collapse"
              :data-bs-target="item.target"
              :aria-expanded="item.expanded"
              :aria-controls="item.id"
              :class="item.class"
            >
              <h5>
                <v-btn class="mx-2" fab dark small color="#004d40">
                  <v-icon dark> {{ item.icon }} </v-icon>
                </v-btn>
                {{ item.name }}
              </h5>
              <p class="m-3">
                {{ item.content }}
              </p>
            </div>
          </v-col>
          <v-col
            cols="12"
            xs="12"
            md="5"
            sm="5"
            v-for="(item, i) in listItem"
            :key="i"
            class="item-right"
            :id="item.id"
            :class="item.show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <img
              class="mt-5"
              width="100%"
              height="805"
              :src="item.img"
              alt=""
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="dowload-app-CV mt-5 mb-5">
      <v-container>
        <h4>NHỮNG CON SỐ BIẾT NÓI</h4>
        <b>Những con số nổi bật mà ứng dụng TopCV đã đạt được</b>
        <v-row>
          <v-col cols="12" xs="12" md="4" sm="4" class="text-box-right">
            <div class="mt-5">
              <span class="icon-CV">1</span>
              <p class="mt-3">
                190.000+ Nhà tuyển dụng uy tín Đã được xác thực bởi TopCV,
                190.000+ nhà tuyển dụng uy tín và minh bạch từ tất cả các ngành
                nghề, từ nhiều tỉnh thành, trong nước và nước ngoài
              </p>
            </div>
            <div class="mt-5">
              <span class="icon-CV">2</span>
              <p class="mt-3">
                180.000+ Việc làm đã được kết nối Với 4.000.000 ứng viên,
                190.000+ nhà tuyển dụng, mỗi ngày, TopCV đồng hành và kết nối
                hàng nghìn ứng viên với những cơ hội việc làm mới từ các doanh
                nghiệp uy tín.
              </p>
            </div>
          </v-col>
          <v-col
            cols="12"
            xs="12"
            md="4"
            class="box-background-img mb-5"
            sm="4"
          >
            <div class="background-img-item mt-7">
              <img
                class="img-item-style mt-5"
                src="https://www.topcv.vn/v4/image/app/job-detail.png"
                width="200"
                height="100%"
                alt=""
              />
            </div>
          </v-col>
          <v-col cols="12" xs="12" md="4" sm="4" class="text-box-left">
            <div class="mt-5">
              <span class="icon-CV">3</span>
              <p class="mt-3">
                110.000+ Doanh nghiệp hàng đầu TopCV được nhiều doanh nghiệp tin
                tưởng và đồng hành, trong đó có nhiều thương hiệu nổi bật như:
                Samsung, Viettel, Vingroup, FPT, Techcombank,...
              </p>
            </div>
            <div class="mt-5">
              <span class="icon-CV">4</span>
              <p class="mt-3">
                600.000+ Lượt tải ứng dụng Ra mắt vào tháng 03/2019 trên hai hệ
                điều hành iOS và Android, ứng dụng TopCV đã trở thành hành trang
                không thể thiếu của ứng viên từ khi còn là sinh viên đến nhân sự
                có 3 đến 5 năm kinh nghiệm.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="app-CV-slide mt-5 mb-5">
      <v-container>
        <h4>
          KIẾN TẠO SỰ NGHIỆP CỦA RIÊNG BẠN VỚI ỨNG DỤNG "TẤT CẢ TRONG MỘT" TOPCV
        </h4>
        <p>
          Trải nghiệm tạo CV, tìm việc, ứng tuyển và hơn thế nữa - chỉ với một
          ứng dụng duy nhất. Bắt đầu ngay hôm nay!
        </p>
        <div class="m-5">
          <v-carousel hide-delimiters>
            <center>
              <v-carousel-item
                class="style-img"
                v-for="(item, i) in itemsSlide"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </center>
          </v-carousel>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0,
      },
      itemsSlide: [
        {
          src: 'https://www.topcv.vn/v4/image/app/1.png',
        },
        {
          src: 'https://www.topcv.vn/v4/image/app/2.png',
        },
        {
          src: 'https://www.topcv.vn/v4/image/app/3.png',
        },
      ],
      listReview: [
        {
          name: 'Việc làm gần bạn',
          icon: 'mdi-map-marker-radius',
          content:
            'Tính năng giúp bạn tìm kiếm nhanh chóng và lựa chọn việc làm gần bạn với bán kính tùy chỉnh. Tìm kiếm việc làm dựa trên vị trí địa lý, theo dõi trực quan và tiết kiệm thời gian.',
          id: 'panelsStayOpen-collapseOne',
          target: '#panelsStayOpen-collapseOne',
          class: 'change-color',
          expanded: 'true',
        },
        {
          name: 'Tạo CV & Profile',
          icon: 'mdi-file-account-outline',
          content:
            'Công cụ tạo CV online số 1 Việt Nam đã có phiên bản ứng dụng điện thoại. Tạo CV, Cover Letter và Profile ngay trên điện thoại. Thuận tiện, nhanh chóng, chuyên nghiệp và khác biệt. Tăng 80% tỉ lệ ứng tuyển thành công.',
          id: 'panelsStayOpen-collapseTwo',
          target: '#panelsStayOpen-collapseTwo',
          class: 'change-color',
          expanded: 'false',
        },
        {
          name: 'TopCV Connect - Chat trực tiếp với Nhà tuyển dụng',
          icon: 'mdi-message-processing',
          content:
            'Dễ dàng trao đổi với nhà tuyển dụng, theo dõi và cập nhật nhanh nhất về trạng thái ứng tuyển mọi lúc mọi nơi.',
          id: 'panelsStayOpen-collapse3',
          target: '#panelsStayOpen-collapse3',
          class: 'change-color',
          expanded: 'false',
        },
        {
          name: 'Khám phá',
          icon: 'mdi-bow-arrow',
          content:
            'Khám phá và phát triển bản thân với công cụ hữu ích, chia sẻ chân thực, kinh nghiệm quý báu. Định vị bản thân, thăng tiến và phát triển sự nghiệp trong kỷ nguyên số.',
          id: 'panelsStayOpen-collapse4',
          target: '#panelsStayOpen-collapse4',
          class: 'change-color',
          expanded: 'false',
        },
      ],
      listItem: [
        {
          img: 'https://www.topcv.vn/v4/image/app/feature_01.png',
          show: 'accordion-collapse collapse show',
          id: 'panelsStayOpen-collapseOne',
          target: '#panelsStayOpen-collapseOne',
          class: 'change-color',
        },
        {
          img: 'https://www.topcv.vn/v4/image/app/feature_02.png',
          show: 'accordion-collapse collapse',
          id: 'panelsStayOpen-collapseTwo',
          target: '#panelsStayOpen-collapseTwo',
          class: 'change-color',
        },
        {
          img: 'https://www.topcv.vn/v4/image/app/feature_03.png',
          show: 'accordion-collapse collapse',
          id: 'panelsStayOpen-collapse3',
          target: '#panelsStayOpen-collapse3',
          class: 'change-color',
        },
        {
          img: 'https://www.topcv.vn/v4/image/app/feature_04.png',
          show: 'accordion-collapse collapse',
          id: 'panelsStayOpen-collapse4',
          target: '#panelsStayOpen-collapse4',
          class: 'change-color',
        },
      ],
    }
  },
  mounted() {
    this.onResize()
  },

  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      if (this.windowSize.x < 600) {
        this.common.image = {
          width: '75%',
          height: '75%',
        }
      } else if (this.windowSize.x < 960) {
        this.common.image = {
          width: '90%',
          height: '90%',
        }
      } else {
        this.common.image = {
          width: '100%',
          height: '100%',
        }
      }
    },
  },
}
</script>

<style>
.app-cv-font h4 {
  color: #004d40;
  text-transform: uppercase;
}
.app-cv-font b {
  font-size: 14px;
}
.app-cv-font span,
p {
  font-size: 12px;
  text-align: justify;
}
.dowload-app-CV {
  background: url('https://www.topcv.vn/v4/image/welcome/download/background.png')
    no-repeat;
  background-size: cover;
  padding: 20px 0px;
}
.content-flex {
  display: flex;
}
.change-color {
  transition: all 0.2s ease-in-out;
  background: #f6fefa 0 0 no-repeat padding-box;
  padding: 30px 32px;
  border-radius: 10px;
  border: 1px solid #004d40;
  cursor: pointer;
  margin: 12px 0px;
}
.icon-CV {
  background: #fff;
  border-radius: 10px;
  color: #004d40;
  font-size: 28px !important;
  font-weight: 700;
  padding: 7px 17px;
}
.text-box-right {
  text-align: right;
}
.text-box-left {
  text-align: left;
}
.box-background-img {
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
}
.background-img-item {
  background-color: #004d40;
  border-radius: 50%;
  display: block;
  height: 300px;
  width: 300px;
}
.background-img-item .img-item-style {
  left: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  right: 0;
  top: 0;
}
.style-img {
  width: 250px;
}
.style-img .v-image__image--cover {
  background-size: 100% 100%;
}
</style>
