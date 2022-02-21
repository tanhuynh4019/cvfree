<template>
  <div>
      <v-container class="mt-5">
          <v-row>
                <v-col md="6" sm="12" cols="12">
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
                            <img src="https://www.topcv.vn/v4/image/welcome/download/app_store.png?v=1.0.0"/>
                            <img src="https://www.topcv.vn/v4/image/welcome/download/chplay.png?v=1.0.0" />
                      </div>
                  </div>
              </v-col>

              <v-col md="6" class="p-0">
                  <center>
                      <img src="https://www.topcv.vn/v4/image/welcome/app-download.png" />
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

        }
    },
    mounted(){
        this.onResize();
    },
    methods: {
        onResize() {

        }
    }
}
</script>

<style>

</style>