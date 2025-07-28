import React from 'react';
import './TableOfContents.css';

const TableOfContents = ({ chapters, activeChapter, setActiveChapter }) => {
  return (
    <div className="toc">
      <h3>📋 MỤC LỤC</h3>
      <div className="toc-list">
        {chapters.map((chapter, index) => (
          <div 
            key={chapter.id}
            className={`toc-item ${activeChapter === index ? 'active' : ''}`}
            onClick={() => setActiveChapter(index)}
          >
            <span className="toc-number">{index + 1}.</span>
            <span className="toc-title">{chapter.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOfContents; 