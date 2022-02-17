<template>
  <div class="banner-center">
    <v-container>
      <div>
        <v-carousel hide-delimiters height="192">
          <v-carousel-item v-for="n in 3" :key="n">
            <v-row>
                <v-col sm="4" v-for="banner in banners" :key="banner._id">
                    <v-img :src="banner.image" height="192"></v-img>
                </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
    name: 'BannerCenter',
    data() { return{
        banners: [
            {
                _id: 1,
                image: 'https://static.topcv.vn/img/banner900x500%20(1)%20Rikkeisoft.png',
                link: ''
            },
            {
                _id: 2,
                image: 'https://static.topcv.vn/img/22.01.04%20Banner%20Web1-03.png',
                link: ''
            },
            {
                _id: 3,
                image: 'https://static.topcv.vn/img/Untitled.png',
                link: ''
            }
        ]
    }}
};
</script>

<style></style>
