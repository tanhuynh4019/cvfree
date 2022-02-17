<template>
  <div class="background-color-gray">
    <v-container>
      <div class="keyitem">
        <a v-for="item in listItems" :key="item._id" :href="item.link">
          {{ item.name }}
        </a>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "KeywordSeo",
  data() {
    return {
      listItems: [
        {
          _id: 1,
          name: "cv là gì",
          link: "#",
        },
        {
          _id: 2,
          name: "Mẫu CV",
          link: "#",
        },
        {
          _id: 3,
          name: "mẫu cv tiếng việt",
          link: "#",
        },
        {
          _id: 4,
          name: "Sơ yếu lý lịch",
          link: "#",
        },
        {
          _id: 5,
          name: "CV tham khảo",
          link: "#",
        },
        {
          _id: 6,
          name: "tổng hợp CV tham khảo cho lập trình viên",
          link: "#",
        },
        {
          _id: 7,
          name: "Email xin việc bằng tiếng anh",
          link: "#",
        },
        {
          _id: 8,
          name: "Mẫu đơn xin việc",
          link: "#",
        },
        {
          _id: 9,
          name: "mẫu đơn xin nghỉ việc",
          link: "#",
        },
        {
          _id: 10,
          name: "Cách viết đơn xin nghỉ phép",
          link: "#",
        },
        {
          _id: 11,
          name: "Cách viết CV xin việc",
          link: "#",
        },
        {
          _id: 12,
          name: "cách viết CV Ngành Kinh doanh/Bán hàng",
          link: "#",
        },
        {
          _id: 13,
          name: "cách viết CV Ngành Kế Toán/Kiểm Toán",
          link: "#",
        },
        {
          _id: 14,
          name: "cách viết CV Tiếng Trung",
          link: "#",
        },
        {
          _id: 15,
          name: "cách viết CV Tiếng Hàn",
          link: "#",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.container .keyitem a {
  text-decoration: none;
  color: black !important;
  font-size: 12px;
  margin-right: 8px;
}
.container .keyitem a:hover {
  text-decoration: underline;
  color: black;
  cursor: pointer;
}
.background-color-gray {
  background-color: #fafafafa;
  padding-bottom: 32px;
  padding-top: 32px;
}
</style>
