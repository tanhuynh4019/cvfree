<template>
  <div class="upgrade">
    <div class="box-header">
      <p>Nâng cấp tài khoản</p>
      <h3>Mở khóa nhiều quyền lợi hơn</h3>
    </div>
    <v-container>
      <div class="mt-5">
        <v-row>
          <v-col cols="2">
            <v-simple-table class="elevation-1">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="font-weight-bold">
                      <h5 class="title">Loại tài khoản</h5>
                    </th>
                  </tr>
                </thead>
                <tbody class="content">
                  <tr>
                    <td>Thời hạn sử dụng</td>
                  </tr>
                  <tr>
                    <td>Số lượng CV</td>
                  </tr>
                  <tr>
                    <td>Số lượng Cover Letter</td>
                  </tr>
                  <tr>
                    <td>Thời gian chờ khi tải CV và Cover Letter</td>
                  </tr>
                  <tr>
                    <td>Biểu tượng xác minh tài khoản</td>
                  </tr>
                  <tr>
                    <td>Sử dụng mẫu CV Cao Cấp</td>
                  </tr>
                  <tr>
                    <td>Sử dụng mẫu Cover Letter Cao Cấp</td>
                  </tr>
                  <tr>
                    <td>Ẩn biểu tượng ©topcv.vn</td>
                  </tr>
                  <tr>
                    <td>Ưu tiên đẩy Top hiển thị với NTD 1 lần/ngày</td>
                  </tr>
                  <tr>
                    <td>Gói quà tặng từ đối tác Gitiho</td>
                  </tr>
                  <tr>
                    <td>
                      <i
                        class="mdi mdi-minus"
                        style="color: #004d40 !important"
                      ></i>
                      Tài khoản PRO trị giá 299K.
                      <a href="">Tìm hiểu thêm</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i
                        class="mdi mdi-minus"
                        style="color: #004d40 !important"
                      ></i>
                      Khoá học Tin học VP: <a href="">Word</a> /
                      <a href="">Excel</a> /
                      <a href="">Power Point</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="box-btn"></div>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
          <v-col cols="2">
            <v-simple-table class="elevation-1">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="font-weight-bold">
                      <div class="text-center mt-2 mb-1 text-dark">
                        <h5 class="font-weight-bold" style="color: #004d40">
                          Thường
                        </h5>
                        <h5>Miễn phí</h5>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="content text-center">
                  <tr>
                    <td>Vĩnh viễn</td>
                  </tr>
                  <tr>
                    <td><b>6</b></td>
                  </tr>
                  <tr>
                    <td><b>6</b></td>
                  </tr>
                  <tr>
                    <td><b>5s</b></td>
                  </tr>
                  <tr>
                    <td><i class="mdi mdi-minus"></i></td>
                  </tr>
                  <tr>
                    <td><i class="mdi mdi-minus"></i></td>
                  </tr>
                  <tr>
                    <td><i class="mdi mdi-minus"></i></td>
                  </tr>
                  <tr>
                    <td><i class="mdi mdi-minus"></i></td>
                  </tr>
                  <tr>
                    <td><i class="mdi mdi-minus"></i></td>
                  </tr>
                  <tr>
                    <td><i class="mdi mdi-minus"></i></td>
                  </tr>
                  <tr>
                    <td><i class="mdi mdi-minus"></i></td>
                  </tr>
                  <tr>
                    <td><i class="mdi mdi-minus"></i></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="box-btn">
                        <button class="btn-none">Đang sử dụng</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
          <v-col cols="2">
            <v-simple-table class="elevation-1">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="font-weight-bold">
                      <div class="text-center mt-2 mb-1 text-dark">
                        <h5 class="font-weight-bold" style="color: #004d40">
                          Đã xác thực
                        </h5>
                        <h5>Miễn phí</h5>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="content text-center">
                  <tr>
                    <td>Vĩnh viễn</td>
                  </tr>
                  <tr>
                    <td><b>6</b></td>
                  </tr>
                  <tr>
                    <td><b>6</b></td>
                  </tr>
                  <tr>
                    <td><b>5s</b></td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td><i class="mdi mdi-minus"></i></td>
                  </tr>
                  <tr>
                    <td><i class="mdi mdi-minus"></i></td>
                  </tr>
                  <tr>
                    <td><i class="mdi mdi-minus"></i></td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td><i class="mdi mdi-minus"></i></td>
                  </tr>
                  <tr>
                    <td><i class="mdi mdi-minus"></i></td>
                  </tr>
                  <tr>
                    <td><i class="mdi mdi-minus"></i></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="box-btn">
                        <button class="btn-none">Đã xác thực</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
          <v-col cols="2">
            <v-simple-table class="elevation-1">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="font-weight-bold">
                      <div class="text-center mt-2 mb-1 text-dark">
                        <h5 class="font-weight-bold" style="color: #004d40">
                          Pro
                          <v-chip color="#004d40" style="color: white"
                            >VIP</v-chip
                          >
                        </h5>
                        <h5>50,000 VNĐ</h5>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="content text-center">
                  <tr>
                    <td>1 tháng</td>
                  </tr>
                  <tr>
                    <td><b>12</b></td>
                  </tr>
                  <tr>
                    <td><b>12</b></td>
                  </tr>
                  <tr>
                    <td><b>3s</b></td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="box-btn">
                        <button class="btn-up">Nâng cấp</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
          <v-col cols="2">
            <v-simple-table class="elevation-1">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="font-weight-bold">
                      <div class="text-center mt-2 mb-1 text-dark">
                        <h5 class="font-weight-bold" style="color: #004d40">
                          Education
                          <v-chip color="#004d40" style="color: white"
                            >VIP</v-chip
                          >
                        </h5>
                        <h5>500,000 VNĐ</h5>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="content text-center">
                  <tr>
                    <td>1 năm</td>
                  </tr>
                  <tr>
                    <td><b>12</b></td>
                  </tr>
                  <tr>
                    <td><b>12</b></td>
                  </tr>
                  <tr>
                    <td><b>3s</b></td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-minus"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="box-btn text-start">
                        Nhận được qua các chương trình hợp tác của TopCV & đơn
                        vị đào tạo trên cả nước.
                        <a href="">Tìm hiểu thêm</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
          <v-col cols="2">
            <v-simple-table class="elevation-1">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="font-weight-bold">
                      <div class="text-center mt-2 mb-1 text-dark">
                        <h5 class="font-weight-bold" style="color: #004d40">
                          Premium
                          <v-chip color="#004d40" style="color: white"
                            >VIP</v-chip
                          >
                        </h5>
                        <h5>500,000 VNĐ</h5>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="content text-center">
                  <tr>
                    <td>1 năm</td>
                  </tr>
                  <tr>
                    <td><b>20</b></td>
                  </tr>
                  <tr>
                    <td><b>20</b></td>
                  </tr>
                  <tr>
                    <td><b>1s</b></td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="mdi mdi-check" style="color: #004d40"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="box-btn">
                        <button class="btn-up">Nâng cấp</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Upgrade",
  data() {
    return {};
  },
};
</script>

