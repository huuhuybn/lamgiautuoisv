import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>LÀM GIÀU Ở ĐỘ TUỔI SINH VIÊN</h1>
        <h2>Hành trình từ sinh viên đến triệu phú</h2>
      </div>
      
      <div className="author-info">
        <h3>📚 Tác giả: Thầy Huy Android</h3>
        <div className="contact-info">
          <div className="contact-item">
            <span>📞</span>
            <span>0913360468</span>
          </div>
          <div className="contact-item">
            <span>📧</span>
            <span>huuhuybn@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 