<template>
  <div class="background-size" v-resize="onResize">
    <v-container>
      <v-row>
        <v-col v-for="(menu, i) in menus" :key="i" cols="12" sm="3" xs="12">
          <div v-for="(items, z) in menu.menuSubTop" :key="z">
            <b>{{ items.name }}</b>
            <v-list class="menu-listItem">
              <v-list-item
                v-for="(item, j) in items.list"
                :key="j"
                v-text="item.name"
                :to="item.link"
              ></v-list-item>
            </v-list>
          </div>
        </v-col>
        <v-col v-for="(menu, i) in menus" :key="i" cols="12" sm="3" xs="12">
          <div v-for="(items, z) in menu.menuSubPatner" :key="z">
            <b>{{ items.name }}</b>
            <v-list class="menu-listItem">
              <v-list-item
                v-for="(item, j) in items.list"
                :key="j"
                v-text="item.name"
                :to="item.link"
              ></v-list-item>
            </v-list>
          </div>
        </v-col>
        <v-col v-for="(menu, i) in menus" :key="i" cols="12" sm="3" xs="12">
          <div v-for="(items, z) in menu.menuSubProfile" :key="z">
            <b>{{ items.name }}</b>
            <v-list class="menu-listItem">
              <v-list-item
                v-for="(item, j) in items.list"
                :key="j"
                v-text="item.name"
                :to="item.link"
              ></v-list-item>
            </v-list>
          </div>
        </v-col>
        <v-col v-for="(menu, i) in menus" :key="i" cols="12" sm="3" xs="12">
          <div v-for="(items, z) in menu.menuSubBuild" :key="z">
            <b>{{ items.name }}</b>
            <v-list class="menu-listItem">
              <v-list-item
                v-for="(item, j) in items.list"
                :key="j"
                v-text="item.name"
                :to="item.link"
              ></v-list-item>
            </v-list>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0,
      },
      menus: [
        {
          menuSubTop: [
            {
              name: "Về TopCV",
              list: [
                {
                  name: "Giới thiệu",
                  link: "#",
                },
                {
                  name: "Tuyển dụng",
                  link: "#",
                },
                {
                  name: "Liên hệ",
                  link: "#",
                },
                {
                  name: "Hỏi đáp",
                  link: "#",
                },
                {
                  name: "Chính sách bảo mật",
                  link: "#",
                },
                {
                  name: "Điều khoản dịch vụ",
                  link: "#",
                },
                {
                  name: "Quy chế hoạt động",
                  link: "#",
                },
              ],
            },
            {
              name: "Cộng đồng CV",
              list: [
                {
                  name: "Facebook Fanpage",
                  link: "#",
                },
                {
                  name: "Youtube Official Channel",
                  link: "#",
                },
                {
                  name: "Linkedin",
                  link: "#",
                },
                {
                  name: "Tiktok Official Channel",
                  link: "#",
                },
              ],
            },
          ],
          menuSubPatner: [
            {
              name: "Đối tác",
              list: [
                {
                  name: "TestCenter",
                  link: "#",
                },
                {
                  name: "TopHR",
                  link: "#",
                },
                {
                  name: "ViecNgay",
                  link: "#",
                },
                {
                  name: "Happy Time",
                  link: "#",
                },
                {
                  name: "Gitiho",
                  link: "#",
                },
                {
                  name: "Học IELTS Dol.vn",
                  link: "#",
                },
                {
                  name: "JAMJA",
                  link: "#",
                },
                {
                  name: "Mogi",
                  link: "#",
                },
                {
                  name: "Homedy",
                  link: "#",
                },
                {
                  name: "Printgo",
                  link: "#",
                },
              ],
            },
          ],
          menuSubProfile: [
            {
              name: "Hồ sơ CV",
              list: [
                {
                  name: "Quản lý CV của bạn",
                  link: "#",
                },
                {
                  name: "TopCV Profile",
                  link: "#",
                },
                {
                  name: "Hướng dẫn viết CV",
                  link: "#",
                },
                {
                  name: "Review CV",
                  link: "#",
                },
              ],
            },
            {
              name: "Khám phá",
              list: [
                {
                  name: "Ứng dụng di động TopCV",
                  link: "#",
                },
                {
                  name: "Tính lương Gross - Net",
                  link: "#",
                },
                {
                  name: "Tính bảo hiểm thất nghiệp",
                  link: "#",
                },
                {
                  name: "Trắc nghiệm MBTI",
                  link: "#",
                },
                {
                  name: "Trắc nghiệm MI",
                  link: "#",
                },
              ],
            },
          ],
          menuSubBuild: [
            {
              name: "Xây dựng sự nghiệp",
              list: [
                {
                  name: "Việc làm tốt nhất",
                  link: "#",
                },
                {
                  name: "Việc làm lương cao",
                  link: "#",
                },
                {
                  name: "Việc làm quản lý",
                  link: "#",
                },
                {
                  name: "Việc làm từ xa (remote)",
                  link: "#",
                },
                {
                  name: "Việc làm bán thời gian",
                  link: "#",
                },
              ],
            },
            {
              name: "Phát triển bản thân",
              list: [
                {
                  name: "TopCV Contest",
                  link: "#",
                },
              ],
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
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (this.windowSize.x < 600) {
      } else if (this.windowSize.x < 960) {
      } else {
      }
    },
  },
};
</script>

<style>
.menu-listItem .v-list-item {
  color: black;
  font-size: 14px;
  padding: 0px 0px !important;
}
.menu-listItem .v-list-item:hover {
  cursor: pointer;
  text-decoration: underline;
}

.menu-listItem .v-list-item--link:before {
  background-color: white;
}
.background-size {
  padding-bottom: 32px;
  padding-top: 32px;
}
</style>
