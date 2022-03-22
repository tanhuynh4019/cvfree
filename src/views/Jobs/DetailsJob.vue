<template>
  <div v-resize="onResize" class="details-job">
    <Search />
    <div style="background: #f0f0f0">
      <v-parallax
        :src="
          !job.idCompany.srcBanner
            ? 'https://recmiennam.com/wp-content/uploads/2018/01/hinh-anh-mua-thu-dep-nhat-41.jpg'
            : job.idCompany.srcBanner
        "
        height="600"
      ></v-parallax>
      <v-container :style="styleContainer">
        <v-card style="box-shadow: 0px 0px 0px 0px">
          <div class="p-4">
            <v-breadcrumbs :items="items" style="margin-left: -25px">
              <template v-slot:divider style="">
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
            <v-card class="mt-5 border" style="box-shadow: 0px 0px 0px 0px">
              <v-row>
                <v-col cols="4" sm="4" lg="3">
                  <div class="p-2">
                    <center>
                      <div class="p-3">
                        <img
                          width="100%"
                          height="100"
                          :src="job.idCompany.srcLogo"
                        />
                      </div>
                    </center>
                  </div>
                </v-col>
                <v-col cols="7" sm="7" lg="6">
                  <div class="p-2">
                    <h6>{{ job.name }}</h6>
                    <router-link
                      class="font-weight-bold mt-3"
                      :style="`text-decoration: none; color: ${job.idCompany.color}`"
                      :to="{
                        name: 'DetailsCompanies',
                        params: { slug: job.idCompany.slug },
                      }"
                    >
                      {{ job.idCompany.name }}
                    </router-link>
                    <p class="mt-3">
                      <v-icon size="20" style="margin-top: -1px"
                        >mdi-clock</v-icon
                      >
                      Hạn nộp hồ sơ: {{ job.deadline }}
                    </p>
                  </div>
                </v-col>
                <v-col cols="12" sm="12" lg="3">
                  <div class="p-2">
                    <v-row>
                      <v-col cols="12" sm="6" lg="12">
                        <v-btn
                          large
                          width="100%"
                          class="mt-1"
                          :color="job.idCompany.color"
                          dark
                          ><v-icon>mdi-file-send</v-icon> &nbsp;Nộp đơn</v-btn
                        >
                      </v-col>
                      <v-col cols="12" sm="6" lg="12">
                        <v-btn
                          width="100%"
                          color="#004D40"
                          dark
                          large
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
            <v-tabs color="#004D40" class="mt-4">
              <v-tab>
                <v-icon left> mdi-account </v-icon>
                Thông tin
              </v-tab>
              <v-tab>
                <v-icon left> mdi-lock </v-icon>
                Công ty
              </v-tab>
              <v-tab @click="loadJobInvolve(job.idCompany._id)">
                <v-icon left> mdi-access-point </v-icon>
                Việc làm liên quan
              </v-tab>

              <v-tab-item>
                <!--Details Jobs-->
                <v-card class="mt-5">
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="8">
                        <h6 class="font-weight-bold teal--text text--darken-4">
                          Thông tin chung
                        </h6>
                        <v-row class="mt-3">
                          <v-col sm="6" cols="12" md="6">
                            <v-row>
                              <v-col cols="2" sm="2">
                                <img
                                  width="100%"
                                  src="https://lh3.googleusercontent.com/fife/AAWUweWvR8uaCccWnq7UBQSjMO_rVMrQdUWKfg5kbVks3QwZKN4yhqBF1_bsGA_Q267vsWtbkCmL9E2R9k9RYYlXn9WWVC2EyIYl4rncl8rPydVEvJtFEjxQDOLweZZjJkMG5SQmyLDtCaADI_fhmc5vfuu8mq2B-epuwypgjibPm9_fkgA3cjIFN3arT3foeBuApvvxOTs9JVyrcMWGao4zwh8JiRTBh2H_vQNUo2-3s8JZG4FG_a7g-d7BQ6r7lnMJWo6xORyjdMjikNibrtqBMePtBo8ufn6JJq-Vhsni576MsSTU9_Ty8NUTn8fw1b6jKDbPe5rh7CLh2A-9XzFiydxIbuU-yZjGkz5D-FE5KHR3Zy7A7svHJBWlKIvhMEpfI3bQVQOgZdl7vFQsk21NIikhlXjyKvk7zVoT-JCqeXEIj5ZQDlg9I1KyVsGP53kgRH5kyz0akYT0AhojN1e7eXk9_XIeeOx4RaO3gcIAtEyQXkiUF8n8JuNY0CRyO-91XgoiDl-AwZoUYh3esZoALqT4miyYNf5zbN5s6_uwiV30X17j5vZ1LIHOye3pd1eAifVKksFdu7IWNvBDn_8qmNZXk378B5i4UqBrEDiZyqgn1X6rjFbg5CANYG8rrWFTP3un4mSMKmNS0ozrTSQQKL67Efb68YN1NKRCG3V-plD6Umcd5mYUzaL1TY66kshlHP_5MSY1P8lA-Vrte0xXb7h_omFHfmKOLNWk7V7nsJdYnfplG1JHrSk6Z_-HD3CsNUiD7y_6yirjeAO80ck-EfOZMIHCwS1MYtHBjfp9-Zil5nmebwzpxmszW5GYA4WYC-dhwQfNy4xekKavUrt-=w1876-h912"
                                />
                              </v-col>
                              <v-col cols="10" sm="10">
                                <h6>Mức lương</h6>
                                <div v-if="!user">
                                  <router-link
                                    style="text-decoration: none"
                                    text
                                    :to="{ name: 'Login' }"
                                    >Đăng nhập để xem mức lương</router-link
                                  >
                                </div>
                                <div v-if="user">
                                  <div v-if="job.salaryType == 'Trong khoảng'">
                                    <p>
                                      {{ job.salaryfrom }}-{{ job.salaryTo }}
                                      {{
                                        job.currency == "VNĐ" ? "triệu" : "$"
                                      }}
                                    </p>
                                  </div>
                                  <div v-if="job.salaryType == 'Thỏa thuận'">
                                    <p>Thỏa thuận</p>
                                  </div>
                                  <div v-if="job.salaryType == 'Từ'">
                                    <p>
                                      Từ {{ job.salaryfrom }}
                                      {{
                                        job.currency == "VNĐ" ? "triệu" : "$"
                                      }}
                                      trở lên
                                    </p>
                                  </div>
                                  <div v-if="job.salaryType == 'Đến'">
                                    <p>
                                      Lên đến {{ job.salaryTo }}
                                      {{
                                        job.currency == "VNĐ" ? "triệu" : "$"
                                      }}
                                      triệu
                                    </p>
                                  </div>
                                </div>
                              </v-col>
                            </v-row>
                          </v-col>
                          <v-col sm="6" cols="12" md="6">
                            <v-row>
                              <v-col cols="2" sm="2">
                                <img
                                  width="100%"
                                  src="https://lh3.googleusercontent.com/fife/AAWUweVs5ABbF64ZXio5cIZoAL2priDfMYAT_iVPwmb6cFbtEpAWb8xC-8inHMpx5Y5ixeJfeU9-U0aY2QJ7XYzCVXDsl8aCA3adSe-J_3-Ce86e8t_5VzkG1o_fmkr5LFUypJfuqPUUBDcLVh5LA0YZp0JIT_VieG6fRt7hSbijZDh0HJBRRQgDjX80ahnnGeH8moLcJhUBw5oLybjUPGrjTZ2Lugax0I5cV2pmYDqQ7Zd0_xHeT0AVj-gIvoNIC42m3Z96y6Z9GFFrXN7fJ_wvcJ2nXUgCkuPZjiulh_3svvx3ro8GECPxN-G7g1FdNl8ImIMBEOPx35I3GEBo5d5q5mBVGNIxdH62dYb9fOHI0hR3blJ60q7ZuLXdJ2Ct2wXAzXdyL5yxG4gXcIkhQOq1q7-sARRACAG3ahsJ-1J588hNLDy-qc-oDqqg0pYj4WXXE7D4YEJFo-cZyU3GWCNnUvmnDwQ6QeJeSNUOMMnbftjoSf-Lc8GZRvKNDPmqciEnzmymOvcTaiaK62eRXdB9BQ2nftei5QIL0zNl2XwNcbZ5dRtIQTdWzoGNpBq7J2_tJYYkV4Wogxx-xp302MhNFwNP7CEZVNVHMuvdT2RWH-NpKEZJWFNnXDVABRZTEQHKUFszBfFdXw2Cnginyuzk4-lum3uboEOYY7VswqqbiJuvzrg4ovwZs4ipvwvUtEHd5AjhspqCTvXSyYWJYPkCY2PrCS8NQ8j4QriKdJ5-BOmVlBWhVV1z44xsp963VmLNBHsD5eLOAQYya_0pKsCbpNf-tsfCZmHPhRhd1GwR_bfhnikeJTpgkU0W2jzrxRL96HuzZoeYCFooMtRcJIzi=w1876-h912"
                                />
                              </v-col>
                              <v-col cols="10" sm="10">
                                <h6>Số lượng tuyển</h6>
                                <p>
                                  {{
                                    job.numberOfRecruitments == 0
                                      ? "Không giới hạn"
                                      : job.numberOfRecruitments
                                  }}
                                  người
                                </p>
                              </v-col>
                            </v-row>
                          </v-col>
                          <v-col sm="6" cols="12" md="6">
                            <v-row>
                              <v-col cols="2" sm="2">
                                <img
                                  width="100%"
                                  src="https://lh3.googleusercontent.com/fife/AAWUweXorBeP_szAk2SAcqqBb_iRBu38d0BD-FA0WhZe69_l9ECIv8cq5PwgBbR9Pd1xo9ZnjU7WBViGkmPQ_8v2OFwL5FDcxBDxvwBfRwP_7HxFsZLfoG-VY9M1H-RqPde47pxOU-jnhjq5B_K2jlIqphJaxQF5FEgPKccPyh4e6Z1QCtbSkVqIbHLVXaBcdvzwd-8iiK0dmJtydkXp-i7i4_wGAWYliezNim9dp7M4kQkGfj1Wc0MCNUHqVVvtpynggiOkuCtX49wcK_W6MKvjhoV6pmj7WjqO4uIuaY_fEmDS0sMH3_V3DCbI_CXxyLi_JIk77Md9dIFVWSw1hc3rGZD4ZeiVLxhNmOt38WVCLTFFL_xtJZbz6EUe-G1bgoym6dH7cJqVcKXNTRWOS1IbnN5zInvghDFSDXsq_Ou7lQPdK1xgCJwXpPh2EsQ6TY7srQoW1AJNdiDanQZ4AyxkfwCKzOPBitWnThkCTHBS4agRtaGZvY38YwswheghLWjvO2JKWwc1iWkgOXFBkPxF7FQmagKMB3lOJheZAHR6KIfXYXCW_k9zYCOhdUmQ896QGaAYN79VgfBLV37HMYQRU0-4PaANXekMsF9no_JauwDsw6kZ-xNMVqTuqHNHTlG4z5QnQfy-RzMPmfJFqTWEC5Ic5fC7ZsEoebakoMIwSVIpzcI5YX9JencOHTchhca44iy9wtmgyTai0Ji0PimqlN83N8V8elTL3lefP6P10tASoy64tAUmuZA25Bwh2UHjUkHgFUMcQj0eRtvE6OPeixJbDUJ0iyaUI-HBDKwJR8XEtwpVa53_itGSzAk88nonK2BW1ZU_3irkNhcCkfrJ=w1876-h912"
                                />
                              </v-col>
                              <v-col cols="10" sm="10">
                                <h6>Hình thức làm việc</h6>
                                <p>{{ job.workingForm }}</p>
                              </v-col>
                            </v-row>
                          </v-col>
                          <v-col sm="6" cols="12" md="6">
                            <v-row>
                              <v-col cols="2" sm="2">
                                <img
                                  width="100%"
                                  src="https://lh3.googleusercontent.com/fife/AAWUweXKfmpX1hn23rNnuB7hVg_UPFwMqd22Ymm2izFKelU7N4fECgmajIW8yDv31Khgsj51-Dj4K1XFWWefmcE6hVdNhpMGEgsIne0gY0g_UmwLauE4e_XCwNEodBMJlqLtdFHVok9QuBqFFDiOE1SLw0LmwlPRw23jt2cXiqk1yC-7YkUDwNEvIO0lCr7M2ULjOpJjEhQTJtfwxQ8VbUGhXn39fo0SGdZtks3dO1D1ba0r8j2BDoEzqM8OusrccQyxyHdBkaycDRh5zDpn2ir7NB16wyTdXSGGV4m2sNaj035rtHY2T-4xoybYLh3YOes2EwgwfsNImpHQ_E3rLoZLbOPwPqvsG_di6HDxV-Em9yzUtDpMeR0fWmTjvxa6oOQIkEeWTjnjRQKtN75N_hf7RHnYf_5H8xIf0k3aHgNglJ-t_eBVpEvUTmH88lyTQVCMK_-C1--lSRnbPn2jEI_c83U1n4WifwoAirQckNi65y_mUxUwTDPZPBBE-twHHYTFudlecTvFfJILVANmExPD7Xca9rmCoAiIK1lIORkNW5Uma9rpATu4qK1UMZOgt1xtg0H5aMgh9xDBFZCtiYsMkVDVGZ8M7ylagKRz7sycaNxSmlQ-bBMc-a5jhfH3DpQqllvU5QVAgAQdGMOQLrZjytDn0x76MFNqdrAhRtb9G5Zfdi_63afTE4bd26mzlaszGN8ck8oK5NowVXt1nttw3LybFW2flHWgQr6nn2ZL2T4Fu6d_fL1Nhnai5veohr6C4jYhTFSUhYzGFUPoN29VF7Qj8bluA08I4SSDu92JoT3y0WAYUDPdR3ou5czMMLy7ytpwaBEpxZtzJ4wwEjk2=w1876-h912"
                                />
                              </v-col>
                              <v-col cols="10" sm="10">
                                <h6>Cấp bậc</h6>
                                <p>{{ job.level }}</p>
                              </v-col>
                            </v-row>
                          </v-col>
                          <v-col sm="6" cols="12" md="6">
                            <v-row>
                              <v-col cols="2" sm="2">
                                <img
                                  width="100%"
                                  src="https://lh3.googleusercontent.com/fife/AAWUweW1C3toBxaMUKHUYVCYYYbifRX9GpmqZHkJUd0wH2GKquo9WPEFQehK4C2CNQVXL4WLSYeQwKEXYxHx4XXaJsOZGBRCjBKGV-yLee5wqM9pybU8akOvFqgy535UvjeSFC7OYJzi7HCP0wbJScurNqmCf8KPGt7L_bJR-lpDPiRyi4i2Qf76QHYIrtpRRDdSvIAnK6VkSYJBuC2qJsu-rmbCUAmdqfprlu_v-NIizl092aMMCVCbKALpiFAXdDBjuXpgFhzzPiMBAMpvKasXMq2d4LWFAlmJ8Kxhbvj2tGp2XncrNosrpVzVTEc9dTGwJJIcTxkkkE0v7Fflvp4SXd0AjYY_WbWBxlYnoWiqDah8bb6uVfprcNqc8mpdX0lYrIu7W-jHT9qidOKdu1v597edgjgSGNCPF9K7fSu9kJNAW-sWahRseG6LyDpkfJ7cOy7l3swzf38zFgf3QxhjTy1kZkVfT2R_bm5IL8_vRtW2IxSa1jq2sWU7tld1kqnI_Bm1CucL1CEFSMTAl9QwiHZiOI0fusWvp9cturhVxBJROVljacBnG5xmnneyhFIHER1VuWNd7FX558kPzmNV7qSs3Vza-aJYfT30kX3mOukdP2x9uzVnE-_QcYtLYnMBu9a51UPdBQK7JO64QFBQKeS4FAF3qaW-6GOzav9MgUoBhLtNw6jZar5NqG5Jbvi5L8fdAD_Tj72ivYioQQb_hicf9hz8c_FyDs_BvKkdOQXGPcY8VWJnkB98E_-nhOASS_b4RAES_tbPCWirrPBj1Z8wVAa4YHGQ1AUBBsq61qJFF28uQmQGx8SmGffk6jCIqV_ZC_moFsrCJe006iof=w1876-h912"
                                />
                              </v-col>
                              <v-col cols="10" sm="10">
                                <h6>Giới tính</h6>
                                <p>{{ job.gender }}</p>
                              </v-col>
                            </v-row>
                          </v-col>
                          <v-col sm="6" cols="12" md="6">
                            <v-row>
                              <v-col cols="2" sm="2">
                                <img
                                  width="100%"
                                  src="https://lh3.googleusercontent.com/fife/AAWUweWq435YtEyvh9Rm3PPpnQ8FdmeqGYvf7NmXF4ShwDmwBe-rPl-6b3V86xHkST-i0X2zz1QyCnI25gupo3Vs-1AvJ26JAu-YOl6LK5wuK7sQmVLAUZch2ev0mrka75xDQ-Zl2sNxbognHMJzQ4D5ubaJ1z53728_t15ANUX-tiUyluHhMIjeBNjx5PfA3hqEDuEUSEx4vAzegwmkKVRWIWYPX2IfB1APFpHyp7a0oI9xfuULV-kCf-o-q8bIYQsdGh2v1QY_cNlNMMKR0XpSLdokL3fGQs83eVXgQpO4VuTBVB_N8h568vecWXZ0T5UD0Ml8KUzYTk5RG7PDC5P33zlAQzyKVhv7G1rx_5F08H0kZrzx1ZL3Dji_A2c2bmwfJiWHUsVBNjkYe-z_nrDMN3hjBH5XpJE8itMhK5Rr2yqg406UXFAXKsRGOK4tJ097QXQwwpFvYaZ1h3h-p-XFCAb8Nn4nwCmNhMEwk5vnQih0zrKNubFPcm-JbjGqMpbrGajlksj3J2tolCLUYdy0BG1CN5U0OhSHscDM5O4BFhBeGDga13nxmwfz7pVuKsSkNp3nA3252kxE17GfnKxz1UQQxoumUL_TDv6e0y7WI1qarSWsNFVW9Rv_8sXUkClQb1Z0ngU8QnQvZX2ynMgLGZBivtieCLxtu6JcDQ1GueKNsOPuc7LkbI5q4j-dEfRI7lGM2hK4PpWx5hBfNZRw5uKFYPKBfb6uETPu5zCoQD1vXvbG4Eu3g4p4b30WLT37H4BPIEAxv8Zbcy2V1qnCFtk0OhzNXwbA1lz2ht8iuIdmei0ckWCo0UROb3g5kvDwSf9EmAocS3q5zZoBl8FY=w1876-h912"
                                />
                              </v-col>
                              <v-col cols="10" sm="10">
                                <h6>Kinh nghiệm</h6>
                                <p>{{ job.exp }}</p>
                              </v-col>
                            </v-row>
                          </v-col>
                        </v-row>
                        <!--Address-->
                        <div class="mt-5">
                          <h6
                            class="font-weight-bold teal--text text--darken-4"
                          >
                            ĐỊA ĐIỂM LÀM VIỆC
                          </h6>
                          <p>
                            <b>Khu vực:</b> {{ job.workLocation }}
                            <br />
                            <b>Địa chỉ:</b> {{ job.jobLocation }}
                          </p>
                        </div>
                        <div>
                          <div class="mt-5">
                            <h6
                              class="font-weight-bold teal--text text--darken-4"
                            >
                              MÔ TẢ CÔNG VIỆC
                            </h6>
                            <p v-html="job.jobDescription"></p>
                          </div>
                          <div class="mt-5">
                            <h6
                              class="font-weight-bold teal--text text--darken-4"
                            >
                              YÊU CẦU CÔNG VIỆC
                            </h6>
                            <p v-html="job.candidateRequirements"></p>
                          </div>
                          <div class="mt-5">
                            <h6
                              class="font-weight-bold teal--text text--darken-4"
                            >
                              QUYỀN LỢI
                            </h6>
                            <p v-html="job.benefit"></p>
                          </div>
                          <div>
                            <h5>Cách thức ứng tuyển</h5>
                            <p>
                              Ứng viên nộp hồ sơ trực tuyến bằng cách bấm
                              <b style="color: #004d40">Ứng tuyển ngay</b> dưới
                              đây.
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
                        <v-card
                          color="#E0F2F1"
                          style="box-shadow: 0px 0px 0px 0px"
                          class="border"
                        >
                          <div class="p-4">
                            <v-row class="border-bottom">
                              <v-col cols="2">
                                <center>
                                  <v-avatar size="40">
                                    <v-img
                                      src="https://lh3.googleusercontent.com/fife/AAWUweW_--IgenNvUTiXocMkltyr5NU2-oKEr2Ly2Y8ySfSrgKMposkZmNvA6WIL5ofz4J22z0xbCVGckK3rphzB1ZV2C4lvGMfMI0waSGjlQUKwXoQ6R3jo34_JkU-Wc_cSY1Pa-NBc8jKUgMdvGCV17qkIyjKbkRQoUemftFwg492lajWjuq1azQpATtGSeNR9wsb9kYy9MLRrrKffJIRQOjReUwRWO292tNPzJQjVCEjvDkRgqff6J0W4RcYKLQo3lGqXuNuF8RqNum9aICbHNFwsqDp8PNeynQ3mGS7IAcjXjUFj4SnUqmkx41hnVvJJTrkPfojVTzO8afL8uhVPCwrr-lpwNOxg7Bcx6HVYiUBthHmZQA0ThF2D0QnxfWkjXSGZ5qwICdXUtsAFkfKlbb8U6bCvwV69wqUEtCNjvnDjdMS9h9vk3KdMP-hDAnt8E0WxBKLxML3g_MrFBI2bA3p7aOqoNBYCTuZY0fdxKxI1T4WZwft1bLqjQQP_gJmn4WZXzjQQi0Ff6oPMXdXGIl4qojoQSIgQoRMgpyButQ2xCbqJhRtRsX4rXxIhJZ2A_7ctsmExCzTF5BmtDURfy60FaQCxYV_PJLuWlJ8K9kUbn_a3zv28-aEOJrb966wBV87mnTk0--7l5owqUwLgsotZsSa9AKGxqJGU7UzRS4fprZsBibmwPGWrjhMfi67KCw-4CpY6uwWMNGPZvFA68XFNiMfn9_tDYJG1wW-9XAqCW_SGhKaZgHPRxN0Aazdle52wgocdx1LBVRWwKM5dfMnMceYMSBWIcc0QVXJxdK3EFJ4W4w6bLHBH7CseRbXwStmgkE_FLFJQ-LTBPG_q=w1876-h912"
                                    ></v-img>
                                  </v-avatar>
                                </center>
                              </v-col>
                              <v-col cols="10">
                                <div>NGÀY ĐĂNG TUYỂN</div>
                                <p>14/03/2022</p>
                              </v-col>
                            </v-row>
                            <v-row class="border-bottom">
                              <v-col cols="2">
                                <center>
                                  <v-avatar size="40">
                                    <v-img
                                      src="https://lh3.googleusercontent.com/fife/AAWUweVvuo6-Ye0utUWdjup4pdUU5JYBLfobOqHFjRsFwHPiM5U-DMbUPt71hQJbjRZmi_Q6ghFSArZiXBpw8-p6dsPNEkloC4PwCEt9ANuIedmvOBqG7w2AziOb-3EobZjLfcjWd1R0EcvVLdgmYVSZoiGkekMz9xmQV598nW3BUBqUO1rlYo5xfdGzw7omB3xC_AJNxBrFwqBLtRHspOdH2JOFZTXzId28lUhLGTgtNB9GUXV9pqH6ga_0Z0fb4Rj4knRCo80W8sXIcAOs_IFvOObHYD7eIoqATf9QwQ-0T8gtp3jv53XBZaiZqTYQeBFFDdYsRgu4BA-YYgs9IukJVFOs21yK0BOGG_OKLrxpUSAhbl6mhI-Ru-lf7ioMQvqW9kLOB57UjhrlqlI8-cPoqe1ub1HRgw3iC4xEuhWBszCxw97YYjz1kQLJxXjmWMi8qBtNjMyDCs5RgVbhuc5gWkCwClvke3Km6YMY7iRUHG4hGw9hpIJDDnI-frHH1QAzdcxH4kPMCjgtvH5XapT3za2u9EmqS_zijHqOkc9TR16mT9sbCB_m1xokXHM26bG6jdbhVg4lb4-i1sv4eL1uDAwm0csLITq5MZB3vJcW3vkvFkAj2qSJ3UURWw7v4B7heUWM5ecdW5yJS2SL0X8Pu8Pp09wJqOaoUYa1f1DLRyfR7J7Ma14NywsP9RewodETgl58b7jSKxn1JuV3kIUubKzus1xSuxeeCfUj3qg57F3CnAaZVdXciyd_cVjsQ2UkYCI9GvyK4sZ5g9xNEvXJUQEJWw--Udf6Xz4kGiR0UH20Y4OD91YKVU1YJkmFMx4eVxAaCHiS37ZzI2PuUoJK=w1876-h912"
                                    ></v-img>
                                  </v-avatar>
                                </center>
                              </v-col>
                              <v-col cols="10">
                                <div>NGÀNH NGHỀ</div>
                                <v-chip
                                  class="mt-1 ml-1"
                                  label
                                  outlined
                                  v-for="(
                                    sideProfession, i
                                  ) in job.sideProfessions"
                                  :key="i"
                                  >{{ sideProfession }}</v-chip
                                >
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="2">
                                <center>
                                  <v-avatar size="40">
                                    <v-img
                                      src="https://lh3.googleusercontent.com/fife/AAWUweXd0mTHaYjRoSXNppB0ukPcOEUrm3fTD845crMbhaCLHWqr7_vNm4kf2FVJGttvQxray5oHW8QI8D72UZFYvAQOI47URY4BML5ZLjN7HX2PuKCie7JwUydiM8dLJOrWaYDa3-JiVzgZlEQEXVqQHUv_rMjaFSkPIZkbhAP6FOI1DqkP9ik4rv9CQ7X6JtBpaIWm3KzJIOEzBe2SlkWeVePrhdl1YQFcWBHiCDPPumAKErk0-BumLOAiYiOHi68JYKVx4hDMm8vADBrubb2gecctXEtMfeANUOK91wHz7TAyGw3sMNzt62Zdq5sm-9LmrHFEA1RtRo4uywqXSE9bU3H0aRMM_amDxDWioDPp71fFo4ufHAZwRtyLNfQ3-kyq79L1BvL3D2Twl9ecUEd_zpDzrd_h9Zfz2Zd7FNbNjKCRaskF1FlYKuvnaXXS28xNdtTs410J37s8sBJACeY5HxOjnrV_CLE-KnnVxL79weBp6ouRUs9XnJMAc1XdKUf46tr62Qp4ncLxLu8f_17k7RDxSxOyn_U-51v3B0i89ywHO6pGbb5bLpHoNdVEEIh9l_9nT4F44kGy1TCnuXpEDKgAEd8qUxQBi_qFtDqfXQXM9oilu0lDZwLXSOta1YIrG0arsR8ivEswlHuxor7tcRKwjhDM-M_BGmq2wY-GuGaeIGwkLrX3iO4tzgdXMvYAtMWQE6B_7ImC0825x7kNoKcgl89tVmj8vg1ZW_4PF3s_hz4EevccKNsPfgRRQwghDY9maF5UIqUO-Kbk1RMIzKIMNNlqYO4njsjKXMC6oFnz5Nn7JbkhexZ3iQwn075Pwk2LFpPjEnFxmXrzjZhp=w1876-h912"
                                    ></v-img>
                                  </v-avatar>
                                </center>
                              </v-col>
                              <v-col cols="10">
                                <div>KỸ NĂNG</div>
                                <v-chip
                                  class="mt-1 ml-1"
                                  label
                                  outlined
                                  v-for="(skill, i) in job.skills"
                                  :key="i"
                                  >{{ skill }}</v-chip
                                >
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                        <v-card class="mt-5">
                          <div class="p-4">
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
                          <div class="p-4">
                            <h6>Báo cáo tin tuyển dụng</h6>
                            <p>
                              Nếu bạn thấy rằng tin tuyển dụng này không đúng,
                              hãy phản ánh với chúng tôi
                            </p>
                            <v-btn plain outlined width="100%">
                              Báo cáo tin tuyển dụng không chính xác
                            </v-btn>
                          </div>
                        </v-card>
                        <div class="mt-5">
                          <h6>Ngành nghề chính</h6>
                          <v-chip>{{ job.mainJob }}</v-chip>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <!--Review Companies-->
                <v-card class="mt-5">
                  <div class="p-4">
                    <v-row>
                      <v-col cols="12">
                        <h4>Thông tin {{ job.idCompany.name }}</h4>
                      </v-col>
                      <v-col cols="12">
                        <v-row>
                          <v-col cols="2" sm="1" md="1">
                            <img
                              src="https://lh3.googleusercontent.com/fife/AAWUweUdnETahMfObb17dP4B2XtFstgXdZarB5ykZUo-lHj87tZT6kmRb5ZQLiWooLnKTSmO3hLvxTAEjLTVngYAYbaQ7WxAplhOYWHzvJpXHhIlCxhzq7w70XbAhCV_yM9i6Ys0MXc9beeN7hfwZ0TovqNLCF_ti05jrViJ03Kk7-1hZrkb4FksikAYmKo-FRthtpP2-Tz1iEykz9t3RY-7dN1nlMYXZ31htDwvr3OKJpWcErmAf-2CbarHUNELReqKWzg7fY6zyL9XzuN5akhhaB-QT905ZUGU_UURxZ4_gXCU6Cuh_908RU8ZwrmQCGSARlb25OytvB2URgCXoaWVCsWXvp5LNy3DbqNXm_5T4aOWa-1DQXh7LzqafmXXkmECAmiZailfRv34p03j0zYXkPRJcbnu-OkpdOt9XsyIyt4kfyqeSO7P4kq6DUmfYmIdu-XmbgZkOZ2if-idZRzQceNmo5QcQ8ijFuV-lgJD3Cuhsty3Yr2sKEbiIq5blR56-iMPpfFCMJCd09x8caEh8D0oVddb1LPEb-MypLPuK9JLB49irwrusFDfk7XLc8YG4QKQd969-jydXxxdC6lfdDIQSJP6cc_63YYQUyUn9aEiDyFlSqBbvQ3Oz7Ia6dMv-kzeadC9zaO_mpGVL6VoHDCxBn73Lb8ubGAokXlaVmefTPj1d-GS3qKwBGdQdRbwjkg0PcZy-QxQMfPeP1DhcI4Ce-gTxEgdKevPDtRXcOQZb5pyUlJ42sozCupINOcLtiBBRSJj_siof0qtYU6nzRRXicoQbBejVbvGfKjrJy9s8XFa7BsfO9YyD0AycmxIx8aM_ufJRxZkcmgCzdJe=w1876-h912"
                              class="w-100"
                            />
                          </v-col>
                          <v-col cols="10" sm="11" md="11">
                            <h6>Giới thiệu</h6>
                            <p v-html="job.idCompany.introduct"></p>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="12">
                        <v-row>
                          <v-col cols="2" sm="1" md="1">
                            <img
                              src="https://lh3.googleusercontent.com/fife/AAWUweXzDzCyY30dqRanoMgI9gvHoXVN6c35dF8zgRQ9s5E5wFYq216rueSadP65VSfzuFFMavheXDo5iDwgP-FF8Dr2aDHcvxAXR38VGYw4CvhPArikt_S2IfjbAuqs1gSgSpSOOwNdA91lvh5dY-y7FCc35s0Qiyy1IdQHWvpJGDdfru1dFVIDqBVElPCJ6HK7MaD1DS2hvMGIK2_kW_azmeL4dHZE-u5qT91gG2h7JWqgPzf4vflrk4jiYIwayA2Rjc6DrJS2CA9Ea4hiEpSt6nKnM3WNoagiFK7CZiTmmiyyh48k-gYLemaA6z2M7mYFztaVxI82pPZ9dhmGL5Gt5UapUFOTKgwY2GWJgOccdCpJHsdQrdbt64eNZG8bMTm99BdLFQX3wSQSZx2zaapC14GL6RN5-X3b5SxP-6I0TMx5r3ka-z8QRgdbjNo7fdik4SaGAANoJUS0pcc7ptE7OGn36qzeLilAhS7qIL8qSG6FpKmbbg1b3gJbMKTWbaPkWs2z1es96MQpIIA88jhh5nf_Jem5BvBdPBd55FCbui7HB_LHEBHDYbfbHvRkLnt1LJ-CQoeIutwdjp2i4s7XEVLn_ewxuq-a3hvSAnRb1aBW8NuGvWvyAKbd6jo6rSUTtvs6uNwebyxaujsZiIJOxxerOdsgfd2_Qa0sfmRxT-RyJ1JCbdht3wzLUU1mJ5Xe18xNjjMXrdWgjd5XntuO8NSEeKu1m8RCWD5tktlmayfxCI6NxDJ5hcn0gEq70nfBK_9Q4d3HASFpIPSA_CsGjbcUq5qfLMXHXWKJYdZH7r5mrtfSNS5AhohXf9kL9qadtXLj0Ac_W_0udNh68R3b=w1876-h912"
                              class="w-100"
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
                              src="https://lh3.googleusercontent.com/fife/AAWUweUmnN3Va2J2YsG8KlnCwdesG08pLqp75LdaAm1VCzLsQRPq1Hss-s0kmgJSPxZBy_rnoH458MpAPQ1pF5MX-7blzjTmUlK3X4XHpn32tUx1M2VI0zWVBl1gF-N7XftZ6zmNnVs3P4UzcUn60jCwmlIj_G_CQTaTPnnjuw6ZteK8-57ThnDa_UQIoX1iB9hDX60b-v7lyQnzqMdAKVmLpKumbAOeFkYsqK3H2O5Hg6YK0TFV4xKZv21y9G2io3hzVdMp6R41LRYK4zBXYyd3OzxvjH8OOy8WyTLqko_JcYgJGI41FAAxVRPOVuZtLQ_Ww4KH5jAC96Hh1VLfALdLJeec1pr2g6N-nEKBY_97Hvr0TJ9PocC_eAbK1p-FvYrYCSqpdMgCK0mveKr0jEQRuzSee_RIxUJd-X4An5NHZzP7-pcPFsOEzO52Imp0hJwq5QXYExP2__AO-cstNWQKJvOTeKHc5sXzVlVPCoLwqTh2OXRzNlMoqdvK0Wf7iT1rkM2x2fqSpezJBAwtilmKasMVCutPaJuaNCt5zJIV7LJavXqZk8PGgZOGJCwtpXpLKVxWDzph1tvu_kvZM27LMpyohRLf5cctfFShpK2uMphR96yyd4oFSxZbbUCc6K_-7_bzMk91Vw7gK61Npt_AmuYAwa9kfLRjdIm4I6sutDqKfy96Ww9WLfZr1Jj5fMroWTRfZ7lftoK_phbmrbwWbUmy2CywgYXt54BZaCjLeZkTsZGWaVnnhXLNEXCczYM_mJkv53PHL7QqH-2Qu6Hy6Msy1fxkW44uq5ps1K3Pt9fnJjsdY5UPcoz1rLKm8QgBug4B2N4eSBc1vu6SBRtN=w1876-h912"
                              class="w-100"
                            />
                          </v-col>
                          <v-col cols="10" sm="11" md="11">
                            <h6>Địa điểm</h6>
                            <p>
                              {{ job.idCompany.address }}
                            </p>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                    <center>
                      <v-btn
                        text
                        :to="{
                          name: 'DetailsCompanies',
                          params: { slug: job.idCompany.slug },
                        }"
                        ><v-icon>mdi-office-building-outline</v-icon>Xem trang
                        cá nhân công ty</v-btn
                      >
                    </center>
                  </div>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <!--Similar Jobs-->
                <v-card class="mt-5" style="box-shadow: 0px 0px 0px 0px">
                  <div class="p-4">
                    <h5 v-if="jobInvolves.length == 0">
                      Hiện tại công ty chưa có tin tuyển dụng nào!
                    </h5>
                    <v-row>
                      <v-col
                        cols="12"
                        md="6"
                        lg="4"
                        v-for="(job, i) in jobInvolves"
                        :key="i"
                      >
                        <v-menu
                          style="width: 300px !important"
                          open-on-hover
                          :close-on-content-click="false"
                          offset-x
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-card
                              height="100%"
                              v-bind="attrs"
                              v-on="on"
                              link
                              style="box-shadow: 0px 0px 0px 0px"
                              class="border item-job"
                              :href="`/vieclam/${job.slug}`"
                            >
                              <div style="padding: 30px 50px">
                                <center>
                                  <img
                                    height="60"
                                    width="90"
                                    :src="job.idCompany.srcLogo"
                                  />
                                </center>
                              </div>

                              <v-card-title
                                :style="`color: ${job.idCompany.color}; font-size: 16px`"
                                >{{
                                  job.name.length > 40
                                    ? `${job.name.substring(0, 40)}...`
                                    : job.name
                                }}</v-card-title
                              >

                              <v-card-text>
                                <div>
                                  <router-link
                                    style="text-decoration: none"
                                    class="blue-grey--text text--darken-4"
                                    :to="{
                                      name: 'DetailsCompanies',
                                      params: { slug: job.idCompany.slug },
                                    }"
                                    ><b>{{
                                      job.idCompany.name
                                    }}</b></router-link
                                  >
                                </div>
                                Cập nhật: Hôm nay - Bạn còn <b>27</b> ngày để
                                ứng tuyển
                                <div class="mt-4">
                                  <div>
                                    <v-chip
                                      v-if="job.salaryType == 'Trong khoảng'"
                                      label
                                      outlined
                                      color="#004D40"
                                    >
                                      Từ {{ job.salaryTo }} đến
                                      {{ job.salaryfrom }} &nbsp;
                                      <span v-if="job.currency == 'VNĐ'"
                                        >triệu</span
                                      >
                                      <span v-if="job.currency == '$'">$</span>
                                    </v-chip>
                                    <v-chip
                                      label
                                      outlined
                                      color="#004D40"
                                      class="ml-2"
                                    >
                                      {{ job.workLocation }}
                                    </v-chip>
                                  </div>
                                </div>
                              </v-card-text>
                            </v-card>
                          </template>

                          <v-card>
                            <div style="padding: 20px; font-size: 14px">
                              <h6 class="red--text text--darken-4">
                                {{ job.name }}
                              </h6>
                              <h6>Quyền lợi</h6>
                              <div v-html="job.benefit"></div>
                            </div>
                            <v-card-actions>
                              <v-spacer></v-spacer>

                              <v-btn color="primary" text @click="menu = false">
                                Chi tiết
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-menu>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
              </v-tab-item>
            </v-tabs>

            <!--Similar Jobs-->
            <v-card class="mt-5" style="box-shadow: 0px 0px 0px 0px">
              <div class="p-4">
                <h3>VIỆC LÀM TƯƠNG TỰ</h3>
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                    lg="4"
                    v-for="(job, i) in jobSimilars"
                    :key="i"
                  >
                    <v-menu
                      style="width: 300px !important"
                      open-on-hover
                      :close-on-content-click="false"
                      offset-x
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-card
                          height="100%"
                          v-bind="attrs"
                          v-on="on"
                          link
                          style="box-shadow: 0px 0px 0px 0px"
                          class="border item-job"
                          :to="{
                            name: 'DetailsJob',
                            params: { slug: job.slug },
                          }"
                        >
                          <div style="padding: 30px 50px">
                            <center>
                              <img
                                height="60"
                                width="90"
                                :src="job.idCompany.srcLogo"
                              />
                            </center>
                          </div>

                          <v-card-title
                            :style="`color: ${job.idCompany.color}; font-size: 16px`"
                            >{{
                              job.name.length > 40
                                ? `${job.name.substring(0, 40)}...`
                                : job.name
                            }}</v-card-title
                          >

                          <v-card-text>
                            <div>
                              <router-link
                                style="text-decoration: none"
                                class="blue-grey--text text--darken-4"
                                :to="{
                                  name: 'DetailsCompanies',
                                  params: { slug: job.idCompany.slug },
                                }"
                                ><b>{{ job.idCompany.name }}</b></router-link
                              >
                            </div>
                            Cập nhật: Hôm nay - Bạn còn <b>27</b> ngày để ứng
                            tuyển
                            <div class="mt-4">
                              <div>
                                <v-chip
                                  v-if="job.salaryType == 'Trong khoảng'"
                                  label
                                  outlined
                                  color="#004D40"
                                >
                                  Từ {{ job.salaryTo }} đến
                                  {{ job.salaryfrom }} &nbsp;
                                  <span v-if="job.currency == 'VNĐ'"
                                    >triệu</span
                                  >
                                  <span v-if="job.currency == '$'">$</span>
                                </v-chip>
                                <v-chip
                                  label
                                  outlined
                                  color="#004D40"
                                  class="ml-2"
                                >
                                  {{ job.workLocation }}
                                </v-chip>
                              </div>
                            </div>
                          </v-card-text>
                        </v-card>
                      </template>

                      <v-card>
                        <div style="padding: 20px; font-size: 14px">
                          <h6 class="red--text text--darken-4">
                            {{ job.name }}
                          </h6>
                          <h6>Quyền lợi</h6>
                          <div v-html="job.benefit"></div>
                        </div>
                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn color="primary" text @click="menu = false">
                            Chi tiết
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-menu>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </div>
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

