<template>
  <div>
      <b>Từ khoá tìm việc làm phổ biến tại TopCV</b>
    <v-row class="mt-5">
      <v-col cols="12" sm="6" md="4">
        <div style="background: #f2fbf6 0 0 no-repeat padding-box">
          <v-card outlined class="p-2" style="background: #f2fbf6 0 0 no-repeat padding-box"><b>Tìm việc làm theo ngành nghề</b> </v-card>
          <v-card
            v-scroll.self="onScroll"
            class="overflow-y-auto"
            max-height="300"
          >
            <v-card style="background: #f2fbf6 0 0 no-repeat padding-box" v-for="(item, i) in workforCareer" :key="i" tile outlined>
              <a class="p-2" style="text-decoration: none; color: black">{{ item.title }}</a>
            </v-card>
          </v-card>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <div>
          <v-card style="background: #f2fbf6 0 0 no-repeat padding-box" outlined class="p-2"><b>Tìm việc làm tại nhà</b> </v-card>
          <v-card
            v-scroll.self="onScroll"
            class="overflow-y-auto"
            max-height="300"
          >
            <v-card style="background: #f2fbf6 0 0 no-repeat padding-box" v-for="(item, i) in workFromHome" :key="i" tile outlined>
              <a class="p-2" style="text-decoration: none; color: black">{{ item.title }}</a>
            </v-card>
          </v-card>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <div>
          <v-card style="background: #f2fbf6 0 0 no-repeat padding-box" outlined class="p-2"><b>Việc làm phổ biến</b> </v-card>
          <v-card
            v-scroll.self="onScroll"
            class="overflow-y-auto"
            max-height="300"
          >
            <v-card style="background: #f2fbf6 0 0 no-repeat padding-box" v-for="(item, i) in popularWork" :key="i" tile outlined>
              <a class="p-2" style="text-decoration: none; color: black">{{ item.title }}</a>
            </v-card>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      workforCareer: [
        {
          title: "Việc làm An toàn lao động",
          link: "",
        },
        {
          title: "Việc làm Bán hàng kỹ thuật",
          link: "",
        },
        {
          title: "Việc làm Bán lẻ/ bán sỉ",
          link: "",
        },
        {
          title: "Việc làm Báo chí / Rruyền hình",
          link: "",
        },
        {
          title: "Việc làm Bảo hiểm",
          link: "",
        },
        {
          title: "Việc làm Bảo trì / Sửa chữa",
          link: "",
        },
        {
          title: "Việc làm Bất động sản",
          link: "",
        },
        {
          title: "Việc làm Bưu chính viễn thông",
          link: "",
        },
        {
          title: "Việc làm An toàn lao động",
          link: "",
        },
        {
          title: "Việc làm Bán hàng kỹ thuật",
          link: "",
        },
        {
          title: "Việc làm Bán lẻ/ bán sỉ",
          link: "",
        },
        {
          title: "Việc làm Báo chí / Rruyền hình",
          link: "",
        },
        {
          title: "Việc làm Bảo hiểm",
          link: "",
        },
        {
          title: "Việc làm Bảo trì / Sửa chữa",
          link: "",
        },
        {
          title: "Việc làm Bất động sản",
          link: "",
        },
        {
          title: "Việc làm Bưu chính viễn thông",
          link: "",
        },
      ],
      workFromHome: [
        {
          title: "Hà Nội",
          link: "",
        },
        {
          title: "TP Hồ Chí Minh",
          link: "",
        },
        {
          title: "Đà Nẵng",
          link: "",
        },
        {
          title: "Bình Dương",
          link: "",
        },
        {
          title: "Đồng Nai",
          link: "",
        },
        {
          title: "Tây Ninh",
          link: "",
        },
        {
          title: "Sóc Trăng",
          link: "",
        },
        {
          title: "Bình Thuận",
          link: "",
        },
        {
          title: "Quảng Ninh",
          link: "",
        },
        {
          title: "Quảng Nam",
          link: "",
        },
        {
          title: "Hà Nội",
          link: "",
        },
        {
          title: "TP Hồ Chí Minh",
          link: "",
        },
        {
          title: "Đà Nẵng",
          link: "",
        },
        {
          title: "Bình Dương",
          link: "",
        },
        {
          title: "Đồng Nai",
          link: "",
        },
        {
          title: "Tây Ninh",
          link: "",
        },
        {
          title: "Sóc Trăng",
          link: "",
        },
        {
          title: "Bình Thuận",
          link: "",
        },
        {
          title: "Quảng Ninh",
          link: "",
        },
        {
          title: "Quảng Nam",
          link: "",
        },
      ],
      popularWork: [
        {
          title: "Tìm việc làm Thực tập sinh",
          link: "",
        },
        {
          title: "Tìm việc làm Trợ giảng",
          link: "",
        },
        {
          title: "Tìm việc làm Giáo viên",
          link: "",
        },
        {
          title: "Tìm việc làm Thư ký",
          link: "",
        },
        {
          title: "Tìm việc làm Nhân viên kỹ thuật",
          link: "",
        },
        {
          title: "Tìm việc làm IT Helpdesk",
          link: "",
        },
        {
          title: "Tìm việc làm Lập trình viên PHP",
          link: "",
        },
        {
          title: "Tìm việc làm Lập trình viên Javascript",
          link: "",
        },
        {
          title: "Tìm việc làm Lập trình viên ReactJS",
          link: "",
        },
        {
          title: "Tìm việc làm Lập trình viên VueJS",
          link: "",
        },
        {
          title: "Tìm việc làm Lập trình viên AngularJS",
          link: "",
        },
        {
          title: "Tìm việc làm Lập trình viên NodeJS",
          link: "",
        },
        {
          title: "Tìm việc làm Lập trình viên Java",
          link: "",
        },
        {
          title: "Tìm việc làm Lập trình viên .NET",
          link: "",
        },
        {
          title: "Tìm việc làm Lập trình Front-End",
          link: "",
        },
      ],
    };
  },
};
</script>

<style>
.v-card .a:hover{
    color: #2db14f
}
</style>