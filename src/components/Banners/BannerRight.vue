<template>
  <div>
    <v-carousel :show-arrows="false"
        height="600">
      <v-carousel-item
        v-for="item in banners"
        :key="item._id"
        :src="item.image"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "BannerRight",
  data() {
    return {
      banners: [
        {
          _id: 1,
          image:
            "https://static.topcv.vn/img/TopCV%20tuy%E1%BB%83n%20d%E1%BB%A5ng%20-%20Right.jpg",
          link: "/",
        },
        {
          _id: 2,
          image:
            "https://static.topcv.vn/img/22.01.07%20Banner%20Web-05%20(1).png",
          link: "/",
        },
        {
          _id: 3,
          image: "https://static.topcv.vn/img/unnamed.jpeg",
          link: "/",
        },
      ],
    };
  },
};
</script>

<style></style>
