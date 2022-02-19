<template>
  <div v-resize="onResize">
    <v-system-bar app v-if="common.headerSub">
      <v-spacer></v-spacer>
      <v-btn text x-small :to="url.login">Đăng nhập</v-btn>
      <v-btn text x-small :to="url.signup">Đăng ký</v-btn>
      <v-btn text x-small>Đăng tuyển & tìm hồ sơ</v-btn>
    </v-system-bar>
    <v-app-bar app clipped-right flat height="78">
      <v-spacer>
        <v-row>
          <v-col sm="5" cols="8" md="3" lg="2">
            <div class="p-2">
              <v-btn text to="/">
                <img
                  width="100%"
                  height="40"
                  src="https://www.topcv.vn/v3/images/topcv-logo-4.png?v=1.0.1"
                />
              </v-btn>
            </div>
          </v-col>
          <v-col v-if="common.menu" md="9">
            <v-menu
              v-for="(menu, i) in menus"
              :key="i"
              open-on-hover
              :close-on-content-click="false"
              :nudge-width="200"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mt-1"
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
                      <v-img
                        :src="menu.image"
                        class="mt-2 img-fluid rounded-start"
                        alt="..."
                        height="200px"
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
          <v-btn :to="url.login" depressed outlined color="#004D40"> Đăng nhập </v-btn>
          <v-btn :to="url.signup" depressed dark color="#004D40" class="ml-1"> Đăng ký </v-btn>
          <v-btn depressed dark color="#263238" class="ml-1">
            Đăng tuyển & tìm hồ sơ
          </v-btn>
        </div>
        <div class="float-right" v-if="!common.user">
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </div>
      </v-responsive>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app width="300">
      <v-sheet color="grey lighten-5" height="40" width="100%">
        <div class="p-3">
          <a>
            <img
              width="100px"
              height="40"
              src="https://www.topcv.vn/v3/images/topcv-logo-4.png?v=1.0.1"
            />
          </a>
        </div>
      </v-sheet>

      
      <div class="p-2 mt-3">
        <v-btn :to="url.login" class="w-100" depressed outlined color="#004D40">
          Đăng nhập
        </v-btn>
        <v-btn :to="url.signup" class="w-100 mt-1" depressed dark color="#004D40">
          Đăng ký
        </v-btn>
        <v-btn class="w-100 mt-1" depressed dark color="#263238">
          Đăng tuyển & tìm hồ sơ
        </v-btn>
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
                  <v-icon>{{sub.icon}}</v-icon><span class="mt-1">{{ sub.name }}</span></v-list-item-title>
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
export default {
  name: "Header",
  data() {
    return {
      url: {
        login: '/login',
        signup: '/sign-up'
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
              link: "/mau-cv",
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
              link: '/tinh-luong-gross-net'
            },
            {
              name: "Tính Bảo hiểm thất nghiệp",
              icon: "mdi-calculator-variant",
              link: "/cong-cu-tinh-muc-huong-bao-hiem-that-nghiep",
            },
            {
              name: "Mobile App TopCV",
              icon: "mdi-cellphone",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.onResize();
  },
  methods: {
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
