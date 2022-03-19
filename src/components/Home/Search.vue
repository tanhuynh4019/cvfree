<template>
  <div v-resize="onResize">
    <vueper-slides
      autoplay
      fractions
      :touchable="false"
      :fixed-height="fixedHeight"
      progress
      :slide-content-outside="'top'"
      :parallax-fixed-content="true"
    >
      <vueper-slide
        v-for="(banner, i) in bannerVips"
        :key="i"
        :image="banner.image"
      >
        <template #content>
          <v-container class="mt-10" :style="styleFormSearch">
            <v-form ref="searchForm" v-model="searchForm.valid">
              <v-card
                elevation="1"
                class="box-search"
                color="hsla(9,9%,100%,.6)"
              >
                <div class="p-3">
                  <h2 class="teal--text text--darken-4">
                    Tìm việc phù hợp với bạn
                  </h2>
                  <v-row>
                    <v-col cols="12" md="12" lg="6">
                      <v-combobox
                        @click="isSearchAdvanced"
                        v-model="searchForm.value.key"
                        :items="selected.vacancies"
                        placeholder="Tên công việc, vị trí bạn muốn ứng tuyển ..."
                        prepend-inner-icon="mdi-file-search"
                        solo
                      ></v-combobox>
                    </v-col>
                    <v-col cols="8" md="8" lg="3">
                      <v-autocomplete
                        clearable
                        color="#004D40"
                        prepend-inner-icon="mdi-map-marker"
                        :items="selected.provinces"
                        v-model="searchForm.value.city"
                        placeholder="Địa điểm"
                        label="Địa điểm"
                        solo
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="4" md="4" lg="3">
                      <v-btn
                        dark
                        depressed
                        large
                        color="#004D40"
                        width="100%"
                        @click="search"
                      >
                        Tìm kiếm ngay
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-form>
          </v-container>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import Term from "../../apis/term.api";
import Vacancies from "../../apis/vacancies.api";
export default {
  name: "Search",
  components: { VueperSlides, VueperSlide },
  async created() {
    this.selected.provinces = await Term.getAllTermStatus(2);
    this.selected.vacancies = await Vacancies.getAllVacancies();
  },
  data() {
    return {
      styleFormSearch:
        "position: absolute; top: 25%; left: 10%; z-index: 1000 !important;",
      fixedHeight: "600px",
      bannerVips: [
        {
          image:
            "https://images.vietnamworks.com/logo/Jotun_bannerpre_113734.jpg",
        },
        {
          image:
            "https://images.vietnamworks.com/logo/Generali_hrbanner_114194.jpg",
        },
        {
          image:
            "https://images.vietnamworks.com/logo/Chailease_hrbanner_115875.jpg",
        },
        {
          image: "https://images.vietnamworks.com/logo/111c_107602.jpg",
        },
        {
          image:
            "https://images.vietnamworks.com/logo/Lazada_hrbanner_115301.jpg",
        },
      ],
      parallax: 1,
      parallaxFixedContent: false,
      searchForm: {
        valid: true,
        value: {
          key: "",
          careers: "",
          companyFields: "",
          city: "",
          position: "",
          type: "",
        },
      },
      advanceSearch: false,
      companys: {
        top: [
          {
            _id: 1,
            image:
              "https://www.topcv.vn/v4/image/welcome/companies/onemoutn.png",
          },
          {
            _id: 2,
            image:
              "https://www.topcv.vn/v4/image/welcome/companies/prudential.png",
          },
          {
            _id: 3,
            image: "https://www.topcv.vn/v4/image/welcome/companies/fpt.png",
          },
          {
            _id: 4,
            image: "https://www.topcv.vn/v4/image/welcome/companies/tiki.png",
          },
          {
            _id: 5,
            image:
              "https://www.topcv.vn/v4/image/welcome/companies/viettel.png",
          },
          {
            _id: 6,
            image:
              "https://www.topcv.vn/v4/image/welcome/companies/teachcombank.png",
          },
        ],
      },
      selected: {
        careers: ["An toàn lao động", "Bán hàng kỷ thuật", "Bán lẻ/ bán sỉ"],
        companyFields: ["Bất động sản", "Cơ khí", "Cơ quan nhà nước"],
        provinces: [],
        position: ["Nhân viên", "Trưởng nhóm", "Quản lý/ Giám sát"],
        type: ["Toàn thời gian", "Bán thời gian", "Thực tập"],
        salary: ["Dưới 3 triệu", "3 - 5 triệu", "5 - 7 triệu"],
        vacancies: [],
      },
      windowSize: {
        x: 0,
        y: 0,
      },
      common: {
        imageRight: "",
      },
    };
  },
  mounted() {
    this.onResize();
  },
  methods: {
    isSearchAdvanced() {
      let that = this;
      that.advanceSearch = !that.advanceSearch;
    },
    search() {
      console.log(this.searchForm.value);
    },
    onResize() {
      let that = this;
      that.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (that.windowSize.x < 600) {
        that.common.imageRight = false;

        that.styleFormSearch =
          "position: absolute; top: 0%; left: 0%; z-index: 1000 !important;";
        that.fixedHeight = "300px";
      } else if (that.windowSize.x < 960) {
        that.common.imageRight = false;
        that.common.imageRight = false;

        that.styleFormSearch =
          "position: absolute; top: 10%; left: 0%; z-index: 1000 !important;";
        that.fixedHeight = "400px";
      } else if (that.windowSize.x < 1264) {
        that.common.imageRight = false;
        that.common.imageRight = false;

        that.styleFormSearch =
          "position: absolute; top: 10%; left: 0%; z-index: 1000 !important;";
        that.fixedHeight = "400px";
      } else {
        that.common.imageRight = true;
        that.common.imageRight = false;

        that.styleFormSearch =
          "position: absolute; top: 25%; left: 10%; z-index: 1000 !important;";
        that.fixedHeight = "600px";
      }
    },
  },
};
</script>

<style>
.box-search .v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px !important;
}
.box-search .v-messages {
  min-height: 0px !important;
}
.box-search .v-text-field__details {
  min-height: 0px;
}
.vueperslides__progress {
  background: rgba(0, 0, 0, 0.25);
  color: #004d40;
}
</style>
