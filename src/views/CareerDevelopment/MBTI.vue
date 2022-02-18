<template>
  <v-container class="mt-3">
    <div class="text-font" v-resize="onResize">
      <v-row class="mbti-padding">
        <v-col cols="12" sm="8" xs="12">
          <v-row>
            <v-col class="background-gray font-mbti mt-3 mb-3" sm="12">
              <v-row v-for="(item, i) in reviewBox" :key="i">
                <v-col sm="7">
                  <h4 class="mb-5 style-font">{{ item.name }}</h4>
                  <div v-for="(items, j) in item.list" :key="j">
                    <p>
                      <b>
                        {{ items.textDes }}
                      </b>
                      {{ items.description }}
                    </p>
                    <p>
                      {{ items.content }}
                    </p>
                  </div>
                </v-col>
                <v-col sm="5">
                  <div class="image-padd">
                    <img :src="item.image" width="100%" height="" alt="" />
                  </div>
                </v-col>
              </v-row>
              <div class="text-center">
                <v-btn class="ma-2" color="#00b14f">
                  <span style="color: #ffff">
                    <v-icon>mdi-pencil</v-icon>
                    Khám phá tính cách của bạn ngay
                  </span>
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-col class="mb-3" v-for="(item, i) in imageBanner" :key="i" sm="12">
            <a :href="item.link" target="_blank">
              <img :src="item.image" width="100%" height="100%" alt="" />
            </a>
          </v-col>
          <div v-for="(item, i) in listReview" :key="i">
            <h4>{{ item.name }}</h4>
            <v-col class="background-gray mt-3 mb-3" sm="12">
              <div>
                <p>{{ item.content }}</p>
              </div>
            </v-col>
          </div>
          <div v-for="(item, i) in listPerson" :key="i">
            <h4>{{ item.name }}</h4>
            <v-col sm="12">
              <v-row>
                <v-col
                  v-for="(items, j) in item.listSub"
                  :key="j"
                  class="background-gray"
                  sm="6"
                >
                  <div class="form-size">
                    <div class="form-size-text">
                      <p>
                        <a :href="items.link" :title="items.title">
                          <img :src="items.image" alt="" class="img-bot" />
                        </a>
                      </p>
                      <h4>
                        <a :href="items.link" :title="items.title">
                          ISTJ - Người trách nhiệm
                        </a>
                      </h4>
                      <span class="text-gray">
                        {{ items.content }}
                      </span>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </div>
        </v-col>
        <v-col cols="12" sm="4" xs="12">
          <v-row>
            <v-col
              v-for="(item, i) in imagesMBTI"
              :key="i"
              cols="12"
              sm="12"
              xs="12"
            >
              <a :href="item.link">
                <img
                  :width="common.image.width"
                  :height="common.image.height"
                  :src="item.image"
                  alt=""
                />
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "MBTI",
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0,
      },
      common: {
        image: {
          width: "",
          height: "",
        },
      },
      reviewBox: [
        {
          name: "Trắc nghiệm tính cách MBTI",
          icon: "mdi-plus",
          image: "https://www.topcv.vn/images/mbti/mbti-man.png",
          list: [
            {
              textDes:
                "Trắc nghiệm tính cách MBTI (Myers-Briggs Type Indicator)",
              description:
                "là một phương pháp sử dụng hàng loạt các câu hỏi trắc nghiệm để phân tích tính cách con người. Kết quả trắc nghiệm MBTI chỉ ra cách con người nhận thức thế giới xung quanh và ra quyết định cho mọi vấn đề trong cuộc sống.",
              content:
                "Hiện nay MBTI được sử dụng phổ biến như một phương pháp phân loại tính cách khá chính xác. Trong công việc, MBTI giúp chúng ta có thêm thông tin để <b>lựa chọn nghề nghiệp</b> chính xác hơn, với nhà tuyển dụng cũng có thể sử dụng MBTI để đánh giá mức độ phù hợp về tính cách của ứng viên với công việc cũng như môi trường làm việc của doanh nghiệp.",
            },
          ],
        },
      ],
      imageBanner: [
        {
          image:
            "https://static.topcv.vn/manual/16-nhom-tinh-cach-mbti-topcv.png",
          link: "https://www.facebook.com/topcv.vn/posts/3870183293120401",
        },
      ],
      listReview: [
        {
          name: "Trắc nghiệm MBTI là gì?",
          content:
            "MBTI (Myers-Briggs Type Indication) - trắc nghiệm tính cách Myers-Briggs Type là một phương pháp sử dụng hàng loạt các câu hỏi trắc nghiệm để phân tích tính cách con người.Phương pháp này có nền tảng từ lý thuyết phân loại của Carl Gustav Jung - Bác sĩ người Thụy Điển - cha đẻ của “Tâm lý học phân tích” và được Katharine Cook Briggs cùng con gái của bà, Isabel Briggs Myers phát triển hoàn thiện trong chiến tranh thế giới thứ hai. MBTI thực sự trở nên nổi tiếng và phổ biến khi được giới thiệu ở hai cuốn “Please understand me” I và II của David Keirsey từ những năm 50 của thế kỉ 20 và được người Nhật đưa vào ứng dụng thực tiễn từ năm 1962.MBTI dùng một chuỗi các câu hỏi trắc nghiệm liên quan đến các vấn đề cơ bản trong cuộc sống với các đáp án để lựa chọn.Tổng kết bài trắc nghiệm sẽ cho ra kết quả để đánh giá bạn là người có tính cách như thế nào thông qua phương pháp phân loại. Sự phân loại này dựa trên 4 nhóm tính cách cơ bản, mỗi nhóm là một cặp lưỡng phân của 8 yếu tố chức năng, nhận thức:Xu hướng Tự nhiên: Hướng ngoại (Extroversion) - Hướng nội (Introversion)Tìm hiểu và Nhận thức Thế giới: Giác quan (Sensing) - Trực giác (INtution)Quyết định và chọn lựa: Lý trí (Thinking) - Tình cảm (Feeling)Cách thức và Hành động: Nguyên tắc (Judgment) - Linh hoạt (Perception)Mỗi yếu tố của 4 nhóm trên kết hợp với nhau tạo thành 16 nhóm tính cách MBTIMBTI là một trong những bài trắc nghiệm tính cách phổ biến nhất thế giới với hơn 2 triệu người mới sử dụng mỗi năm và đặc biệt được ứng dụng trong các hoạt động tuyển dụng, đánh giá nhân sự, giáo dục, hướng nghiệp… Làm trắc nghiệm MBTI ở TopCV ngoài việc được phân loại tính cách theo 16 nhóm của phương pháp Myers-Briggs thì các dữ liệu thông tin sẽ được tổng hợp để đưa ra xu hướng nghề nghiệp phù hợp nhất với bạn.",
        },
        {
          name: "Lưu ý trước khi làm trắc nghiệm MBTI",
          content:
            "MBTI là một trắc nghiệm tâm lý nên để thực hiện nó một cách chính xác nhất bạn nên hiểu rõ:Kết quả của một trắc nghiệm tâm lý phụ thuộc rất nhiều vào tâm trạng của bạn. Tốt nhất hãy thực hiện nó trong một trạng thái tâm lý bình ổn nhất. Nếu bạn đang quá vui, buồn, phấn khích, bực bội hay đang trong quá trình thay đổi nhận thức thì sẽ không đảm bảo được độ chính xác.Trung thực khi trả lời câu hỏi, phân biệt giữa lý tưởng và thực tế. Kết quả của trắc nghiệm hoàn toàn là câu chuyện cá nhân của bạn, đừng để yếu tố bên ngoài tác động đến câu trả lời.Chúng ta trưởng thành và thay đổi từng ngày, kết quả trắc nghiệm tất nhiên có thể từ đó mà thay đổi tùy theo nhận thức và thế giới quan của mỗi người. Tốt nhất hãy làm bài kiểm tra nhiều lần và điều độ để có cái nhìn tổng quát và chính xác nhất.Kết quả của bài trắc nghiệm MBTI sau đây cung cấp thông tin để bạn có lựa chọn nghề nghiệp thích hợp dựa trên các nhóm tính cách. Mọi dữ liệu đưa ra đều mang tính chất tham khảo, quyết định luôn ở trong tay chúng ta. TopCV sẽ luôn đồng hành cùng bạn trong mọi lựa chọn nghề nghiệp. Với một hành trang vững vàng thì tin tưởng rằng mọi kế hoạch đều sẽ thành công!",
        },
      ],
      listPerson: [
        {
          name: "16 loại hình tính cách MBTI",
          listSub: [
            {
              name: "ISTJ - Người trách nhiệm",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/istj.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-istj.html",
              title: "Phân tích nhóm tính cách ISTJ - Người trách nhiệm",
              content:
                "Đây là nhóm tính cách phổ biến nhất, có đến 13% dân số trên thế giới thuộc nhóm tính cách này. Phương châm sống của họ là “Chỉ có sự thật”, tính cách của ISTJ là rất tôn trọng sự thật, họ có xu hướng tiếp thu rất nhiều thông tin và nhớ rất lâu. Một trong những yếu tố góp phần quan trọng làm cho ISTJ có khả năng phân tích các sự vật, hiện tượng, con người ở môi trường xung quanh rất tốt đó là nhờ đặc tính S.",
            },
            {
              name: "ISFJ - Người nuôi dưỡng",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/isfj.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-isfj.html",
              title: "Phân tích nhóm tính cách ISFJ - Người nuôi dưỡng",
              content:
                "Trong tất cả các loại tính cách thì ISFJ là loại tính cách có lòng vị tha nhất. Có khoảng 12.5% dân số trên thế giới mang loại tính cách này. Nhiều ISFJ tìm kiếm sự nghiệp trong lĩnh vực học thuật, y học, công tác xã hội hoặc tư vấn",
            },
            {
              name: "ISTJ - Người trách nhiệm",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/istj.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-istj.html",
              title: "Phân tích nhóm tính cách ISTJ - Người trách nhiệm",
              content:
                "Đây là nhóm tính cách phổ biến nhất, có đến 13% dân số trên thế giới thuộc nhóm tính cách này. Phương châm sống của họ là “Chỉ có sự thật”, tính cách của ISTJ là rất tôn trọng sự thật, họ có xu hướng tiếp thu rất nhiều thông tin và nhớ rất lâu. Một trong những yếu tố góp phần quan trọng làm cho ISTJ có khả năng phân tích các sự vật, hiện tượng, con người ở môi trường xung quanh rất tốt đó là nhờ đặc tính S.",
            },
            {
              name: "ISFJ - Người nuôi dưỡng",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/isfj.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-isfj.html",
              title: "Phân tích nhóm tính cách ISFJ - Người nuôi dưỡng",
              content:
                "Trong tất cả các loại tính cách thì ISFJ là loại tính cách có lòng vị tha nhất. Có khoảng 12.5% dân số trên thế giới mang loại tính cách này. Nhiều ISFJ tìm kiếm sự nghiệp trong lĩnh vực học thuật, y học, công tác xã hội hoặc tư vấn",
            },
            {
              name: "ISTJ - Người trách nhiệm",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/istj.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-istj.html",
              title: "Phân tích nhóm tính cách ISTJ - Người trách nhiệm",
              content:
                "Đây là nhóm tính cách phổ biến nhất, có đến 13% dân số trên thế giới thuộc nhóm tính cách này. Phương châm sống của họ là “Chỉ có sự thật”, tính cách của ISTJ là rất tôn trọng sự thật, họ có xu hướng tiếp thu rất nhiều thông tin và nhớ rất lâu. Một trong những yếu tố góp phần quan trọng làm cho ISTJ có khả năng phân tích các sự vật, hiện tượng, con người ở môi trường xung quanh rất tốt đó là nhờ đặc tính S.",
            },
            {
              name: "ISFJ - Người nuôi dưỡng",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/isfj.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-isfj.html",
              title: "Phân tích nhóm tính cách ISFJ - Người nuôi dưỡng",
              content:
                "Trong tất cả các loại tính cách thì ISFJ là loại tính cách có lòng vị tha nhất. Có khoảng 12.5% dân số trên thế giới mang loại tính cách này. Nhiều ISFJ tìm kiếm sự nghiệp trong lĩnh vực học thuật, y học, công tác xã hội hoặc tư vấn",
            },
          ],
        },
      ],
      imagesMBTI: [
        {
          image:
            "https://static.topcv.vn/manual/cong-cu-viet-cv-online-topcv.png",
          link: "https://www.topcv.vn/mau-cv",
        },
        {
          image:
            "https://static.topcv.vn/manual/tim-kiem-viec-lam-tot-nhat-topcv.png",
          link: "https://www.topcv.vn/viec-lam",
        },
      ],
    };
  },
  mounted() {
    this.onResize();
  },

  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (this.windowSize.x < 600) {
        this.common.image = {
          width: "75%",
          height: "75%",
        };
      } else if (this.windowSize.x < 960) {
        this.common.image = {
          width: "90%",
          height: "90%",
        };
      } else {
        this.common.image = {
          width: "100%",
          height: "100%",
        };
      }
    },
  },
};
</script>

<style>
.background-gray {
  background-color: #fafafafa;
}
.mbti-padding {
  padding: 0 15px;
}
.text-font p,
b,
span {
  font-size: 13px;
  text-align: justify;
}

.image-padd {
  padding: 20px 30px;
}

.style-font {
  color: #00b14f;
  text-transform: uppercase;
}
.text-font a {
  font-size: 14px;
  text-decoration: none;
  color: #666 !important;
}
.text-font a:hover {
  color: #00b14f !important;
}

.text-font .img-bot {
  float: left;
  margin: 15px;
}

.text-font .text-gray {
  color: #999999;
  text-align: justify;
  font-size: 13px;
}
.personali-size {
  padding: 0 15px;
}
.form-size {
  max-height: 176px;
  overflow: hidden;
}
.form-size-text {
  max-height: 154px;
  overflow: hidden;
}
</style>
