<template>
  <div v-resize="onResize">
    <center>
      <v-card :class="common.card_cls">
        <div class="p-5">
          <h2 style="color: #00b14f">Kích hoạt mã quà tặng</h2>
          <v-row>
            <v-col cols="0" sm="0" md="2"></v-col>
            <v-col cols="12" sm="12" md="8">
              <p>
                Chúc mừng bạn đã nhận được mã code quà tặng TopCV. Kích hoạt
                ngay bằng cách chọn gói tài khoản và nhập mã code để nhận được
                những đặc quyền hấp dẫn!
              </p>
              <div>
                <v-form>
                  <v-select
                    :items="selectGift"
                    class="mt-2"
                    ref="name"
                    prepend-inner-icon="mdi-account-circle-outline"
                    color="#00b14f"
                    placeholder="Loại quà tặng"
                    required
                    outlined
                    dense
                  >
                    <template v-slot:item="{ item, attrs, on }">
                      <v-list-item v-bind="attrs" v-on="on">
                        <v-list-item-content>
                          <v-list-item-title
                            :id="attrs['aria-labelledby']"
                            v-text="item.title"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </template>
                  </v-select>

                  <v-text-field
                    class="mt-2"
                    ref="code"
                    prepend-inner-icon="mdi-gift-outline"
                    color="#00b14f"
                    placeholder="Nhập mã code"
                    required
                    outlined
                    dense
                  ></v-text-field>
                  <v-btn class="w-100" color="#00b14f" dark>Áp dụng</v-btn>
                </v-form>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </center>
  </div>
</template>

<script>
export default {
  name: "Gift",
  data(){
    return{
      common:{
        card_cls:""
      },
      selectGift:[
        {
          title: "Tài khoản Education VIP (1 năm)",
          value: "edu"
        },
        {
          title: "Tài khoản Pro VIP (1 năm)",
          value: "pro"
        },
        {
          title: "Tài khoản Premium VIP (1 năm)",
          value: "premium"
        },
      ]
    }
  },
  mouterd(){
    this.onResize();
  },
  methods:{
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (this.windowSize.x < 600) {
        this.common.card_cls = "mt-5 w-100";
      } else if (this.windowSize.x < 960) {
        this.common.card_cls = "mt-5 w-100";
      } else {
        this.common.card_cls = "mt-5 w-50";
      }
    },
  }
};
</script>

<style>
</style>