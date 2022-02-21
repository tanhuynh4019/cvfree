<template>
<div style="background: #f0f0f0">
    <v-container>
        <v-row>
            <v-col cols="12" sm="7" md="8">
                <v-card>
                    <div class="p-4">
                        <center>
                            <h4>Chưa có Nhà tuyển dụng nào xem hồ sơ của bạn</h4>
                            <p>
                                Để nhận được cơ hội việc làm từ Nhà tuyển dụng, hãy viết CV và
                                cài đặt gợi ý việc làm.
                            </p>
                            <v-btn class="mt-1 ml-1" color="#004D40" dark small>Viết CV</v-btn>
                            <v-btn class="mt-1 ml-1" color="#004D40" dark small>Cài đặt gợi ý việt làm</v-btn>
                        </center>
                    </div>
                </v-card>
                <v-card class="mt-5">
                    <div class="p-3">
                        <h6>Việc làm phù hợp với bạn</h6>
                        <p>Để nhận được gợi ý việc làm chính xác hơn, hãy tùy chỉnh <b style="color: #004D40">cài đặt gợi ý việc làm</b>.</p>
                        <div class="mt-5"></div>
                        <v-card link style="box-shadow: 0px 0px 0px 0px" :to="{ name: 'DetailsJob', params: { slug: 'details' } }" v-for="(n, i) in 10" :key="i" class="border mt-2">
                            <v-row>
                                <v-col cols="4" sm="3" md="2" lg="2">
                                    <div class="p-2">
                                        <center>
                                            <img width="70%" height="70" src="https://cdn.topcv.vn/80/company_logos/197da107841bf0b3ca67db3c5bf07571-61dfd5470d712.jpg" />
                                        </center>
                                    </div>
                                </v-col>
                                <v-col cols="8" sm="6" md="8" lg="7">
                                    <div class="p-2">
                                        <h6>
                                            Cộng Tác Viên Tìm Kiếm Khách Hàng - Phát Triển Thị
                                            Trường
                                        </h6>
                                        <p>CÔNG TY TNHH TRUYỀN THÔNG F.WORLD</p>
                                        <div>
                                            <v-chip small class="ml-1" label>7-10 triệu</v-chip>
                                            <v-chip small class="ml-1" label>19 phút trước</v-chip>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12" sm="3" md="2" lg="3">
                                    <v-row>
                                        <v-col sm="12">
                                            <div class="p-2">
                                                <div class="float-end">
                                                    Còn <b>8</b> ngày để ứng tuyển
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col sm="12">
                                            <div class="float-end p-2">
                                                <v-btn icon>
                                                    <v-icon>mdi-heart</v-icon>
                                                </v-btn>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card>
                        <div class="text-center mt-5">
                            <v-btn small color="#004D40" dark>Xem tất cả việc làm phù hợp</v-btn>
                        </div>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="5" md="4">
                <v-card>
                    <div class="p-3">
                        <ProfileUser />
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import ProfileUser from "../../components/Users/ProfileUser.vue";
export default {
    name: "ViewProfile",
    components: {
        ProfileUser,
    },
};
</script>

<style></style>
