<template>
  <div
    style="
      background: transparent linear-gradient(288deg, #deffe2, #efffef) 0 0
        no-repeat padding-box;
    "
  >
    <v-container>
      <center class="mt-10">
        <h3 style="color: #00b14f">Về chúng tôi</h3>
        <div class="mt-5">
          <p>
            {{aboutUs}}
          </p>
        </div>
      </center>
      <v-card class="mt-5 rounded-xl mb-5" color="white">
        <div class="p-5">
          <v-row>
            <v-col
              cols="12"
              sm="4"
              md="3"
              v-for="(item, i) in statistical"
              :key="i"
            >
              <h4 style="color: #3d6089">{{ item.Amount }}</h4>
              <p>{{ item.Descibe }}</p>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      statistical: [
        {
          Amount: "30.000+",
          Descibe: "Ứng viên đang bật tìm việc trung bình/thời điểm",
        },
        {
          Amount: "60.000+",
          Descibe: "Doanh nghiệp sử dụng dịch vụ",
        },
        {
          Amount: "90.000+",
          Descibe: "Nhà tuyển dụng sử dụng thường xuyên",
        },
        {
          Amount: "120.000+",
          Descibe: "Ứng viên mới mỗi tháng",
        },
        {
          Amount: "3.000.000+",
          Descibe: "Lượt ứng viên truy cập hàng tháng",
        },
        {
          Amount: "4.000.000+",
          Descibe: "Ứng viên tiềm năng",
        },
        {
          Amount: "60%",
          Descibe: "Ứng viên có trên 2 năm kinh nghiệm",
        },
      ],
      aboutUs: "TopCV là công ty công nghệ nhân sự (HR Tech) hàng đầu Việt Nam. Với năng lực lõi là công nghệ, đặc biệt là trí tuệ nhân tạo (AI), sứ mệnh của TopCV đặt ra cho mình là thay đổi thị trường tuyển dụng - nhân sự ngày một hiệu quả hơn. Bằng công nghệ, chúng tôi tạo ra nền tảng cho phép người lao động tạo CV, phát triển được các kỹ năng cá nhân, xây dựng hình ảnh chuyên nghiệp trong mắt nhà tuyển dụng và tiếp cận với các cơ hội việc làm phù hợp."
    };
  },
};
</script>

<style>
</style>