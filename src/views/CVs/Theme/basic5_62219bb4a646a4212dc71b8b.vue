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
              <v-checkbox
                :label="`Nhà tuyển dụng có thể xem`"
              ></v-checkbox>
            </div>
            <div>
              <v-checkbox
                :label="`Ứng viên khác có thể xem`"
              ></v-checkbox>
            </div>
            <div>
              <v-checkbox
                :label="`Tự động sửa lỗi chính tả`"
              ></v-checkbox>
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
          <v-expansion-panel-header>Cài đặt hướng dẫn sử dụng </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="border-radius: 0px 0px 0px 0px">
          <v-expansion-panel-header>Cài đặt phần mềm viết CV</v-expansion-panel-header>
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
      <v-container v-for="(item, i) in cvs" :key="i">
        <v-card
          v-if="item.lang == query.lang"
          class="container_basic5 border"
          height="900px"
          style="
            background-image: url('https://www.topcv.vn/packages/cvo/templates/basic_5/assets/images/FFF8F5.png');
          "
        >
          <v-row class="mt-5">
            <v-col sm="6">
              <div class="text-end p-3">
                <div>
                  <v-chip
                    class="block_title"
                    :color="query.color"
                    text-color="white"
                  >
                    <v-avatar left>
                      <v-icon>mdi-account-arrow-right</v-icon>
                    </v-avatar>
                    {{ item.workExperience.title }}
                  </v-chip>
                  <div v-for="(we, i) in item.workExperience.values" :key="i">
                    <div class="font-weight-bold mt-1">
                      {{ we.position }} | {{ we.time }}
                    </div>
                    <div class="font-weight-bold mt-1">{{ we.company }}</div>
                    <p class="mt-1 text-end" v-html="we.details"></p>
                  </div>
                </div>

                <div>
                  <v-chip
                    class="block_title"
                    :color="query.color"
                    text-color="white"
                  >
                    <v-avatar left>
                      <v-icon>mdi-account-arrow-right</v-icon>
                    </v-avatar>
                    {{ item.education.title }}
                  </v-chip>
                  <div v-for="(e, i) in item.education.values" :key="i">
                    <div class="font-weight-bold mt-1">
                      {{ e.title }} | {{ e.time }}
                    </div>
                    <div class="font-weight-bold mt-1">{{ e.school }}</div>
                    <p class="mt-1 text-end" v-html="e.details"></p>
                  </div>
                </div>

                <div>
                  <v-chip
                    class="block_title"
                    :color="query.color"
                    text-color="white"
                  >
                    <v-avatar left>
                      <v-icon>mdi-account-arrow-right</v-icon>
                    </v-avatar>
                    {{ item.activities.title }}
                  </v-chip>
                  <div v-for="(a, i) in item.activities.values" :key="i">
                    <div class="font-weight-bold mt-1">
                      {{ a.title }} | {{ a.time }}
                    </div>
                    <div class="font-weight-bold mt-1">
                      {{ a.organization }}
                    </div>
                    <p class="mt-1 text-end" v-html="a.details"></p>
                  </div>
                </div>

                <div>
                  <v-chip
                    class="block_title"
                    :color="query.color"
                    text-color="white"
                  >
                    <v-avatar left>
                      <v-icon>mdi-account-arrow-right</v-icon>
                    </v-avatar>
                    {{ item.certifications.title }}
                  </v-chip>
                  <div v-for="(ce, i) in item.certifications.values" :key="i">
                    <div class="font-weight-bold mt-1">
                      {{ ce.time }}
                    </div>
                    <div class="mt-1">{{ ce.title }}</div>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col sm="6">
              <div class="float-start p-3">
                <div>
                  <div>
                    <v-img
                      width="170"
                      height="170"
                      class="rounded-circle"
                      :src="item.avatar"
                    />
                    <h4 class="mt-5">{{ item.fullName }}</h4>
                  </div>

                  <div>
                    <div class="font-weight-bold mt-1">
                      {{ item.infomation.title }}
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

                  <div class="mt-10">
                    <v-chip
                      class="block_title"
                      :color="query.color"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon>mdi-account-arrow-right</v-icon>
                      </v-avatar>
                      {{ item.objective.title }}
                    </v-chip>
                    <div>
                      <div class="mt-1">{{ item.objective.content }}</div>
                    </div>
                  </div>

                  <div class="mt-5">
                    <v-chip
                      class="block_title"
                      :color="query.color"
                      text-color="white"
                    >
                      <v-avatar left>
                        <v-icon>mdi-account-arrow-right</v-icon>
                      </v-avatar>
                      {{ item.skills.title }}
                    </v-chip>
                    <div v-for="(sk, i) in item.skills.values" :key="i">
                      <div class="font-weight-bold mt-1">
                        {{ sk.name }}
                      </div>
                      <div class="mt-1">{{ sk.details }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "basic5_62219bb4a646a4212dc71b8b",
  data() {
    return {
      tool: 0,
      topTools: {
        colors: ["#FF823C", "#529969", "#29282C", "#CF7C6E"],
        languages: [
          {
            name: "ja",
            image: "https://cdn-icons-png.flaticon.com/512/555/555646.png",
          },
          {
            name: "vi",
            image:
              "https://cdn-icons.flaticon.com/png/128/5373/premium/5373330.png?token=exp=1646497435~hmac=ea49af10aac3b7077657c72212bfe6a3",
          },
          {
            name: "cn",
            image:
              "https://cdn-icons.flaticon.com/png/128/5111/premium/5111624.png?token=exp=1646497920~hmac=096f2d52aff57b9b26e266cbb55d0cd5",
          },
        ],
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
      query: {
        id: "62219bb4a646a4212dc71b8b",
        color: "red",
        lang: "vi",
        font: "",
      },
    };
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
  margin-top: -35px;
}

.basic5 .block_title {
  font-size: 18px !important;
  font-weight: bold;
}
</style>