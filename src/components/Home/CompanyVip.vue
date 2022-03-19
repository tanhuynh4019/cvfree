<template>
  <div class="company-vip mt-10" v-resize="onResize">
    <v-container>
      <h6>Các công ty tuyển dụng hàng đầu</h6>
      <vueper-slides
      autoplay
        :slide-multiple="true"
        :bullets="bullets"
        class="no-shadow"
        :visible-slides="visibleSliders"
        :slide-ratio="slideRatio"
        :dragging-distance="70"
      >
        <vueper-slide v-for="(item, i) in companys" :key="i">
          <template #content>
            <div class="p-1">
              <v-card
                height="200"
                style="box-shadow: 0px 0px 0px 0px"
                class="border p-2"
              >
                <center :style="`color: ${item.color}`">{{ `${item.name.substring(0,30)}...` }}</center>
                <v-row class="fill-height" align="center" justify="center">
                  <v-img
                    max-width="70%"
                    :src="item.srcLogo"
                  ></v-img>
                </v-row>
              </v-card>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </v-container>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "CompanyVip",
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slideRatio: 1 / 5,
      visibleSliders: 6,
      bullets: true,
      companys: [
        {
          _id: "62331a6869ae2420d3f2de7f",
          srcBanner:
            "https://static.topcv.vn/company_covers/I8AiDcfx3eWuttlWfUyF.jpg",
          srcLogo:
            "https://cdn.topcv.vn/135/company_logos/cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong-61a05758415e1.jpg",
          name: "Công ty cổ phần Giáo Dục và Công Nghệ Hùng Vương",
          introduct:
            "<p>Chỉ sau 3 năm thành lập, VUIHOC đã vươn lên mạnh mẽ, lọt vào TOP các Công ty trong lĩnh vực EdTech, trở thành nền tảng học tập trực tuyến hàng đầu dành cho học sinh từ lớp 1 đến lớp 12, cung cấp các khoá học online gồm Toán, Tiếng Việt, Tiếng Anh, Lý, Hoá, Sinh</p><p>VUIHOC cũng vinh dự là đơn vị giáo dục duy nhất lọt vào vòng chung kết cuộc thi sáng tạo toàn cầu Viet Solution 2019. Đặc biệt, tháng 8.2021, VUIHOC chính thức nhận khoản đầu tư của quỹ đầu tư danh tiếng Do Ventures<br><br>Các sản phẩm của VUIHOC<br>- App học tập trực tuyến vuihoc trên android và iOS<br>- Website học tập https://vuihoc.vn và website học tiếng anh https://tienganhvuihoc.vn<br>- Hệ thống CRM nội bộ quản trị toàn bộ hoạt động marketing, sales, CSKH</p>",
          foundedYear: 2019,
          averageAge: 25,
          companySizeStart: 100,
          companySizeEnd: 499,
          srcVideoYoutube: "https://www.youtube.com/embed/clNtRFe3LwQ",
          phone: "0967156741",
          website: " https://vuihoc.vn/",
          address: "Tòa Rivera Park, 69 Vũ Trọng Phụng, Thanh Xuân, Hà Nội.",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Toa+Rivera+Park,69+Vu+Trong+Phung,Thanh+Xuan,Ha+Noi.&zoom=15&language=vi",
          career: "Giáo dục / Đào tạo",
          careers: ["Giáo dục / Đào tạo", "Tư vấn", "Kinh doanh / Bán hàng"],
          location: "Hà Nội",
          locations: ["Hà Nội", "Hồ Chí Minh", "Bình Dương"],
          idEmployer: "6233192269ae2420d3f2de53",
          isActive: true,
          dateCreate: "2022-03-17T11:17:57.054Z",
          dateEdit: "2022-03-17T13:23:56.163Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          color: "#29A0D7FF",
          slug: "cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong",
        },
        {
          _id: "62317dba060985b7e565f5a8",
          srcBanner:
            "https://static.topcv.vn/company_covers/cong-ty-tnhh-cmc-global-5e3dc09f007df09930dcb7b36f9cbd11-60c33177cb4c7.jpg",
          srcLogo:
            "https://cdn.topcv.vn/140/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          name: " Công ty TNHH CMC GLOBAL",
          introduct:
            "<p>CMC Global ra đời từ kinh nghiệm 25 năm trong lĩnh vực ICT và hơn 10 năm kinh nghiệm trong lĩnh vực Outsourcing của Tập đoàn công nghệ CMC, với sứ mệnh trở thành đơn vị cung cấp nhân lực kỹ sư phần mềm chất lượng cao, cung cấp các giải pháp, dịch vụ CNTT cho thị trường quốc tế. Hiện CMC Global đang sở hữu đến 700++ nhân viên, cùng một công ty thành viên tại Nhật Bản.<br>&nbsp;</p><p>Tập đoàn công nghệ CMC cùng CMC Global tự hào là một trong những doanh nghiệp hàng đầu Việt Nam trong lĩnh vực phát triển, cung cấp các giải pháp và dịch vụ phần mềm. Chia sẻ chung những tiêu chí tiên quyết cho sự phát triển của Tập đoàn CMC: Sáng tạo, Chuyên nghiệp, Đồng đội, CMC Global luôn nỗ lực không ngừng để xây dựng một tập thể vững mạnh, tiên phong trong nền công nghệ Việt Nam và ngày một vươn xa ra thế giới.</p><p>Với mục tiêu đưa các sản phẩm và dịch vụ công nghệ cao của CMC ra thế giới, CMC Global đang xây dựng những nền móng đầu tiên với tham vọng: có ít nhất 2.000 người làm việc ở nước ngoài vào năm 2022; doanh thu phần mềm và dịch vụ từ thị trường xuất khẩu lớn hơn thị trường trong nước; có nhiều sản phẩm và dịch vụ đạt tiêu chuẩn hàng đầu thế giới. Trong tương lai, ngoài công ty thành viên CMC Japan tại Nhật Bản, CMC Global sẽ mở thêm các chi nhánh tại các nước châu Á như Singapore, Malaysia,….</p><p>Chiến lược đầu tư của CMC Global được định vị có phần khác biệt so với các công ty outsourcing cũng ngành ở thị trường Việt Nam. CMC Global sẽ chú trọng vào việc phát triển nguồn lực, chuẩn hóa qui trình cung cấp dịch vụ và phát triển phần mềm, đào tạo nhân sự chất lượng cao, cùng lúc thu hút số lượng lớn các nhân tài trong lĩnh vực công nghệ thông tin. Đồng thời, CMC Global cũng sẽ là đại diện, cầu nối cho các công ty thành viên của CMC trong việc cung cấp các giải pháp và dịch vụ tích hợp trọn gói ra thế giới.</p>",
          foundedYear: 1997,
          averageAge: 25,
          companySizeStart: 500,
          companySizeEnd: 1000,
          srcVideoYoutube: "",
          phone: "0924404019",
          website: "http://cmcglobal.com.vn/",
          address: "Tầng 8-9, Tòa CMC, Duy Tân, Cầu Giấy, Hà Nội",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Tang+8-9,Toa+CMC,Duy+Tan,Cau+Giay,Ha+Noi&zoom=15&language=vi",
          career: "Du lịch",
          careers: ["Du lịch"],
          location: "Hà Nội",
          locations: ["Bình Dương", "TP.HCM", "Hà Nội"],
          idEmployer: "62317d1f060985b7e565f5a1",
          isActive: true,
          dateCreate: "2022-03-16T05:58:00.946Z",
          dateEdit: "2022-03-16T05:58:00.946Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          color: "#C50E28FF",
          slug: "cong-ty-tnhh-cmc-global",
        },
        {
          _id: "6230b93f5b34519b01d26daf",
          srcBanner:
            "https://static.topcv.vn/company_covers/4Nri4uubKyXnQ8iC1Edr.jpg",
          srcLogo:
            "https://cdn.topcv.vn/140/company_logos/pys-travel-579bbc24b782f_rs.jpg",
          name: "PYS travel",
          introduct:
            '<p>PYS travel được thành lập từ năm 2010, hoạt động trong lĩnh vực dịch vụ và du lịch. Sau 6 năm phát triển, PYS đã được biết đến là công ty tiên phong phát triển các tuyến tour đột phá, sáng tạo trong thị trường du lịch nội địa và dẫn đầu về sản phẩm tour khám phá Đông Tây Bắc.&nbsp;</p><p>Môi trường làm việc PYS travel năng động, trẻ trung, thường xuyên có các hoạt động team building để kết nối các thành viên trong công ty.<br>&nbsp;</p><p>Năm 2014, PYS travel vinh dự được nhận bằng khen Doanh nghiệp tiêu biểu Hà Nội Vàng.&nbsp;<br>&nbsp;</p><p>Năm 2016, Công ty vinh dự được nhận danh hiệu "Doanh nghiệp trẻ khởi nghiệp xuất sắc" do Hội doanh nhân trẻ Việt Nam trao tặng.</p>',
          foundedYear: 2014,
          averageAge: 25,
          companySizeStart: 400,
          companySizeEnd: 1500,
          srcVideoYoutube: "",
          phone: "0924404019",
          website: " http://pystravel.com",
          address:
            "Phòng 502A, tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Đống Đa, Hà Nội",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Phong+502A,toa+nha+M3-M4,91+Nguyen+Chi+Thanh,Dong+Da,Ha+Noi&zoom=15&language=vi",
          career: "Du lịch",
          careers: ["Du lịch"],
          location: "Hà Nội",
          locations: ["Hà Nội", "TP.HCM", "Bình Dương"],
          idEmployer: "6230a1f270ef6b08e0ec32bb",
          isActive: true,
          dateCreate: "2022-03-15T16:03:24.418Z",
          dateEdit: "2022-03-15T16:03:24.418Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          slug: "pys-travel",
        },
        {
          _id: "62331a6869ae2420d3f2de7f",
          srcBanner:
            "https://static.topcv.vn/company_covers/I8AiDcfx3eWuttlWfUyF.jpg",
          srcLogo:
            "https://cdn.topcv.vn/135/company_logos/cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong-61a05758415e1.jpg",
          name: "Công ty cổ phần Giáo Dục và Công Nghệ Hùng Vương",
          introduct:
            "<p>Chỉ sau 3 năm thành lập, VUIHOC đã vươn lên mạnh mẽ, lọt vào TOP các Công ty trong lĩnh vực EdTech, trở thành nền tảng học tập trực tuyến hàng đầu dành cho học sinh từ lớp 1 đến lớp 12, cung cấp các khoá học online gồm Toán, Tiếng Việt, Tiếng Anh, Lý, Hoá, Sinh</p><p>VUIHOC cũng vinh dự là đơn vị giáo dục duy nhất lọt vào vòng chung kết cuộc thi sáng tạo toàn cầu Viet Solution 2019. Đặc biệt, tháng 8.2021, VUIHOC chính thức nhận khoản đầu tư của quỹ đầu tư danh tiếng Do Ventures<br><br>Các sản phẩm của VUIHOC<br>- App học tập trực tuyến vuihoc trên android và iOS<br>- Website học tập https://vuihoc.vn và website học tiếng anh https://tienganhvuihoc.vn<br>- Hệ thống CRM nội bộ quản trị toàn bộ hoạt động marketing, sales, CSKH</p>",
          foundedYear: 2019,
          averageAge: 25,
          companySizeStart: 100,
          companySizeEnd: 499,
          srcVideoYoutube: "https://www.youtube.com/embed/clNtRFe3LwQ",
          phone: "0967156741",
          website: " https://vuihoc.vn/",
          address: "Tòa Rivera Park, 69 Vũ Trọng Phụng, Thanh Xuân, Hà Nội.",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Toa+Rivera+Park,69+Vu+Trong+Phung,Thanh+Xuan,Ha+Noi.&zoom=15&language=vi",
          career: "Giáo dục / Đào tạo",
          careers: ["Giáo dục / Đào tạo", "Tư vấn", "Kinh doanh / Bán hàng"],
          location: "Hà Nội",
          locations: ["Hà Nội", "Hồ Chí Minh", "Bình Dương"],
          idEmployer: "6233192269ae2420d3f2de53",
          isActive: true,
          dateCreate: "2022-03-17T11:17:57.054Z",
          dateEdit: "2022-03-17T13:23:56.163Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          color: "#29A0D7FF",
          slug: "cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong",
        },
        {
          _id: "62317dba060985b7e565f5a8",
          srcBanner:
            "https://static.topcv.vn/company_covers/cong-ty-tnhh-cmc-global-5e3dc09f007df09930dcb7b36f9cbd11-60c33177cb4c7.jpg",
          srcLogo:
            "https://cdn.topcv.vn/140/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          name: " Công ty TNHH CMC GLOBAL",
          introduct:
            "<p>CMC Global ra đời từ kinh nghiệm 25 năm trong lĩnh vực ICT và hơn 10 năm kinh nghiệm trong lĩnh vực Outsourcing của Tập đoàn công nghệ CMC, với sứ mệnh trở thành đơn vị cung cấp nhân lực kỹ sư phần mềm chất lượng cao, cung cấp các giải pháp, dịch vụ CNTT cho thị trường quốc tế. Hiện CMC Global đang sở hữu đến 700++ nhân viên, cùng một công ty thành viên tại Nhật Bản.<br>&nbsp;</p><p>Tập đoàn công nghệ CMC cùng CMC Global tự hào là một trong những doanh nghiệp hàng đầu Việt Nam trong lĩnh vực phát triển, cung cấp các giải pháp và dịch vụ phần mềm. Chia sẻ chung những tiêu chí tiên quyết cho sự phát triển của Tập đoàn CMC: Sáng tạo, Chuyên nghiệp, Đồng đội, CMC Global luôn nỗ lực không ngừng để xây dựng một tập thể vững mạnh, tiên phong trong nền công nghệ Việt Nam và ngày một vươn xa ra thế giới.</p><p>Với mục tiêu đưa các sản phẩm và dịch vụ công nghệ cao của CMC ra thế giới, CMC Global đang xây dựng những nền móng đầu tiên với tham vọng: có ít nhất 2.000 người làm việc ở nước ngoài vào năm 2022; doanh thu phần mềm và dịch vụ từ thị trường xuất khẩu lớn hơn thị trường trong nước; có nhiều sản phẩm và dịch vụ đạt tiêu chuẩn hàng đầu thế giới. Trong tương lai, ngoài công ty thành viên CMC Japan tại Nhật Bản, CMC Global sẽ mở thêm các chi nhánh tại các nước châu Á như Singapore, Malaysia,….</p><p>Chiến lược đầu tư của CMC Global được định vị có phần khác biệt so với các công ty outsourcing cũng ngành ở thị trường Việt Nam. CMC Global sẽ chú trọng vào việc phát triển nguồn lực, chuẩn hóa qui trình cung cấp dịch vụ và phát triển phần mềm, đào tạo nhân sự chất lượng cao, cùng lúc thu hút số lượng lớn các nhân tài trong lĩnh vực công nghệ thông tin. Đồng thời, CMC Global cũng sẽ là đại diện, cầu nối cho các công ty thành viên của CMC trong việc cung cấp các giải pháp và dịch vụ tích hợp trọn gói ra thế giới.</p>",
          foundedYear: 1997,
          averageAge: 25,
          companySizeStart: 500,
          companySizeEnd: 1000,
          srcVideoYoutube: "",
          phone: "0924404019",
          website: "http://cmcglobal.com.vn/",
          address: "Tầng 8-9, Tòa CMC, Duy Tân, Cầu Giấy, Hà Nội",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Tang+8-9,Toa+CMC,Duy+Tan,Cau+Giay,Ha+Noi&zoom=15&language=vi",
          career: "Du lịch",
          careers: ["Du lịch"],
          location: "Hà Nội",
          locations: ["Bình Dương", "TP.HCM", "Hà Nội"],
          idEmployer: "62317d1f060985b7e565f5a1",
          isActive: true,
          dateCreate: "2022-03-16T05:58:00.946Z",
          dateEdit: "2022-03-16T05:58:00.946Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          color: "#C50E28FF",
          slug: "cong-ty-tnhh-cmc-global",
        },
        {
          _id: "6230b93f5b34519b01d26daf",
          srcBanner:
            "https://static.topcv.vn/company_covers/4Nri4uubKyXnQ8iC1Edr.jpg",
          srcLogo:
            "https://cdn.topcv.vn/140/company_logos/pys-travel-579bbc24b782f_rs.jpg",
          name: "PYS travel",
          introduct:
            '<p>PYS travel được thành lập từ năm 2010, hoạt động trong lĩnh vực dịch vụ và du lịch. Sau 6 năm phát triển, PYS đã được biết đến là công ty tiên phong phát triển các tuyến tour đột phá, sáng tạo trong thị trường du lịch nội địa và dẫn đầu về sản phẩm tour khám phá Đông Tây Bắc.&nbsp;</p><p>Môi trường làm việc PYS travel năng động, trẻ trung, thường xuyên có các hoạt động team building để kết nối các thành viên trong công ty.<br>&nbsp;</p><p>Năm 2014, PYS travel vinh dự được nhận bằng khen Doanh nghiệp tiêu biểu Hà Nội Vàng.&nbsp;<br>&nbsp;</p><p>Năm 2016, Công ty vinh dự được nhận danh hiệu "Doanh nghiệp trẻ khởi nghiệp xuất sắc" do Hội doanh nhân trẻ Việt Nam trao tặng.</p>',
          foundedYear: 2014,
          averageAge: 25,
          companySizeStart: 400,
          companySizeEnd: 1500,
          srcVideoYoutube: "",
          phone: "0924404019",
          website: " http://pystravel.com",
          address:
            "Phòng 502A, tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Đống Đa, Hà Nội",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Phong+502A,toa+nha+M3-M4,91+Nguyen+Chi+Thanh,Dong+Da,Ha+Noi&zoom=15&language=vi",
          career: "Du lịch",
          careers: ["Du lịch"],
          location: "Hà Nội",
          locations: ["Hà Nội", "TP.HCM", "Bình Dương"],
          idEmployer: "6230a1f270ef6b08e0ec32bb",
          isActive: true,
          dateCreate: "2022-03-15T16:03:24.418Z",
          dateEdit: "2022-03-15T16:03:24.418Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          slug: "pys-travel",
        },
        {
          _id: "62331a6869ae2420d3f2de7f",
          srcBanner:
            "https://static.topcv.vn/company_covers/I8AiDcfx3eWuttlWfUyF.jpg",
          srcLogo:
            "https://cdn.topcv.vn/135/company_logos/cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong-61a05758415e1.jpg",
          name: "Công ty cổ phần Giáo Dục và Công Nghệ Hùng Vương",
          introduct:
            "<p>Chỉ sau 3 năm thành lập, VUIHOC đã vươn lên mạnh mẽ, lọt vào TOP các Công ty trong lĩnh vực EdTech, trở thành nền tảng học tập trực tuyến hàng đầu dành cho học sinh từ lớp 1 đến lớp 12, cung cấp các khoá học online gồm Toán, Tiếng Việt, Tiếng Anh, Lý, Hoá, Sinh</p><p>VUIHOC cũng vinh dự là đơn vị giáo dục duy nhất lọt vào vòng chung kết cuộc thi sáng tạo toàn cầu Viet Solution 2019. Đặc biệt, tháng 8.2021, VUIHOC chính thức nhận khoản đầu tư của quỹ đầu tư danh tiếng Do Ventures<br><br>Các sản phẩm của VUIHOC<br>- App học tập trực tuyến vuihoc trên android và iOS<br>- Website học tập https://vuihoc.vn và website học tiếng anh https://tienganhvuihoc.vn<br>- Hệ thống CRM nội bộ quản trị toàn bộ hoạt động marketing, sales, CSKH</p>",
          foundedYear: 2019,
          averageAge: 25,
          companySizeStart: 100,
          companySizeEnd: 499,
          srcVideoYoutube: "https://www.youtube.com/embed/clNtRFe3LwQ",
          phone: "0967156741",
          website: " https://vuihoc.vn/",
          address: "Tòa Rivera Park, 69 Vũ Trọng Phụng, Thanh Xuân, Hà Nội.",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Toa+Rivera+Park,69+Vu+Trong+Phung,Thanh+Xuan,Ha+Noi.&zoom=15&language=vi",
          career: "Giáo dục / Đào tạo",
          careers: ["Giáo dục / Đào tạo", "Tư vấn", "Kinh doanh / Bán hàng"],
          location: "Hà Nội",
          locations: ["Hà Nội", "Hồ Chí Minh", "Bình Dương"],
          idEmployer: "6233192269ae2420d3f2de53",
          isActive: true,
          dateCreate: "2022-03-17T11:17:57.054Z",
          dateEdit: "2022-03-17T13:23:56.163Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          color: "#29A0D7FF",
          slug: "cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong",
        },
        {
          _id: "62317dba060985b7e565f5a8",
          srcBanner:
            "https://static.topcv.vn/company_covers/cong-ty-tnhh-cmc-global-5e3dc09f007df09930dcb7b36f9cbd11-60c33177cb4c7.jpg",
          srcLogo:
            "https://cdn.topcv.vn/140/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          name: " Công ty TNHH CMC GLOBAL",
          introduct:
            "<p>CMC Global ra đời từ kinh nghiệm 25 năm trong lĩnh vực ICT và hơn 10 năm kinh nghiệm trong lĩnh vực Outsourcing của Tập đoàn công nghệ CMC, với sứ mệnh trở thành đơn vị cung cấp nhân lực kỹ sư phần mềm chất lượng cao, cung cấp các giải pháp, dịch vụ CNTT cho thị trường quốc tế. Hiện CMC Global đang sở hữu đến 700++ nhân viên, cùng một công ty thành viên tại Nhật Bản.<br>&nbsp;</p><p>Tập đoàn công nghệ CMC cùng CMC Global tự hào là một trong những doanh nghiệp hàng đầu Việt Nam trong lĩnh vực phát triển, cung cấp các giải pháp và dịch vụ phần mềm. Chia sẻ chung những tiêu chí tiên quyết cho sự phát triển của Tập đoàn CMC: Sáng tạo, Chuyên nghiệp, Đồng đội, CMC Global luôn nỗ lực không ngừng để xây dựng một tập thể vững mạnh, tiên phong trong nền công nghệ Việt Nam và ngày một vươn xa ra thế giới.</p><p>Với mục tiêu đưa các sản phẩm và dịch vụ công nghệ cao của CMC ra thế giới, CMC Global đang xây dựng những nền móng đầu tiên với tham vọng: có ít nhất 2.000 người làm việc ở nước ngoài vào năm 2022; doanh thu phần mềm và dịch vụ từ thị trường xuất khẩu lớn hơn thị trường trong nước; có nhiều sản phẩm và dịch vụ đạt tiêu chuẩn hàng đầu thế giới. Trong tương lai, ngoài công ty thành viên CMC Japan tại Nhật Bản, CMC Global sẽ mở thêm các chi nhánh tại các nước châu Á như Singapore, Malaysia,….</p><p>Chiến lược đầu tư của CMC Global được định vị có phần khác biệt so với các công ty outsourcing cũng ngành ở thị trường Việt Nam. CMC Global sẽ chú trọng vào việc phát triển nguồn lực, chuẩn hóa qui trình cung cấp dịch vụ và phát triển phần mềm, đào tạo nhân sự chất lượng cao, cùng lúc thu hút số lượng lớn các nhân tài trong lĩnh vực công nghệ thông tin. Đồng thời, CMC Global cũng sẽ là đại diện, cầu nối cho các công ty thành viên của CMC trong việc cung cấp các giải pháp và dịch vụ tích hợp trọn gói ra thế giới.</p>",
          foundedYear: 1997,
          averageAge: 25,
          companySizeStart: 500,
          companySizeEnd: 1000,
          srcVideoYoutube: "",
          phone: "0924404019",
          website: "http://cmcglobal.com.vn/",
          address: "Tầng 8-9, Tòa CMC, Duy Tân, Cầu Giấy, Hà Nội",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Tang+8-9,Toa+CMC,Duy+Tan,Cau+Giay,Ha+Noi&zoom=15&language=vi",
          career: "Du lịch",
          careers: ["Du lịch"],
          location: "Hà Nội",
          locations: ["Bình Dương", "TP.HCM", "Hà Nội"],
          idEmployer: "62317d1f060985b7e565f5a1",
          isActive: true,
          dateCreate: "2022-03-16T05:58:00.946Z",
          dateEdit: "2022-03-16T05:58:00.946Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          color: "#C50E28FF",
          slug: "cong-ty-tnhh-cmc-global",
        },
        {
          _id: "6230b93f5b34519b01d26daf",
          srcBanner:
            "https://static.topcv.vn/company_covers/4Nri4uubKyXnQ8iC1Edr.jpg",
          srcLogo:
            "https://cdn.topcv.vn/140/company_logos/pys-travel-579bbc24b782f_rs.jpg",
          name: "PYS travel",
          introduct:
            '<p>PYS travel được thành lập từ năm 2010, hoạt động trong lĩnh vực dịch vụ và du lịch. Sau 6 năm phát triển, PYS đã được biết đến là công ty tiên phong phát triển các tuyến tour đột phá, sáng tạo trong thị trường du lịch nội địa và dẫn đầu về sản phẩm tour khám phá Đông Tây Bắc.&nbsp;</p><p>Môi trường làm việc PYS travel năng động, trẻ trung, thường xuyên có các hoạt động team building để kết nối các thành viên trong công ty.<br>&nbsp;</p><p>Năm 2014, PYS travel vinh dự được nhận bằng khen Doanh nghiệp tiêu biểu Hà Nội Vàng.&nbsp;<br>&nbsp;</p><p>Năm 2016, Công ty vinh dự được nhận danh hiệu "Doanh nghiệp trẻ khởi nghiệp xuất sắc" do Hội doanh nhân trẻ Việt Nam trao tặng.</p>',
          foundedYear: 2014,
          averageAge: 25,
          companySizeStart: 400,
          companySizeEnd: 1500,
          srcVideoYoutube: "",
          phone: "0924404019",
          website: " http://pystravel.com",
          address:
            "Phòng 502A, tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Đống Đa, Hà Nội",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Phong+502A,toa+nha+M3-M4,91+Nguyen+Chi+Thanh,Dong+Da,Ha+Noi&zoom=15&language=vi",
          career: "Du lịch",
          careers: ["Du lịch"],
          location: "Hà Nội",
          locations: ["Hà Nội", "TP.HCM", "Bình Dương"],
          idEmployer: "6230a1f270ef6b08e0ec32bb",
          isActive: true,
          dateCreate: "2022-03-15T16:03:24.418Z",
          dateEdit: "2022-03-15T16:03:24.418Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          slug: "pys-travel",
        },
        {
          _id: "62331a6869ae2420d3f2de7f",
          srcBanner:
            "https://static.topcv.vn/company_covers/I8AiDcfx3eWuttlWfUyF.jpg",
          srcLogo:
            "https://cdn.topcv.vn/135/company_logos/cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong-61a05758415e1.jpg",
          name: "Công ty cổ phần Giáo Dục và Công Nghệ Hùng Vương",
          introduct:
            "<p>Chỉ sau 3 năm thành lập, VUIHOC đã vươn lên mạnh mẽ, lọt vào TOP các Công ty trong lĩnh vực EdTech, trở thành nền tảng học tập trực tuyến hàng đầu dành cho học sinh từ lớp 1 đến lớp 12, cung cấp các khoá học online gồm Toán, Tiếng Việt, Tiếng Anh, Lý, Hoá, Sinh</p><p>VUIHOC cũng vinh dự là đơn vị giáo dục duy nhất lọt vào vòng chung kết cuộc thi sáng tạo toàn cầu Viet Solution 2019. Đặc biệt, tháng 8.2021, VUIHOC chính thức nhận khoản đầu tư của quỹ đầu tư danh tiếng Do Ventures<br><br>Các sản phẩm của VUIHOC<br>- App học tập trực tuyến vuihoc trên android và iOS<br>- Website học tập https://vuihoc.vn và website học tiếng anh https://tienganhvuihoc.vn<br>- Hệ thống CRM nội bộ quản trị toàn bộ hoạt động marketing, sales, CSKH</p>",
          foundedYear: 2019,
          averageAge: 25,
          companySizeStart: 100,
          companySizeEnd: 499,
          srcVideoYoutube: "https://www.youtube.com/embed/clNtRFe3LwQ",
          phone: "0967156741",
          website: " https://vuihoc.vn/",
          address: "Tòa Rivera Park, 69 Vũ Trọng Phụng, Thanh Xuân, Hà Nội.",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Toa+Rivera+Park,69+Vu+Trong+Phung,Thanh+Xuan,Ha+Noi.&zoom=15&language=vi",
          career: "Giáo dục / Đào tạo",
          careers: ["Giáo dục / Đào tạo", "Tư vấn", "Kinh doanh / Bán hàng"],
          location: "Hà Nội",
          locations: ["Hà Nội", "Hồ Chí Minh", "Bình Dương"],
          idEmployer: "6233192269ae2420d3f2de53",
          isActive: true,
          dateCreate: "2022-03-17T11:17:57.054Z",
          dateEdit: "2022-03-17T13:23:56.163Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          color: "#29A0D7FF",
          slug: "cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong",
        },
        {
          _id: "62317dba060985b7e565f5a8",
          srcBanner:
            "https://static.topcv.vn/company_covers/cong-ty-tnhh-cmc-global-5e3dc09f007df09930dcb7b36f9cbd11-60c33177cb4c7.jpg",
          srcLogo:
            "https://cdn.topcv.vn/140/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          name: " Công ty TNHH CMC GLOBAL",
          introduct:
            "<p>CMC Global ra đời từ kinh nghiệm 25 năm trong lĩnh vực ICT và hơn 10 năm kinh nghiệm trong lĩnh vực Outsourcing của Tập đoàn công nghệ CMC, với sứ mệnh trở thành đơn vị cung cấp nhân lực kỹ sư phần mềm chất lượng cao, cung cấp các giải pháp, dịch vụ CNTT cho thị trường quốc tế. Hiện CMC Global đang sở hữu đến 700++ nhân viên, cùng một công ty thành viên tại Nhật Bản.<br>&nbsp;</p><p>Tập đoàn công nghệ CMC cùng CMC Global tự hào là một trong những doanh nghiệp hàng đầu Việt Nam trong lĩnh vực phát triển, cung cấp các giải pháp và dịch vụ phần mềm. Chia sẻ chung những tiêu chí tiên quyết cho sự phát triển của Tập đoàn CMC: Sáng tạo, Chuyên nghiệp, Đồng đội, CMC Global luôn nỗ lực không ngừng để xây dựng một tập thể vững mạnh, tiên phong trong nền công nghệ Việt Nam và ngày một vươn xa ra thế giới.</p><p>Với mục tiêu đưa các sản phẩm và dịch vụ công nghệ cao của CMC ra thế giới, CMC Global đang xây dựng những nền móng đầu tiên với tham vọng: có ít nhất 2.000 người làm việc ở nước ngoài vào năm 2022; doanh thu phần mềm và dịch vụ từ thị trường xuất khẩu lớn hơn thị trường trong nước; có nhiều sản phẩm và dịch vụ đạt tiêu chuẩn hàng đầu thế giới. Trong tương lai, ngoài công ty thành viên CMC Japan tại Nhật Bản, CMC Global sẽ mở thêm các chi nhánh tại các nước châu Á như Singapore, Malaysia,….</p><p>Chiến lược đầu tư của CMC Global được định vị có phần khác biệt so với các công ty outsourcing cũng ngành ở thị trường Việt Nam. CMC Global sẽ chú trọng vào việc phát triển nguồn lực, chuẩn hóa qui trình cung cấp dịch vụ và phát triển phần mềm, đào tạo nhân sự chất lượng cao, cùng lúc thu hút số lượng lớn các nhân tài trong lĩnh vực công nghệ thông tin. Đồng thời, CMC Global cũng sẽ là đại diện, cầu nối cho các công ty thành viên của CMC trong việc cung cấp các giải pháp và dịch vụ tích hợp trọn gói ra thế giới.</p>",
          foundedYear: 1997,
          averageAge: 25,
          companySizeStart: 500,
          companySizeEnd: 1000,
          srcVideoYoutube: "",
          phone: "0924404019",
          website: "http://cmcglobal.com.vn/",
          address: "Tầng 8-9, Tòa CMC, Duy Tân, Cầu Giấy, Hà Nội",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Tang+8-9,Toa+CMC,Duy+Tan,Cau+Giay,Ha+Noi&zoom=15&language=vi",
          career: "Du lịch",
          careers: ["Du lịch"],
          location: "Hà Nội",
          locations: ["Bình Dương", "TP.HCM", "Hà Nội"],
          idEmployer: "62317d1f060985b7e565f5a1",
          isActive: true,
          dateCreate: "2022-03-16T05:58:00.946Z",
          dateEdit: "2022-03-16T05:58:00.946Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          color: "#C50E28FF",
          slug: "cong-ty-tnhh-cmc-global",
        },
        {
          _id: "6230b93f5b34519b01d26daf",
          srcBanner:
            "https://static.topcv.vn/company_covers/4Nri4uubKyXnQ8iC1Edr.jpg",
          srcLogo:
            "https://cdn.topcv.vn/140/company_logos/pys-travel-579bbc24b782f_rs.jpg",
          name: "PYS travel",
          introduct:
            '<p>PYS travel được thành lập từ năm 2010, hoạt động trong lĩnh vực dịch vụ và du lịch. Sau 6 năm phát triển, PYS đã được biết đến là công ty tiên phong phát triển các tuyến tour đột phá, sáng tạo trong thị trường du lịch nội địa và dẫn đầu về sản phẩm tour khám phá Đông Tây Bắc.&nbsp;</p><p>Môi trường làm việc PYS travel năng động, trẻ trung, thường xuyên có các hoạt động team building để kết nối các thành viên trong công ty.<br>&nbsp;</p><p>Năm 2014, PYS travel vinh dự được nhận bằng khen Doanh nghiệp tiêu biểu Hà Nội Vàng.&nbsp;<br>&nbsp;</p><p>Năm 2016, Công ty vinh dự được nhận danh hiệu "Doanh nghiệp trẻ khởi nghiệp xuất sắc" do Hội doanh nhân trẻ Việt Nam trao tặng.</p>',
          foundedYear: 2014,
          averageAge: 25,
          companySizeStart: 400,
          companySizeEnd: 1500,
          srcVideoYoutube: "",
          phone: "0924404019",
          website: " http://pystravel.com",
          address:
            "Phòng 502A, tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Đống Đa, Hà Nội",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Phong+502A,toa+nha+M3-M4,91+Nguyen+Chi+Thanh,Dong+Da,Ha+Noi&zoom=15&language=vi",
          career: "Du lịch",
          careers: ["Du lịch"],
          location: "Hà Nội",
          locations: ["Hà Nội", "TP.HCM", "Bình Dương"],
          idEmployer: "6230a1f270ef6b08e0ec32bb",
          isActive: true,
          dateCreate: "2022-03-15T16:03:24.418Z",
          dateEdit: "2022-03-15T16:03:24.418Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          slug: "pys-travel",
        },
        {
          _id: "62331a6869ae2420d3f2de7f",
          srcBanner:
            "https://static.topcv.vn/company_covers/I8AiDcfx3eWuttlWfUyF.jpg",
          srcLogo:
            "https://cdn.topcv.vn/135/company_logos/cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong-61a05758415e1.jpg",
          name: "Công ty cổ phần Giáo Dục và Công Nghệ Hùng Vương",
          introduct:
            "<p>Chỉ sau 3 năm thành lập, VUIHOC đã vươn lên mạnh mẽ, lọt vào TOP các Công ty trong lĩnh vực EdTech, trở thành nền tảng học tập trực tuyến hàng đầu dành cho học sinh từ lớp 1 đến lớp 12, cung cấp các khoá học online gồm Toán, Tiếng Việt, Tiếng Anh, Lý, Hoá, Sinh</p><p>VUIHOC cũng vinh dự là đơn vị giáo dục duy nhất lọt vào vòng chung kết cuộc thi sáng tạo toàn cầu Viet Solution 2019. Đặc biệt, tháng 8.2021, VUIHOC chính thức nhận khoản đầu tư của quỹ đầu tư danh tiếng Do Ventures<br><br>Các sản phẩm của VUIHOC<br>- App học tập trực tuyến vuihoc trên android và iOS<br>- Website học tập https://vuihoc.vn và website học tiếng anh https://tienganhvuihoc.vn<br>- Hệ thống CRM nội bộ quản trị toàn bộ hoạt động marketing, sales, CSKH</p>",
          foundedYear: 2019,
          averageAge: 25,
          companySizeStart: 100,
          companySizeEnd: 499,
          srcVideoYoutube: "https://www.youtube.com/embed/clNtRFe3LwQ",
          phone: "0967156741",
          website: " https://vuihoc.vn/",
          address: "Tòa Rivera Park, 69 Vũ Trọng Phụng, Thanh Xuân, Hà Nội.",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Toa+Rivera+Park,69+Vu+Trong+Phung,Thanh+Xuan,Ha+Noi.&zoom=15&language=vi",
          career: "Giáo dục / Đào tạo",
          careers: ["Giáo dục / Đào tạo", "Tư vấn", "Kinh doanh / Bán hàng"],
          location: "Hà Nội",
          locations: ["Hà Nội", "Hồ Chí Minh", "Bình Dương"],
          idEmployer: "6233192269ae2420d3f2de53",
          isActive: true,
          dateCreate: "2022-03-17T11:17:57.054Z",
          dateEdit: "2022-03-17T13:23:56.163Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          color: "#29A0D7FF",
          slug: "cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong",
        },
        {
          _id: "62317dba060985b7e565f5a8",
          srcBanner:
            "https://static.topcv.vn/company_covers/cong-ty-tnhh-cmc-global-5e3dc09f007df09930dcb7b36f9cbd11-60c33177cb4c7.jpg",
          srcLogo:
            "https://cdn.topcv.vn/140/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          name: " Công ty TNHH CMC GLOBAL",
          introduct:
            "<p>CMC Global ra đời từ kinh nghiệm 25 năm trong lĩnh vực ICT và hơn 10 năm kinh nghiệm trong lĩnh vực Outsourcing của Tập đoàn công nghệ CMC, với sứ mệnh trở thành đơn vị cung cấp nhân lực kỹ sư phần mềm chất lượng cao, cung cấp các giải pháp, dịch vụ CNTT cho thị trường quốc tế. Hiện CMC Global đang sở hữu đến 700++ nhân viên, cùng một công ty thành viên tại Nhật Bản.<br>&nbsp;</p><p>Tập đoàn công nghệ CMC cùng CMC Global tự hào là một trong những doanh nghiệp hàng đầu Việt Nam trong lĩnh vực phát triển, cung cấp các giải pháp và dịch vụ phần mềm. Chia sẻ chung những tiêu chí tiên quyết cho sự phát triển của Tập đoàn CMC: Sáng tạo, Chuyên nghiệp, Đồng đội, CMC Global luôn nỗ lực không ngừng để xây dựng một tập thể vững mạnh, tiên phong trong nền công nghệ Việt Nam và ngày một vươn xa ra thế giới.</p><p>Với mục tiêu đưa các sản phẩm và dịch vụ công nghệ cao của CMC ra thế giới, CMC Global đang xây dựng những nền móng đầu tiên với tham vọng: có ít nhất 2.000 người làm việc ở nước ngoài vào năm 2022; doanh thu phần mềm và dịch vụ từ thị trường xuất khẩu lớn hơn thị trường trong nước; có nhiều sản phẩm và dịch vụ đạt tiêu chuẩn hàng đầu thế giới. Trong tương lai, ngoài công ty thành viên CMC Japan tại Nhật Bản, CMC Global sẽ mở thêm các chi nhánh tại các nước châu Á như Singapore, Malaysia,….</p><p>Chiến lược đầu tư của CMC Global được định vị có phần khác biệt so với các công ty outsourcing cũng ngành ở thị trường Việt Nam. CMC Global sẽ chú trọng vào việc phát triển nguồn lực, chuẩn hóa qui trình cung cấp dịch vụ và phát triển phần mềm, đào tạo nhân sự chất lượng cao, cùng lúc thu hút số lượng lớn các nhân tài trong lĩnh vực công nghệ thông tin. Đồng thời, CMC Global cũng sẽ là đại diện, cầu nối cho các công ty thành viên của CMC trong việc cung cấp các giải pháp và dịch vụ tích hợp trọn gói ra thế giới.</p>",
          foundedYear: 1997,
          averageAge: 25,
          companySizeStart: 500,
          companySizeEnd: 1000,
          srcVideoYoutube: "",
          phone: "0924404019",
          website: "http://cmcglobal.com.vn/",
          address: "Tầng 8-9, Tòa CMC, Duy Tân, Cầu Giấy, Hà Nội",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Tang+8-9,Toa+CMC,Duy+Tan,Cau+Giay,Ha+Noi&zoom=15&language=vi",
          career: "Du lịch",
          careers: ["Du lịch"],
          location: "Hà Nội",
          locations: ["Bình Dương", "TP.HCM", "Hà Nội"],
          idEmployer: "62317d1f060985b7e565f5a1",
          isActive: true,
          dateCreate: "2022-03-16T05:58:00.946Z",
          dateEdit: "2022-03-16T05:58:00.946Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          color: "#C50E28FF",
          slug: "cong-ty-tnhh-cmc-global",
        },
        {
          _id: "6230b93f5b34519b01d26daf",
          srcBanner:
            "https://static.topcv.vn/company_covers/4Nri4uubKyXnQ8iC1Edr.jpg",
          srcLogo:
            "https://cdn.topcv.vn/140/company_logos/pys-travel-579bbc24b782f_rs.jpg",
          name: "PYS travel",
          introduct:
            '<p>PYS travel được thành lập từ năm 2010, hoạt động trong lĩnh vực dịch vụ và du lịch. Sau 6 năm phát triển, PYS đã được biết đến là công ty tiên phong phát triển các tuyến tour đột phá, sáng tạo trong thị trường du lịch nội địa và dẫn đầu về sản phẩm tour khám phá Đông Tây Bắc.&nbsp;</p><p>Môi trường làm việc PYS travel năng động, trẻ trung, thường xuyên có các hoạt động team building để kết nối các thành viên trong công ty.<br>&nbsp;</p><p>Năm 2014, PYS travel vinh dự được nhận bằng khen Doanh nghiệp tiêu biểu Hà Nội Vàng.&nbsp;<br>&nbsp;</p><p>Năm 2016, Công ty vinh dự được nhận danh hiệu "Doanh nghiệp trẻ khởi nghiệp xuất sắc" do Hội doanh nhân trẻ Việt Nam trao tặng.</p>',
          foundedYear: 2014,
          averageAge: 25,
          companySizeStart: 400,
          companySizeEnd: 1500,
          srcVideoYoutube: "",
          phone: "0924404019",
          website: " http://pystravel.com",
          address:
            "Phòng 502A, tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Đống Đa, Hà Nội",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Phong+502A,toa+nha+M3-M4,91+Nguyen+Chi+Thanh,Dong+Da,Ha+Noi&zoom=15&language=vi",
          career: "Du lịch",
          careers: ["Du lịch"],
          location: "Hà Nội",
          locations: ["Hà Nội", "TP.HCM", "Bình Dương"],
          idEmployer: "6230a1f270ef6b08e0ec32bb",
          isActive: true,
          dateCreate: "2022-03-15T16:03:24.418Z",
          dateEdit: "2022-03-15T16:03:24.418Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          slug: "pys-travel",
        },
        
        {
          _id: "62331a6869ae2420d3f2de7f",
          srcBanner:
            "https://static.topcv.vn/company_covers/I8AiDcfx3eWuttlWfUyF.jpg",
          srcLogo:
            "https://cdn.topcv.vn/135/company_logos/cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong-61a05758415e1.jpg",
          name: "Công ty cổ phần Giáo Dục và Công Nghệ Hùng Vương",
          introduct:
            "<p>Chỉ sau 3 năm thành lập, VUIHOC đã vươn lên mạnh mẽ, lọt vào TOP các Công ty trong lĩnh vực EdTech, trở thành nền tảng học tập trực tuyến hàng đầu dành cho học sinh từ lớp 1 đến lớp 12, cung cấp các khoá học online gồm Toán, Tiếng Việt, Tiếng Anh, Lý, Hoá, Sinh</p><p>VUIHOC cũng vinh dự là đơn vị giáo dục duy nhất lọt vào vòng chung kết cuộc thi sáng tạo toàn cầu Viet Solution 2019. Đặc biệt, tháng 8.2021, VUIHOC chính thức nhận khoản đầu tư của quỹ đầu tư danh tiếng Do Ventures<br><br>Các sản phẩm của VUIHOC<br>- App học tập trực tuyến vuihoc trên android và iOS<br>- Website học tập https://vuihoc.vn và website học tiếng anh https://tienganhvuihoc.vn<br>- Hệ thống CRM nội bộ quản trị toàn bộ hoạt động marketing, sales, CSKH</p>",
          foundedYear: 2019,
          averageAge: 25,
          companySizeStart: 100,
          companySizeEnd: 499,
          srcVideoYoutube: "https://www.youtube.com/embed/clNtRFe3LwQ",
          phone: "0967156741",
          website: " https://vuihoc.vn/",
          address: "Tòa Rivera Park, 69 Vũ Trọng Phụng, Thanh Xuân, Hà Nội.",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Toa+Rivera+Park,69+Vu+Trong+Phung,Thanh+Xuan,Ha+Noi.&zoom=15&language=vi",
          career: "Giáo dục / Đào tạo",
          careers: ["Giáo dục / Đào tạo", "Tư vấn", "Kinh doanh / Bán hàng"],
          location: "Hà Nội",
          locations: ["Hà Nội", "Hồ Chí Minh", "Bình Dương"],
          idEmployer: "6233192269ae2420d3f2de53",
          isActive: true,
          dateCreate: "2022-03-17T11:17:57.054Z",
          dateEdit: "2022-03-17T13:23:56.163Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          color: "#29A0D7FF",
          slug: "cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong",
        },
        {
          _id: "62317dba060985b7e565f5a8",
          srcBanner:
            "https://static.topcv.vn/company_covers/cong-ty-tnhh-cmc-global-5e3dc09f007df09930dcb7b36f9cbd11-60c33177cb4c7.jpg",
          srcLogo:
            "https://cdn.topcv.vn/140/company_logos/cong-ty-tnhh-cmc-global-1d94bf2be044cc832cd72d2f4f8fad66-5e72d0edadcfb.jpg",
          name: " Công ty TNHH CMC GLOBAL",
          introduct:
            "<p>CMC Global ra đời từ kinh nghiệm 25 năm trong lĩnh vực ICT và hơn 10 năm kinh nghiệm trong lĩnh vực Outsourcing của Tập đoàn công nghệ CMC, với sứ mệnh trở thành đơn vị cung cấp nhân lực kỹ sư phần mềm chất lượng cao, cung cấp các giải pháp, dịch vụ CNTT cho thị trường quốc tế. Hiện CMC Global đang sở hữu đến 700++ nhân viên, cùng một công ty thành viên tại Nhật Bản.<br>&nbsp;</p><p>Tập đoàn công nghệ CMC cùng CMC Global tự hào là một trong những doanh nghiệp hàng đầu Việt Nam trong lĩnh vực phát triển, cung cấp các giải pháp và dịch vụ phần mềm. Chia sẻ chung những tiêu chí tiên quyết cho sự phát triển của Tập đoàn CMC: Sáng tạo, Chuyên nghiệp, Đồng đội, CMC Global luôn nỗ lực không ngừng để xây dựng một tập thể vững mạnh, tiên phong trong nền công nghệ Việt Nam và ngày một vươn xa ra thế giới.</p><p>Với mục tiêu đưa các sản phẩm và dịch vụ công nghệ cao của CMC ra thế giới, CMC Global đang xây dựng những nền móng đầu tiên với tham vọng: có ít nhất 2.000 người làm việc ở nước ngoài vào năm 2022; doanh thu phần mềm và dịch vụ từ thị trường xuất khẩu lớn hơn thị trường trong nước; có nhiều sản phẩm và dịch vụ đạt tiêu chuẩn hàng đầu thế giới. Trong tương lai, ngoài công ty thành viên CMC Japan tại Nhật Bản, CMC Global sẽ mở thêm các chi nhánh tại các nước châu Á như Singapore, Malaysia,….</p><p>Chiến lược đầu tư của CMC Global được định vị có phần khác biệt so với các công ty outsourcing cũng ngành ở thị trường Việt Nam. CMC Global sẽ chú trọng vào việc phát triển nguồn lực, chuẩn hóa qui trình cung cấp dịch vụ và phát triển phần mềm, đào tạo nhân sự chất lượng cao, cùng lúc thu hút số lượng lớn các nhân tài trong lĩnh vực công nghệ thông tin. Đồng thời, CMC Global cũng sẽ là đại diện, cầu nối cho các công ty thành viên của CMC trong việc cung cấp các giải pháp và dịch vụ tích hợp trọn gói ra thế giới.</p>",
          foundedYear: 1997,
          averageAge: 25,
          companySizeStart: 500,
          companySizeEnd: 1000,
          srcVideoYoutube: "",
          phone: "0924404019",
          website: "http://cmcglobal.com.vn/",
          address: "Tầng 8-9, Tòa CMC, Duy Tân, Cầu Giấy, Hà Nội",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Tang+8-9,Toa+CMC,Duy+Tan,Cau+Giay,Ha+Noi&zoom=15&language=vi",
          career: "Du lịch",
          careers: ["Du lịch"],
          location: "Hà Nội",
          locations: ["Bình Dương", "TP.HCM", "Hà Nội"],
          idEmployer: "62317d1f060985b7e565f5a1",
          isActive: true,
          dateCreate: "2022-03-16T05:58:00.946Z",
          dateEdit: "2022-03-16T05:58:00.946Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          color: "#C50E28FF",
          slug: "cong-ty-tnhh-cmc-global",
        },
        {
          _id: "6230b93f5b34519b01d26daf",
          srcBanner:
            "https://static.topcv.vn/company_covers/4Nri4uubKyXnQ8iC1Edr.jpg",
          srcLogo:
            "https://cdn.topcv.vn/140/company_logos/pys-travel-579bbc24b782f_rs.jpg",
          name: "PYS travel",
          introduct:
            '<p>PYS travel được thành lập từ năm 2010, hoạt động trong lĩnh vực dịch vụ và du lịch. Sau 6 năm phát triển, PYS đã được biết đến là công ty tiên phong phát triển các tuyến tour đột phá, sáng tạo trong thị trường du lịch nội địa và dẫn đầu về sản phẩm tour khám phá Đông Tây Bắc.&nbsp;</p><p>Môi trường làm việc PYS travel năng động, trẻ trung, thường xuyên có các hoạt động team building để kết nối các thành viên trong công ty.<br>&nbsp;</p><p>Năm 2014, PYS travel vinh dự được nhận bằng khen Doanh nghiệp tiêu biểu Hà Nội Vàng.&nbsp;<br>&nbsp;</p><p>Năm 2016, Công ty vinh dự được nhận danh hiệu "Doanh nghiệp trẻ khởi nghiệp xuất sắc" do Hội doanh nhân trẻ Việt Nam trao tặng.</p>',
          foundedYear: 2014,
          averageAge: 25,
          companySizeStart: 400,
          companySizeEnd: 1500,
          srcVideoYoutube: "",
          phone: "0924404019",
          website: " http://pystravel.com",
          address:
            "Phòng 502A, tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Đống Đa, Hà Nội",
          srcMap:
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Phong+502A,toa+nha+M3-M4,91+Nguyen+Chi+Thanh,Dong+Da,Ha+Noi&zoom=15&language=vi",
          career: "Du lịch",
          careers: ["Du lịch"],
          location: "Hà Nội",
          locations: ["Hà Nội", "TP.HCM", "Bình Dương"],
          idEmployer: "6230a1f270ef6b08e0ec32bb",
          isActive: true,
          dateCreate: "2022-03-15T16:03:24.418Z",
          dateEdit: "2022-03-15T16:03:24.418Z",
          isBin: false,
          isBrowser: true,
          __v: 0,
          slug: "pys-travel",
        },
      ],
      windowSize: {
        x: 0,
        y: 0,
      },
    };
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      let that = this;
      that.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (that.windowSize.x < 600) {
        that.slideRatio = 1 / 2;
        that.visibleSliders = 3;
        that.bullets = false;
      } else if (that.windowSize.x < 960) {
        that.slideRatio = 1 / 3;
        that.visibleSliders = 4;
        that.bullets = false;
      } else {
        that.slideRatio = 1 / 5;
        that.visibleSliders = 6;
        that.bullets = true;
      }
    },
  },
};
</script>

<style>
</style>