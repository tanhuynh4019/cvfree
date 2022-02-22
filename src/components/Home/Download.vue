<template>
  <div v-resize="onResize">
      <v-container class="mt-5">
          <v-row>
                <v-col cols="12" md="8" sm="8" xs="12">
                  <h2 class="font-weight-bold">Cơ hội vàng nằm gọn trong tay bạn</h2>
                  <div class="mt-5">
                        <p>
                          <v-icon color="#00b14f">mdi-check-circle</v-icon>
                          Tạo CV, Profile ngay trên điện thoại
                        </p>
                        <p>
                          <v-icon color="#00b14f">mdi-check-circle</v-icon>
                          Tìm kiếm và ứng tuyển công việc nhanh gọn, dễ dàng, mọi lúc mọi nơi
                        </p>
                        <p>
                          <v-icon color="#00b14f">mdi-check-circle</v-icon>
                          Liên lạc với nhà tuyển dụng qua TopCV Connect
                        </p>
                  </div>
                  <div class="mt-10">
                      <b>Tải ứng dụng tìm làm việc ngay</b>
                      <div class="mt-5">
                          <v-row>
                              <v-col cols="4" sm="6" md="4">
                                  <img class="w-100" src="https://www.topcv.vn/v4/image/welcome/download/app_store.png?v=1.0.0"/>
                              </v-col>
                              <v-col cols="4" sm="6" md="4">
                                  <img class="w-100" src="https://www.topcv.vn/v4/image/welcome/download/chplay.png?v=1.0.0" />
                              </v-col>
                          </v-row>
                            
                      </div>
                  </div>
              </v-col>

              <v-col cols="12" md="4" sm="4" xs="12" :class="common.mt_imgae_cls">
                  <center>
                      <img
                        :width="common.image.width"
                        :src="common.image.src" />
                  </center>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
    name: 'Download',
    data(){
        return{
            common: {
                image: {
                    src:"https://www.topcv.vn/v4/image/welcome/app-download.png",
                    width: "100%",
                },
                mt_imgae_cls: '',
            },
            windowSize: {
                x: 0,
                y: 0,
            },
        }
    },
    mounted(){
        this.onResize();
    },
    methods: {
        onResize() {
            this.windowSize = { x: window.innerWidth, y: window.innerHeight};
            if(this.windowSize.x < 600){
                this.common.image = {
                    src: ''
                };
            }
            else if(this.windowSize.x < 960){
                this.common.image = {
                    src:"https://www.topcv.vn/v4/image/welcome/app-download.png",
                    width: 200,
                };
                this.common.mt_imgae_cls ="mt-10";
            }
            else{
                this.common.image = {
                    src:"https://www.topcv.vn/v4/image/welcome/app-download.png",
                    width: "100%",
                };
            }
        }
    }
}
</script>

<style>

</style>