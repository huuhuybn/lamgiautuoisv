import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TableOfContents from './components/TableOfContents';
import Chapter from './components/Chapter';
import Footer from './components/Footer';

function App() {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      id: 1,
      title: "TƯ DUY ĐÚNG ĐẮN",
      sections: [
        {
          title: "1.1 Thay Đổi Tư Duy Về Tiền Bạc",
          content: `
            <div class="quote">
              "Tiền không phải là tất cả, nhưng nó là công cụ để đạt được tự do"
            </div>
            
            <p>Là sinh viên, bạn cần hiểu rằng:</p>
            <ul>
              <li>Tiền bạc không phải là mục đích cuối cùng</li>
              <li>Tiền là công cụ để tạo ra giá trị và tự do</li>
              <li>Thời gian là tài sản quý giá nhất của bạn</li>
            </ul>
          `
        },
        {
          title: "1.2 Tư Duy Của Người Giàu",
          content: `
            <p><strong>Những đặc điểm của người có tư duy giàu:</strong></p>
            <ol>
              <li><strong>Tư duy dài hạn</strong>: Không chỉ nghĩ về hôm nay</li>
              <li><strong>Tư duy học hỏi</strong>: Luôn cập nhật kiến thức mới</li>
              <li><strong>Tư duy sáng tạo</strong>: Tìm cách giải quyết vấn đề</li>
              <li><strong>Tư duy rủi ro có kiểm soát</strong>: Dám thử nhưng có tính toán</li>
            </ol>
          `
        },
        {
          title: "1.3 Xóa Bỏ Những Niềm Tin Giới Hạn",
          content: `
            <div class="warning">
              <strong>Những câu nói cần tránh:</strong>
              <ul>
                <li>"Tôi còn trẻ, chưa thể kiếm tiền"</li>
                <li>"Tôi không có vốn"</li>
                <li>"Tôi không có kỹ năng"</li>
                <li>"Thị trường đã bão hòa"</li>
              </ul>
            </div>
            
            <div class="success">
              <strong>Thay thế bằng:</strong>
              <ul>
                <li>"Tôi có thời gian và năng lượng để học hỏi"</li>
                <li>"Tôi có thể bắt đầu với số vốn nhỏ"</li>
                <li>"Tôi có thể học bất kỳ kỹ năng nào"</li>
                <li>"Luôn có cơ hội cho người sáng tạo"</li>
              </ul>
            </div>
          `
        }
      ]
    },
    {
      id: 2,
      title: "XÂY DỰNG NỀN TẢNG TÀI CHÍNH",
      sections: [
        {
          title: "2.1 Hiểu Về Dòng Tiền",
          content: `
            <p><strong>Dòng tiền cơ bản:</strong></p>
            <div class="code-block">
              Thu nhập → Chi tiêu → Tiết kiệm → Đầu tư
            </div>
            
            <p><strong>Mục tiêu:</strong></p>
            <ul>
              <li>Tăng thu nhập</li>
              <li>Giảm chi tiêu không cần thiết</li>
              <li>Tăng tỷ lệ tiết kiệm</li>
              <li>Đầu tư thông minh</li>
            </ul>
          `
        },
        {
          title: "2.2 Nguyên Tắc 50/30/20",
          content: `
            <p><strong>Phân chia thu nhập:</strong></p>
            <ul>
              <li><strong>50%</strong>: Chi tiêu cần thiết (ăn, ở, đi lại, học phí)</li>
              <li><strong>30%</strong>: Chi tiêu mong muốn (giải trí, mua sắm)</li>
              <li><strong>20%</strong>: Tiết kiệm và đầu tư</li>
            </ul>
          `
        },
        {
          title: "2.3 Xây Dựng Quỹ Khẩn Cấp",
          content: `
            <p><strong>Mục tiêu:</strong> Tiết kiệm 3-6 tháng chi phí sinh hoạt</p>
            
            <p><strong>Cách thực hiện:</strong></p>
            <ol>
              <li>Tính toán chi phí hàng tháng</li>
              <li>Đặt mục tiêu tiết kiệm cụ thể</li>
              <li>Tự động hóa việc tiết kiệm</li>
              <li>Tìm cách tăng thu nhập</li>
            </ol>
          `
        }
      ]
    },
    {
      id: 3,
      title: "KIẾM TIỀN TỪ KỸ NĂNG",
      sections: [
        {
          title: "3.1 Freelancing - Công Việc Tự Do",
          content: `
            <p><strong>Những kỹ năng có thể kiếm tiền:</strong></p>
            
            <h4>Kỹ năng kỹ thuật:</h4>
            <ul>
              <li>Lập trình web/app</li>
              <li>Thiết kế đồ họa</li>
              <li>Viết content</li>
              <li>Dịch thuật</li>
              <li>SEO</li>
            </ul>
            
            <h4>Kỹ năng mềm:</h4>
            <ul>
              <li>Gia sư online</li>
              <li>Tư vấn marketing</li>
              <li>Quản lý mạng xã hội</li>
              <li>Tổ chức sự kiện</li>
            </ul>
          `
        },
        {
          title: "3.2 Nền Tảng Freelancing",
          content: `
            <p><strong>Các website uy tín:</strong></p>
            <ul>
              <li>Upwork</li>
              <li>Fiverr</li>
              <li>Freelancer.com</li>
              <li>99designs (thiết kế)</li>
              <li>Topcoder (lập trình)</li>
            </ul>
            
            <p><strong>Cách bắt đầu:</strong></p>
            <ol>
              <li>Tạo profile chuyên nghiệp</li>
              <li>Bắt đầu với giá thấp để có đánh giá</li>
              <li>Xây dựng portfolio</li>
              <li>Tăng giá dần dần</li>
            </ol>
          `
        }
      ]
    },
    {
      id: 4,
      title: "KINH DOANH ONLINE",
      sections: [
        {
          title: "4.1 Bán Hàng Online",
          content: `
            <p><strong>Các mô hình kinh doanh:</strong></p>
            
            <h4>Dropshipping:</h4>
            <ul>
              <li>Không cần vốn lớn</li>
              <li>Không cần kho hàng</li>
              <li>Rủi ro thấp</li>
              <li>Dễ bắt đầu</li>
            </ul>
            
            <h4>Affiliate Marketing:</h4>
            <ul>
              <li>Kiếm hoa hồng từ bán hàng</li>
              <li>Không cần sản phẩm riêng</li>
              <li>Thu nhập thụ động</li>
              <li>Dễ mở rộng</li>
            </ul>
          `
        },
        {
          title: "4.2 Tạo Nội Dung Digital",
          content: `
            <p><strong>Các nền tảng kiếm tiền:</strong></p>
            <ul>
              <li>YouTube</li>
              <li>TikTok</li>
              <li>Instagram</li>
              <li>Blog</li>
              <li>Podcast</li>
            </ul>
            
            <p><strong>Chiến lược thành công:</strong></p>
            <ol>
              <li>Chọn niche phù hợp</li>
              <li>Tạo nội dung chất lượng</li>
              <li>Xây dựng cộng đồng</li>
              <li>Đa dạng hóa thu nhập</li>
            </ol>
          `
        }
      ]
    },
    {
      id: 5,
      title: "ĐẦU TƯ THÔNG MINH",
      sections: [
        {
          title: "5.1 Hiểu Về Đầu Tư",
          content: `
            <p><strong>Nguyên tắc cơ bản:</strong></p>
            <ul>
              <li>Đầu tư sớm = Lợi nhuận lớn</li>
              <li>Đa dạng hóa rủi ro</li>
              <li>Đầu tư dài hạn</li>
              <li>Không đầu tư tiền cần thiết</li>
            </ul>
          `
        },
        {
          title: "5.2 Các Kênh Đầu Tư Cho Sinh Viên",
          content: `
            <h4>Tiết kiệm ngân hàng:</h4>
            <ul>
              <li>An toàn, thanh khoản cao</li>
              <li>Lãi suất thấp</li>
              <li>Phù hợp quỹ khẩn cấp</li>
            </ul>
            
            <h4>Chứng chỉ quỹ:</h4>
            <ul>
              <li>Rủi ro thấp-trung bình</li>
              <li>Được quản lý chuyên nghiệp</li>
              <li>Phù hợp người mới</li>
            </ul>
            
            <h4>Cổ phiếu:</h4>
            <ul>
              <li>Rủi ro cao</li>
              <li>Lợi nhuận tiềm năng lớn</li>
              <li>Cần kiến thức và thời gian</li>
            </ul>
          `
        }
      ]
    }
  ];

  return (
    <div className="App">
      <Header />
      <div className="container">
        <TableOfContents 
          chapters={chapters} 
          activeChapter={activeChapter}
          setActiveChapter={setActiveChapter}
        />
        <div className="content">
          {chapters[activeChapter] && (
            <Chapter 
              chapter={chapters[activeChapter]}
              onChapterChange={setActiveChapter}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
