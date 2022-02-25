<template>
  <div>
    <v-container>
      <v-form ref="searchForm" v-model="searchForm.valid" class="box-search">
        <v-row>
          <v-col sm="12" cols="12" md="8" lg="4">
            <v-text-field
              v-model="searchForm.value.key"
              placeholder="Tên công việc, vị trí bạn muốn ứng tuyển ..."
              prepend-inner-icon="mdi-search-web"
              solo
              dense
              color="#004D40"
            ></v-text-field>
          </v-col>
          <v-col sm="4" cols="6" md="4" lg="2">
            <v-autocomplete
              :items="selected.careers"
              v-model="searchForm.value.careers"
              prepend-inner-icon="mdi-office-building"
              clearable
              placeholder="Nghành nghề"
              label="Nghành nghề"
              solo
              dense
            ></v-autocomplete>
          </v-col>
          <v-col sm="4" cols="6" md="4" lg="2">
            <v-autocomplete
              clearable
              :items="selected.companyFields"
              prepend-inner-icon="mdi-office-building"
              v-model="searchForm.value.companyFields"
              placeholder="Lĩnh vực công ty"
              label="Lĩnh vực công ty"
              solo
              dense
            ></v-autocomplete>
          </v-col>
          <v-col sm="4" cols="12" md="4" lg="2">
            <v-autocomplete
              clearable
              :items="selected.city"
              prepend-inner-icon="mdi-map-marker"
              v-model="searchForm.value.city"
              placeholder="Địa điểm"
              label="Địa điểm"
              solo
              dense
            ></v-autocomplete>
          </v-col>
          <v-col sm="12" cols="12" md="4" lg="2">
            <v-btn class="w-100" dark depressed color="#004D40" dense>
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
export default {
  name: "Search",
  data() {
    return {
      searchForm: {
        valid: true,
        value: {
          key: "",
          careers: "",
          companyFields: "",
          city: "",
          position: "",
          type: "",
        },
      },
      selected: {
        careers: ["An toàn lao động", "Bán hàng kỷ thuật", "Bán lẻ/ bán sỉ"],
        companyFields: ["Bất động sản", "Cơ khí", "Cơ quan nhà nước"],
        city: ["Hồ Chí Minh", "Bình Dương", "Hà Nội"],
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

.no-box-shadow{
  box-shadow: 0px 0px 0px 0px 0px !important;
}
</style>
