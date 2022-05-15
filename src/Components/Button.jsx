import React, { useState } from 'react';
import '../Styles/Button.css';
import { HuePicker } from 'react-color';

function Button({ 
  fontSize, fontWeight, hPadding, vPadding, borderRadius, bgColor, btnText, btnBorder, outlineColor, enableOrDisable, fontColor
}) {

  const [mainBG, setMainBG] = useState('#18d9d6')

  return (
    <div className='buttonDemo' style={{ backgroundColor: `${mainBG}`}}>
      <div className='part top'>
        Heading
      </div>
      <div className='buttonImage'>
        <button 
          style={{ 
            color: `${fontColor}`,
            fontSize: `${fontSize}px`,
            fontWeight: {fontWeight},
            padding: `${hPadding}px ${vPadding}px`,
            borderRadius: `${borderRadius}px`,
            backgroundColor: `${bgColor}`,
            border: enableOrDisable === false ? `${btnBorder}px solid ${outlineColor}` : 'none',
            }}
          >
          {btnText}
        </button>
      </div>
      <div className='part bottom'>
        <HuePicker 
          color={ mainBG }
          onChangeComplete={(e) => setMainBG(e.hex)}
        />
      </div>
    </div>
  )
}

export default Button