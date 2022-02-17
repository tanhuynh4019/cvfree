<template>
  <div>
    <v-container>
      <div>
        <v-carousel height="220">
          <v-carousel-item v-for="item in banners" :key="item._id">
            <v-img :src="item.image" height="220"></v-img>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "BannerVip",
  data() {
      return {
          banners: [
              {
                  _id: 1,
                  image: 'https://static.topcv.vn/img/22.02.10%20Banner%20T1-01.png',
                  link: ''
              },
              {
                  _id: 2,
                  image: 'https://static.topcv.vn/img/Banner%20cho%20TopCV-01.png',
                  link: ''
              },
              {
                  _id: 3,
                  image: 'https://static.topcv.vn/img/TMA%20(1).png',
                  link: ''
              },
              {
                  _id: 4,
                  image: 'https://static.topcv.vn/img/22.01.28%20Banner-02.jpg',
                  link: ''
              }
          ]
      }
  }
};
</script>

<style></style>
