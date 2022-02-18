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
                  class="col-sm-padding"
                  v-for="(items, j) in item.listSub"
                  :key="j"
                  sm="6"
                >
                  <div class="form-size box-gray">
                    <div class="form-size-text">
                      <p>
                        <a :href="items.link" :title="items.title">
                          <img
                            :src="items.image"
                            :title="items.titleimg"
                            class="img-bot"
                          />
                        </a>
                      </p>
                      <h4>
                        <a :href="items.link" :title="items.title">
                          {{ items.name }}
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
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách ISTJ",
              content:
                "Đây là nhóm tính cách phổ biến nhất, có đến 13% dân số trên thế giới thuộc nhóm tính cách này. Phương châm sống của họ là “Chỉ có sự thật”, tính cách của ISTJ là rất tôn trọng sự thật, họ có xu hướng tiếp thu rất nhiều thông tin và nhớ rất lâu. Một trong những yếu tố góp phần quan trọng làm cho ISTJ có khả năng phân tích các sự vật, hiện tượng, con người ở môi trường xung quanh rất tốt đó là nhờ đặc tính S.",
            },
            {
              name: "ISFJ - Người nuôi dưỡng",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/isfj.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-isfj.html",
              title: "Phân tích nhóm tính cách ISFJ - Người nuôi dưỡng",
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách ISFJ",
              content:
                "Trong tất cả các loại tính cách thì ISFJ là loại tính cách có lòng vị tha nhất. Có khoảng 12.5% dân số trên thế giới mang loại tính cách này. Nhiều ISFJ tìm kiếm sự nghiệp trong lĩnh vực học thuật, y học, công tác xã hội hoặc tư vấn; đặc điểm tính cách của họ cũng tỏa sáng trong vai trò hành chính - văn phòng, hoặc thậm chí trong các lĩnh vực có phần bất ngờ như thiết kế nội thất.",
            },
            {
              name: "ISFP - Người nghệ sĩ",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/isfp.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-isfp.html",
              title: "Phân tích nhóm tính cách ISFP - Người nghệ sĩ",
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách ISFP",
              content:
                "Có khoảng 8% dân số mang tính cách này. Tính cách ISFP này thường được xem như là tự phát nhất và không thể đoán trước của tất cả các loại hướng nội. Đặc tính nổi bậc của họ đó là sự thay đổi",
            },
            {
              name: "ISTP - Nhà kỹ thuật",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/istp.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-istp.html",
              title: "Phân tích nhóm tính cách ISTP - Nhà kỹ thuật",
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách ISTP",
              content:
                "Có khoảng 5% dân số mang tính cách này, ISTP sở hữu nhiều đặc điểm thú vị có thể dễ dàng ngăn chặn người ngoài cuộc thăm dò họ. Họ thường rất lý trí và suy nghĩ logic, nhưng cũng có thể làm ngạc nhiên mọi người bằng cách đột nhiên trở nên tự phát và nhiệt tình nhiều hơn.",
            },
            {
              name: "INFP - Người lý tưởng hóa",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/infp.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-infp.html",
              title: "Phân tích nhóm tính cách INFP - Người lý tưởng hóa",
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách INFP",
              content:
                "Có khoảng 4,5% dân số mang tính cách này, các INFP thường được coi là điềm tĩnh, kín đáo hoặc thậm chí nhút nhát. Tuy nhiên, đừng để vẻ bề ngoài đánh lừa. Dù các INFP có thể hơi thận trọng, nhưng không thể xem thường ngọn lửa và sự đam mê bên trong họ. Những người có loại tính cách này là thực sự rất trìu mến, một đặc điểm không thường thấy ở các loại tính cách khác.",
            },
            {
              name: "INFJ - Người che chở",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/infj.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-infj.html",
              title: "Phân tích nhóm tính cách INFJ - Người che chở",
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách INFJ",
              content:
                "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống.",
            },
            {
              name: "INTJ - Nhà khoa học",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/intj.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-intj.html",
              title: "Phân tích nhóm tính cách INTJ - Nhà khoa học",
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách INTJ",
              content:
                "INTJ là một trong những loại tính cách hiếm nhất và thú vị nhất - chỉ chiếm khoảng 2% dân số Hoa Kỳ (INTJ nữ là đặc biệt hiếm - chỉ 0,8%), Các INTJ thường được xem là rất thông minh và bí ẩn một cách khó hiểu. Những người mang tính cách INTJ thường tỏa ra sự tự tin, dựa trên kho lưu trữ khổng lồ của họ về kiến thức bao trùm nhiều lĩnh vực và phạm vi khác nhau.",
            },
            {
              name: "INTP - Nhà tư duy",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/intp.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-intp.html",
              title: "Phân tích nhóm tính cách INTP - Nhà tư duy",
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách INTP",
              content:
                "Trong tất cả các loại tính cách thì ISFJ là loại tính cách có lòng vị tha nhất. Có khoảng 12.5% dân số trên thế giới mang loại tính cách này. Nhiều ISFJ tìm kiếm sự nghiệp trong lĩnh vực học thuật, y học, công tác xã hội hoặc tư vấn",
            },
            {
              name: "ENFJ - Người cho đi",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/enfj.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-enfj.html",
              title: "Phân tích nhóm tính cách ENFJ - Người cho đi",
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách ENFJ",
              content:
                "Có khoảng 2% dân số mang loại tính cách này, ENFJ là loại tính cách có sức ảnh hưởng rất lớn. Các ENFJ thường rất lôi cuốn và có tài hùng biện, họ dễ dàng truyền đạt ý tưởng, quan điểm của họ với mọi người. ENFJ quan tâm đến mọi người một cách chân thành, những người xung quanh ENFJ thường thấy chúng rất truyền cảm và dễ thương.",
            },
            {
              name: "ENFP - Người truyền cảm hứng",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/enfp.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-enfp.html",
              title: "Phân tích nhóm tính cách ENFP - Người truyền cảm hứng",
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách ENFP",
              content:
                "Có khoảng 7% dân số mang loại tính cách này. Những người mang tính cách ENFP thường rất tò mò, hiếu kỳ, duy tâm và khá bí ẩn. Họ tìm kiếm ý nghĩa và rất quan tâm đến động cơ của người khác, họ thấy cuộc sống thật rộng lớn, nhiều câu đố phức tạp ở những nơi mà mọi thứ được kết nối.",
            },
            {
              name: "ENTJ - Nhà điều hành",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/entj.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-entj.html",
              title: "Phân tích nhóm tính cách ENTJ - Nhà điều hành",
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách ENTJ",
              content:
                "Có khoảng 3% dân số mang tính cách này, ENTJ có cá tính rất lôi cuốn, lý trí và nhạy bén. Họ rất giỏi lãnh đạo và truyền cảm hứng cho người khác. ENTJ là loại tính cách có khả năng lãnh đạo tốt nhất trong các loại tính cách. Theo ENTJ thì 'Không có gì là không thể nếu bạn quyết tâm'.",
            },
            {
              name: "ENTP - Người nhìn xa",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/entp.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-entp.html",
              title: "Phân tích nhóm tính cách ENTP - Người nhìn xa",
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách ENTP",
              content:
                "Có khoảng 3% dân số mang loại tính cách này, các ENTP rất thích tranh luận, họ không quan tâm đang tranh luận về cái gì, miễn là nó thú vị. Họ có thể không thực sự ủng hộ ý tưởng họ đang tranh cãi, nhưng có thể quyết định đi ngược lại quan điểm hiện hành, họ xem điều này như là một bài tập tinh thần.",
            },
            {
              name: "ESFJ - Người quan tâm",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/esfj.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-esfj.html",
              title: "Phân tích nhóm tính cách ESFJ - Người quan tâm",
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách ESFJ",
              content:
                "3 tính cách đặc trưng của ESFJ là: Thực tế, vị tha và hòa đồng. Có khoảng 12% dân số mang tính cách này. Các ESFJ muốn được phục vụ người khác và họ rất nghiêm túc khi đưa ra các cam kết. Các ESFJ rất giỏi làm việc nhóm, họ luôn cảm nhận được sự căng thẳng và không hòa hợp. Họ rất truyền thống, làm hết sức mình để hỗ trợ và bảo vệ quyền và pháp luật.",
            },
            {
              name: "ESFP - Người trình diễn",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/esfp.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-isfj.html",
              title: "Phân tích nhóm tính cách ESFP - Người trình diễn",
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách IESFP",
              content:
                "Có khoảng 7.5% dân số mang tính cách này, Các ESFP thích được ở trung tâm của sự chú ý và họ cũng thích cả những điều đơn giản nhất - Sự vui vẻ và bản chất bốc đồng của họ thường rất hấp dẫn những người khác. Những người có loại cá tính này không bao giờ hết những ý tưởng và sự tò mò của họ là không giới hạn - họ sẽ luôn luôn là một trong những người đầu tiên thử một cái gì đó mới và hấp dẫn.",
            },
            {
              name: "ESTJ - Người giám hộ",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/istj.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-estj.html",
              title: "Phân tích nhóm tính cách ESTJ - Người giám hộ",
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách ESTJ",
              content:
                "Có khoảng 11,5% dân số mang tính cách này, những người mang loại tính cách ESTJ cảm thấy cần phải gắn kết với một điều gì đó - nó có thể là một gia đình, một cộng đồng hay một số nhóm xã hội khác. Họ thích 'việc tổ chức' của người khác và đảm bảo rằng họ sẽ tuân thủ các quy tắc truyền thống hoặc đưa ra bởi những người có thẩm quyền.",
            },
            {
              name: "ESTP - Người thực thi",
              image: "https://www.topcv.vn/images/mbti/web-v1.1/estp.png",
              link: "https://www.topcv.vn/mbti/nhom-tinh-cach-estp.html",
              title: "Phân tích nhóm tính cách ESTP - Người thực thi",
              titleimg:
                "Tổng quan &amp; sự nghiệp dành cho nhóm tính cách ESTP",
              content:
                "Có khoảng 4% dân số mang tính cách này, những người có các loại tính cách ESTP rất tập thể, tự phát và thẳng thắn. Đôi khi họ bị xem là thô lỗ hoặc thiếu thận trọng, nhưng thực sự các ESTP yêu thích hành động và luôn luôn nhảy ngay vào trung tâm của 'cơn bão'.",
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

.col-sm-padding {
  padding: 2px;
}

.box-gray {
  background-color: #fafafafa;
}
.form-size-text {
  max-height: 154px;
  overflow: hidden;
}
</style>
