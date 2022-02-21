<template>
    <div style="background: #f0f0f0">
        <v-container>
            <v-row>
                <v-col cols="12" sm="7" md="8">
                    <v-card>
                        <div class="p-4">
                            <h6>TẠI SAO BẠN NÊN CẬP NHẬT THÔNG TIN GỢI Ý VIỆC LÀM?</h6>
                            <p>
                                TopCV là nền tảng kết nối cơ hội việc làm thông qua CV đầu tiên
                                tại Việt Nam, nơi mà ứng viên sẽ được Nhà tuyển dụng chủ động
                                săn đón.
                            </p>
                            <p>Cập nhật thông tin chi tiết ngay, nếu bạn muốn:
                                <ul>
                                    <li>Được nhà tuyển dụng chủ động săn đón.</li>
                                    <li>Được gợi ý các cơ hội việc làm phù hợp.</li>
                                </ul>
                            </p>
                            <v-divider></v-divider>
                            <center>
                                Bạn vui lòng hoàn thiện các thông tin dưới đây
                                <div>(*) Các thông tin bắt buộc</div>
                            </center>
                            <div>
                                <h6>THÔNG TIN CÁ NHÂN</h6>
                                <v-row>
                                    <v-col sm="12">
                                        <v-row>
                                            <v-col sm="3">
                                                <div class="float-end mt-2">
                                                    Họ và tên *
                                                </div>
                                            </v-col>
                                            <v-col sm="9">
                                                <v-text-field dense v-model="formJobSuggestionSettings.fullname" color="#004D40" outlined></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <h6>KINH NGHIỆM THỰC TẾ</h6>
                                <v-row>
                                    <v-col sm="12">
                                        <v-row>
                                            <v-col sm="3">
                                                <div class="float-end mt-2">
                                                    Nghành nghề
                                                </div>
                                            </v-col>
                                            <v-col sm="9">
                                                <v-select v-model="formJobSuggestionSettings.categoryIds" outlined multiple :items="selected.careers" placeholder="Chọn nghành nghề" dense></v-select>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col sm="12">
                                        <v-row>
                                            <v-col sm="3">
                                                <div class="float-end mt-2">
                                                    Kỹ năng
                                                </div>
                                            </v-col>
                                            <v-col sm="9">
                                                <v-select v-model="formJobSuggestionSettings.skillIds" multiple outlined :items="selected.skiills" placeholder="Chọn kỹ năng" dense></v-select>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col sm="12">
                                        <v-row>
                                            <v-col sm="3">
                                                <div class="float-end mt-2">
                                                    Kinh nghiệm *
                                                </div>
                                            </v-col>
                                            <v-col sm="9">
                                                <v-select v-model="formJobSuggestionSettings.exp" outlined :items="selected.exps" placeholder="--Thời gian làm việc nghành nghề đã chọn--" dense></v-select>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col sm="12">
                                        <v-row>
                                            <v-col sm="3">
                                                <div class="float-end mt-2">
                                                    Trình độ chuyên môn *
                                                </div>
                                            </v-col>
                                            <v-col sm="9">
                                                <v-select v-model="formJobSuggestionSettings.level" outlined  :items="selected.levels" placeholder="--Chọn trình đồ--" dense></v-select>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col sm="12">
                                        <v-row>
                                            <v-col sm="3">
                                                <div class="float-end mt-2">
                                                    Trình độ tiếng anh *
                                                </div>
                                            </v-col>
                                            <v-col sm="9">
                                                <v-select v-model="formJobSuggestionSettings.englishLevel" outlined  :items="selected.englishLevel" placeholder="--Chọn trình đồ--" dense></v-select>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col sm="12">
                                        <v-row>
                                            <v-col sm="3">
                                                <div class="float-end mt-2">
                                                    Năm sinh *
                                                </div>
                                            </v-col>
                                            <v-col sm="9">
                                                <v-select v-model="formJobSuggestionSettings.dob" outlined  :items="selected.dobs" placeholder="--Chọn năm sinh--" dense></v-select>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col sm="12">
                                        <v-row>
                                            <v-col sm="3">
                                                <div class="float-end mt-2">
                                                    Giới tính
                                                </div>
                                            </v-col>
                                            <v-col sm="9">
                                                <v-select v-model="formJobSuggestionSettings.gender" outlined  :items="selected.gender" placeholder="--Chọn giới tính--" dense></v-select>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col sm="12">
                                        <v-row>
                                            <v-col sm="3">
                                                <div class="float-end mt-2">
                                                    Quê quán
                                                </div>
                                            </v-col>
                                            <v-col sm="9">
                                                <v-select v-model="formJobSuggestionSettings.hometown" outlined  :items="selected.hometown" placeholder="--Chọn giới tính--" dense></v-select>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <h6>MONG MUỐN CỦA BẠN</h6>
                                <v-row>
                                  <v-col sm="3">

                                  </v-col>
                                  <v-col sm="9">

                                  </v-col>
                                </v-row>
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
    name: "JobSuggestionSettings",
    data() {
        return {
            selected: {
                careers: ["An toàn lao động", "Bán hàng kỷ thuật", "Bán lẻ/ bán sỉ"],
                companyFields: ["Bất động sản", "Cơ khí", "Cơ quan nhà nước"],
                exps: ['1 năm kinh nghiệm', 'Dưới 1 năm kinh nghiệm'],
                levels: ['Sinh viên', 'Mới ra trường'],
                skiills: [".NET", 'NodeJS'],
                city: ["Hồ Chí Minh", "Bình Dương", "Hà Nội"],
                position: ["Nhân viên", "Trưởng nhóm", "Quản lý/ Giám sát"],
                type: ["Toàn thời gian", "Bán thời gian", "Thực tập"],
                salary: ["Dưới 3 triệu", "3 - 5 triệu", "5 - 7 triệu"],
                englishLevel: ['Không biết', 'Đọc hiểu cơ bản'],
                gender: ['Nam', 'Nữ'],
                dobs: [1999,2000],
                hometown: ['Bình Dương']
            },
            formJobSuggestionSettings: {
                fullname: "",
                categoryIds: [],
                skillIds: [],
                exp: "",
                level: "",
                englishLevel: "",
                dob: "",
                gender: "",
                hometown: "",
                primary_cv_id: "",
                job_type: "",
                salary: "",
                location_selector: "",
                note: "",
                expectation: "",
            },
        };
    },
    components: {
        ProfileUser,
    },
};
</script>

<style></style>
