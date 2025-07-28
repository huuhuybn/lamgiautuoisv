import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="conclusion">
          <h2>KẾT LUẬN</h2>
          <p>Làm giàu ở độ tuổi sinh viên không phải là điều không thể. Điều quan trọng là bạn phải:</p>
          <ol>
            <li><strong>Bắt đầu ngay hôm nay</strong> - Không chờ đợi điều kiện hoàn hảo</li>
            <li><strong>Học hỏi liên tục</strong> - Kiến thức là tài sản quý giá nhất</li>
            <li><strong>Hành động nhất quán</strong> - Thành công đến từ những hành động nhỏ mỗi ngày</li>
            <li><strong>Kiên nhẫn</strong> - Làm giàu là hành trình dài hạn</li>
          </ol>
          <p><strong>Hãy nhớ rằng: Tuổi trẻ là lợi thế lớn nhất của bạn!</strong></p>
          <div className="quote">
            "Thành công không phải là đích đến, mà là hành trình"
          </div>
          <p><strong>Chúc bạn thành công trên con đường làm giàu!</strong></p>
        </div>
        
        <div className="references">
          <h3>TÀI LIỆU THAM KHẢO</h3>
          <ol>
            <li>"Rich Dad Poor Dad" - Robert Kiyosaki</li>
            <li>"The Millionaire Fastlane" - MJ DeMarco</li>
            <li>"Think and Grow Rich" - Napoleon Hill</li>
            <li>"The Psychology of Money" - Morgan Housel</li>
            <li>"Atomic Habits" - James Clear</li>
          </ol>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p><strong>📚 LÀM GIÀU Ở ĐỘ TUỔI SINH VIÊN</strong></p>
        <p>Tác giả: Thầy Huy Android</p>
        <p>📞 0913360468 | 📧 huuhuybn@gmail.com</p>
        <p><em>Cuốn sách này được viết với mong muốn giúp các bạn sinh viên có được những kiến thức và công cụ cần thiết để bắt đầu hành trình làm giàu từ sớm. Hãy chia sẻ kiến thức này với bạn bè và gia đình để cùng nhau phát triển!</em></p>
      </div>
    </div>
  );
};

export default Footer; 