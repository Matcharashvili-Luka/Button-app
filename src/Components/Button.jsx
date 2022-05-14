import React from 'react';
import '../Styles/Button.css';

function Button({ 
  fontSize, fontWeight, hPadding, vPadding, borderRadius, bgColor, btnText, btnBorder, outlineColor 
}) {
  return (
    <div className='buttonImage'>
        <button 
          style={{ 
            fontSize: `${fontSize}px`,
            fontWeight: {fontWeight},
            padding: `${hPadding}px ${vPadding}px`,
            borderRadius: `${borderRadius}px`,
            backgroundColor: `${bgColor}`,
            border: `${btnBorder}px solid ${outlineColor}`,
            }}
          >
              {btnText}
          </button>
    </div>
  )
}

export default Button