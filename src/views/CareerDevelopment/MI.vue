<template>
  <v-container>
    <div class="text-font" v-resize="onResize">
      <v-row class="mbti-padding">
        <v-col cols="12" sm="8" xs="12">
          <v-row>
            <v-col
              cols="12"
              class="background-gray font-mbti mt-3 mb-3"
              sm="12"
            >
              <v-row v-for="(item, i) in reviewBox" :key="i">
                <v-col cols="12" sm="7" xs="12">
                  <h4 class="mb-5 style-font">{{ item.name }}</h4>
                  <div v-for="(items, j) in item.list" :key="j">
                    <p>{{ items.content }}</p>
                  </div>
                </v-col>
                <v-col cols="12" sm="5" xs="0">
                  <div class="image-padd">
                    <img :src="item.image" width="100%" height="" alt="" />
                  </div>
                </v-col>
              </v-row>
              <div class="text-center">
                <v-btn small class="ma-2" color="#00b14f">
                  <span style="color: #ffff">
                    <v-icon small>mdi-pencil</v-icon>
                    Khám phá ngay
                  </span>
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-row v-for="(item, i) in listReview" :key="i">
            <h4>{{ item.name }}</h4>
            <v-col class="background-gray mt-3 mb-3" sm="12">
              <div>
                <p v-for="(items, j) in item.listContent" :key="j">
                  {{ items.content }}
                  <ul>
                    <li class="ml-8" v-for="(itemI, z) in items.listItem" :key="z">{{itemI.text}}</li>
                  </ul>
                </p>
              </div>
            </v-col>
          </v-row>
          <v-row class="mb-3">
            <h4>9 loại trí thông minh</h4>
            <v-col class="background-gray" cols="12" sm="12" md="12" xs="12">
                <div v-for="(item, i) in listPerson" :key="i" class="box-white border-panel">
                  <div :data-bs-toggle="item.data_bs" :href="item.href_aria" role="button" aria-expanded="false" :aria-controls="item.aria_controls">
                    <v-row>
                      <v-col sm="5">
                        <div class="box">
                          <b>{{item.name}}</b>
                          <div class="panel-span">
                            <span>{{item.text}}</span>
                          </div>
                        </div>
                      </v-col>
                      <v-col sm="7"> 
                        <img style="padding: 0" width="100%" height="100%" class="img-right-box" :src="item.image" alt="">
                      </v-col>
                    </v-row>
                  </div>
                  <div class="collapse panel-collapse" :id="item.aria_controls">
                    <div class="card card-body">
                      {{item.content}}
                    </div>
                  </div>
                </div>
            </v-col>
          </v-row>
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
  name: "MI",
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
          name: "Trắc nghiệm đa trí thông minh MI",
          image: "https://www.topcv.vn/v3/images/mi-test/mi-logo.png",
          list: [
            {
              content:
                "Trắc nghiệm đa trí thông minh MI (Multiple Intelligences) là phương pháp đánh giá trí thông minh nổi trội của mỗi người, dựa trên Lý thuyết đa trí thông minh (Theory of Multiple Intelligences) nghiên cứu bởi Giáo sư Tâm lý học Howard Gardner.",
            },
            {
              content:
                "Theo lý thuyết này, Howard Gardner đã phản bác quan niệm truyền thống về khái niệm thông minh, từng được thống nhất và đánh giá bởi bài kiểm tra IQ. Có nghĩa, một người có khả năng giải quyết dễ dàng một bài toán phức tạp, chưa chắc đã thông minh hơn một người trật vật, loay hoay mãi không giải xong.",
            },
            {
              content:
                "Kết quả trắc nghiệm MI sẽ trả lời cho câu hỏi “Bạn có trí thông minh nổi trội trong lĩnh vực nào?”. Từ đó giúp mỗi cá nhân hiểu bản thân mình hơn, cũng như đưa ra quyết định chính xác không chỉ với lựa chọn nghề nghiệp mà còn với tất cả vấn đề xoay quanh cuộc sống. Tuy nhiên, kết quả này không phải là “hằng số” trong suốt cuộc đời mà có thể sẽ thay đổi tùy vào sự trau dồi của mỗi cá nhân.",
            },
          ],
        },
      ],
      listReview: [
        {
          name: "Trắc nghiệm MI là gì?",
          listContent:[
            {
              content: "Là bài trắc nghiệm được dùng để đánh giá và phân loại tố chất theo hệ phân loại Đa Trí thông minh của Howard Gardner, bài Trắc nghiệm MI là công cụ được dùng để nhận diện điểm mạnh cũng như điểm yếu của mỗi cá nhân.",
              listItem: [
              ],
            },
            {
              content: "Được giới thiệu lần đầu tiên trong quyển sách “Frames of Mind” (đã được chuyển ngữ sang tiếng Việt với tên “Cơ cấu Trí khôn”) vào năm 1983, lý thuyết Đa Trí thông minh hay Trí thông minh đa dạng (Multiple Intelligences) của Howard Gardner được chào đón và nhận được sự ủng hộ từ rất nhiều những nhà tâm lý và công chúng trên toàn thế giới. Ở Việt Nam, lý thuyết Đa Trí thông minh được giới thiệu rộng rãi thông qua 2 quyển sách “7 loại hình thông minh” và “Bạn thông minh hơn bạn nghĩ” của tác giả Thomas Amstrong.",
              listItem: [
              ],
            },
            {
              content: "Với lý thuyết về Đa Trí thông minh, Howard Gardner đã đề xuất ra một góc nhìn mới để đánh giá, cũng như phân loại và đo lường tài năng của con người. “Trí thông minh” không chỉ được hiểu theo nghĩa hẹp là khả năng tính toán số (Logic/Toán học) hay khả năng ghi nhớ và sử dụng vốn từ vựng (Ngôn ngữ), mà giờ được hiểu rằng mỗi cá nhân đều có những tố chất riêng, mà đều có thể được phát triển thành những năng lực tương ứng. Với xuất phát điểm 7 loại hình, hiện tại MI đã được tiếp tục nghiên cứu và phát triển đến 9 loại hình trí thông minh:",
              listItem: [
                {
                  text: "Trí thông minh Xã hội: năng lực liên quan đến con người",
                },
                {
                  text: "Trí thông minh Nội tâm: năng lực liên quan đến nội tâm bản thân",
                },
                {
                  text: "Trí thông minh Logic/Toán học: năng lực liên quan đến xử lý số và dữ liệu",
                },
                {
                  text: "Trí thông minh Ngôn ngữ: năng lực liên quan đến sử dụng ngôn từ",
                },
                {
                  text: "Trí thông minh Không gian: năng lực liên quan đến trí tưởng tượng và không gian",
                },
                {
                  text: "Trí thông minh Vận động: năng lực liên quan đến điều khiển cơ thể",
                },
                {
                  text: "Trí thông minh Âm nhạc: năng lực liên quan đến âm thanh và giai điệu",
                },
                {
                  text: "Trí thông minh Thiên nhiên: năng lực liên quan đến các yếu tố trong thiên nhiên, động vật, thực vật, etc.",
                },
                {
                  text: "Trí thông minh Triết học (Hiện sinh): năng lực liên quan đến tư duy trừu tượng và nghiên cứu sâu",
                },
              ],
            },
          ],  
        },
        {
          name: "Lưu ý trước khi làm trắc nghiệm MI",
          listContent:[
            {
              content: "MI là một trắc nghiệm tâm lý nên để thực hiện nó một cách chính xác nhất bạn nên hiểu rõ:",
              listItem: [
                {
                  text: "Kết quả của một trắc nghiệm tâm lý có thể phụ thuộc vào tâm trạng hay tình trạng sức khỏe của bạn. Tốt nhất hãy thực hiện nó trong một trạng thái tâm lý và thể chất bình ổn nhất. Nếu bạn đang quá vui, buồn, phấn khích, bực bội hay đang trong quá trình thay đổi nhận thức thì sẽ không đảm bảo được độ chính xác.",
                },
                {
                  text: "Trung thực khi trả lời câu hỏi, phân biệt giữa lý tưởng và thực tế. Kết quả của trắc nghiệm hoàn toàn là câu chuyện cá nhân của bạn, đừng để yếu tố bên ngoài tác động đến câu trả lời.",
                },
                {
                  text: "Chúng ta trưởng thành và thay đổi từng ngày, kết quả trắc nghiệm tất nhiên có thể từ đó mà thay đổi tùy theo nhận thức và thế giới quan của mỗi người. Tốt nhất hãy làm bài kiểm tra nhiều lần và điều độ để có cái nhìn tổng quát và chính xác nhất.",
                },
              ],
            },
            {
              content: "Kết quả của bài trắc nghiệm MI sau đây cung cấp thông tin để bạn có lựa chọn nghề nghiệp thích hợp dựa trên các loại hình trí thông minh. Mọi dữ liệu đưa ra đều mang tính chất tham khảo, quyết định thuộc về bạn. TopCV sẽ luôn đồng hành cùng bạn trong mọi lựa chọn nghề nghiệp. Với một hành trang vững vàng, bạn hãy tin tưởng rằng mọi kế hoạch đều sẽ thành công!",
              listItem: [
              ],
            },
          ],  
        },
      ],
      listPerson: [
        {
          name: "Trí thông minh Logic",
          text: "Logic",
          image: "https://www.topcv.vn/v3/images/mi-test/intel/mi-01.png",
          content: "Có khả năng lý luận với các khái niệm liên quan đến các mối quan hệ toán học để đi đến kết luận chính xác, có thể được nhận ra thông qua tốc độ, từ vựng, cú pháp, không gian, và sự phức tạp của tính toán số trong các nhiệm vụ. Có thể nhanh chóng tính toán số học đơn giản, như cộng, trừ và nhân (liên quan đến bộ nhớ tạm thời và tốc độ nhận thức).",
          aria_controls: "collapseExample", 
          href_aria: "#collapseExample",
          data_bs: "collapse",
        },
        {
          name: "Thấu hiểu Nội tâm",
          text: "Intrapersonal",
          image: "https://www.topcv.vn/v3/images/mi-test/intel/mi-02.png",
          content: "Có khả năng hiểu và có mô hình hóa bản thân, nhận thức được những khao khát, nỗi sợ, và năng lực, cũng như sử dụng những hiểu biết đó để đưa ra các quyết định phù hợp với bản thân.",
          aria_controls: "collapseExample2", 
          href_aria: "#collapseExample2",
          data_bs: "collapse",
        },
        {
          name: "Tư duy Triết học",
          text: "Existential",
          image: "https://www.topcv.vn/v3/images/mi-test/intel/mi-03.png",
          content: "Là chỉ dấu để nhận định xem một cá nhân có khả năng nghiên cứu sâu vào một lĩnh vực cụ thể nào đó không.",
          aria_controls: "collapseExample3", 
          href_aria: "#collapseExample3",
          data_bs: "collapse",
        },
        {
          name: "Vận động Cơ thể",
          text: "Bodily",
          image: "https://www.topcv.vn/v3/images/mi-test/intel/mi-05.png",
          content: "Khả năng sử dụng toàn thân hay một phần thân thể để giải quyết vấn đề, đạt được mục đích hay tạo ra sản phẩm.",
          aria_controls: "collapseExample4", 
          href_aria: "#collapseExample4",
          data_bs: "collapse",
        },
        {
          name: "Thấu hiểu Thiên nhiên",
          text: "Natural",
          image: "https://www.topcv.vn/v3/images/mi-test/intel/mi-06.png",
          content: "Có khả năng hiểu được thiên nhiên, nhận ra và phân loại các loài cây, động vật và các sự vật hiện tượng trong tự nhiên.",
          aria_controls: "collapseExample5", 
          href_aria: "#collapseExample5",
          data_bs: "collapse",
        },
        {
          name: "Ngôn ngữ",
          text: "Linguistic",
          image: "https://www.topcv.vn/v3/images/mi-test/intel/mi-07.png",
          content: "Kỹ năng ăn nói phát triển tốt và có sự nhạy cảm với âm điệu và ý nghĩa của từ ngữ, nhạy cảm với các ngôn ngữ nói và viết và có khả năng sử dụng ngôn ngữ để đạt được mục đích, cũng như học ngôn ngữ mới khá nhanh; Hay để ý câu chữ, cảm thấy cần thiết phải chọn được từ đúng cho đúng hoàn cảnh hay cảm xúc, cũng có lúc 'sáng tạo' ra các từ mới.",
          aria_controls: "collapseExample6", 
          href_aria: "#collapseExample6",
          data_bs: "collapse",
        },
        {
          name: "Cảm thụ Âm nhạc",
          text: "Musical",
          image: "https://www.topcv.vn/v3/images/mi-test/intel/mi-08.png",
          content: "Khả năng tạo ra và nhận ra nhịp điệu và độ cao: phân biệt sắc thái và trình tự của các tông liên quan đến các thuộc tính cơ bản như độ cao, cường độ, thời gian và nhịp điệu; có khả năng hiểu và đồng điệu cảm xúc với các bản nhạc giao hưởng, có khả năng cảm thụ nhiều dòng nhạc khác nhau và ghi nhớ giai điệu.",
          aria_controls: "collapseExample7", 
          href_aria: "#collapseExample7",
          data_bs: "collapse",
        },
        {
          name: "Trí thông minh không gian",
          text: "Spatial",
          image: "https://www.topcv.vn/v3/images/mi-test/intel/mi-09.png",
          content: "Khả năng nhận diện cả mô hình thị giác lớn và nhỏ: hình dung không gian và quét không gian.Hình dung không gian là khả năng tưởng tượng sự chuyển động của một vật thể và thường được biểu diễn bằng các đoạn hình động hay video ngắn, hoặc khả năng tưởng tượng ra nhiều góc nhìn của một vật cố định (tưởng tượng động); Quét không gian là khả năng quét một trường một cách nhanh chóng, theo dõi đường đi, và từ chối các đường dẫn sai - như đọc bản đồ, bản đồ họa tiết hoặc đồ thị (tưởng tượng tĩnh).",
          aria_controls: "collapseExample8", 
          href_aria: "#collapseExample8",
          data_bs: "collapse",
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
          width: "100%",
          height: "75%",
        };
      } else if (this.windowSize.x < 960) {
        this.common.image = {
          width: "100%",
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
.float-left {
  float: left;
}
.float-right {
  float: right;
}
.mbti-padding {
  padding: 0 15px;
}
.text-font p,
b{
  font-size: 13px;
  text-align: justify !important;
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
  width: 90px;
  height: 90px;
  border: 1px solid #dfdfdf;
  padding: 3px;
  border-radius: 50%;
}

.text-font .text-gray {
  color: #999999;
  text-align: justify;
  font-size: 13px;
}
.form-size {
  padding: 10px;
  margin-bottom: 5px;
}
.box-white {
    background-color: #fff;
}
.box {
    padding: 20px !important;
}
.border-panel {
  border-color: #fff;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.125);;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}
.img-right-box {
  min-height: 90px;
  background-repeat: no-repeat;
}
.border-panel .card {
  border-radius: 0 !important;
}
.panel-span {
  font-size: 14px;
  color: #999;
}
.panel-collapse {
    font-size: 12px;
}
</style>
