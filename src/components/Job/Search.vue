<template>
  <div>
    <v-container>
      <v-form ref="searchForm" v-model="searchForm.valid" class="box-search">
        <v-row>
          <v-col sm="12" cols="12" md="8" lg="4">
            <v-text-field
              v-model="searchForm.value.key"
              placeholder="Tên công việc, vị trí bạn muốn ứng tuyển ..."
              prepend-inner-icon="mdi-briefcase-search"
              outlined
              dense
              color="#004D40"
            ></v-text-field>
          </v-col>
          <v-col sm="4" cols="6" md="4" lg="2">
            <v-autocomplete
              :items="selected.careers"
              v-model="searchForm.value.careers"
              prepend-inner-icon="mdi-cog-box"
              clearable
              placeholder="Nghành nghề"
              outlined
              dense
              color="#004D40"
            ></v-autocomplete>
          </v-col>
          <v-col sm="4" cols="6" md="4" lg="2">
            <v-autocomplete
              clearable
              :items="selected.companyFields"
              prepend-inner-icon="mdi-office-building"
              v-model="searchForm.value.companyFields"
              placeholder="Lĩnh vực công ty"
              outlined
              color="#004D40"
              dense
            ></v-autocomplete>
          </v-col>
          <v-col sm="4" cols="12" md="4" lg="2">
            <v-autocomplete
              clearable
              :items="selected.provinces"
              prepend-inner-icon="mdi-map-marker"
              v-model="searchForm.value.province"
              placeholder="Địa điểm"
              outlined
              color="#004D40"
              dense
            ></v-autocomplete>
          </v-col>
          <v-col sm="12" cols="12" md="4" lg="2">
            <v-btn
              class="w-100"
              dark
              color="#004D40"
              large
              style="margin-top: -4px"
            >
              <v-icon>mdi-card-search</v-icon>
              <span class="ml-1">Tìm kiếm</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import Term from "../../apis/term.api";
export default {
  name: "Search",
  async created() {
    this.selected.careers = await Term.getAllTermStatus(1);
    this.selected.provinces = await Term.getAllTermStatus(2);
  },
  data() {
    return {
      searchForm: {
        valid: true,
        value: {
          key: "",
          careers: "",
          companyFields: "",
          province: "",
          position: "",
          type: "",
        },
      },
      selected: {
        careers: ["An toàn lao động", "Bán hàng kỷ thuật", "Bán lẻ/ bán sỉ"],
        companyFields: ["Bất động sản", "Cơ khí", "Cơ quan nhà nước"],
        provinces: ["Hồ Chí Minh", "Bình Dương", "Hà Nội"],
        position: ["Nhân viên", "Trưởng nhóm", "Quản lý/ Giám sát"],
        type: ["Toàn thời gian", "Bán thời gian", "Thực tập"],
        salary: ["Dưới 3 triệu", "3 - 5 triệu", "5 - 7 triệu"],
      },
    };
  },
};
</script>

<style>
.box-search .v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px !important;
}
.box-search .v-messages {
  min-height: 0px !important;
}
.box-search .v-text-field__details {
  min-height: 0px;
}

.no-box-shadow {
  box-shadow: 0px 0px 0px 0px 0px !important;
}
</style>
