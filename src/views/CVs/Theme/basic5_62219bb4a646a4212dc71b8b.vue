<template>
  <div class="basic5">
    <v-navigation-drawer multiple app left color="#01715B" dark>
      <v-expansion-panels
        v-model="tool"
        accordion
        style="border-radius: 0px 0px 0px 0px"
      >
        <v-expansion-panel open style="border-radius: 0px 0px 0px 0px">
          <v-expansion-panel-header> Trạng thái </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-switch :label="`Tự động lưu`"></v-switch>
            <div>
              <v-checkbox :label="`Nhà tuyển dụng có thể xem`"></v-checkbox>
            </div>
            <div>
              <v-checkbox :label="`Ứng viên khác có thể xem`"></v-checkbox>
            </div>
            <div>
              <v-checkbox :label="`Tự động sửa lỗi chính tả`"></v-checkbox>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="border-radius: 0px 0px 0px 0px">
          <v-expansion-panel-header>
            Tìm kiếm từ khóa
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="border-radius: 0px 0px 0px 0px">
          <v-expansion-panel-header> Cài đặt màu sắc</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="border-radius: 0px 0px 0px 0px">
          <v-expansion-panel-header> Thiết lập Icon </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="border-radius: 0px 0px 0px 0px">
          <v-expansion-panel-header> Thay đổi mẫu CV </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="border-radius: 0px 0px 0px 0px">
          <v-expansion-panel-header>
            Chỉnh sửa chính tả
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="border-radius: 0px 0px 0px 0px">
          <v-expansion-panel-header> Quản lý tải về </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="border-radius: 0px 0px 0px 0px">
          <v-expansion-panel-header>
            Cài đặt chấm điểm CV
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="border-radius: 0px 0px 0px 0px">
          <v-expansion-panel-header> Cấu hình CV </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="border-radius: 0px 0px 0px 0px">
          <v-expansion-panel-header> Chia sẻ CV </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="border-radius: 0px 0px 0px 0px">
          <v-expansion-panel-header> CV chat </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="border-radius: 0px 0px 0px 0px">
          <v-expansion-panel-header
            >Cài đặt hướng dẫn sử dụng
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="border-radius: 0px 0px 0px 0px">
          <v-expansion-panel-header
            >Cài đặt phần mềm viết CV</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>
    <v-navigation-drawer app clipped right>
      <div
        class="alert alert-secondary"
        style="border-radius: 0px 0px 0px 0px"
        role="alert"
      >
        <h6 class="font-weight-bold">Hướng dẫn sử dụng</h6>
      </div>

      <div v-for="(tutorial, i) in tutorials" :key="i">
        <div v-if="keyTutorial === tutorial.key">
          <div style="padding: 0px 10px">{{ tutorial.title }}</div>
          <ol>
            <li
              v-for="(detail, j) in tutorial.values.details"
              :key="j"
              v-html="detail"
            ></li>
          </ol>
          <div style="padding: 0px 10px">Một số lưu ý chung:</div>
          <ul>
            <li
              v-for="(note, j) in tutorial.values.notes"
              :key="j"
              v-html="note"
            ></li>
          </ul>
          <div style="padding: 0px 10px">Nên:</div>
          <ul>
            <li v-for="(yes, j) in tutorial.values.yes" :key="j">
              {{ yes }}
            </li>
          </ul>
          <div style="padding: 0px 10px">Không nên:</div>
          <ul>
            <li v-for="(no, j) in tutorial.values.no" :key="j">
              {{ no }}
            </li>
          </ul>
          <v-divider></v-divider>
          <div style="padding: 0px 10px">
            Mọi chi tiết vui lòng liên hệ: <br />
            Email: hotro@topcv.vn
          </div>
        </div>
      </div>

      <v-divider></v-divider>
      <div class="p-2">
        <div>Testing code : sẽ xóa</div>
        <code>
          {{ formCvByUser }}
        </code>
      </div>
    </v-navigation-drawer>
    <v-app-bar
      color="white"
      style="margin-top: 78px"
      app
      clipped-right
      height="100%"
    >
      <v-spacer class="text-center">
        <v-row>
          <v-col cols="2" lg="2">
            <v-btn
              dense
              icon
              flat
              v-for="item in topTools.languages"
              :key="item.name"
            >
              <v-avatar size="35" rounded>
                <img :src="item.image" :alt="item.name" />
              </v-avatar>
            </v-btn>

            <div>Ngôn ngữ</div>
          </v-col>
          <v-col cols="2" lg="2">
            <v-btn
              class="ml-1"
              icon
              dark
              width="25"
              v-for="color in topTools.colors"
              :key="color"
            >
              <v-avatar :color="color" size="25"> </v-avatar>
            </v-btn>
            <div>Màu xu hướng</div>
          </v-col>
          <v-col cols="2" lg="2">
            <v-autocomplete
              class="mt-2 w-100"
              label="Kiểu chữ"
              placeholder="Kiểu chữ"
              color="#01715B"
              hide-details
              chips
              dense
              small-chips
              solo
            ></v-autocomplete>
            <div class="mt-1">Kiểu chữ</div>
          </v-col>
          <v-col cols="2" lg="2">
            <v-btn dense icon class="font-weight-bold">
              <v-avatar size="30">
                <span style="font-size: 12px">A</span>
              </v-avatar>
            </v-btn>
            <v-btn dense icon class="font-weight-bold">
              <v-avatar size="30">
                <span style="font-size: 14px">A</span>
              </v-avatar>
            </v-btn>
            <v-btn color="#263238" dense rounded dark class="font-weight-bold">
              <v-avatar size="30">
                <span style="font-size: 18px">A</span>
              </v-avatar>
            </v-btn>
            <div>Cỡ chữ</div>
          </v-col>
          <v-col cols="2" lg="2">
            <v-btn dense icon class="font-weight-bold">
              <v-avatar size="30">
                <v-icon size="12">mdi-arrow-up-down-bold</v-icon>
              </v-avatar>
            </v-btn>
            <v-btn dense icon class="font-weight-bold">
              <v-avatar size="30">
                <v-icon size="14">mdi-arrow-up-down-bold</v-icon>
              </v-avatar>
            </v-btn>
            <v-btn color="#263238" dense rounded dark class="font-weight-bold">
              <v-avatar size="30">
                <v-icon size="18">mdi-arrow-up-down-bold</v-icon>
              </v-avatar>
            </v-btn>
            <div>Cách dòng</div>
          </v-col>
          <v-col cols="2">
            <v-btn class="mt-2" color="#01715B" dark>Chọn ảnh nền</v-btn>
            <div class="mt-1">Ảnh nền</div>
          </v-col>
        </v-row>
      </v-spacer>
    </v-app-bar>
    <div>
      <v-container>
        <v-form>
          <div>
            <v-text-field
              @input="autoSave()"
              label="Tên CV"
              v-model="formCvByUser.name"
              class="font-weight-bold"
              color="#01715B"
              value="Grocery delivery"
              hint="Hãy cho CV của bạn một tên dễ nhớ nào 😉"
            ></v-text-field>
          </div>
          <v-card
            class="container_basic5 border"
            height="900px"
            style="
              background-image: url('https://www.topcv.vn/packages/cvo/templates/basic_5/assets/images/FFF8F5.png');
            "
          >
            <v-row class="mt-5">
              <v-col cols="6">
                <div class="text-end">
                  <div>
                    <v-chip class="block_title" text-color="white">
                      <v-avatar left>
                        <v-icon>mdi-account-arrow-right</v-icon>
                      </v-avatar>
                      aaaaa
                    </v-chip>
                    <div>
                      <div class="font-weight-bold mt-1">aaa |aaaa</div>
                      <div class="font-weight-bold mt-1">aaaa</div>
                      <p class="mt-1">aaa</p>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="6">
                <div class="float-start">
                  <div>
                    <div>
                      <v-img
                        width="170"
                        height="170"
                        class="rounded-circle"
                        src="https://www.topcv.vn/images/default-avatar.png"
                      />

                      <div class="border-cv mt-1">
                        <v-text-field
                          id="full-name"
                          color="#01715B"
                          autocomplete
                          hide-details=""
                          @input="autoSave()"
                          @mouseover="clickThemeCvs('fullName')"
                          v-model="formCvByUser.cv.fullName"
                        ></v-text-field>
                        <div v-if="openTool.isFullName" class="mt-2">
                          <div>
                            Nên sử dụng quy chuẩn <b>VIẾT HOA</b> họ và tên 🤔
                          </div>
                          <div
                            class="indigo--text darken-4--text font-weight-bold"
                          >
                            Ghi đúng họ và tên trong giấy khai sinh
                          </div>
                          <v-btn text x-small color="#01715B" outlined
                            >Viết hoa</v-btn
                          >
                          <v-btn
                            text
                            x-small
                            color="#01715B"
                            outlined
                            class="ml-1"
                            >Viết hoa mỗi ký tự đầu</v-btn
                          >
                          <v-btn
                            text
                            x-small
                            color="#01715B"
                            outlined
                            class="ml-1"
                            >Tìm kiếm lỗi</v-btn
                          >
                          <v-btn
                            text
                            x-small
                            color="#01715B"
                            outlined
                            class="ml-1"
                            >Tìm kiếm từ ngữ cấm</v-btn
                          >
                          <v-btn text x-small color="#B71C1C" outlined>
                            <v-icon size="13">mdi-star-face</v-icon>Quy chuẩn
                          </v-btn>
                        </div>
                      </div>

                      <div>
                        <div class="font-weight-bold mt-1">
                          INFORMATION
                        </div>
                        <div
                          class="mt-1"
                          v-for="(info, i) in item.infomation.values"
                          :key="i"
                        >
                          <v-icon size="17">{{ info.icon }}</v-icon>
                          &nbsp;
                          {{ info.name }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-form>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "basic5_62219bb4a646a4212dc71b8b",
  async created() {
    this.user = {
      _id: "62219bb4a646a4212dc71b8b",
      code: "#UV27121999",
      fullName: "Tấn Huỳnh",
    };
  },
  data() {
    return {
      user: null,
      tool: 0,
      topTools: {
        colors: ["#FF823C", "#529969", "#29282C", "#CF7C6E"],
        languages: [
          {
            name: "ja",
            image:
              "https://lh3.googleusercontent.com/fife/AAWUweUBaPBW6EZY3-qUXfIZ2xFVo7GgFr7fhhRBSJ-1XneZTdrYsh8pe2hyg8f2DpDTVlX4TdEA_CPHa53kpkwQ2pn9QPplo_3KDeP8ZnFf0zkosKCvJJv0MISPJItjLjjOzDZ8QrMzj3qQdIgHyr7v0ZMTwKkI0kyXEDDVWuYMkFx5bTTLoBsAsqU7HTchluNo9EYbHqNSYovlOTwGPzme76m4FJjRPJ3OHf3BnoRmwFZRhJyBB4T9vqYO_z8A4GVSqeZn03ddqP3CBBgSXC896jHzjcH3iJX3mJBmuWOK4LLV9eobftBw2eBTIzQCTUM_aspVwLfedJT6eDJHIwqf2N1xbB2dau6PrX8qO11JxgAI_E9M5GJGmxUzQxUwa7PKf8BpEZP8kQw3qvuhqSBwYvqZCpHs7f7IhAa82aEnesFeXHkqXN9rAAo7pu9UEc33B4JFHf5DlEeleqdlzQE2427HbrUqcfXw8WfWeXMUXOuwuiypINv1-3v5YJYfq3yJOUsAjEw1I8pnZefm7Reh1aYn-q-rz_aor1q9o1C9f_hxqC040-MAE6Wr7ZAHvPnFNei4bOMvU0aU4diLp8ulh7ZsRete9Q8kS5C_bBGDqQh07g8T5A4a82Jigpon-jk27NsbgUO3G4mj2wyyvOhSLcs5IiYxgwVbVTGQa4qFxASHAGyuVt9IdSGdhl-PPdL7wI1wc1wDC1W7EXc5cJz6O8zmaIz1UoiiFKo=w1257-h912",
          },
          {
            name: "vi",
            image:
              "https://lh3.googleusercontent.com/fife/AAWUweXn8JUfSkn_K6HJVu-pzDsyAZcS3yV1Omv3yHnVI2OlXQbysIpbSCDybyJ6fmuipS7r--mrtY0CdzLH37f48JUKmkGaBkkwtzI-mBzBS_4g-Shegn-eftPKZtnDKWfNAFJE8ftTDG-J7MDglWbl2QV28J-THcv-X-QHiidYa3Xlle9jDLYHaU0eJHHYLuw2ASkkayWdC-djfTpsRsoLBCtISi5FBMHxgpwYYwbxilezNfMfFMIX-INW8Xwnaj8TuWc8pWemsRCM7Uuky_r38S2JX_MGIGUsD2A6ZvqE9X0MbdTlvV_aKGKsV-vRL0fYjPMFC54vfau82mRI3coG7RrenHFdqfEJeJibbrcXtUL5hhLA9RXXUyg1bsjSfWxt0T6aymHmImRoCgQQzaPuVpMbiRdIVCq5EaFSfRAT-cLWqSMR-wHFURzdC78elhOfzpdXfVUyQctLVCyS38F9efffszYYdj2DFPmcFHivQ-EwHUm0-1o6KBSTKCKUwvft5V4544_Wa08eoC2TIcPttpnEQybFWfSBcZXWrga0dsvZR83u1vV_CBubJDChYAWslGOnuknb6ocVUeloCLTpxT9SDGaPU3sL4TI0aEtKBw0n798V9hP99oxTH05zpineOVBBYz1nO5wUX4PC7QD_afWYmjsCkX2CK1Sv_Unyty2gy6IM6bFXvUBpf-ba_FlWBEXb8EC5oqLzHjUGUVCIEEo96RpNfn4sNgc=w1257-h912",
          },
          {
            name: "cn",
            image:
              "https://lh3.googleusercontent.com/fife/AAWUweUGEkONg8oP2Q0QT4a0wXEItEFb_zgvFzgAVDaW64_pS52mBMP4E3Y3FQkEzHzuoiSq9TrWyxqBaQ25JUNCOE8VnAKjc1YEzzut5GE-zUwUDfzgzZNf4aWQk_8QxVZhYm-hhHig3wqcSqrGSudbTFrx-i2fEurzxj837tlI4EJgloxe0yUAQBYzs6fRR6wa_L5I2c6INFKdTMVuxQU6uyRdHDEqp75RM7m6bJS4NkMZO2GbtTfuF8ZFCqcl3iPaQn1kDB09zshm9CyaCB80ujqQRfrfF5l4b94JIvwndo8g44eygrHQeOw_T70DnS_Utqx2AbckQj2W_d6Cv94UuWtQDh4dtiAyqcXr-iMN-7OW-xDS-LRRpevSX3R5fcJ_gdkdsyujMiUnL6isKiXCNMMsTiDDVo5D7U2hmNJEPd9zOERUy97WnJKSEUmqYsPUv5B1PLiT8SHUSn3TcBnTYyc9AA1Y3qUe9sF8enlz0-qzo3ktMmy-O2fiZUAWcW8pmZlG8i2OJu4QJd8IxFL5F4JXXoGPCfjMtHDw72PoyFdFAiMjU4YcdYqIA3VyB2xoAIBL5W4-EsI0Dm38r1Fr25kdmZvgG9tQSMgvqerpnON7exD2ohhI3N1IhM1Iyay72Q5OjwUOfVAIoeVm8knz2Og-ZMAGMv03lU3jxJZXcOtf-aCqRM7RIzOB1QzK7tYPwWX_r-nsC8Im_DGoh7ZkrYNXwZUImzx6isw=w1876-h912",
          },
        ],
      },
      formCvByUser: {
        name: "",
        idTheme: "",
        idCandidate: "",
        lang: "",
        color: "",
        font: "",
        fontSize: "",
        spacing: "",
        srcBackground: "",
        cv: {
          fullName: "",
        },
      },
      detailsCvByUser: {
        name: "",
        idTheme: "62219bb4a646a4212dc71b8b",
        idCandidate: "62219bb4a646a4212dc71b8b",
        lang: "",
        color: "",
        font: "",
        fontSize: "",
        spacing: "",
        srcBackground: "",
        cv: {
          fullName: "",
        },
      },
      cvs: [
        {
          lang: "am",
          avatar: "https://www.topcv.vn/images/default-avatar.png",
          fullName: "Huỳnh Minh Tấn",
          infomation: {
            title: "INFORMATION",
            values: [
              {
                icon: "mdi-calendar-account",
                name: "19/05/1992",
              },
              {
                icon: "mdi-card-account-phone",
                name: "(+84) 924404019",
              },
              {
                icon: "mdi-email",
                name: "huynhminhtan4019@gmail.com",
              },
              {
                icon: "mdi-information-outline",
                name: "https://fb.com/topcv.vn",
              },
              {
                icon: "mdi-map-marker-circle",
                name: "BinhDuong, VietNam",
              },
            ],
          },
          objective: {
            title: "Objective",
            content:
              "With logical thinking skills & a creative mindset, I want to become one of the key members who bring an effective IT solution to the customers. At the same time, I want to improve my knowledge through your professional working environment.",
          },
          skills: {
            title: "Skills",
            values: [
              {
                name: "Programming",
                details: "Master PHP and Javascript",
              },
              {
                name: "Algorithm",
                details: "Master algorithm and can apply them into project",
              },
            ],
          },
          workExperience: {
            title: "Work experience",
            values: [
              {
                position: "Product Developer",
                time: "03/2015 - NOW",
                company: "TOPCV Company",
                details:
                  "- UX/ UI Direction<br />- Web development<br />- Mobile app development",
              },
            ],
          },
          education: {
            title: "Education",
            values: [
              {
                title: "Major: IT",
                time: "10/2010 - 05/2014",
                school: "TOPCV University",
                details: "Good - GPA 8.0",
              },
            ],
          },
          activities: {
            title: "Activities",
            values: [
              {
                title: "Member",
                time: "10/2013 - 08/2014",
                organization: "Developer club",
                details: "Join coding contest",
              },
            ],
          },
          certifications: {
            title: "Certifications",
            values: [
              {
                title: "TOEIC Certificate with score 800 issued by TOPCV",
                time: "2014",
              },
            ],
          },
        },
        {
          lang: "vi",
          avatar: "https://www.topcv.vn/images/default-avatar.png",
          fullName: "Huỳnh Minh Tấn",
          infomation: {
            title: "INFORMATION",
            values: [
              {
                icon: "mdi-calendar-account",
                name: "19/05/1992",
              },
              {
                icon: "mdi-card-account-phone",
                name: "(+84) 924404019",
              },
              {
                icon: "mdi-email",
                name: "huynhminhtan4019@gmail.com",
              },
              {
                icon: "mdi-information-outline",
                name: "https://fb.com/topcv.vn",
              },
              {
                icon: "mdi-map-marker-circle",
                name: "BinhDuong, VietNam",
              },
            ],
          },

          objective: {
            title: "Mục tiêu nghề nghiệp",
            content:
              "Là người có tư duy logic và khả năng sáng tạo tốt, tôi mong muốn trở thành một trong những lập trình viên chủ chốt của công ty để mang lại những giải pháp công nghệ tối ưu cho khách hàng. Đồng thời, tôi muốn được nâng cao trình độ chuyên môn và năng lực nghề nghiệp thông qua môi trường làm việc chuyên nghiệp của công ty.",
          },
          skills: {
            title: "Các kỹ năng",
            values: [
              {
                name: "Lập trình",
                details:
                  "Sử dụng thành thạo các ngôn ngữ lập trình: PHP, Javascript",
              },
              {
                name: "Giải thuật",
                details:
                  "Nắm vững kiến thức về giải thuật, có thể áp dụng vào các dự án thực tế",
              },
            ],
          },
          workExperience: {
            title: "Kinh nghiệm làm việc",
            values: [
              {
                position: "Product Developer",
                time: "03/2015 - HIỆN TẠI",
                company: "Công ty TOPCV",
                details:
                  "- UX/ UI Direction<br />- Xây dựng các ứng dụng web<br />- Xây dựng ứng dụng mobile",
              },
            ],
          },
          education: {
            title: "Học vấn",
            values: [
              {
                title: "Chuyên ngành: Công nghệ thông tin",
                time: "10/2010 - 05/2014",
                school: "Đại học TOPCV",
                details: "Tốt nghiệp loại Giỏi, điểm trung bình 8.0",
              },
            ],
          },
          activities: {
            title: "Hoạt động",
            values: [
              {
                title: "Thành viên",
                time: "10/2013 - 08/2014",
                organization: "Câu lạc bộ lập trình TOPCV",
                details:
                  "Tham gia các cuộc thi Coding Contest, xây dựng một số sản phẩm phục vụ Coding Contest",
              },
            ],
          },
          certifications: {
            title: "Chứng chỉ",
            values: [
              {
                title: "Chứng chỉ TOEIC 800 điểm do TOPCV cấp",
                time: "2014",
              },
            ],
          },
        },
      ],
      langContents: [
        {
          lang: 'vi',
          values: [
            {
              information: {
                title: 'Thông tin cá nhân'
              }
            }
          ]
        }
      ],
      query: {
        id: "62219bb4a646a4212dc71b8b",
        color: "red",
        lang: "vi",
        font: "",
      },
      keyTutorial: "",
      tutorials: [
        {
          key: "",
          values: {
            details: [
              "Điền đầy đủ các thông tin hiển thị trong CV",
              "Bấm nút Lưu CV",
              "Xem & Tải CV về máy",
            ],
            notes: [
              "Sắp xếp thời gian theo thứ tự mới -> cũ.",
              "Ưu tiên những gì quan trọng, có liên quan đến vị trí ứng tuyển lên đầu.",
              "Ngày tháng nên dùng: 01/2016, 01-2016 hoặc Jan 2016",
            ],
          },
        },
        {
          key: "fullName",
          title: "Cách sử dụng tên tốt nhất",
          values: {
            details: [
              "Họ và tên phải đầy đủ họ và tên <br /> (VD: HUỲNH MINH TẤN)",
              "Kiểm tra tên có sai chính tả hay không",
              "Bỏ dấu đúng nếu bạn là người Việt Nam",
            ],
            notes: [
              "Họ tên đầy đủ theo giấy khai sinh",
              "Họ và tên không nên để chung chung <br/> (VD: NGUYỄN VĂN A, TRẦN B VĂN)",
              "Họ và tên nên viết hoa hoàn toàn hoặc viết hoa chữ cái đầu, mặc định hệ thống bắt buộc bạn viết hoa - có thể thay đổi ở cài đặt",
              "Hệ thống sẽ tự động bắt từ ngữ nhạy cảm không nên bỏ vào tên - bạn có thể bỏ qua nếu đáy là tên trong giấy khai sinh",
            ],
            yes: [
              "Huỳnh Minh Tấn",
              "HUỲNH MINH TẤN",
              "MINH TẤN (Nếu bạn có tên đôi trong giấy khai sinh)",
            ],
            no: [
              "TÈO",
              "BÀNH VĂN A",
              "A TÈO",
              "huynh minh tan",
              "HUYNh minh tấn",
            ],
          },
        },
      ],

      openTool: {
        isFullName: false,
      },
    };
  },
  mounted() {
    this.getByIdUserThemeCv();
  },
  methods: {
    getByIdUserThemeCv() {
      let that = this;
      that.formCvByUser = JSON.parse(JSON.stringify(that.detailsCvByUser));
      that.detailsCvByUser.name == ""
        ? (that.formCvByUser.name = `${
            that.user.fullName
          } - ${that.user._id.substring(0, 4)}${that.user.code}`)
        : (that.formCvByUser.name = that.formCvByUser.name);

      that.formCvByUser.cv.fullName = that.user.fullName.toUpperCase();
    },
    autoSave() {
      let that = this;
      that.formCvByUser.cv.fullName =
        that.formCvByUser.cv.fullName.toUpperCase();
    },
    clickThemeCvs(item) {
      this.keyTutorial = item;
      this.clear();
      this.openTool.isFullName = true;
    },
    clear() {
      let that = this;
      that.openTool.isFullName = false;
    },
  },
};
</script>

<style>
.container {
  max-width: 1000px;
}

.basic5 {
  font-size: 14px;
}
.basic5 .container_basic5 {
  background-size: 100% 100%;
  border-radius: 0px 0px 0px 0px !important;
  box-shadow: 0px 0px 0px 0px !important;
}

.basic5 .block_title {
  font-size: 18px !important;
  font-weight: bold;
}

#full-name {
  font-size: 20px !important;
  font-weight: bold;
}

#information {
  font-size: 20px !important;
  font-weight: bold;
}

.border-cv {
  padding: 2px 10px;
}

.border-cv:hover {
  border: 1px dashed #01715b;
}
</style>