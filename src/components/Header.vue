<template>
  <div v-resize="onResize" style="z-index: 1100 !important">
    <v-system-bar app v-if="common.headerSub && !user">
      <v-spacer></v-spacer>
      <v-btn text x-small :to="url.login">Đăng nhập</v-btn>
      <v-btn text x-small :to="url.signup">Đăng ký</v-btn>
      <v-btn text x-small>Đăng tuyển & tìm hồ sơ</v-btn>
    </v-system-bar>
    <v-app-bar
      app
      clipped-right
      flat
      height="78"
      color="white"
      style="border-bottom: 1px solid #dee2e6 !important"
    >
      <v-spacer>
        <v-row>
          <v-col sm="5" cols="8" md="3" lg="2">
            <div class="p-2">
              <router-link
                style="color: #004d40"
                class="font-weight-bold"
                to="/"
              >
                <img
                  width="90%"
                  height="40"
                  src="https://www.topcv.vn/v3/images/topcv-logo-4.png?v=1.0.1"
                />
              </router-link>
            </div>
          </v-col>
          <v-col v-if="common.menu" md="9">
            <v-menu
              style="z-index: 1200 !important"
              v-for="(menu, i) in menus"
              :key="i"
              open-on-hover
              :close-on-content-click="false"
              :nudge-width="200"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mt-1 font-weight-bold"
                  text
                  tile
                  v-bind="attrs"
                  v-on="on"
                  :to="menu.link"
                >
                  {{ menu.name }}
                </v-btn>
              </template>

              <v-card :width="menu.image != null ? '800' : '300'">
                <div class="mb-3">
                  <div class="row g-0">
                    <div :class="menu.image != null ? 'col-md-8' : 'col-md-12'">
                      <div class="card-body">
                        <v-list nav dense>
                          <v-list-item-group color="#004D40">
                            <v-list-item
                              v-for="(sub, i) in menu.list"
                              :key="i"
                              :to="sub.link"
                            >
                              <v-list-item-icon>
                                <v-icon v-text="sub.icon"></v-icon>
                              </v-list-item-icon>

                              <v-list-item-content>
                                <v-list-item-title>
                                  {{ sub.name }}
                                  <v-chip
                                    dark
                                    small
                                    color="#004D40"
                                    v-if="sub.status == 'hot'"
                                    >Hot</v-chip
                                  >
                                </v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </div>
                    </div>

                    <div class="col-md-4" v-if="menu.image != null">
                      <img
                        :src="menu.image"
                        class="mt-2 img-fluid rounded-start"
                        alt="..."
                        height="250px"
                      />
                    </div>
                  </div>
                </div>
              </v-card>
            </v-menu>
          </v-col>
        </v-row>
      </v-spacer>

      <v-responsive max-width="500">
        <div class="float-right" v-if="common.user">
          <div v-if="!user">
            <v-btn :to="url.login" depressed outlined color="#004D40">
              Đăng nhập
            </v-btn>
            <v-btn :to="url.signup" depressed dark color="#004D40" class="ml-1">
              Đăng ký
            </v-btn>
            <v-btn depressed dark color="#263238" class="ml-1">
              Đăng tuyển & tìm hồ sơ
            </v-btn>
          </div>
        </div>

        <div class="float-right" v-if="!common.user">
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </div>
        <div v-if="user" class="float-end">
          <v-btn icon>
            <v-icon color="#004D40">mdi-chat-processing</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="#004D40">mdi-bell</v-icon>
          </v-btn>
          <v-menu
            style="z-index: 1200 !important"
            open-on-hover
            :close-on-content-click="false"
            :nudge-width="100"
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">
                <v-avatar size="30">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
                <h6 class="mt-2 ml-2" v-if="common.user">
                  {{ user.fullname }}
                </h6>
              </v-btn>
            </template>

            <v-card>
              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{ user.fullname }}</v-list-item-title>
                    <v-list-item-subtitle
                      >MÃ ỨNG VIÊN: <b>#2517654</b></v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-list nav dense>
                <v-list-item-group color="#004D40">
                  <v-list-item
                    v-for="(navMenu, i) in navMenus"
                    :key="i"
                    link
                    :to="navMenu.link"
                  >
                    <v-list-item-icon>
                      <v-icon
                        :style="navMenu.style"
                        v-text="navMenu.icon"
                      ></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title
                        :style="navMenu.style"
                        v-text="navMenu.name"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item link @click="logOut">
                    <v-list-item-icon>
                      <v-icon color="#e74c3c">mdi-arrow-collapse-left</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title style="color: #e74c3c"
                        >Đăng xuất</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-menu>
        </div>
      </v-responsive>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app width="300">
      <v-sheet color="grey lighten-5" height="40" width="100%">
        <div class="p-3">
          <router-link to="/">
            <img
              width="100px"
              height="40"
              src="https://www.topcv.vn/v3/images/topcv-logo-4.png?v=1.0.1"
            />
          </router-link>
        </div>
      </v-sheet>

      <div class="p-2 mt-3">
        <div v-if="!user">
          <v-btn
            :to="url.login"
            class="w-100"
            depressed
            outlined
            color="#004D40"
          >
            Đăng nhập
          </v-btn>
          <v-btn
            :to="url.signup"
            class="w-100 mt-1"
            depressed
            dark
            color="#004D40"
          >
            Đăng ký
          </v-btn>
          <v-btn class="w-100 mt-1" depressed dark color="#263238">
            Đăng tuyển & tìm hồ sơ
          </v-btn>
        </div>
      </div>

      <v-list shaped>
        <v-list-item v-for="(menu, i) in menus" :key="i" link :to="menu.link">
          <v-list-item-content>
            <v-list-item-title>{{ menu.name }}</v-list-item-title>
            <v-list shaped class="mt-3">
              <v-list-item
                v-for="(sub, j) in menu.list"
                :key="j"
                link
                :to="sub.link"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon>{{ sub.icon }}</v-icon
                    ><span class="mt-1">{{ sub.name }}</span></v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Candidate from "../apis/candidate.api";