import Job from "../../apis/job.api";
import Candidate from "../../apis/candidate.api";
export default {
  name: "DetailsJob",
  async created() {
    const jobBySlug = await Job.getBySlugJob(this.$route.params.slug);
    this.job = jobBySlug;

    const candidateSecret = await Candidate.secret();
    this.user = candidateSecret;
  },
  data() {
    return {
      user: {},
      windowSize: {
        x: 0,
        y: 0,
      },
      styleContainer: "margin-top: -25%",
      job: {},
      jobInvolves: [],
      jobSimilars: [
        {
          _id: "62372cc1a5fbe513d0708e24",
          name: "Nhân Viên Kinh Doanh Giải Pháp Marketing Tại Hà Nội ( Không Yêu Cầu Kinh Nghiệm - Được Đào Tạo )",
          vacancies: "Nhân viên kinh doanh",
          workLocation: "Hà Nội",
          mainJob: "Marketing / Truyền thông / Quảng cáo",
          sideProfessions: [
            "Kinh doanh / Bán hàng",
            "Tư vấn",
            "Marketing / Truyền thông / Quảng cáo",
          ],
          numberOfRecruitments: 10,
          workingForm: "Toàn thời gian",
          gender: "Không yêu cầu",
          level: "Nhân viên",
          exp: "Chưa có kinh nghiệm",
          currency: "VNĐ",
          salaryType: "Trong khoảng",
          salaryTo: 15,
          salaryfrom: 10,
          jobLocation: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
          jobDescription:
            "<ul><li>Làm việc tại trụ sở Hà Nội&nbsp;</li><li>Tìm kiếm, tiếp cận những khách hàng tiềm năng, có nhu cầu về dịch vụ Digital Marketing.</li><li>Tiếp nhận yêu cầu marketing của khách hàng.</li><li>Hỗ trợ vấn chiến lược, kế hoạch Digital Marketing cho khách hàng.</li><li>NHÂN VIÊN MỚI ĐƯỢC ĐÀO TẠO VỀ DIGITAL MARKETING TRƯỚC KHI TIẾP NHẬN CÔNG VIỆC</li></ul>",
          candidateRequirements:
            "<ul><li>Nam, nữ: 22 - 25 tuổi.</li><li>Tốt nghiệp Cao đẳng, Đại học các ngành kinh tế, quản trị kinh doanh....</li><li>Tự tin trong giao tiếp, thuyết trình.</li><li>Khả năng làm việc nhóm tốt.</li><li>Có Laptop cá nhân để làm việc</li><li>Ngoại hình ưa nhìn là một lợi thế</li></ul>",
          skills: [
            "Kỹ năng giao tiếp",
            "Kỹ năng thuyết phục",
            "Kỹ năng thuyết trình",
          ],
          benefit:
            "<ul><li>Tổng thu nhập : 10.000.000 - 15.000.000đ + Thưởng</li><li>Thu nhập không giới hạn, tùy thuộc vào năng lực.</li><li>Cơ chế thưởng rõ ràng, chế độ BHXH đầy đủ cho nhân viên chính thức.</li><li>Được đào tạo, tham gia huấn luyện để trở thành những chuyên gia tư vấn trong lĩnh vực Digital Marketing khách hàng Doanh nghiệp.</li><li>Cơ hội thăng tiến rộng mở</li><li>Được làm việc trong môi trường 9x năng động, thân thiện, cởi mở.</li><li>Được tham gia summer trip, spring trip, teambuilding hàng quý do Công ty tổ chức</li></ul>",
          deadline: "2022-03-24T00:00:00.000Z",
          fullname: "Huỳnh Minh Tấn",
          emails: [""],
          phone: "0924404019",
          idCompany: {
            _id: "6237285ef9ea36d7b8e66e61",
            srcBanner: "",
            srcLogo:
              "https://cdn.topcv.vn/140/company_logos/0nYRCJkvZma8FPK2BdE1bwB4pcgdIoKN_1640681331____dfe0b1a72b854e2789781605104ac806.png",
            name: "Công ty cổ phần truyền thông và công nghệ rao thuê",
            introduct:
              "<p>Thiết kế web giá rẻ là một trong những nhu cầu cấp thiết cho các cá nhân, doanh nghiệp mới khởi nghiệp. Tận dụng sự tiếp cận khách hàng hiệu quả với website là sự lựa chọn thông minh.</p><p>Dịch vụ thiết kế website giá rẻ của webRT là lựa chọn tin cậy dành cho các doanh nghiệp. Với hơn 10 năm kinh nghiệm, webRT tự hào mang đến cho bạn website chất lượng, giá siêu rẻ.</p>",
            foundedYear: null,
            averageAge: null,
            companySizeStart: 25,
            companySizeEnd: 95,
            srcVideoYoutube: "",
            phone: "0924404019",
            website: " https://webrt.vn",
            address: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
            srcMap:
              "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=34+Cu+Chinh+Lan,Thanh+Xuan,Ha+Noi&zoom=15&language=vi",
            career: "IT phần mềm",
            careers: ["IT phần mềm", "IT Phần cứng / Mạng"],
            location: "Hà Nội",
            locations: ["Hà Nội"],
            idEmployer: "6237218c7a4a53c9acf602c4",
            isActive: true,
            dateCreate: "2022-03-20T13:11:08.785Z",
            dateEdit: "2022-03-20T13:11:08.785Z",
            isBin: false,
            isBrowser: true,
            __v: 0,
            color: "#0863F5FF",
            slug: "Cong-ty-co-phan-truyen-thong-va-cong-nghe-rao-thue",
          },
          dateEdit: "2022-03-20T13:15:06.489Z",
          dateCreate: "2022-03-20T13:15:06.489Z",
          view: 0,
          isActive: true,
          isBin: false,
          isDelete: false,
          isBrowser: true,
          __v: 0,
          slug: "nhan-vien-kinh-doanh-marketing",
        },
        {
          _id: "62372cc1a5fbe513d0708e24",
          name: "Nhân Viên Kinh Doanh Giải Pháp Marketing Tại Hà Nội ( Không Yêu Cầu Kinh Nghiệm - Được Đào Tạo )",
          vacancies: "Nhân viên kinh doanh",
          workLocation: "Hà Nội",
          mainJob: "Marketing / Truyền thông / Quảng cáo",
          sideProfessions: [
            "Kinh doanh / Bán hàng",
            "Tư vấn",
            "Marketing / Truyền thông / Quảng cáo",
          ],
          numberOfRecruitments: 10,
          workingForm: "Toàn thời gian",
          gender: "Không yêu cầu",
          level: "Nhân viên",
          exp: "Chưa có kinh nghiệm",
          currency: "VNĐ",
          salaryType: "Trong khoảng",
          salaryTo: 15,
          salaryfrom: 10,
          jobLocation: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
          jobDescription:
            "<ul><li>Làm việc tại trụ sở Hà Nội&nbsp;</li><li>Tìm kiếm, tiếp cận những khách hàng tiềm năng, có nhu cầu về dịch vụ Digital Marketing.</li><li>Tiếp nhận yêu cầu marketing của khách hàng.</li><li>Hỗ trợ vấn chiến lược, kế hoạch Digital Marketing cho khách hàng.</li><li>NHÂN VIÊN MỚI ĐƯỢC ĐÀO TẠO VỀ DIGITAL MARKETING TRƯỚC KHI TIẾP NHẬN CÔNG VIỆC</li></ul>",
          candidateRequirements:
            "<ul><li>Nam, nữ: 22 - 25 tuổi.</li><li>Tốt nghiệp Cao đẳng, Đại học các ngành kinh tế, quản trị kinh doanh....</li><li>Tự tin trong giao tiếp, thuyết trình.</li><li>Khả năng làm việc nhóm tốt.</li><li>Có Laptop cá nhân để làm việc</li><li>Ngoại hình ưa nhìn là một lợi thế</li></ul>",
          skills: [
            "Kỹ năng giao tiếp",
            "Kỹ năng thuyết phục",
            "Kỹ năng thuyết trình",
          ],
          benefit:
            "<ul><li>Tổng thu nhập : 10.000.000 - 15.000.000đ + Thưởng</li><li>Thu nhập không giới hạn, tùy thuộc vào năng lực.</li><li>Cơ chế thưởng rõ ràng, chế độ BHXH đầy đủ cho nhân viên chính thức.</li><li>Được đào tạo, tham gia huấn luyện để trở thành những chuyên gia tư vấn trong lĩnh vực Digital Marketing khách hàng Doanh nghiệp.</li><li>Cơ hội thăng tiến rộng mở</li><li>Được làm việc trong môi trường 9x năng động, thân thiện, cởi mở.</li><li>Được tham gia summer trip, spring trip, teambuilding hàng quý do Công ty tổ chức</li></ul>",
          deadline: "2022-03-24T00:00:00.000Z",
          fullname: "Huỳnh Minh Tấn",
          emails: [""],
          phone: "0924404019",
          idCompany: {
            _id: "6237285ef9ea36d7b8e66e61",
            srcBanner: "",
            srcLogo:
              "https://cdn.topcv.vn/140/company_logos/0nYRCJkvZma8FPK2BdE1bwB4pcgdIoKN_1640681331____dfe0b1a72b854e2789781605104ac806.png",
            name: "Công ty cổ phần truyền thông và công nghệ rao thuê",
            introduct:
              "<p>Thiết kế web giá rẻ là một trong những nhu cầu cấp thiết cho các cá nhân, doanh nghiệp mới khởi nghiệp. Tận dụng sự tiếp cận khách hàng hiệu quả với website là sự lựa chọn thông minh.</p><p>Dịch vụ thiết kế website giá rẻ của webRT là lựa chọn tin cậy dành cho các doanh nghiệp. Với hơn 10 năm kinh nghiệm, webRT tự hào mang đến cho bạn website chất lượng, giá siêu rẻ.</p>",
            foundedYear: null,
            averageAge: null,
            companySizeStart: 25,
            companySizeEnd: 95,
            srcVideoYoutube: "",
            phone: "0924404019",
            website: " https://webrt.vn",
            address: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
            srcMap:
              "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=34+Cu+Chinh+Lan,Thanh+Xuan,Ha+Noi&zoom=15&language=vi",
            career: "IT phần mềm",
            careers: ["IT phần mềm", "IT Phần cứng / Mạng"],
            location: "Hà Nội",
            locations: ["Hà Nội"],
            idEmployer: "6237218c7a4a53c9acf602c4",
            isActive: true,
            dateCreate: "2022-03-20T13:11:08.785Z",
            dateEdit: "2022-03-20T13:11:08.785Z",
            isBin: false,
            isBrowser: true,
            __v: 0,
            color: "#0863F5FF",
            slug: "Cong-ty-co-phan-truyen-thong-va-cong-nghe-rao-thue",
          },
          dateEdit: "2022-03-20T13:15:06.489Z",
          dateCreate: "2022-03-20T13:15:06.489Z",
          view: 0,
          isActive: true,
          isBin: false,
          isDelete: false,
          isBrowser: true,
          __v: 0,
          slug: "nhan-vien-kinh-doanh-marketing",
        },
        {
          _id: "62372cc1a5fbe513d0708e24",
          name: "Nhân Viên Kinh Doanh Giải Pháp Marketing Tại Hà Nội ( Không Yêu Cầu Kinh Nghiệm - Được Đào Tạo )",
          vacancies: "Nhân viên kinh doanh",
          workLocation: "Hà Nội",
          mainJob: "Marketing / Truyền thông / Quảng cáo",
          sideProfessions: [
            "Kinh doanh / Bán hàng",
            "Tư vấn",
            "Marketing / Truyền thông / Quảng cáo",
          ],
          numberOfRecruitments: 10,
          workingForm: "Toàn thời gian",
          gender: "Không yêu cầu",
          level: "Nhân viên",
          exp: "Chưa có kinh nghiệm",
          currency: "VNĐ",
          salaryType: "Trong khoảng",
          salaryTo: 15,
          salaryfrom: 10,
          jobLocation: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
          jobDescription:
            "<ul><li>Làm việc tại trụ sở Hà Nội&nbsp;</li><li>Tìm kiếm, tiếp cận những khách hàng tiềm năng, có nhu cầu về dịch vụ Digital Marketing.</li><li>Tiếp nhận yêu cầu marketing của khách hàng.</li><li>Hỗ trợ vấn chiến lược, kế hoạch Digital Marketing cho khách hàng.</li><li>NHÂN VIÊN MỚI ĐƯỢC ĐÀO TẠO VỀ DIGITAL MARKETING TRƯỚC KHI TIẾP NHẬN CÔNG VIỆC</li></ul>",
          candidateRequirements:
            "<ul><li>Nam, nữ: 22 - 25 tuổi.</li><li>Tốt nghiệp Cao đẳng, Đại học các ngành kinh tế, quản trị kinh doanh....</li><li>Tự tin trong giao tiếp, thuyết trình.</li><li>Khả năng làm việc nhóm tốt.</li><li>Có Laptop cá nhân để làm việc</li><li>Ngoại hình ưa nhìn là một lợi thế</li></ul>",
          skills: [
            "Kỹ năng giao tiếp",
            "Kỹ năng thuyết phục",
            "Kỹ năng thuyết trình",
          ],
          benefit:
            "<ul><li>Tổng thu nhập : 10.000.000 - 15.000.000đ + Thưởng</li><li>Thu nhập không giới hạn, tùy thuộc vào năng lực.</li><li>Cơ chế thưởng rõ ràng, chế độ BHXH đầy đủ cho nhân viên chính thức.</li><li>Được đào tạo, tham gia huấn luyện để trở thành những chuyên gia tư vấn trong lĩnh vực Digital Marketing khách hàng Doanh nghiệp.</li><li>Cơ hội thăng tiến rộng mở</li><li>Được làm việc trong môi trường 9x năng động, thân thiện, cởi mở.</li><li>Được tham gia summer trip, spring trip, teambuilding hàng quý do Công ty tổ chức</li></ul>",
          deadline: "2022-03-24T00:00:00.000Z",
          fullname: "Huỳnh Minh Tấn",
          emails: [""],
          phone: "0924404019",
          idCompany: {
            _id: "6237285ef9ea36d7b8e66e61",
            srcBanner: "",
            srcLogo:
              "https://cdn.topcv.vn/140/company_logos/0nYRCJkvZma8FPK2BdE1bwB4pcgdIoKN_1640681331____dfe0b1a72b854e2789781605104ac806.png",
            name: "Công ty cổ phần truyền thông và công nghệ rao thuê",
            introduct:
              "<p>Thiết kế web giá rẻ là một trong những nhu cầu cấp thiết cho các cá nhân, doanh nghiệp mới khởi nghiệp. Tận dụng sự tiếp cận khách hàng hiệu quả với website là sự lựa chọn thông minh.</p><p>Dịch vụ thiết kế website giá rẻ của webRT là lựa chọn tin cậy dành cho các doanh nghiệp. Với hơn 10 năm kinh nghiệm, webRT tự hào mang đến cho bạn website chất lượng, giá siêu rẻ.</p>",
            foundedYear: null,
            averageAge: null,
            companySizeStart: 25,
            companySizeEnd: 95,
            srcVideoYoutube: "",
            phone: "0924404019",
            website: " https://webrt.vn",
            address: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
            srcMap:
              "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=34+Cu+Chinh+Lan,Thanh+Xuan,Ha+Noi&zoom=15&language=vi",
            career: "IT phần mềm",
            careers: ["IT phần mềm", "IT Phần cứng / Mạng"],
            location: "Hà Nội",
            locations: ["Hà Nội"],
            idEmployer: "6237218c7a4a53c9acf602c4",
            isActive: true,
            dateCreate: "2022-03-20T13:11:08.785Z",
            dateEdit: "2022-03-20T13:11:08.785Z",
            isBin: false,
            isBrowser: true,
            __v: 0,
            color: "#0863F5FF",
            slug: "Cong-ty-co-phan-truyen-thong-va-cong-nghe-rao-thue",
          },
          dateEdit: "2022-03-20T13:15:06.489Z",
          dateCreate: "2022-03-20T13:15:06.489Z",
          view: 0,
          isActive: true,
          isBin: false,
          isDelete: false,
          isBrowser: true,
          __v: 0,
          slug: "nhan-vien-kinh-doanh-marketing",
        },
        {
          _id: "62372cc1a5fbe513d0708e24",
          name: "Nhân Viên Kinh Doanh Giải Pháp Marketing Tại Hà Nội ( Không Yêu Cầu Kinh Nghiệm - Được Đào Tạo )",
          vacancies: "Nhân viên kinh doanh",
          workLocation: "Hà Nội",
          mainJob: "Marketing / Truyền thông / Quảng cáo",
          sideProfessions: [
            "Kinh doanh / Bán hàng",
            "Tư vấn",
            "Marketing / Truyền thông / Quảng cáo",
          ],
          numberOfRecruitments: 10,
          workingForm: "Toàn thời gian",
          gender: "Không yêu cầu",
          level: "Nhân viên",
          exp: "Chưa có kinh nghiệm",
          currency: "VNĐ",
          salaryType: "Trong khoảng",
          salaryTo: 15,
          salaryfrom: 10,
          jobLocation: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
          jobDescription:
            "<ul><li>Làm việc tại trụ sở Hà Nội&nbsp;</li><li>Tìm kiếm, tiếp cận những khách hàng tiềm năng, có nhu cầu về dịch vụ Digital Marketing.</li><li>Tiếp nhận yêu cầu marketing của khách hàng.</li><li>Hỗ trợ vấn chiến lược, kế hoạch Digital Marketing cho khách hàng.</li><li>NHÂN VIÊN MỚI ĐƯỢC ĐÀO TẠO VỀ DIGITAL MARKETING TRƯỚC KHI TIẾP NHẬN CÔNG VIỆC</li></ul>",
          candidateRequirements:
            "<ul><li>Nam, nữ: 22 - 25 tuổi.</li><li>Tốt nghiệp Cao đẳng, Đại học các ngành kinh tế, quản trị kinh doanh....</li><li>Tự tin trong giao tiếp, thuyết trình.</li><li>Khả năng làm việc nhóm tốt.</li><li>Có Laptop cá nhân để làm việc</li><li>Ngoại hình ưa nhìn là một lợi thế</li></ul>",
          skills: [
            "Kỹ năng giao tiếp",
            "Kỹ năng thuyết phục",
            "Kỹ năng thuyết trình",
          ],
          benefit:
            "<ul><li>Tổng thu nhập : 10.000.000 - 15.000.000đ + Thưởng</li><li>Thu nhập không giới hạn, tùy thuộc vào năng lực.</li><li>Cơ chế thưởng rõ ràng, chế độ BHXH đầy đủ cho nhân viên chính thức.</li><li>Được đào tạo, tham gia huấn luyện để trở thành những chuyên gia tư vấn trong lĩnh vực Digital Marketing khách hàng Doanh nghiệp.</li><li>Cơ hội thăng tiến rộng mở</li><li>Được làm việc trong môi trường 9x năng động, thân thiện, cởi mở.</li><li>Được tham gia summer trip, spring trip, teambuilding hàng quý do Công ty tổ chức</li></ul>",
          deadline: "2022-03-24T00:00:00.000Z",
          fullname: "Huỳnh Minh Tấn",
          emails: [""],
          phone: "0924404019",
          idCompany: {
            _id: "6237285ef9ea36d7b8e66e61",
            srcBanner: "",
            srcLogo:
              "https://cdn.topcv.vn/140/company_logos/0nYRCJkvZma8FPK2BdE1bwB4pcgdIoKN_1640681331____dfe0b1a72b854e2789781605104ac806.png",
            name: "Công ty cổ phần truyền thông và công nghệ rao thuê",
            introduct:
              "<p>Thiết kế web giá rẻ là một trong những nhu cầu cấp thiết cho các cá nhân, doanh nghiệp mới khởi nghiệp. Tận dụng sự tiếp cận khách hàng hiệu quả với website là sự lựa chọn thông minh.</p><p>Dịch vụ thiết kế website giá rẻ của webRT là lựa chọn tin cậy dành cho các doanh nghiệp. Với hơn 10 năm kinh nghiệm, webRT tự hào mang đến cho bạn website chất lượng, giá siêu rẻ.</p>",
            foundedYear: null,
            averageAge: null,
            companySizeStart: 25,
            companySizeEnd: 95,
            srcVideoYoutube: "",
            phone: "0924404019",
            website: " https://webrt.vn",
            address: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
            srcMap:
              "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=34+Cu+Chinh+Lan,Thanh+Xuan,Ha+Noi&zoom=15&language=vi",
            career: "IT phần mềm",
            careers: ["IT phần mềm", "IT Phần cứng / Mạng"],
            location: "Hà Nội",
            locations: ["Hà Nội"],
            idEmployer: "6237218c7a4a53c9acf602c4",
            isActive: true,
            dateCreate: "2022-03-20T13:11:08.785Z",
            dateEdit: "2022-03-20T13:11:08.785Z",
            isBin: false,
            isBrowser: true,
            __v: 0,
            color: "#0863F5FF",
            slug: "Cong-ty-co-phan-truyen-thong-va-cong-nghe-rao-thue",
          },
          dateEdit: "2022-03-20T13:15:06.489Z",
          dateCreate: "2022-03-20T13:15:06.489Z",
          view: 0,
          isActive: true,
          isBin: false,
          isDelete: false,
          isBrowser: true,
          __v: 0,
          slug: "nhan-vien-kinh-doanh-marketing",
        },
        {
          _id: "62372cc1a5fbe513d0708e24",
          name: "Nhân Viên Kinh Doanh Giải Pháp Marketing Tại Hà Nội ( Không Yêu Cầu Kinh Nghiệm - Được Đào Tạo )",
          vacancies: "Nhân viên kinh doanh",
          workLocation: "Hà Nội",
          mainJob: "Marketing / Truyền thông / Quảng cáo",
          sideProfessions: [
            "Kinh doanh / Bán hàng",
            "Tư vấn",
            "Marketing / Truyền thông / Quảng cáo",
          ],
          numberOfRecruitments: 10,
          workingForm: "Toàn thời gian",
          gender: "Không yêu cầu",
          level: "Nhân viên",
          exp: "Chưa có kinh nghiệm",
          currency: "VNĐ",
          salaryType: "Trong khoảng",
          salaryTo: 15,
          salaryfrom: 10,
          jobLocation: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
          jobDescription:
            "<ul><li>Làm việc tại trụ sở Hà Nội&nbsp;</li><li>Tìm kiếm, tiếp cận những khách hàng tiềm năng, có nhu cầu về dịch vụ Digital Marketing.</li><li>Tiếp nhận yêu cầu marketing của khách hàng.</li><li>Hỗ trợ vấn chiến lược, kế hoạch Digital Marketing cho khách hàng.</li><li>NHÂN VIÊN MỚI ĐƯỢC ĐÀO TẠO VỀ DIGITAL MARKETING TRƯỚC KHI TIẾP NHẬN CÔNG VIỆC</li></ul>",
          candidateRequirements:
            "<ul><li>Nam, nữ: 22 - 25 tuổi.</li><li>Tốt nghiệp Cao đẳng, Đại học các ngành kinh tế, quản trị kinh doanh....</li><li>Tự tin trong giao tiếp, thuyết trình.</li><li>Khả năng làm việc nhóm tốt.</li><li>Có Laptop cá nhân để làm việc</li><li>Ngoại hình ưa nhìn là một lợi thế</li></ul>",
          skills: [
            "Kỹ năng giao tiếp",
            "Kỹ năng thuyết phục",
            "Kỹ năng thuyết trình",
          ],
          benefit:
            "<ul><li>Tổng thu nhập : 10.000.000 - 15.000.000đ + Thưởng</li><li>Thu nhập không giới hạn, tùy thuộc vào năng lực.</li><li>Cơ chế thưởng rõ ràng, chế độ BHXH đầy đủ cho nhân viên chính thức.</li><li>Được đào tạo, tham gia huấn luyện để trở thành những chuyên gia tư vấn trong lĩnh vực Digital Marketing khách hàng Doanh nghiệp.</li><li>Cơ hội thăng tiến rộng mở</li><li>Được làm việc trong môi trường 9x năng động, thân thiện, cởi mở.</li><li>Được tham gia summer trip, spring trip, teambuilding hàng quý do Công ty tổ chức</li></ul>",
          deadline: "2022-03-24T00:00:00.000Z",
          fullname: "Huỳnh Minh Tấn",
          emails: [""],
          phone: "0924404019",
          idCompany: {
            _id: "6237285ef9ea36d7b8e66e61",
            srcBanner: "",
            srcLogo:
              "https://cdn.topcv.vn/140/company_logos/0nYRCJkvZma8FPK2BdE1bwB4pcgdIoKN_1640681331____dfe0b1a72b854e2789781605104ac806.png",
            name: "Công ty cổ phần truyền thông và công nghệ rao thuê",
            introduct:
              "<p>Thiết kế web giá rẻ là một trong những nhu cầu cấp thiết cho các cá nhân, doanh nghiệp mới khởi nghiệp. Tận dụng sự tiếp cận khách hàng hiệu quả với website là sự lựa chọn thông minh.</p><p>Dịch vụ thiết kế website giá rẻ của webRT là lựa chọn tin cậy dành cho các doanh nghiệp. Với hơn 10 năm kinh nghiệm, webRT tự hào mang đến cho bạn website chất lượng, giá siêu rẻ.</p>",
            foundedYear: null,
            averageAge: null,
            companySizeStart: 25,
            companySizeEnd: 95,
            srcVideoYoutube: "",
            phone: "0924404019",
            website: " https://webrt.vn",
            address: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
            srcMap:
              "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=34+Cu+Chinh+Lan,Thanh+Xuan,Ha+Noi&zoom=15&language=vi",
            career: "IT phần mềm",
            careers: ["IT phần mềm", "IT Phần cứng / Mạng"],
            location: "Hà Nội",
            locations: ["Hà Nội"],
            idEmployer: "6237218c7a4a53c9acf602c4",
            isActive: true,
            dateCreate: "2022-03-20T13:11:08.785Z",
            dateEdit: "2022-03-20T13:11:08.785Z",
            isBin: false,
            isBrowser: true,
            __v: 0,
            color: "#0863F5FF",
            slug: "Cong-ty-co-phan-truyen-thong-va-cong-nghe-rao-thue",
          },
          dateEdit: "2022-03-20T13:15:06.489Z",
          dateCreate: "2022-03-20T13:15:06.489Z",
          view: 0,
          isActive: true,
          isBin: false,
          isDelete: false,
          isBrowser: true,
          __v: 0,
          slug: "nhan-vien-kinh-doanh-marketing",
        },
        {
          _id: "62372cc1a5fbe513d0708e24",
          name: "Nhân Viên Kinh Doanh Giải Pháp Marketing Tại Hà Nội ( Không Yêu Cầu Kinh Nghiệm - Được Đào Tạo )",
          vacancies: "Nhân viên kinh doanh",
          workLocation: "Hà Nội",
          mainJob: "Marketing / Truyền thông / Quảng cáo",
          sideProfessions: [
            "Kinh doanh / Bán hàng",
            "Tư vấn",
            "Marketing / Truyền thông / Quảng cáo",
          ],
          numberOfRecruitments: 10,
          workingForm: "Toàn thời gian",
          gender: "Không yêu cầu",
          level: "Nhân viên",
          exp: "Chưa có kinh nghiệm",
          currency: "VNĐ",
          salaryType: "Trong khoảng",
          salaryTo: 15,
          salaryfrom: 10,
          jobLocation: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
          jobDescription:
            "<ul><li>Làm việc tại trụ sở Hà Nội&nbsp;</li><li>Tìm kiếm, tiếp cận những khách hàng tiềm năng, có nhu cầu về dịch vụ Digital Marketing.</li><li>Tiếp nhận yêu cầu marketing của khách hàng.</li><li>Hỗ trợ vấn chiến lược, kế hoạch Digital Marketing cho khách hàng.</li><li>NHÂN VIÊN MỚI ĐƯỢC ĐÀO TẠO VỀ DIGITAL MARKETING TRƯỚC KHI TIẾP NHẬN CÔNG VIỆC</li></ul>",
          candidateRequirements:
            "<ul><li>Nam, nữ: 22 - 25 tuổi.</li><li>Tốt nghiệp Cao đẳng, Đại học các ngành kinh tế, quản trị kinh doanh....</li><li>Tự tin trong giao tiếp, thuyết trình.</li><li>Khả năng làm việc nhóm tốt.</li><li>Có Laptop cá nhân để làm việc</li><li>Ngoại hình ưa nhìn là một lợi thế</li></ul>",
          skills: [
            "Kỹ năng giao tiếp",
            "Kỹ năng thuyết phục",
            "Kỹ năng thuyết trình",
          ],
          benefit:
            "<ul><li>Tổng thu nhập : 10.000.000 - 15.000.000đ + Thưởng</li><li>Thu nhập không giới hạn, tùy thuộc vào năng lực.</li><li>Cơ chế thưởng rõ ràng, chế độ BHXH đầy đủ cho nhân viên chính thức.</li><li>Được đào tạo, tham gia huấn luyện để trở thành những chuyên gia tư vấn trong lĩnh vực Digital Marketing khách hàng Doanh nghiệp.</li><li>Cơ hội thăng tiến rộng mở</li><li>Được làm việc trong môi trường 9x năng động, thân thiện, cởi mở.</li><li>Được tham gia summer trip, spring trip, teambuilding hàng quý do Công ty tổ chức</li></ul>",
          deadline: "2022-03-24T00:00:00.000Z",
          fullname: "Huỳnh Minh Tấn",
          emails: [""],
          phone: "0924404019",
          idCompany: {
            _id: "6237285ef9ea36d7b8e66e61",
            srcBanner: "",
            srcLogo:
              "https://cdn.topcv.vn/140/company_logos/0nYRCJkvZma8FPK2BdE1bwB4pcgdIoKN_1640681331____dfe0b1a72b854e2789781605104ac806.png",
            name: "Công ty cổ phần truyền thông và công nghệ rao thuê",
            introduct:
              "<p>Thiết kế web giá rẻ là một trong những nhu cầu cấp thiết cho các cá nhân, doanh nghiệp mới khởi nghiệp. Tận dụng sự tiếp cận khách hàng hiệu quả với website là sự lựa chọn thông minh.</p><p>Dịch vụ thiết kế website giá rẻ của webRT là lựa chọn tin cậy dành cho các doanh nghiệp. Với hơn 10 năm kinh nghiệm, webRT tự hào mang đến cho bạn website chất lượng, giá siêu rẻ.</p>",
            foundedYear: null,
            averageAge: null,
            companySizeStart: 25,
            companySizeEnd: 95,
            srcVideoYoutube: "",
            phone: "0924404019",
            website: " https://webrt.vn",
            address: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
            srcMap:
              "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=34+Cu+Chinh+Lan,Thanh+Xuan,Ha+Noi&zoom=15&language=vi",
            career: "IT phần mềm",
            careers: ["IT phần mềm", "IT Phần cứng / Mạng"],
            location: "Hà Nội",
            locations: ["Hà Nội"],
            idEmployer: "6237218c7a4a53c9acf602c4",
            isActive: true,
            dateCreate: "2022-03-20T13:11:08.785Z",
            dateEdit: "2022-03-20T13:11:08.785Z",
            isBin: false,
            isBrowser: true,
            __v: 0,
            color: "#0863F5FF",
            slug: "Cong-ty-co-phan-truyen-thong-va-cong-nghe-rao-thue",
          },
          dateEdit: "2022-03-20T13:15:06.489Z",
          dateCreate: "2022-03-20T13:15:06.489Z",
          view: 0,
          isActive: true,
          isBin: false,
          isDelete: false,
          isBrowser: true,
          __v: 0,
          slug: "nhan-vien-kinh-doanh-marketing",
        },
        {
          _id: "62372cc1a5fbe513d0708e24",
          name: "Nhân Viên Kinh Doanh Giải Pháp Marketing Tại Hà Nội ( Không Yêu Cầu Kinh Nghiệm - Được Đào Tạo )",
          vacancies: "Nhân viên kinh doanh",
          workLocation: "Hà Nội",
          mainJob: "Marketing / Truyền thông / Quảng cáo",
          sideProfessions: [
            "Kinh doanh / Bán hàng",
            "Tư vấn",
            "Marketing / Truyền thông / Quảng cáo",
          ],
          numberOfRecruitments: 10,
          workingForm: "Toàn thời gian",
          gender: "Không yêu cầu",
          level: "Nhân viên",
          exp: "Chưa có kinh nghiệm",
          currency: "VNĐ",
          salaryType: "Trong khoảng",
          salaryTo: 15,
          salaryfrom: 10,
          jobLocation: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
          jobDescription:
            "<ul><li>Làm việc tại trụ sở Hà Nội&nbsp;</li><li>Tìm kiếm, tiếp cận những khách hàng tiềm năng, có nhu cầu về dịch vụ Digital Marketing.</li><li>Tiếp nhận yêu cầu marketing của khách hàng.</li><li>Hỗ trợ vấn chiến lược, kế hoạch Digital Marketing cho khách hàng.</li><li>NHÂN VIÊN MỚI ĐƯỢC ĐÀO TẠO VỀ DIGITAL MARKETING TRƯỚC KHI TIẾP NHẬN CÔNG VIỆC</li></ul>",
          candidateRequirements:
            "<ul><li>Nam, nữ: 22 - 25 tuổi.</li><li>Tốt nghiệp Cao đẳng, Đại học các ngành kinh tế, quản trị kinh doanh....</li><li>Tự tin trong giao tiếp, thuyết trình.</li><li>Khả năng làm việc nhóm tốt.</li><li>Có Laptop cá nhân để làm việc</li><li>Ngoại hình ưa nhìn là một lợi thế</li></ul>",
          skills: [
            "Kỹ năng giao tiếp",
            "Kỹ năng thuyết phục",
            "Kỹ năng thuyết trình",
          ],
          benefit:
            "<ul><li>Tổng thu nhập : 10.000.000 - 15.000.000đ + Thưởng</li><li>Thu nhập không giới hạn, tùy thuộc vào năng lực.</li><li>Cơ chế thưởng rõ ràng, chế độ BHXH đầy đủ cho nhân viên chính thức.</li><li>Được đào tạo, tham gia huấn luyện để trở thành những chuyên gia tư vấn trong lĩnh vực Digital Marketing khách hàng Doanh nghiệp.</li><li>Cơ hội thăng tiến rộng mở</li><li>Được làm việc trong môi trường 9x năng động, thân thiện, cởi mở.</li><li>Được tham gia summer trip, spring trip, teambuilding hàng quý do Công ty tổ chức</li></ul>",
          deadline: "2022-03-24T00:00:00.000Z",
          fullname: "Huỳnh Minh Tấn",
          emails: [""],
          phone: "0924404019",
          idCompany: {
            _id: "6237285ef9ea36d7b8e66e61",
            srcBanner: "",
            srcLogo:
              "https://cdn.topcv.vn/140/company_logos/0nYRCJkvZma8FPK2BdE1bwB4pcgdIoKN_1640681331____dfe0b1a72b854e2789781605104ac806.png",
            name: "Công ty cổ phần truyền thông và công nghệ rao thuê",
            introduct:
              "<p>Thiết kế web giá rẻ là một trong những nhu cầu cấp thiết cho các cá nhân, doanh nghiệp mới khởi nghiệp. Tận dụng sự tiếp cận khách hàng hiệu quả với website là sự lựa chọn thông minh.</p><p>Dịch vụ thiết kế website giá rẻ của webRT là lựa chọn tin cậy dành cho các doanh nghiệp. Với hơn 10 năm kinh nghiệm, webRT tự hào mang đến cho bạn website chất lượng, giá siêu rẻ.</p>",
            foundedYear: null,
            averageAge: null,
            companySizeStart: 25,
            companySizeEnd: 95,
            srcVideoYoutube: "",
            phone: "0924404019",
            website: " https://webrt.vn",
            address: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
            srcMap:
              "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=34+Cu+Chinh+Lan,Thanh+Xuan,Ha+Noi&zoom=15&language=vi",
            career: "IT phần mềm",
            careers: ["IT phần mềm", "IT Phần cứng / Mạng"],
            location: "Hà Nội",
            locations: ["Hà Nội"],
            idEmployer: "6237218c7a4a53c9acf602c4",
            isActive: true,
            dateCreate: "2022-03-20T13:11:08.785Z",
            dateEdit: "2022-03-20T13:11:08.785Z",
            isBin: false,
            isBrowser: true,
            __v: 0,
            color: "#0863F5FF",
            slug: "Cong-ty-co-phan-truyen-thong-va-cong-nghe-rao-thue",
          },
          dateEdit: "2022-03-20T13:15:06.489Z",
          dateCreate: "2022-03-20T13:15:06.489Z",
          view: 0,
          isActive: true,
          isBin: false,
          isDelete: false,
          isBrowser: true,
          __v: 0,
          slug: "nhan-vien-kinh-doanh-marketing",
        },
        {
          _id: "62372cc1a5fbe513d0708e24",
          name: "Nhân Viên Kinh Doanh Giải Pháp Marketing Tại Hà Nội ( Không Yêu Cầu Kinh Nghiệm - Được Đào Tạo )",
          vacancies: "Nhân viên kinh doanh",
          workLocation: "Hà Nội",
          mainJob: "Marketing / Truyền thông / Quảng cáo",
          sideProfessions: [
            "Kinh doanh / Bán hàng",
            "Tư vấn",
            "Marketing / Truyền thông / Quảng cáo",
          ],
          numberOfRecruitments: 10,
          workingForm: "Toàn thời gian",
          gender: "Không yêu cầu",
          level: "Nhân viên",
          exp: "Chưa có kinh nghiệm",
          currency: "VNĐ",
          salaryType: "Trong khoảng",
          salaryTo: 15,
          salaryfrom: 10,
          jobLocation: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
          jobDescription:
            "<ul><li>Làm việc tại trụ sở Hà Nội&nbsp;</li><li>Tìm kiếm, tiếp cận những khách hàng tiềm năng, có nhu cầu về dịch vụ Digital Marketing.</li><li>Tiếp nhận yêu cầu marketing của khách hàng.</li><li>Hỗ trợ vấn chiến lược, kế hoạch Digital Marketing cho khách hàng.</li><li>NHÂN VIÊN MỚI ĐƯỢC ĐÀO TẠO VỀ DIGITAL MARKETING TRƯỚC KHI TIẾP NHẬN CÔNG VIỆC</li></ul>",
          candidateRequirements:
            "<ul><li>Nam, nữ: 22 - 25 tuổi.</li><li>Tốt nghiệp Cao đẳng, Đại học các ngành kinh tế, quản trị kinh doanh....</li><li>Tự tin trong giao tiếp, thuyết trình.</li><li>Khả năng làm việc nhóm tốt.</li><li>Có Laptop cá nhân để làm việc</li><li>Ngoại hình ưa nhìn là một lợi thế</li></ul>",
          skills: [
            "Kỹ năng giao tiếp",
            "Kỹ năng thuyết phục",
            "Kỹ năng thuyết trình",
          ],
          benefit:
            "<ul><li>Tổng thu nhập : 10.000.000 - 15.000.000đ + Thưởng</li><li>Thu nhập không giới hạn, tùy thuộc vào năng lực.</li><li>Cơ chế thưởng rõ ràng, chế độ BHXH đầy đủ cho nhân viên chính thức.</li><li>Được đào tạo, tham gia huấn luyện để trở thành những chuyên gia tư vấn trong lĩnh vực Digital Marketing khách hàng Doanh nghiệp.</li><li>Cơ hội thăng tiến rộng mở</li><li>Được làm việc trong môi trường 9x năng động, thân thiện, cởi mở.</li><li>Được tham gia summer trip, spring trip, teambuilding hàng quý do Công ty tổ chức</li></ul>",
          deadline: "2022-03-24T00:00:00.000Z",
          fullname: "Huỳnh Minh Tấn",
          emails: [""],
          phone: "0924404019",
          idCompany: {
            _id: "6237285ef9ea36d7b8e66e61",
            srcBanner: "",
            srcLogo:
              "https://cdn.topcv.vn/140/company_logos/0nYRCJkvZma8FPK2BdE1bwB4pcgdIoKN_1640681331____dfe0b1a72b854e2789781605104ac806.png",
            name: "Công ty cổ phần truyền thông và công nghệ rao thuê",
            introduct:
              "<p>Thiết kế web giá rẻ là một trong những nhu cầu cấp thiết cho các cá nhân, doanh nghiệp mới khởi nghiệp. Tận dụng sự tiếp cận khách hàng hiệu quả với website là sự lựa chọn thông minh.</p><p>Dịch vụ thiết kế website giá rẻ của webRT là lựa chọn tin cậy dành cho các doanh nghiệp. Với hơn 10 năm kinh nghiệm, webRT tự hào mang đến cho bạn website chất lượng, giá siêu rẻ.</p>",
            foundedYear: null,
            averageAge: null,
            companySizeStart: 25,
            companySizeEnd: 95,
            srcVideoYoutube: "",
            phone: "0924404019",
            website: " https://webrt.vn",
            address: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
            srcMap:
              "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=34+Cu+Chinh+Lan,Thanh+Xuan,Ha+Noi&zoom=15&language=vi",
            career: "IT phần mềm",
            careers: ["IT phần mềm", "IT Phần cứng / Mạng"],
            location: "Hà Nội",
            locations: ["Hà Nội"],
            idEmployer: "6237218c7a4a53c9acf602c4",
            isActive: true,
            dateCreate: "2022-03-20T13:11:08.785Z",
            dateEdit: "2022-03-20T13:11:08.785Z",
            isBin: false,
            isBrowser: true,
            __v: 0,
            color: "#0863F5FF",
            slug: "Cong-ty-co-phan-truyen-thong-va-cong-nghe-rao-thue",
          },
          dateEdit: "2022-03-20T13:15:06.489Z",
          dateCreate: "2022-03-20T13:15:06.489Z",
          view: 0,
          isActive: true,
          isBin: false,
          isDelete: false,
          isBrowser: true,
          __v: 0,
          slug: "nhan-vien-kinh-doanh-marketing",
        },
        {
          _id: "62372cc1a5fbe513d0708e24",
          name: "Nhân Viên Kinh Doanh Giải Pháp Marketing Tại Hà Nội ( Không Yêu Cầu Kinh Nghiệm - Được Đào Tạo )",
          vacancies: "Nhân viên kinh doanh",
          workLocation: "Hà Nội",
          mainJob: "Marketing / Truyền thông / Quảng cáo",
          sideProfessions: [
            "Kinh doanh / Bán hàng",
            "Tư vấn",
            "Marketing / Truyền thông / Quảng cáo",
          ],
          numberOfRecruitments: 10,
          workingForm: "Toàn thời gian",
          gender: "Không yêu cầu",
          level: "Nhân viên",
          exp: "Chưa có kinh nghiệm",
          currency: "VNĐ",
          salaryType: "Trong khoảng",
          salaryTo: 15,
          salaryfrom: 10,
          jobLocation: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
          jobDescription:
            "<ul><li>Làm việc tại trụ sở Hà Nội&nbsp;</li><li>Tìm kiếm, tiếp cận những khách hàng tiềm năng, có nhu cầu về dịch vụ Digital Marketing.</li><li>Tiếp nhận yêu cầu marketing của khách hàng.</li><li>Hỗ trợ vấn chiến lược, kế hoạch Digital Marketing cho khách hàng.</li><li>NHÂN VIÊN MỚI ĐƯỢC ĐÀO TẠO VỀ DIGITAL MARKETING TRƯỚC KHI TIẾP NHẬN CÔNG VIỆC</li></ul>",
          candidateRequirements:
            "<ul><li>Nam, nữ: 22 - 25 tuổi.</li><li>Tốt nghiệp Cao đẳng, Đại học các ngành kinh tế, quản trị kinh doanh....</li><li>Tự tin trong giao tiếp, thuyết trình.</li><li>Khả năng làm việc nhóm tốt.</li><li>Có Laptop cá nhân để làm việc</li><li>Ngoại hình ưa nhìn là một lợi thế</li></ul>",
          skills: [
            "Kỹ năng giao tiếp",
            "Kỹ năng thuyết phục",
            "Kỹ năng thuyết trình",
          ],
          benefit:
            "<ul><li>Tổng thu nhập : 10.000.000 - 15.000.000đ + Thưởng</li><li>Thu nhập không giới hạn, tùy thuộc vào năng lực.</li><li>Cơ chế thưởng rõ ràng, chế độ BHXH đầy đủ cho nhân viên chính thức.</li><li>Được đào tạo, tham gia huấn luyện để trở thành những chuyên gia tư vấn trong lĩnh vực Digital Marketing khách hàng Doanh nghiệp.</li><li>Cơ hội thăng tiến rộng mở</li><li>Được làm việc trong môi trường 9x năng động, thân thiện, cởi mở.</li><li>Được tham gia summer trip, spring trip, teambuilding hàng quý do Công ty tổ chức</li></ul>",
          deadline: "2022-03-24T00:00:00.000Z",
          fullname: "Huỳnh Minh Tấn",
          emails: [""],
          phone: "0924404019",
          idCompany: {
            _id: "6237285ef9ea36d7b8e66e61",
            srcBanner: "",
            srcLogo:
              "https://cdn.topcv.vn/140/company_logos/0nYRCJkvZma8FPK2BdE1bwB4pcgdIoKN_1640681331____dfe0b1a72b854e2789781605104ac806.png",
            name: "Công ty cổ phần truyền thông và công nghệ rao thuê",
            introduct:
              "<p>Thiết kế web giá rẻ là một trong những nhu cầu cấp thiết cho các cá nhân, doanh nghiệp mới khởi nghiệp. Tận dụng sự tiếp cận khách hàng hiệu quả với website là sự lựa chọn thông minh.</p><p>Dịch vụ thiết kế website giá rẻ của webRT là lựa chọn tin cậy dành cho các doanh nghiệp. Với hơn 10 năm kinh nghiệm, webRT tự hào mang đến cho bạn website chất lượng, giá siêu rẻ.</p>",
            foundedYear: null,
            averageAge: null,
            companySizeStart: 25,
            companySizeEnd: 95,
            srcVideoYoutube: "",
            phone: "0924404019",
            website: " https://webrt.vn",
            address: "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
            srcMap:
              "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=34+Cu+Chinh+Lan,Thanh+Xuan,Ha+Noi&zoom=15&language=vi",
            career: "IT phần mềm",
            careers: ["IT phần mềm", "IT Phần cứng / Mạng"],
            location: "Hà Nội",
            locations: ["Hà Nội"],
            idEmployer: "6237218c7a4a53c9acf602c4",
            isActive: true,
            dateCreate: "2022-03-20T13:11:08.785Z",
            dateEdit: "2022-03-20T13:11:08.785Z",
            isBin: false,
            isBrowser: true,
            __v: 0,
            color: "#0863F5FF",
            slug: "Cong-ty-co-phan-truyen-thong-va-cong-nghe-rao-thue",
          },
          dateEdit: "2022-03-20T13:15:06.489Z",
          dateCreate: "2022-03-20T13:15:06.489Z",
          view: 0,
          isActive: true,
          isBin: false,
          isDelete: false,
          isBrowser: true,
          __v: 0,
          slug: "nhan-vien-kinh-doanh-marketing",
        },
      ],
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
  mounted() {
    this.onResize();
  },
  methods: {
    async loadJobInvolve(idCompany) {
      const jobInvolves = await Job.getJobByIdCompany(idCompany);
      this.jobInvolves = jobInvolves;
    },
    onResize() {
      let that = this;
      that.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (that.windowSize.x < 600) {
        that.styleContainer = "margin-top: -100%";
      } else if (that.windowSize.x < 960) {
        that.styleContainer = "margin-top: -55%";
      } else if (that.windowSize.x < 1264) {
        that.styleContainer = "margin-top: -35%";
      } else {
        that.styleContainer = "margin-top: -25%";
      }
    },
  },
  components: {
    Search,
    Content,
    Categories,
  },
};
</script>

<style></style>
