// HeadingParagraphs.js
import React from 'react';
import './HeadingParagraphs.css';

const data = [
  { text: 'Heading 1', headingSize: '28px', paragraphSize: '18px' },
  { text: 'Heading 2', headingSize: '24px', paragraphSize: '16px' },
  { text: 'Heading 3', headingSize: '20px', paragraphSize: '14px' },
  { text: 'Heading 4', headingSize: '16px', paragraphSize: '12px' },
];

const HeadingParagraphs = () => (
  <div>
    {data.map((item, index) => (
      <div key={index}>
        <h1 style={{ fontSize: item.headingSize }}>{item.text}</h1>
        <p style={{ fontSize: item.paragraphSize }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla purus eu dignissim.
        </p>
      </div>
    ))}
  </div>
);

export default HeadingParagraphs;