export default {
  name: "Header",
  async created() {
    const user = await Candidate.secret();
    this.user = user;
  },
  data() {
    return {
      user: {},
      navMenus: [
        {
          icon: "mdi-arrow-up-bold-hexagon-outline",
          name: "Nâng cấp tài khoản VIP",
          link: "/tai-khoan/nang-cap",
        },
        {
          icon: "mdi-gift-outline",
          name: "Kích hoạt quà tặng",
          link: "/qua-tang",
        },
        {
          icon: "mdi-file-eye-outline",
          name: "Nhà tuyển dụng xem hồ sơ",
          link: "/xem-ho-so",
        },
        {
          icon: "mdi-format-list-checks",
          name: "Cài đặt gợi ý việc làm",
          link: "/cai-dat-goi-y-viec-lam",
        },
        {
          icon: "mdi-gmail",
          name: "Cài đặt nhận email",
          link: "/tai-khoan/cai-dat-thong-bao",
        },
        {
          icon: "mdi-shield-check-outline",
          name: "Cài đặt bảo mật",
          link: "/tai-khoan/bao-mat",
        },
        {
          icon: "mdi-shield-key-outline",
          name: "Đổi mật khẩu",
          link: "/tai-khoan/mat-khau",
        },
      ],
      url: {
        login: "/login",
        signup: "/sign-up",
      },
      drawer: false,
      windowSize: {
        x: 0,
        y: 0,
      },
      common: {
        logo: true,
        menu: true,
        user: true,
        headerSub: false,
      },
      menus: [
        {
          name: "Việc làm",
          active: false,
          image: "https://www.topcv.vn/v4/image/nav-job.png?v=1.0.0",
          link: "/viec-lam",
          list: [
            {
              name: "Tìm việc",
              icon: "mdi-radar",
              status: null,
              link: "/viec-lam",
            },
            {
              name: "Việc làm phù hợp",
              icon: "mdi-robot",
              status: "hot",
            },
            {
              name: "Việc làm từ xa (Remote)",
              icon: "mdi-cloud",
              status: null,
              link: "/viec-lam-remote",
            },
          ],
        },
        {
          name: "Hồ sơ & CV",
          active: false,
          image: "https://www.topcv.vn/v4/image/nav-cv.png?v=1.0.0",
          list: [
            {
              name: "Mẫu CV",
              icon: "mdi-account-box-outline",
              link: "/mau-cv#first",
            },
            {
              name: "Mẫu Cover Letter",
              icon: "mdi-file-hidden",
            },
            {
              name: "Dịch vụ Tư vấn CV",
              icon: "mdi-account-box-multiple-outline",
            },
            {
              name: "TopCV Profile",
              icon: "mdi-card-account-details-star-outline",
              link: "/profile#inspire",
            },
          ],
        },
        {
          name: "Công ty",
          active: false,
          link: "/cong-ty",
          list: [
            {
              name: "Danh sách công ty",
              icon: "mdi-office-building",
              link: "/cong-ty",
            },
            {
              name: "Top công ty",
              icon: "mdi-office-building-outline",
            },
          ],
        },
        {
          name: "Phát triển sự nghiệp",
          active: false,
          image: "https://www.topcv.vn/v4/image/nav-contest.png?v=1.0.0",
          list: [
            {
              name: "TopCV Contest",
              icon: "mdi-trophy-award",
            },
            {
              name: "Trắc nghiệm tính cách MBTI",
              icon: "mdi-message-text",
              link: "/trac-nghiem-tinh-cach-mbti",
            },
            {
              name: "Trắc nghiệm MI",
              icon: "mdi-message-text",
              link: "/trac-nghiem-da-tri-thong-minh-multiple-intelligences-test",
            },
          ],
        },
        {
          name: "Công cụ",
          active: false,
          list: [
            {
              name: "Tính lương GROSS - NET",
              icon: "mdi-calculator-variant",
              link: "/tinh-luong-gross-net",
            },
            {
              name: "Tính Bảo hiểm thất nghiệp",
              icon: "mdi-calculator-variant",
              link: "/cong-cu-tinh-muc-huong-bao-hiem-that-nghiep",
            },
            {
              name: "Mobile App TopCV",
              icon: "mdi-cellphone",
              link: "/app",
            },
          ],
        },
      ],
    };
  },
  components: {},
  mounted() {
    this.onResize();
    this.pustMenuLogin();
  },
  methods: {
    async logOut() {
      let that = this;
      const candidateLogOut = await Candidate.logOut();
      if (candidateLogOut.success) {
        localStorage.setItem("token_candidate", candidateLogOut.token);
        window.location.href = '/login'
      }
    },
    pustMenuLogin() {
      let that = this;
      if (that.user) {
        that.menus[0].list.splice(1, 0, {
          name: "Việc làm đã ứng tuyển",
          icon: "mdi-briefcase-account-outline",
          status: null,
          link: "/lich-su-ung-tuyen",
        });

        that.menus[0].list.splice(2, 0, {
          name: "Việc làm đã lưu",
          icon: "mdi-heart-outline",
          status: null,
          link: "/viec-lam-da-luu",
        });

        that.menus[1].list.unshift({
          name: "Quản lý CV",
          icon: "mdi-folder-account-outline",
          status: null,
          link: "/quan-ly-cv",
        });

        that.menus[1].list.splice(1, 0, {
          name: "Quản lý Cover Letter",
          icon: "mdi-file-document-multiple-outline",
          status: null,
          link: "/quan-ly-cover-letter",
        });
      }
    },
    onResize() {
      let that = this;
      that.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (that.windowSize.x < 600) {
        that.common.menu = false;
        that.common.user = false;
        that.common.headerSub = true;
      } else if (that.windowSize.x < 960) {
        that.common.menu = false;
        that.common.user = false;
        that.common.headerSub = true;
      } else {
        that.common.menu = true;
        that.common.user = true;
        that.drawer = false;
        that.common.headerSub = false;
      }
    },
  },
};
</script>

<style></style>