<style>
.upgrade .text-dark {
  color: black;
}

.upgrade .box-header {
  background-image: url(https://www.topcv.vn/v4/image/upgrade-account/Group_2154.png);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 45px;
  text-align: center;
}

.upgrade .box-header p {
  color: #000;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.upgrade .box-header h3 {
  color: #004d40;
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  margin: 0;
}

.upgrade .title {
  color: black;
  font-weight: bold;
  font-size: 17px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.upgrade .content {
  color: #333;
  font-size: 14px;
  line-height: 36px;
  list-style: none;
  min-height: 46px;
}

.upgrade a {
  color: #004d40 !important;
  font-weight: bold;
  text-decoration: none;
}

.upgrade i {
  font-weight: bold;
  font-size: 24px;
  color: #dde5e8;
}

.upgrade .box-btn {
  align-items: center;
  display: flex;
  min-height: 140px;
  padding: 16px;
}

.upgrade .btn-none {
  background-color: #f4f4f4;
  border-radius: 5px;
  color: #999;
  display: block;
  font-size: 15px;
  font-weight: 700;
  padding: 10px 9px;
  width: 100%;
}

.upgrade .btn-up {
  background-color: rgba(0, 177, 79, 0.1);
  border-radius: 5px;
  color: #00b14f;
  display: block;
  font-size: 15px;
  font-weight: 700;
  padding: 10px 9px;
  width: 100%;
}
</style>