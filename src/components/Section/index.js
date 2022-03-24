import React from 'react';

import './styles.css';

const Section = ({ children, className, style }) => (
  <div className={`section ${className}`} style={style}>{children}</div>
);

export default Section;