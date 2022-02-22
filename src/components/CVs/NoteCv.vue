<template>
  <div class="cv">
    <div class="cv-header">CV của bạn đã đủ tốt?</div>
    <p style="font-size: 13px; color: #999">
      Bao nhiêu NTD đang quan tâm tới Hồ sơ của bạn?
    </p>
    <v-row>
      <v-col cols="12" md="4">
        <div class="cv-count">
          <div class="cv-count-number">0</div>
          <div>lượt</div>
        </div>
      </v-col>
      <v-col cols="12" md="8">
        <p class="cv-content">
          Mỗi lượt Nhà tuyển dụng xem CV mang đến một cơ hội để bạn gần hơn với
          công việc phù hợp.
        </p>
        <input type="submit" value="Khám phá ngay" class="btn-find" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "NoteCv",
};
</script>

<style>
.cv {
  text-align: center;
}

.cv .cv-header {
  font-size: 20px;
  color: #004d40;
  font-weight: 700;
}

.cv .cv-count {
  background-color: #a1a1a1;
  border-radius: 50%;
  color: #fff;
  height: 83px;
  margin: 5px auto;
  padding-top: 15px;
  text-align: center;
  vertical-align: middle;
  width: 83px;
}

.cv .cv-count-number {
  font-size: 30px;
  font-weight: 700;
  line-height: 35px;
}

.cv .cv-content {
  font-size: 14px;
  text-align: start;
}

.cv .btn-find {
  font-weight: 700;
  padding: 5px 10px;
  background-color: #004d40;
  color: white;
  border-radius: 4px;
  font-size: 12px;
}
</style>