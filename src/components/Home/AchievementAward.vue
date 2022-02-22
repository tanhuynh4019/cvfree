<template>
  <div>
    <v-container>
      <div class="mt-5">
        <center><h3 style="color: #00b14f">Báo chí nói gì về TopCV</h3></center>
        <div class="mt-10">
          <v-row>
            <v-col
              cols="6"
              sm="3"
              md="2"
              v-for="(item, i) in the_press_writes"
              :key="i"
            >
              <a :href="item.link" target="_blank"><img :src="item.image" /></a>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="mt-10">
        <center><h3 style="color: #00b14f">Giải thưởng, thành tựu</h3></center>
        <div class="mt-10">
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="3"
              v-for="(item, i) in achievement_Award"
              :key="i"
            >
              <v-card class="mx-auto" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="item.image"
                >
                </v-img>

                <v-card-subtitle class="pb-0">
                  <v-chip class="ma-2" color="#f1fcf6" text-color="#00b14f"
                    ><v-icon size="13">mdi-circle</v-icon>&nbsp;{{ item.category }}
                  </v-chip>
                </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>{{ item.title }}</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="#00b14f" text>
                    Đọc thêm <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AchievementAward",
  data() {
    return {
      the_press_writes: [
        {
          image: "https://www.topcv.vn/v4/image/welcome/logo_bao_chi_01.png",
          link: "https://vietnambiz.vn/topcv-va-thuocsi-la-2-startup-viet-duoc-google-ho-tro-tang-toc-khoi-nghiep-20200807110033455.htm",
        },
        {
          image: "https://www.topcv.vn/v4/image/welcome/logo_bao_chi_02.png",
          link: "https://cafebiz.vn/topcv-nhan-cu-dup-giai-thuong-sao-khue-2021-202104271838343.chn",
        },
        {
          image: "https://www.topcv.vn/v4/image/welcome/logo_bao_chi_03.png",
          link: "https://baodautu.vn/goi-von-trieu-do-topcv-tap-trung-phat-trien-cong-nghe-gia-tang-hieu-qua-tuyen-dung-d147798.html",
        },
        {
          image: "https://www.topcv.vn/v4/image/welcome/logo_bao_chi_04.png",
          link: "https://genk.vn/topcv-va-no-luc-thay-doi-thi-truong-tuyen-dung-viet-nam-20170328123950793.chn",
        },
        {
          image: "https://www.topcv.vn/v4/image/welcome/logo_bao_chi_05.png",
          link: "https://kenh14.vn/tao-cv-ha-guc-nha-tuyen-dung-chi-trong-mot-buoc-20210301205913038.chn",
        },
        {
          image: "https://www.topcv.vn/v4/image/welcome/logo_bao_chi_06.png",
          link: "https://theleader.vn/chien-luoc-thu-hut-nhan-tai-thoi-ky-vang-hau-covid-19-1593484912759.htm",
        },
      ],
      achievement_Award: [
        {
          title:
            "Top 15 Startups xuất sắc của chương trình “Bình chọn Startup Việt 2018”",
          image: "https://www.topcv.vn/v4/image/welcome/award/award_01.png",
          category: "Startup",
          link: "https://startup.vnexpress.net/tin-tuc/hanh-trinh-khoi-nghiep/cong-bo-top-15-du-an-vao-vong-thuyet-trinh-startup-viet-2018-3834533-p2.html",
        },
        {
          title:
            "Top 15 Startups được Google lựa chọn tham gia Google for Startups Accelerator: Southeast Asia",
          image: "https://www.topcv.vn/v4/image/welcome/award/award_02.png",
          category: "Startup",
          link: "https://www.blog.google/around-the-globe/google-asia/support-southeast-asian-startups/",
        },
        {
          title:
            "Nhận giải thưởng Sao Khuê 2020 về lĩnh vực Nền tảng và công cụ tuyển dụng",
          image: "https://www.topcv.vn/v4/image/welcome/award/award_03.png",
          category: "Technology",
          link: "https://blog.topcv.vn/nen-tang-tuyen-dung-topcv-duoc-vinh-danh-tai-giai-thuong-sao-khue-2020/",
        },
        {
          title:
            "Nhận giải thưởng Sao Khuê 2021 với giải pháp ứng dụng AI vào tuyển dụng CV Scout TopMatch.AI",
          image: "https://www.topcv.vn/v4/image/welcome/award/award_04.png",
          category: "AI",
          link: "https://cafebiz.vn/topcv-nhan-cu-dup-giai-thuong-sao-khue-2021-202104271838343.chn",
        },
      ],
    };
  },
};
</script>

<style>
</style>