<template>
  <div v-resize="onResize">
    <v-system-bar app v-if="common.headerSub">
      <v-spacer></v-spacer>
      <v-btn text x-small>Đăng nhập</v-btn>
      <v-btn text x-small>Đăng ký</v-btn>
      <v-btn text x-small>Đăng tuyển & tìm hồ sơ</v-btn>
    </v-system-bar>
    <v-app-bar app clipped-right flat height="78">
      <v-spacer>
        <v-row>
          <v-col sm="5" cols="8" md="3" lg="2">
            <div class="p-2">
              <img
                width="100%"
                height="40"
                src="https://www.topcv.vn/v3/images/topcv-logo-4.png?v=1.0.1"
              />
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
                <v-btn class="mt-1" text tile v-bind="attrs" v-on="on">
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
                            <v-list-item v-for="(sub, i) in menu.list" :key="i">
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
          <v-btn depressed outlined color="#004D40"> Đăng nhập </v-btn>
          <v-btn depressed dark color="#004D40" class="ml-1"> Đăng ký </v-btn>
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
      <v-sheet color="grey lighten-5" height="128" width="100%"></v-sheet>

      <v-list class="pl-14" shaped>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-content>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
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
      drawer: false,
      windowSize: {
        x: 0,
        y: 0,
      },
      common: {
        logo: true,
        menu: true,
        user: true,
        headerSub: false
      },
      menus: [
        {
          name: "Việc làm",
          active: false,
          image: "https://www.topcv.vn/v4/image/nav-job.png?v=1.0.0",
          list: [
            {
              name: "Tìm việc",
              icon: "mdi-radar",
              status: null,
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
          list: [
            {
              name: "Danh sách công ty",
              icon: "mdi-office-building",
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
            },
            {
              name: "Tính Bảo hiểm thất nghiệp",
              icon: "mdi-calculator-variant",
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

<style >
.v-btn {
  text-transform: none;
}
</style>
