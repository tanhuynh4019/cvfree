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
                    color="#004D40"
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
                  ></v-autocomplete>
                  <v-autocomplete
                    class="mt-2"
                    dense
                    :items="selected.designs"
                    clearable
                    placeholder="Tất cả thiết kế"
                    label="Tất cả thiết kế"
                    solo
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
              src="https://www.topcv.vn/images/cv/banner_left_list_cv.png"
              width="100%"
              height="300px"
            />
          </v-card>
        </v-col>
        <v-col cols="12" sm="8" md="9">
          <h3>Danh sách mẫu CV xin việc tiếng Anh / Việt / Nhật chuẩn 2022</h3>
          <p>
            Các mẫu CV đuợc thiết kế theo chuẩn, theo các ngành nghề. Phù hợp
            với sinh viên và người đi làm.
          </p>
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="n in 10" :key="n">
              <v-hover v-slot="{ hover }">
                <v-card class="w-100">
                  <v-img
                    height="250"
                    src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/chrome.png?v=1.0.3"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal text-h2 white--text"
                        style="height: 100%"
                      >
                        <div class="p-2">
                          <v-row>
                            <v-col cols="6" sm="12">
                              <v-btn width="100%">Xem trước</v-btn>
                            </v-col>
                            <v-col cols="6" sm="12">
                              <v-btn width="100%" :style="common.imageRight ? 'margin-top: -60px;' : ''" color="#004D40" dark
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
                        <v-col cols="3" sm="6" md="6" lg="4">
                          <div class="p-1">
                            <v-chip
                              color="#004D40"
                              dark
                              small
                              outlined
                              class="w-100"
                              label
                              >Màu sắc</v-chip
                            >
                          </div>
                        </v-col>
                        <v-col cols="3" sm="6" md="6" lg="4">
                          <div class="p-1">
                            <v-chip
                              color="#004D40"
                              dark
                              small
                              outlined
                              class="w-100"
                              label
                              >Sáng tạo</v-chip
                            >
                          </div>
                        </v-col>
                        <v-col cols="12" sm="12">
                          <div class="p-1">
                            <h6>Mẫu CV Chrome</h6>
                            <div>
                              <v-row>
                                <v-col cols="1" sm="1">
                                  <v-avatar
                                    color="primary"
                                    size="20"
                                  ></v-avatar>
                                </v-col>
                                <v-col cols="1" sm="1">
                                  <v-avatar color="red" size="20"></v-avatar>
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
  </div>
</template>

<script>
export default {
  name: "CV",
  data() {
    return {
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
      },
    };
  },
  mounted() {
    this.onResize();
  },
  methods: {
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

.v-card--reveal {
  align-items: center;
  justify-content: center;
  bottom: 0;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
</style>
