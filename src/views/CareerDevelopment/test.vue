<template>
  <v-container>
    <div class="panel panel-default">
      <div class="panel-heading" style="padding: 0px">
        <div
          class="mi-intel"
          data-toggle="collapse"
          data-parent="#accordion"
          data-target="#mi-test-desc-1"
          style="
            background-image: url('https://www.topcv.vn/v3/images/mi-test/intel/mi-01.png');
          "
        >
          <div class="col-md-12">
            <div class="intel-name">Trí thông minh Logic</div>
            <div class="e-intel-name">Logic</div>
          </div>
        </div>
      </div>
      <div id="mi-test-desc-1" class="panel-collapse collapse">
        Có khả năng lý luận với các khái niệm liên quan đến các mối quan hệ toán
        học để đi đến kết luận chính xác, có thể được nhận ra thông qua tốc độ,
        từ vựng, cú pháp, không gian, và sự phức tạp của tính toán số trong các
        nhiệm vụ. Có thể nhanh chóng tính toán số học đơn giản, như cộng, trừ và
        nhân (liên quan đến bộ nhớ tạm thời và tốc độ nhận thức)
      </div>
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
.panel-default {
  border-color: #ddd;
}
.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}
.panel-default > .panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.panel-heading {
  background: #fff !important;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.mi-intel {
  background-size: 300px 100%;
  background-position-x: 100%;
  min-height: 90px;
  background-repeat: no-repeat;
}
.intel-name {
  margin-top: 10px;
  font-weight: bold;
  font-size: 16px;
}
.e-intel-name {
  font-size: 14px;
  color: #999;
}
.panel-collapse {
  padding: 10px;
}
.collapse {
  display: none;
}
</style>
