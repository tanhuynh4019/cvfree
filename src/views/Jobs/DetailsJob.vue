<template>
  <div>
    <Search />
    <div style="background: #f0f0f0">
      <v-container>
        <v-breadcrumbs :items="items" style="margin-left: -25px">
          <template v-slot:divider style="">
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <v-card class="mt-5">
          <v-row>
            <v-col cols="4" sm="4" lg="2">
              <div class="p-2">
                <center>
                  <v-img
                    width="100%"
                    height="120"
                    src="https://cdn.topcv.vn/80/company_logos/cong-ty-tai-chinh-trach-nhiem-huu-han-mot-thanh-vien-shinhan-viet-nam-617120c606cab.jpg"
                  ></v-img>
                </center>
              </div>
            </v-col>
            <v-col cols="7" sm="7" lg="7">
              <div class="p-2">
                <h5>Thực Tập Sinh Tài Chính (Thu Nhập Từ 10 Triệu)</h5>
                <h6>
                  CÔNG TY TÀI CHÍNH TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN SHINHAN
                  VIỆT NAM
                </h6>
                <p>
                  <v-icon size="20" style="margin-top: -1px">mdi-clock</v-icon>
                  Hạn nộp hồ sơ: 25/02/2022
                </p>
              </div>
            </v-col>
            <v-col cols="12" sm="12" lg="3">
              <div class="p-2">
                <v-row>
                  <v-col cols="12" sm="6" lg="12">
                    <v-btn width="100%" class="mt-1" color="#004D40" dark
                      ><v-icon>mdi-send</v-icon> &nbsp; ỨNG tUYỂN NGAY</v-btn
                    >
                  </v-col>
                  <v-col cols="12" sm="6" lg="12">
                    <v-btn
                      width="100%"
                      color="#004D40"
                      dark
                      outlined
                      class="mt-1"
                      ><v-icon>mdi-heart</v-icon> &nbsp;LƯU TIN</v-btn
                    >
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-card>

        <!--Tabs-->
        <v-tabs class="mt-5" color="#004D40">
          <v-tab>Tin tuyển dụng</v-tab>
          <v-tab>Thông tin công ty</v-tab>
          <v-tab>Việc làm liên quan</v-tab>
        </v-tabs>

        <!--Details Jobs-->
        <v-card class="mt-5">
          <v-container>
            <h4>Chi tiết tin tuyển dụng</h4>
            <v-row>
              <v-col cols="12" sm="12" md="8">
                <v-card color="#00b14f0d">
                  <div class="p-2">
                    <h6><u>Thông tin chung</u></h6>
                    <v-row>
                      <v-col sm="6" cols="12" md="6">
                        <v-row>
                          <v-col cols="2" sm="2">
                            <img
                              width="100%"
                              src="https://www.topcv.vn/v4/image/job-detail/icon/1.svg"
                            />
                          </v-col>
                          <v-col cols="10" sm="10">
                            <h6>Mức lương</h6>
                            <p>8-15 triệu</p>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col sm="6" cols="12" md="6">
                        <v-row>
                          <v-col cols="2" sm="2">
                            <img
                              width="100%"
                              src="https://www.topcv.vn/v4/image/job-detail/icon/5.svg"
                            />
                          </v-col>
                          <v-col cols="10" sm="10">
                            <h6>Số lượng tuyển</h6>
                            <p>10 người</p>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col sm="6" cols="12" md="6">
                        <v-row>
                          <v-col cols="2" sm="2">
                            <img
                              width="100%"
                              src="https://www.topcv.vn/v4/image/job-detail/icon/2.svg"
                            />
                          </v-col>
                          <v-col cols="10" sm="10">
                            <h6>Hình thức làm việc</h6>
                            <p>Bán thời gian</p>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col sm="6" cols="12" md="6">
                        <v-row>
                          <v-col cols="2" sm="2">
                            <img
                              width="100%"
                              src="https://www.topcv.vn/v4/image/job-detail/icon/6.svg"
                            />
                          </v-col>
                          <v-col cols="10" sm="10">
                            <h6>Cấp bậc</h6>
                            <p>Nhân viên</p>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col sm="6" cols="12" md="6">
                        <v-row>
                          <v-col cols="2" sm="2">
                            <img
                              width="100%"
                              src="https://www.topcv.vn/v4/image/job-detail/icon/3.svg"
                            />
                          </v-col>
                          <v-col cols="10" sm="10">
                            <h6>Giới tính</h6>
                            <p>Không yêu cầu</p>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col sm="6" cols="12" md="6">
                        <v-row>
                          <v-col cols="2" sm="2">
                            <img
                              width="100%"
                              src="https://www.topcv.vn/v4/image/job-detail/icon/7.svg"
                            />
                          </v-col>
                          <v-col cols="10" sm="10">
                            <h6>Kinh nghiệm</h6>
                            <p>Không yêu cầu kinh nghiệm</p>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
                <v-card class="mt-5" color="#00b14f0d">
                  <div class="p-2">
                    <h6><u>Địa điểm làm việc</u></h6>
                    <p>
                      - Khu vực: Hà Nội
                      <br />
                      - Toà nhà Sông Đà, 18 Phạm Hùng, Phường Mỹ Đình 1, Quận
                      Nam Từ Liêm, Hà Nội
                    </p>
                  </div>
                </v-card>
                <div class="mt-5">
                  <div>
                    <h5>Mô tả công việc</h5>
                    <p>
                      - Tư vấn cho khách hàng về những sản phẩm của công ty theo
                      data có sẵn do công ty cung cấp. <br />
                      - Tiếp nhận và hỗ trợ xử lý thông tin khách hàng.
                      <br />
                      - Phát triển mối quan hệ khách hàng.
                      <br />
                      - Lập kế hoạch bán hàng, báo cáo công việc.
                      <br />
                      - Thực hiện các yêu cầu của Trưởng bộ phận.
                    </p>
                  </div>
                  <div>
                    <h5>Yêu cầu ứng viên</h5>
                    <p>
                      - Không yêu cầu kinh nghiệm, sẽ được đào tạo, nếu đã có
                      kinh nghiệm sẽ là một lợi thế.
                      <br />
                      - Giao tiếp tốt, trung thực trong công việc.
                      <br />
                      - Sinh viên năm cuối sắp ra trường, ưu tiên ứng viên có
                      năm sinh 1997 - 2000.
                      <br />
                      - Siêng năng, đam mê, nhiệt huyết và định hướng phát triển
                      lâu dài.
                    </p>
                  </div>
                  <div>
                    <h5>Quyền lợi</h5>
                    <p>
                      - Lương cơ bản 6,2 triệu và có thêm phần Bonus (Thu nhập
                      đảm bảo trên 10,000,000)
                      <br />
                      - Được đào tạo nghiệp vụ khi nhận việc.
                      <br />
                      - Làm việc trong môi trường năng động, chuyên nghiệp có
                      nhiều cơ hội thăng tiến.
                      <br />
                      - Có cơ hội thăng tiến từ 3 đến 6 tháng 1 lần theo năng
                      lực.
                      <br />
                      - Được đóng BHXH, BHYT, BHTN đẩy đủ khi ký hợp đồng.
                      <br />
                      - Du lịch hàng năm 1 lần trong và ngoài nước.
                    </p>
                  </div>
                  <div>
                    <h5>Cách thức ứng tuyển</h5>
                    <p>
                      Ứng viên nộp hồ sơ trực tuyến bằng cách bấm
                      <b style="color: #004d40">Ứng tuyển ngay</b> dưới đây.
                    </p>
                    <p />
                    <div>
                      <v-btn color="#004D40" dark>ỨNG TUYỂN NGAY</v-btn>
                      <v-btn color="#004D40" class="ml-1" outlined
                        >Lưu Tin</v-btn
                      >
                    </div>
                    <p class="mt-2">Hạn nộp hồ sơ: 25/02/2022</p>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="12" md="4">
                <v-card>
                  <div class="p-2">
                    <h6>Chia sẻ tin tuyển dụng</h6>
                    <p>Sao chép đường dẫn</p>
                    <div>
                      <v-row>
                        <v-col cols="10" sm="10">
                          <v-chip label class="w-100"
                            >https://www.topcv.vn/viec-lam/thuc-tap</v-chip
                          >
                        </v-col>
                        <v-col cols="2" sm="2">
                          <v-btn class="w-100" icon
                            ><v-icon>mdi-content-copy</v-icon></v-btn
                          >
                        </v-col>
                      </v-row>
                    </div>
                    <p class="mt-2">Chia sẻ qua mạng xã hội</p>
                    <v-row>
                      <v-col cols="2" sm="1" md="2">
                        <img
                          src="https://www.topcv.vn/v4/image/job-detail/share/facebook.png"
                          width="100%"
                        />
                      </v-col>
                      <v-col cols="2" sm="1" md="2">
                        <img
                          src="https://www.topcv.vn/v4/image/job-detail/share/twitter.png"
                          width="100%"
                        />
                      </v-col>
                      <v-col cols="2" sm="1" md="2">
                        <img
                          src="https://www.topcv.vn/v4/image/job-detail/share/linkedin.png"
                          width="100%"
                        />
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
                <v-card class="mt-5">
                  <div class="p-2">
                    <h6>Báo cáo tin tuyển dụng</h6>
                    <p>
                      Nếu bạn thấy rằng tin tuyển dụng này không đúng, hãy phản
                      ánh với chúng tôi
                    </p>
                    <v-btn plain outlined width="100%">
                      Báo cáo tin tuyển dụng không chính xác
                    </v-btn>
                  </div>
                </v-card>
                <div class="mt-5">
                  <h6>Ngành nghề</h6>
                  <v-chip>Ngân hàng/Tài chính</v-chip>
                  <h6 class="mt-3">Khu vực</h6>
                  <v-chip>Hà nội</v-chip>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <!--Review Companies-->
        <v-card class="mt-5">
          <div class="p-2">
            <v-row>
              <v-col cols="12" sm="9" md="10">
                <h4>
                  Thông tin CÔNG TY TÀI CHÍNH TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN
                  SHINHAN VIỆT NAM
                </h4>
              </v-col>
              <v-col cols="12" sm="3" md="2">
                <div class="p-2">
                  <v-btn text width="100%">
                    Xem trang công ty
                    <v-icon class="ml-1">mdi-eye</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-row>
                  <v-col cols="2" sm="1" md="1">
                    <img
                      src="https://www.topcv.vn/v4/image/job-detail/icon/8.svg"
                      class="w-100"
                      height="40"
                    />
                  </v-col>
                  <v-col cols="10" sm="11" md="11">
                    <h6>Giới thiệu</h6>
                    <p>
                      Tập đoàn Tài chính Shinhan
                      <br />
                      Tập đoàn Tài chính Shinhan được xem như tập đoàn tiên
                      phong về việc nắm giữ tài chính tại Hàn Quốc. Tập đoàn
                      được thành lập trên nền tảng của Ngân hàng Shinhan, Quỹ
                      Đầu tư Shinhan và Công ty Quản lý Đầu tư Shinhan.
                      <br />
                      Chiến lược kinh doanh của Tập đoàn Tài chính Shinhan là
                      cung cấp cho khách hàng dịch vụ đa dạng, tiện lợi và thỏa
                      đáng thông qua sự phân bố chuyên biệt và hiệu quả. Bên
                      cạnh đó, tập đoàn luôn nỗ lực đa dạng hóa phạm vi kinh
                      doanh, cũng như cập nhật những công nghệ tài chính mới
                      nhất để trở thành tập đoàn tài chính dẫn đầu trên quy mô
                      toàn cầu.
                    </p>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12">
                <v-row>
                  <v-col cols="2" sm="1" md="1">
                    <img
                      src="https://www.topcv.vn/v4/image/job-detail/icon/9.svg"
                      class="w-100"
                      height="40"
                    />
                  </v-col>
                  <v-col cols="10" sm="11" md="11">
                    <h6>Quy mô</h6>
                    <p>100-499 nhân viên</p>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12">
                <v-row>
                  <v-col cols="2" sm="1" md="1">
                    <img
                      src="https://www.topcv.vn/v4/image/job-detail/icon/10.svg"
                      class="w-100"
                      height="40"
                    />
                  </v-col>
                  <v-col cols="10" sm="11" md="11">
                    <h6>Địa điểm</h6>
                    <p>
                      Tầng 14 toà nhà PicoPlaza số 20 Cộng Hoà quận Tân Bình
                    </p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-card>

        <!--Similar Jobs-->
        <v-card class="mt-5">
          <div class="p-2">
            <h5>Việc làm liên quan</h5>
          </div>
          <div>
            <v-row>
              <v-col cols="12" sm="12" md="8">
                <div class="p-3">
                  <v-card
                    v-for="(n, i) in 10"
                    :key="n"
                    :class="i != 0 ? 'mt-6' : ''"
                  >
                    <v-row>
                      <v-col cols="4" sm="2">
                        <div class="p-2">
                          <center>
                            <img
                              width="60%"
                              height="60"
                              src="https://cdn.topcv.vn/80/company_logos/197da107841bf0b3ca67db3c5bf07571-61dfd5470d712.jpg"
                            />
                          </center>
                        </div>
                      </v-col>
                      <v-col cols="8" sm="7">
                        <div class="p-2">
                          <h6>
                            Cộng Tác Viên Tìm Kiếm Khách Hàng - Phát Triển Thị
                            Trường
                          </h6>
                          <p>CÔNG TY TNHH TRUYỀN THÔNG F.WORLD</p>
                          <div>
                            <v-chip small label>7-10 triệu</v-chip>
                            <v-chip small class="ml-1" label
                              >19 phút trước</v-chip
                            >
                          </div>
                        </div>
                      </v-col>
                      <v-col cols="12" sm="3">
                        <v-row>
                          <v-col cols="6" sm="12">
                            <div class="p-2">
                              <div class="float-end">
                                Còn <b>8</b> ngày để ứng tuyển
                              </div>
                            </div>
                          </v-col>
                          <v-col cols="6" sm="12">
                            <div class="float-end p-2">
                              <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                              </v-btn>
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card>
                </div>

                <div class="text-center mt-2">
                  <v-pagination
                    color="#004D40"
                    v-model="page"
                    :length="6"
                  ></v-pagination>
                </div>
              </v-col>
              <v-col cols="12" sm="12" md="4">
                <div class="p-2">
                  <h6>Có thể bạn quan tâm</h6>
                  <v-card>
                    <v-img
                      height="140"
                      width="100%"
                      src="https://cdn.topcv.vn/247/company_covers/cong-ty-cho-thue-tai-chinh-tnhh-mtv-quoc-te-chailease-00121a41a78a2428cb9f0d12d8b94de9-61656bb084659.jpg"
                    ></v-img>
                    <div class="p-2">
                      <b
                        >Công ty Cho thuê tài chính TNHH MTV Quốc tế
                        Chailease</b
                      >
                      <div>
                        <v-divider></v-divider>
                        <h6>Chuyên Viên Hỗ Trợ Tín Dụng</h6>
                        <v-row>
                          <v-col sm="6"> Trên 10 triệu </v-col>
                          <v-col sm="6"> 31/03/2022 </v-col>
                        </v-row>
                      </div>
                      <div>
                        <v-divider></v-divider>
                        <h6>Chuyên Viên Hỗ Trợ Tín Dụng</h6>
                        <v-row>
                          <v-col sm="6"> Trên 10 triệu </v-col>
                          <v-col sm="6"> 31/03/2022 </v-col>
                        </v-row>
                      </div>
                      <div class="text-center">
                        <v-btn class="mt-2" color="#004D40" dark
                          >Tìm hiểu ngay</v-btn
                        >
                      </div>
                    </div>
                  </v-card>
                  <v-card class="mt-5">
                    <v-img
                      src="https://static.topcv.vn/manual/cv-tim-viec-topcv.png"
                    ></v-img>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card>

        <!--Course-->
        <v-card>
          <div class="p-2">
            <h5>Khóa học dành cho bạn</h5>
          </div>
          <v-carousel hide-delimiters height="100%">
            <v-carousel-item v-for="n in 4" :key="n">
              <div class="p-2">
                <v-row>
                  <v-col sm="3" v-for="n in 4" :key="n">
                    <v-card height="236">
                      <v-img
                        src="https://www.topcv.vn/v3/images/funix-course/D10.jpg"
                        height="126"
                      ></v-img>
                      <div class="p-2">
                        <h6>
                          Dễ dàng học 1 ngôn ngữ lập trình bất kỳ theo nhu cầu
                          của bạn
                        </h6>
                        <v-btn outlined class="float-end">Tìm hiểu ngay</v-btn>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-container>
    </div>
    <div>
      <v-container>
        <Content />
      </v-container>
    </div>
    <div>
      <v-container>
        <Categories />
      </v-container>
    </div>
  </div>
</template>

<script>
import Search from "../../components/Job/Search.vue";
import Content from "../../components/Seo/Content.vue";
import Categories from "../../components/Seo/Categories.vue";
export default {
  name: "DetailsJob",
  data() {
    return {
      page: 1,
      items: [
        {
          text: "Trang chủ ",
          disabled: false,
          href: "breadcrumbs_dashboard",
        },
        {
          text: "Tìm việc làm thực tập sinh ",
          disabled: false,
          href: "breadcrumbs_link_1",
        },
        {
          text: "Tuyển Thực Tập Sinh Tài Chính (Thu Nhập Từ 10 Triệu)",
          disabled: true,
          href: "breadcrumbs_link_2",
        },
      ],
    };
  },
  components: {
    Search,
    Content,
    Categories,
  },
};
</script>

<style></style>
