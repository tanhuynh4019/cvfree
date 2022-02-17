<template>
  <div class="mt-4">
    <h3>Các công ty tuyển dụng hàng đầu trên TopCV</h3>
    <v-row class="mt-2">
      <v-col
        cols="6"
        sm="3"
        md="3"
        lg="2"
        v-for="item in companies"
        :key="item._id"
      >
        <center>
          <v-card link :to="item.link">
            <div class="p-2">
              <v-img width="80%" height="100" :src="item.image"></v-img>
            </div>
          </v-card>
        </center>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companies: [
        {
          _id: 1,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 2,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 3,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 4,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 5,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 6,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 7,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 8,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 9,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 10,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 11,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 12,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 13,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 14,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 15,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 16,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 17,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 18,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 19,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
        {
          _id: 20,
          image:
            "https://static.topcv.vn/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          link: "",
        },
      ],
    };
  },
};
</script>

<style></style>
