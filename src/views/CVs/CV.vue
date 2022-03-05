<template>
  <div v-resize="onResize">
    <v-container>
      <v-row class="mt-5">
        <v-col cols="12" sm="4" md="3">
          <v-card>
            <div class="p-2">
              <v-form class="box-search">
                <h6>Tìm mẫu CV phù hợp</h6>
                <div>
                  <v-autocomplete
                    dense
                    :items="selected.language"
                    clearable
                    placeholder="Tất cả ngôn ngữ"
                    label="Tất cả ngôn ngữ"
                    solo
                    color="#01715B"
                    sma
                  ></v-autocomplete>
                  <v-autocomplete
                    class="mt-2"
                    dense
                    :items="selected.careers"
                    clearable
                    placeholder="Tất cả nghành nghề"
                    label="Tất cả nghành nghề"
                    solo
                    color="#01715B"
                  ></v-autocomplete>
                  <v-autocomplete
                    class="mt-2"
                    dense
                    :items="selected.designs"
                    clearable
                    placeholder="Tất cả thiết kế"
                    label="Tất cả thiết kế"
                    solo
                    color="#01715B"
                  ></v-autocomplete>
                </div>

                <h6 class="mt-5">Sắp xếp</h6>
                <div>
                  <v-checkbox label="Mới cập nhật"></v-checkbox>
                  <v-checkbox label="Được dùng nhiều nhất"></v-checkbox>
                </div>
              </v-form>
            </div>
          </v-card>
          <v-card class="mt-5" v-if="common.imageRight">
            <img
              src="https://lh3.googleusercontent.com/fife/AAWUweX5jAEZpGxIdsfOELdX-2K_3W4rHZviuBTurUem1xstWuWqo8PLqjdqZAukhYfn6KI-Fuj191szPzhsvKmof93Iu761wC5TeHYeqk6cE6yGBgiMbSH3UyaurUPPLdbjv7eRM8S9_3vhq0CTI1HTZH7YoxxRwg2NDibagUD5RK7_jToCWGVIBUCBkgc3nmDIAnvhLTR3QbOrsAqwFQSCcVeJCMKmqthCBkS7UzP_NnMlm9Ve8zU1sQv7zOFMLIG2UpHfs0dacbw30DKcXbgrDpRy5n46XGYfvhjhOybDH0Ip9yNgRRLU1XBoaSHgCt3iC4Ri3op5Wlrr7kK7UEKdM1nXYWgpe51GZGgRRv-2uxDUWuxZOr8hPHGe2bMXmbv9HkzJkWIr2CEYNk8S25snJ2V9qxBKRv7cDhm_jZK2PzUAm_ZjUFk-N2uucatiG50Po7rgS4l9RHr5TgAYR6ekv5MRhF2OjE2CSO-JcCAOQvE-H4JVXGXNJDIc49sr1EwnpRf017SYQmP-t1E-PPFsyAZ-bp3cyUyu4X7N1jvvH7kkdEseqjbrlsrtJYcyBhA6y0gWoVvml6Ouqd6kEUIw26X8eJsJHlxF-pL4VheOUax1BBv2V3LDAhKW62KYvCxo2R6biDkAIPeYmD3iuvF_5k0HGhUOfB60asr1fYffR1hzJ3L13EP0Gg7KsbBb8LYTAv_pd5mrV-HCyy3x-vYiO1fNVQaSElZZzQ=w1920-h961"
              width="100%"
              height="300px"
            />
          </v-card>
        </v-col>
        <v-col cols="12" sm="8" md="9">
          <h3 class="color-main">{{ titlePage }}</h3>
          <p>{{ descriptionPage }}</p>
          <v-row v-if="loading">
            <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4">
              <v-card>
                <v-skeleton-loader
                  class="mx-auto"
                  max-width="300"
                  type="card"
                ></v-skeleton-loader>
              </v-card>
            </v-col>
          </v-row>
          <h5 v-if="themeCvs.length == 0 && !loading">
            😢Hiện tại không có mẫu CV nào!
          </h5>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
              v-for="item in themeCvs"
              :key="item._id"
            >
              <v-hover v-slot="{ hover }">
                <v-card class="w-100">
                  <v-img height="250" :src="item.image">
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="
                          d-flex
                          transition-fast-in-fast-out
                          v-card--reveal
                          text-h2
                          white--text
                        "
                      >
                        <div class="p-2">
                          <v-row>
                            <v-col cols="6" sm="12">
                              <v-btn width="100%" @click="clickReviewCv(item)"
                                ><v-icon>mdi-file-eye</v-icon>&nbsp;Xem
                                trước</v-btn
                              >
                            </v-col>
                            <v-col cols="6" sm="12">
                              <v-btn
                                width="100%"
                                :style="
                                  common.imageRight ? 'margin-top: -60px;' : ''
                                "
                                color="#01715B"
                                dark
                                ><v-icon>mdi-file-document-edit</v-icon
                                >&nbsp;Dùng mẫu này</v-btn
                              >
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="pt-6" style="position: relative">
                    <div>
                      <v-row no-gutters>
                        <v-col
                          cols="3"
                          sm="12"
                          md="6"
                          lg="6"
                          v-for="category in item.categorys"
                          :key="category"
                        >
                          <div class="p-1">
                            <v-chip
                              color="#01715B"
                              dark
                              small
                              outlined
                              width="100%"
                              label
                              >{{ category }}</v-chip
                            >
                          </div>
                        </v-col>
                        <v-col cols="12" sm="12">
                          <div class="p-1">
                            <h6>{{ item.name }}</h6>
                            <div>
                              <v-row>
                                <v-col
                                  cols="1"
                                  sm="1"
                                  v-for="color in item.colors"
                                  :key="color"
                                >
                                  <v-avatar :color="color" size="20"></v-avatar>
                                </v-col>
                              </v-row>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialogReviewCv">
      <v-card style="height: 100%; width: 100%">
        <v-alert
          border="top"
          colored-border
          type="info"
          elevation="1"
          style="border-radius: 0px 0px 0px 0px"
        >
          cvfree cung cấp cho bạn phần tạo CV bằng trí tuệ nhân tạo. Hệ thống có
          chấm điểm mức độ ứng tuyển, xu hướng sử dụng các thành phần trong cv,
          các từ ngữ tự động gợi ý phù hợp cho từng ngành nghề và còn nhiều hơn
          thế nữa
        </v-alert>
        <v-row>
          <v-col cols="10">
            <iframe width="100%" height="800" :src="ifameLink"></iframe>
          </v-col>
          <v-col cols="2">
            <div class="p-4">
              <form>
                <v-row>
                  <v-col sm="12">
                    <label class="font-weight-bold color-main"
                      >Ngôn ngữ đề xuất</label
                    >
                    <v-select
                      class="mt-1"
                      @change="changeReviewCv(review)"
                      color="#01715B"
                      v-model="formTemplateTheme.value.language"
                      :items="selected.language"
                      hide-details
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col sm="12">
                    <label class="font-weight-bold color-main"
                      >Nghành nghề ứng tuyển</label
                    >
                    <v-autocomplete
                      class="mt-1"
                      v-model="formTemplateTheme.value.category"
                      :items="selected.careers"
                      placeholder="Nghành nghề"
                      dense
                      hide-details
                      outlined
                    ></v-autocomplete>
                  </v-col>
                  <v-col sm="12">
                    <label class="font-weight-bold color-main">Font chữ</label>
                    <v-select
                      class="mt-1"
                      @change="changeReviewCv(review)"
                      color="#01715B"
                      v-model="formTemplateTheme.value.fontFamily"
                      :items="selected.fontFamily"
                      hide-details
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col sm="12">
                    <label class="font-weight-bold color-main">Màu sắc</label>
                    <v-color-picker mode="hexa" v-model="formTemplateTheme.value.color" @change="changeReviewCv(review)"></v-color-picker>
                    <v-item-group v-model="formTemplateTheme.value.color">
                      <v-item
                        v-for="color in review.colors"
                        :key="color"
                        v-slot="{ active, toggle }"
                      >
                        <v-chip
                          :color="color"
                          dark
                          style="width: 50px"
                          :input-value="active"
                          @click="toggle"
                        >
                          <v-icon v-if="active">mdi-check</v-icon>
                        </v-chip>
                      </v-item>
                    </v-item-group>
                  </v-col>
                </v-row>
              </form>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ThemeCv from "../../apis/themecv.api";
