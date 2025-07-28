import React from 'react';
import './Chapter.css';

const Chapter = ({ chapter, onChapterChange }) => {
  const handleNextChapter = () => {
    // Logic để chuyển chương tiếp theo
  };

  const handlePrevChapter = () => {
    // Logic để chuyển chương trước
  };

  return (
    <div className="chapter">
      <h2>CHƯƠNG {chapter.id}: {chapter.title}</h2>
      
      <div className="chapter-content">
        {chapter.sections.map((section, index) => (
          <div key={index} className="section">
            <h3>{section.title}</h3>
            <div 
              className="section-content"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        ))}
      </div>
      
      <div className="chapter-navigation">
        <button 
          className="nav-btn prev"
          onClick={handlePrevChapter}
        >
          ← Chương trước
        </button>
        <button 
          className="nav-btn next"
          onClick={handleNextChapter}
        >
          Chương tiếp → 
        </button>
      </div>
    </div>
  );
};

export default Chapter; 