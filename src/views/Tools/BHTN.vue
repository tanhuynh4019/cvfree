<template>
  <div class="bhtn">
    <v-container>
      <v-row>
        <v-col md="8" cols="12">
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  <h1 class="header">
                    <strong
                      >Công cụ tính mức hưởng bảo hiểm thất nghiệp chính xác
                      nhất 2022</strong
                    >
                  </h1>
                </div>
                <v-list-item-title class="text-h5">
                  <p
                    style="
                      color: rgb(102, 102, 102);
                      font-size: 12.6px;
                      word-wrap: break-word;
                    "
                  >
                    <i
                      >Mức hưởng bảo hiểm thất nghiệp được quy đinh tại điều 50,
                      Luật việc làm 2013 và được hướng dẫn chi tiết tại điều 8,
                      Nghị định 28/2015/NĐ-CP</i
                    >
                  </p>
                  <p style="color: rgb(102, 102, 102); font-size: 12.6px">
                    <i
                      >Áp dụng mức lương
                      <span class="region">tối thiểu vùng</span>
                      mới nhất có hiệu lực từ ngày 1/1/2020 (Theo điều 3, Nghị
                      định 90/2019/NĐ-CP)</i
                    >
                  </p>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-radio-group mandatory v-model="radios">
                    <v-row>
                      <v-col md="6" cols="12" sm="6">
                        <v-radio
                          label="Lương đóng BH không thay đổi trong 6 tháng"
                          value="radio-1"
                        ></v-radio>
                      </v-col>
                      <v-col md="6" cols="12" sm="6">
                        <v-radio
                          label="Lương đóng BH thay đổi trong 6 tháng"
                          value="radio-2"
                        ></v-radio>
                      </v-col>
                    </v-row>
                    <div v-if="radios == 'radio-1'">
                      <label class="mt-4">
                        <strong style="font-size: 14px">
                          Tiền lương đóng BHTN:
                        </strong>
                        <v-text-field
                          outlined
                          placeholder="6,000,000"
                          prepend-inner-icon="mdi mdi-cash"
                          suffix="(VNĐ)"
                          class="mt-4"
                        ></v-text-field>
                        <p style="font-weight: 400; font-size: 13px">
                          (Bình quân tiền lương tháng đóng BHTN của 06 tháng
                          liền kề trước khi thất nghiệp)
                        </p>
                      </label>
                    </div>
                    <div v-if="radios == 'radio-2'" class="bhtn-month">
                      <v-row>
                        <v-col md="4">
                          <label class="mt-4">
                            <strong style="font-size: 14px">
                              BHTN tháng 1:
                            </strong>
                            <v-text-field
                              outlined
                              placeholder="6,000,000"
                              prepend-inner-icon="mdi mdi-cash"
                              suffix="(VNĐ)"
                              class="mt-4"
                              width="100%"
                            ></v-text-field>
                          </label>
                        </v-col>
                        <v-col md="4">
                          <label class="mt-4">
                            <strong style="font-size: 14px">
                              BHTN tháng 2:
                            </strong>
                            <v-text-field
                              outlined
                              placeholder="6,000,000"
                              prepend-inner-icon="mdi mdi-cash"
                              suffix="(VNĐ)"
                              class="mt-4"
                            ></v-text-field>
                          </label>
                        </v-col>
                        <v-col md="4">
                          <label class="mt-4">
                            <strong style="font-size: 14px">
                              BHTN tháng 3:
                            </strong>
                            <v-text-field
                              outlined
                              placeholder="6,000,000"
                              prepend-inner-icon="mdi mdi-cash"
                              suffix="(VNĐ)"
                              class="mt-4"
                            ></v-text-field>
                          </label>
                        </v-col>
                        <v-col md="4">
                          <label>
                            <strong style="font-size: 14px">
                              BHTN tháng 4:
                            </strong>
                            <v-text-field
                              outlined
                              placeholder="6,000,000"
                              prepend-inner-icon="mdi mdi-cash"
                              suffix="(VNĐ)"
                              class="mt-4"
                              width="100%"
                            ></v-text-field>
                          </label>
                        </v-col>
                        <v-col md="4">
                          <label>
                            <strong style="font-size: 14px">
                              BHTN tháng 5:
                            </strong>
                            <v-text-field
                              outlined
                              placeholder="6,000,000"
                              prepend-inner-icon="mdi mdi-cash"
                              suffix="(VNĐ)"
                              class="mt-4"
                            ></v-text-field>
                          </label>
                        </v-col>
                        <v-col md="4">
                          <label>
                            <strong style="font-size: 14px">
                              BHTN tháng 6:
                            </strong>
                            <v-text-field
                              outlined
                              placeholder="6,000,000"
                              prepend-inner-icon="mdi mdi-cash"
                              suffix="(VNĐ)"
                              class="mt-4"
                            ></v-text-field>
                          </label>
                        </v-col>
                      </v-row>
                    </div>
                    <div class="bhtn-ch mt-4">
                      <label>
                        <strong style="font-size: 14px">
                          Tổng thời gian đóng BHTN chưa hưởng:
                        </strong>
                        <v-text-field
                          outlined
                          placeholder="12"
                          prepend-inner-icon="mdi mdi-calendar-blank-outline"
                          suffix="(Tháng)"
                          class="mt-4"
                        ></v-text-field>
                        <p style="font-weight: 400; font-size: 13px">
                          (Thời gian đóng bảo hiểm thất nghiệp – Thời gian đã
                          hưởng trợ cấp thất nghiệp)
                        </p>
                      </label>
                    </div>
                    <div class="bhtn-salary">
                      <v-row>
                        <v-col md="6" cols="12" sm="6">
                          <v-radio-group mandatory v-model="salarys">
                            <label class="mb-3">
                              <strong style="font-size: 14px">
                                Chế độ tiền lương
                              </strong>
                            </label>
                            <v-radio
                              label="Doanh nghiệp nhà nước"
                              value="salary-1"
                            ></v-radio>
                            <v-radio
                              label="Doanh nghiệp tư nhân"
                              value="salary-2"
                            ></v-radio>
                          </v-radio-group>
                        </v-col>
                        <v-col md="6" cols="12" sm="6">
                          <div v-if="salarys == 'salary-1'">
                            <label class="salary1">
                              <strong style="font-size: 14px"
                                >Vùng
                                <span class="gt">(Giải thích):</span></strong
                              >
                              <v-select
                                v-model="select"
                                :items="items"
                                item-text="state"
                                return-object
                                single-line
                                prepend-inner-icon="mdi-map-marker"
                                style="cursor: not-allowed"
                                disabled
                              ></v-select>
                            </label>
                          </div>
                          <div v-if="salarys == 'salary-2'" cols="12">
                            <label class="salary2">
                              <strong style="font-size: 14px"
                                >Vùng
                                <span class="gt">(Giải thích):</span></strong
                              >
                              <v-select
                                v-model="select"
                                :items="items"
                                item-text="state"
                                return-object
                                single-line
                                prepend-inner-icon="mdi-map-marker"
                                style="cursor: not-allowed"
                              ></v-select>
                            </label>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                    <div class="bhtn-button">
                      <button type="submit" class="btn btn-bhtn-primary">
                        Tính bảo hiểm
                      </button>
                    </div>
                  </v-radio-group>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-card class="mx-auto mt-4" outlined>
            <div class="bhtn-box">
              <h2>
                <strong
                  >Bảo hiểm thất nghiệp là gì? Cách tính bảo hiểm thất nghiệp
                  mới nhất 2022</strong
                >
              </h2>
              <div class="content">
                <h2><strong>Bảo hiểm thất nghiệp là gì?</strong></h2>
                <p>
                  Bảo hiểm thất nghiệp là hình thức bảo hiểm bắt buộc với mục
                  đích xã hội và không vì lợi nhuận. Theo Điều 42 Luật Việc làm
                  2013, quyền lợi khi tham gia BHTN bao gồm:
                </p>
                <p>- Khoản tiền trợ cấp thất nghiệp;</p>
                <p>- Hỗ trợ học nghề;</p>
                <p>- Hỗ trợ tư vấn và giới thiệu việc làm;</p>
                <p>- Hỗ trợ giúp đào tạo, nâng cao trình độ của nghề.</p>
                <h2>
                  <strong
                    >Công cụ tính bảo hiểm thất nghiệp mới nhất 2022</strong
                  >
                </h2>
                <p>
                  Vậy
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.topcv.vn/cach-tinh-bao-hiem-that-nghiep-moi-nhat"
                    >bảo hiểm thất nghiệp tính như thế nào</a
                  >?
                </p>
                <p>
                  Tính đến thời điểm hiện tại, mức lãnh bảo hiểm thất nghiệp
                  được quy định rõ ràng tại Điều 50, Luật Việc làm năm 2013, cụ
                  thể cách tính mức hưởng bảo hiểm thất nghiệp như sau:
                </p>
                <div style="margin-left: 0pt" align="left" dir="ltr">
                  <figure class="table">
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <td>
                            <p style="text-align: justify">
                              Mức hưởng hàng tháng
                            </p>
                          </td>
                          <td><p style="text-align: justify">=</p></td>
                          <td>
                            <p style="text-align: justify">
                              Mức trung bình tiền lương đóng bảo hiểm thất
                              nghiệp hàng tháng của 06 tháng gần nhất trước khi
                              thất nghiệp
                            </p>
                          </td>
                          <td><p style="text-align: justify">* 60%</p></td>
                        </tr>
                      </tbody>
                    </table>
                  </figure>
                </div>
                <p>
                  Mức hưởng lương hàng tháng tối đa không quá 5 lần mức lương cơ
                  sở với người lao động thực hiện chế độ lương theo quy định của
                  Nhà nước, hoặc sẽ không quá 5 lần so với quy định về mức lương
                  cơ bản tối thiểu của vùng đối với người lao động thực hiện chế
                  độ lương do bên người sử dụng lao động đưa ra.
                </p>
                <p><strong>Ví dụ 1:</strong></p>
                <p>
                  <i
                    >Ông A làm nhà nước, đóng bảo hiểm thất nghiệp được 12 tháng
                    với mức lương trung bình 6 tháng cuối cùng 13 triệu
                    đồng/tháng. Công thức tính bảo hiểm thất nghiệp của ông A
                    được tính như sau:</i
                  >
                </p>
                <ul>
                  <li>
                    <i
                      >Mức hưởng trợ cấp thất nghiệp tối đa = lương cơ sở * 5 =
                      1,49 * 5 = 7,45 triệu đồng/tháng</i
                    >
                  </li>
                  <li>
                    <i
                      >Trợ cấp thất nghiệp theo công thức = 13 * 60% = 7,8 triệu
                      đồng/tháng</i
                    >
                  </li>
                </ul>
                <p>
                  <i
                    >Vì không thể vượt quá mức hưởng trợ cấp thất nghiệp tối đa
                    nên ông A được hưởng 7,45 triệu đồng/tháng trong thời hạn 3
                    tháng.</i
                  >
                </p>
                <p><strong>Ví dụ 2:</strong></p>
                <p>
                  <i
                    >Bà B đóng bảo hiểm thất nghiệp được 62 tháng khi làm việc
                    tại doanh nghiệp tư nhân ở vùng 2 với mức lương trung bình 6
                    tháng cuối cùng là 6 triệu đồng/tháng. Thời gian được hưởng
                    trợ cấp thất nghiệp của bà C được tính như sau:</i
                  >
                </p>
                <ul>
                  <li><i>36 tháng đầu tiên: hưởng 3 tháng trợ cấp</i></li>
                  <li><i>23 tháng tiếp theo: hưởng 2 tháng trợ cấp</i></li>
                  <li>
                    <i
                      >2 tháng còn lại: cộng dồn cho lần hưởng bảo hiểm thất
                      nghiệp tiếp theo</i
                    >
                  </li>
                </ul>
                <p>
                  <i
                    >Như vậy bà C được hưởng 5 tháng trợ cấp thất nghiệp với mức
                    hưởng mỗi tháng là 6 * 60% = 3,6 triệu đồng/tháng</i
                  >
                </p>
                <p><strong>Ví dụ 3:&nbsp;</strong></p>
                <p>
                  <i
                    >Ông C đóng bảo hiểm thất nghiệp được 15 tháng khi làm việc
                    tại doanh nghiệp tư nhân ở vùng 2 với mức lương trung bình 6
                    tháng cuối cùng là 35 triệu đồng/tháng. Thời gian và công
                    thức tính bảo hiểm thất nghiệp của ông C được tính như
                    sau:</i
                  >
                </p>
                <ul>
                  <li><i>15 tháng: hưởng 3 tháng trợ cấp thất nghiệp</i></li>
                  <li>
                    <i
                      >Mức hưởng trợ cấp thất nghiệp tối đa tại vùng 2 = lương
                      tối thiểu vùng * 5 = 3,92 * 5 = 19,6 triệu đồng/tháng</i
                    >
                  </li>
                  <li>
                    <i
                      >Trợ cấp thất nghiệp theo công thức = 35 * 60% = 21 triệu
                      đồng/tháng</i
                    >
                  </li>
                </ul>
                <p>
                  <i
                    >Vì không thể vượt quá mức hưởng trợ cấp thất nghiệp tối đa
                    nên ông C được hưởng 19,6 triệu đồng/tháng trong thời hạn 3
                    tháng.</i
                  >
                </p>
                <p>
                  Cách đơn giản nhất là các bạn có thể sử dụng công cụ tính bảo
                  hiểm thất nghiệp mới nhất 2021 của TopCV. Bạn chỉ cần cung cấp
                  các thông số:
                </p>
                <ul>
                  <li>
                    Bình quân tiền lương tháng đóng BHTN của 06 tháng liền kề
                    trước khi thất nghiệp
                  </li>
                  <li>
                    Tổng thời gian đóng BHTN chưa hưởng (Thời gian đóng bảo hiểm
                    thất nghiệp – Thời gian đã hưởng trợ cấp thất nghiệp)
                  </li>
                  <li>Chế độ tiền lương (doanh nghiệp hoặc nhà nước)</li>
                  <li>Vùng (đối với doanh nghiệp)</li>
                </ul>
                <p>
                  Công cụ sẽ tính toán và phân tích diễn giải từng loại chi phí
                  để bạn hiểu rõ nhất mức lương của mình.
                </p>
                <h2>
                  <strong
                    >Một số thông tin liên quan tới bảo hiểm thất nghiệp mới
                    nhất 2022 bạn cần nắm rõ</strong
                  >
                </h2>
                <h3>
                  <strong>Thời gian được hưởng bảo hiểm thất nghiệp</strong>
                </h3>
                <p>Thời gian được hưởng BHTN như sau:</p>
                <p>
                  - Đối với người đóng đủ từ 12 tháng đến 36 tháng được hưởng 3
                  tháng trợ cấp;
                </p>
                <p>
                  - Sau 36 tháng, mỗi 12 tháng tham gia đủ BHTN sẽ được hưởng
                  thêm 1 tháng trợ cấp, số tháng được hưởng trợ cấp thất nghiệp
                  không quá 12 tháng;
                </p>
                <p>
                  - Thời điểm để được hưởng trợ cấp tính từ ngày thứ 16 sau khi
                  nộp đủ hồ sơ xin hưởng trợ cấp thất nghiệp;
                </p>
                <p>- Với các khoản hỗ trợ khác sẽ được tính như sau:</p>
                <p>Hỗ trợ tư vấn và giới thiệu việc làm: Miễn phí;</p>
                <p>
                  Hỗ trợ học nghề: Thời gian hỗ trợ không quá 6 tháng, tối đa
                  được hỗ trợ 1 triệu đồng/tháng/người
                </p>
                <h3>
                  <strong>Đối tượng được nhận bảo hiểm thất nghiệp</strong>
                </h3>
                <p>
                  Các đối tượng sau đây sẽ được hưởng bảo hiểm, trợ cấp thất
                  nghiệp:
                </p>
                <p>
                  - Có hợp đồng lao động/hợp đồng làm việc được ký vô thời hạn,
                  không xác định thời hạn;
                </p>
                <p>
                  - Có hợp đồng lao động /hợp đồng làm việc được ký kết trong
                  thời gian nhất định, có thời hạn;
                </p>
                <p>
                  - Có hợp đồng lao động thời vụ hoặc đang theo làm một công
                  việc nhất định có thời gian từ 03 – dưới 13 tháng;
                </p>
                <p>
                  - Với trường hợp người lao động thực hiện, ký kết nhiều hợp
                  đồng lao động/hợp đồng làm việc thì người lao động và người sử
                  dụng sẽ được tính trợ cấp thất nghiệp theo hợp đồng lao động
                  được ký sớm nhất, có tham gia BHTN.
                </p>
                <h3><strong>Điều kiện hưởng bảo hiểm thất nghiệp</strong></h3>
                <p>
                  Đối với BHTN, điều kiện để được hưởng trợ cấp thất nghiệp sẽ
                  được quy định như sau:
                </p>
                <p>
                  * Người lao động đã chấm dứt hợp đồng lao động/hợp đồng làm
                  việc. Một số trường hợp loại trừ không được hưởng BHTN bao
                  gồm:
                </p>
                <p>
                  - NLĐ đơn phương chấm dứt hợp đồng làm việc/hợp đồng lao động
                  trái với quy định pháp luật;
                </p>
                <p>
                  - NLĐ đang được hưởng lương hưu hoặc trợ cấp mất sức lao động.
                </p>
                <p>* Đối với người lao động đã đóng đủ BHTN:</p>
                <p>
                  - NLĐ đã đóng BHTN từ 12 – 24 tháng trước ngày kết thúc hợp
                  đồng lao động có thời hạn hoặc không có thời hạn;
                </p>
                <p>
                  - NLĐ đã đóng BHTN từ 12 – 36 tháng trước khi kết thúc hợp
                  đồng lao động thời vụ hoặc 01 công việc nhất định với thời hạn
                  hợp đồng lao động/làm việc từ 3 – 12 tháng.
                </p>
                <p>
                  * NLĐ đã đăng ký thất nghiệp, nộp đầy đủ hồ sơ theo quy định
                  tại Trung tâm dịch vụ việc làm.
                </p>
                <p>
                  * NLĐ chưa tìm được việc sau 15 ngày, kể từ ngày hồ sơ được
                  nộp, trừ các trường hợp:
                </p>
                <p>- Đi học với thời hạn từ 12 tháng trở lên;</p>
                <p>
                  - Đối tượng là NLĐ phải thực hiện nghĩa vụ công an, nghĩa vụ
                  quân sự;
                </p>
                <p>
                  - Đối tượng là người đang bị tạm giam hoặc đang chấp hành hình
                  phạt tù;
                </p>
                <p>
                  - Đối tượng là người ra nước ngoài định cư, đi lao động theo
                  hợp đồng ở nước ngoài;
                </p>
                <p>
                  - Đối tượng là người lao động phải thực hiện các biện pháp đưa
                  vào cơ sở cai nghiện, trường giáo dưỡng, cơ sở giáo dục bắt
                  buộc;
                </p>
                <p>- Chết.</p>
                <h3><strong>Hồ sơ hưởng bảo hiểm thất nghiệp</strong></h3>
                <p>
                  Theo
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://luatvietnam.vn/lao-dong/nghi-dinh-28-2015-nd-cp-chinh-phu-93184-d1.html#noidung"
                    >Điều 16 Nghị định 28/2015/NĐ-CP</a
                  >, hồ sơ BHTN sẽ bao gồm các loại giấy tờ sau đây:
                </p>
                <p>* Sổ bảo hiểm xã hội</p>
                <p>
                  * Đơn đề nghị được hưởng trợ cấp TN (theo mẫu quy định của nhà
                  nước)
                </p>
                <p>
                  * Bản sao có chứng thực/bản chính một trong các giấy tờ sau:
                </p>
                <p>
                  - Hợp đồng lao động/hợp đồng làm việc đã hết hạn hoặc hoàn
                  thành công việc;
                </p>
                <p>
                  - Giấy tờ xác nhận chấm dứt hợp đồng lao động hoặc công việc
                  thời vụ (có thời hạn 03 – 12 tháng);
                </p>
                <p>- Quyết định thôi việc;</p>
                <p>- Quyết định kỷ luật buộc thôi việc;</p>
                <p>- Quyết định sa thải;</p>
                <p>
                  - Thông báo/thỏa thuận chấm dứt hợp đồng làm việc/hợp đồng lao
                  động.
                </p>
                <h3><strong>Thủ tục nhận bảo hiểm thất nghiệp</strong></h3>
                <p>
                  Thủ tục hưởng bảo hiểm thất nghiệp sẽ bao gồm 4 bước sau đây:
                </p>
                <p>
                  - Bước 1:&nbsp; Nộp hồ sơ để hưởng BHTN tại các trung tâm dịch
                  vụ việc làm trong thời gian không quá 3 tháng kể từ ngày chấm
                  dứt HĐLĐ.
                </p>
                <p>
                  - Bước 2: Trong vòng không quá 20 ngày, bạn sẽ được nhận quyết
                  định hưởng trợ cấp thất nghiệp/văn bản từ chối tại trung tâm
                  dịch vụ việc làm.
                </p>
                <p>
                  - Bước 3: Trong vòng không quá 5 ngày từ ngày nhận quyết định
                  hưởng trợ cấp, bạn cần đến cơ quan BHXH để nhận trợ cấp tháng
                  đầu tiên.
                </p>
                <p>
                  - Bước 4: Đến cơ quan, trung tâm dịch vụ việc làm để thông báo
                  tìm kiếm việc làm mới theo quy định.
                </p>
                <p>
                  Trên đây là những chia sẻ của chúng tôi về bảo hiểm thất
                  nghiệp và công cụ tính bảo hiểm thất nghiệp mới nhất 2021. Hy
                  vọng qua bài viết này bạn sẽ nắm được cách tính bảo hiểm thất
                  nghiệp, từ đó đảm bảo quyền lợi của bản thân.
                </p>
                <p
                  style="
                    padding: 5px 10px;
                    border: 1px dashed #ccc;
                    background-color: #f3f3f3;
                    color: red;
                  "
                >
                  Bản quyền nội dung thuộc về TopCV.vn, được bảo vệ bởi Luật bảo
                  vệ bản quyền tác giả
                  <a
                    target="_blank"
                    style="color: red; font-weight: bold"
                    href="//www.dmca.com/Protection/Status.aspx?ID=1b16a667-a95e-4730-846f-46f962522fce"
                    >DMCA</a
                  >. <br />
                  Vui lòng không trích dẫn nội dung trang web khi chưa được sự
                  cho phép của TopCV.
                </p>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col md="4" cols="12">
          <v-card class="mx-auto" outlined>
            <img
              src="https://static.topcv.vn/manual/dang-tin-tuyen-dung-mien-phi-tim-kiem-ung-vien-topcv.png"
              alt=""
              width="100%"
            />
          </v-card>
          <v-card class="mx-auto mt-4" outlined>
            <div class="bhtn-box">
              <h3 class="title">
                <span class="icon">
                  <i class="mdi mdi-script-text-outline"></i>
                </span>
                Bài viết liên quan
              </h3>
              <ul>
                <li><a href="#">Giấy tờ thủ tục hồ sơ xin việc</a></li>
                <li><a href="#">Tải mẫu sơ yếu lý lịch chuẩn miễn phí</a></li>
                <li><a href="#">Cách viết Email xin việc tiếng Anh</a></li>
                <li><a href="#">Các mẫu CV tham khảo theo nhóm ngành</a></li>
                <li><a href="#">Mẫu đơn xin nghỉ việc chuẩn</a></li>
                <li><a href="#">Hướng dẫn viết CV tiếng Nhật</a></li>
                <li><a href="#">Các mẫu CV tham khảo theo nhóm ngành</a></li>
              </ul>
            </div>
          </v-card>
          <v-card class="mx-auto mt-4" outlined>
            <div class="bhtn-box">
              <h3 class="title">
                <span class="icon">
                  <i class="mdi mdi-email"></i>
                </span>
                Hỗ trợ
              </h3>
              <p style="font-size: 14px">
                Bạn có chia sẻ hay cần tư vấn về cách tính
                <a href="#" class="bhtn-email">Bảo hiểm thất nghiệp?</a>
              </p>
              <p style="font-size: 14px">
                Hãy gửi email đề xuất tới
                <a href="#" class="bhtn-email">hotro@topcv.vn.</a>
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "BHTN",
  data() {
    return {
      radios: "radio-1",
      salarys: "salary-1",
      select: { state: "Vùng 1" },
      items: [
        { state: "Vùng 1" },
        { state: "Vùng 2" },
        { state: "Vùng 3" },
        { state: "Vùng 4" },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.v-application .text-overline {
  font-size: 0rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.1666666667em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: uppercase !important;
}

.v-application--is-ltr .v-text-field__suffix {
  padding-left: 4px;
  font-size: 12px;
  color: #ccc;
}

.bhtn {
  background-color: #e5e5e5;
}

.bhtn .v-text-field input {
  flex: 1 1 auto;
  line-height: 20px;
  padding: 8px 0 8px;
  max-width: 100%;
  min-width: 0px;
  width: 100%;
  font-size: 14px;
}

.bhtn .v-label {
  font-size: 14px;
  line-height: 1;
  min-height: 8px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  color: black;
}

.bhtn .v-input--selection-controls {
  margin-top: 0px;
  padding-top: 0px;
}

.bhtn .v-input--selection-controls__ripple {
  border-radius: 50%;
  cursor: pointer;
  height: 34px;
  position: initial;
  width: 34px;
  left: -12px;
  margin: 7px;
}

.bhtn .v-input--selection-controls__ripple:before {
  border-radius: inherit;
  bottom: 0;
  content: "";
  position: initial;
  opacity: 0.2;
  left: 0;
  right: 0;
  top: 0;
  transform-origin: center center;
  transform: scale(0.2);
  transition: inherit;
}

.bhtn .v-list-item__title,
.v-list-item__subtitle {
  flex: 1 1 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
}

.bhtn .header {
  text-transform: initial;
  color: #00b14f;
  font-size: 20px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.bhtn .header p {
  margin: 0 0 10px;
}

.bhtn .region {
  font-style: initial;
  color: #00b14f;
  font-weight: 300;
}

.bhtn .region:hover {
  text-decoration: underline;
}

.bhtn .nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: black;
  background-color: white;
}

.bhtn .v-icon.v-icon {
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  font-size: 19px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.bhtn .v-text-field--filled > .v-input__control > .v-input__slot,
.v-text-field--full-width > .v-input__control > .v-input__slot,
.v-text-field--outlined > .v-input__control > .v-input__slot {
  align-items: stretch;
  min-height: 0px !important;
}

.bhtn .mdi-cash::before {
  margin-top: -90%;
}

.bhtn
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot,
.v-text-field.v-text-field--enclosed .v-text-field__details {
  padding: 0 12px;
  width: 60%;
}

.bhtn .v-text-field.v-text-field--enclosed .v-text-field__details {
  padding-top: 0px;
  margin-bottom: -11px;
}

.bhtn .bhtn-month .v-text-field.v-text-field--enclosed .v-text-field__details {
  padding-top: 0px;
  margin-bottom: -11px;
}

.bhtn
  .bhtn-month
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot,
.v-text-field.v-text-field--enclosed .v-text-field__details {
  padding: 0 12px;
  width: 100%;
}

.bhtn
  .bhtn-ch
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot,
.v-text-field.v-text-field--enclosed .v-text-field__details {
  padding: 0 12px;
  width: 60%;
}

.bhtn .bhtn-ch .mdi-calendar-blank-outline::before {
  margin-top: -125%;
}

.bhtn .bhtn-ch .v-icon.v-icon {
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  font-size: 15px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.bhtn .bhtn-salary .v-icon.v-icon {
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  font-size: 15px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.bhtn .bhtn-salary .gt {
  color: #00b14f;
  font-weight: 400;
}

.bhtn .bhtn-salary .gt:hover {
  text-decoration: underline;
}

.bhtn
  .bhtn-salary
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot,
.v-text-field.v-text-field--enclosed .v-text-field__details {
  padding: 0 12px;
  width: 100%;
}

.bhtn .mdi-map-marker::before {
  margin-top: -17%;
}

.bhtn .bhtn-salary .v-select__selection--comma {
  margin: 7px 4px 7px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100px;
  font-size: 14px;
}

.bhtn
  .bhtn-salary
  .salary1
  .v-text-field
  > .v-input__control
  > .v-input__slot:before {
  border-color: inherit;
  border-style: none;
  border-width: thin 0 0 0;
}

.bhtn .bhtn-salary .salary1 .v-select > .v-input__control > .v-input__slot {
  cursor: pointer;
  background-color: #eee;
}

.bhtn .bhtn-salary .salary2 .v-select > .v-input__control > .v-input__slot {
  cursor: pointer;
  background-color: none;
  border: 1px solid #eee;
  border-radius: 5px;
}

.bhtn
  .bhtn-salary
  .salary2
  .v-text-field
  > .v-input__control
  > .v-input__slot:before,
.v-text-field > .v-input__control > .v-input__slot:after {
  bottom: -1px;
  content: "";
  left: 0;
  position: absolute;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  width: 0;
}

.bhtn .bhtn-button {
  border-top: 1px solid #eee;
  padding-top: 24px;
  margin-top: 24px;
  text-align: center;
}

.bhtn .bhtn-button .btn-bhtn-primary {
  background: #00b14f;
  border-radius: 3px;
  color: #fff;
  padding: 8px 24px;
  font-size: 14px;
}

.bhtn .bhtn-box {
  background: #fff;
  border-radius: 8px;
  box-shadow: -1px 1px 6px rgb(0 0 0 / 5%);
  margin-bottom: 16px;
  overflow: hidden;
  padding: 16px;
}

.bhtn .bhtn-box .title {
  align-items: center;
  border-bottom: 1px solid #eee;
  color: #00b14f;
  display: flex;
  font-size: 19px;
  margin: initial;
  margin-bottom: 16px;
  padding-bottom: 16px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
}

.bhtn .bhtn-box .title .icon {
  align-items: center;
  background: #e5f7ed;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  font-size: 15px;
  height: 24px;
  justify-content: center;
  margin-right: 16px;
  text-align: center;
  width: 24px;
}

.bhtn .bhtn-box li {
  list-style: none;
  margin-bottom: 16px;
}

.bhtn .bhtn-box a {
  text-decoration: none;
  color: black;
  font-weight: 400;
  font-size: 15px;
}

.bhtn .bhtn-box a:hover {
  text-decoration: underline;
}

.bhtn .bhtn-box .bhtn-email {
  text-decoration: none;
  color: #00b14f;
  font-weight: 400;
  font-size: 14px;
}

.bhtn .bhtn-box .bhtn-email:hover {
  text-decoration: none;
}

.bhtn .bhtn-box h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3em;
  margin-bottom: 24px;
}

.bhtn .bhtn-box h3 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3em;
  margin-bottom: 24px;
}

.bhtn .bhtn-box .content p {
  font-size: 14px;
}
</style>