import React from 'react';

import useWindowDimensions from '../../utils/useWindowDimensions';

// import './styles.css';

const CenterSection = ({ children, ratio, padding }) => {
  const { width, height } = useWindowDimensions();

  const widthIsGreater = width * ratio.width > height * ratio.height;

  const contentWidth = widthIsGreater ? height / (ratio.height / ratio.width) : width;
  const contentHeight = widthIsGreater ? height : width / (ratio.width / ratio.height);

  return (
    <div className="centersection">
      <div style={{ width: contentWidth, height: contentHeight, padding, boxSizing: 'border-box' }}>
        {children}
      </div>
    </div>
  );
};

export default CenterSection;
