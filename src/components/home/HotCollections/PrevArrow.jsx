import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PrevArrow({ className, style, onClick }) {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: 1,
          marginRight: "18px",
        }}
        onClick={onClick}
      />
    )
}

export default PrevArrow