export default {
  name: "CV",
  data() {
    return {
      ifameLink: "",
      imageTheme: "",
      select: {},
      formTemplateTheme: {
        value: {
          language: "Tiếng Anh",
          category: "",
          fontFamily: "Roboto Condensed",
          color: "",
        },
      },
      review: {},
      dialogReviewCv: false,
      loading: true,
      titlePage: "Danh sách mẫu CV xin việc tiếng Anh / Việt / Nhật chuẩn 2022",
      descriptionPage:
        "Các mẫu CV đuợc thiết kế theo chuẩn, theo các ngành nghề. Phù hợp với sinh viên và người đi làm.",
      themeCvs: [],
      windowSize: {
        x: 0,
        y: 0,
      },
      common: {
        imageRight: true,
      },
      selected: {
        language: ["Tiếng Việt", "Tiếng Anh", "Tiếng Nhật"],
        careers: ["An toàn lao động", "Bán hàng kỷ thuật", "Bán lẻ/ bán sỉ"],
        designs: ["Thanh lịch"],
        fontFamily: ["Roboto Condensed", "Roboto", "Open Sans", "Mitr"],
      },
    };
  },
  async created() {
    this.themeCvs = await ThemeCv.getAllThemeCv();
    this.loading = false;
  },
  mounted() {
    this.onResize();
    // alert(process.env.VUE_APP_BACKEND_URL);
  },
  methods: {
    changeReviewCv(item) {
      const that = this;

      const lang = that.changeLanguage(that.formTemplateTheme.value.language);
      const font = that.formTemplateTheme.value.fontFamily;
      const color = that.formTemplateTheme.value.color;

      alert(color);

      that.ifameLink = `https://themecvfree.netlify.app/preview/${
        item._id
      }?id=${item._id}&color=${item.colors[0].replace(
        "#",
        "%23"
      )}&lang=${lang}&font=${font}`;
    },
    clickReviewCv(row) {
      let that = this;
      const lang = that.changeLanguage(that.formTemplateTheme.value.language);
      that.dialogReviewCv = true;
      that.review = row;
      that.ifameLink = `https://themecvfree.netlify.app/preview/${row._id}?id=${
        row._id
      }&color=${row.colors[0].replace("#", "%23")}&lang=${lang}&font=`;
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };

      if (this.windowSize.x < 600) {
        this.common.imageRight = false;
      } else if (this.windowSize.x < 960) {
        this.common.imageRight = true;
      } else {
        this.common.imageRight = true;
      }
    },
    changeLanguage(lang) {
      let langCode = "";
      switch (lang) {
        case "Tiếng Việt":
          langCode = "vi";
          break;
        case "Tiếng Anh":
          langCode = "am";
          break;
        case "Tiếng Nhật":
          langCode = "ja";
          break;
        default:
          langCode = "am";
          break;
      }
      return langCode;
    },
  },
};
</script>

<style >
.box-search .v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px !important;
}
.box-search .v-messages {
  min-height: 0px !important;
}
.box-search .v-text-field__details {
  min-height: 0px;
}

.v-card--reveal {
  align-items: center;
  justify-content: center;
  bottom: 0;
  position: absolute;
  width: 100%;
}

.v-dialog {
  overflow-y: inherit !important;
}
</style>
