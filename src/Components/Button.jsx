import React, { useState } from 'react';
import '../Styles/Button.css';
import { HuePicker } from 'react-color';


function Button({ 
   //for btn style
  fontSize, hPadding, vPadding, borderRadius, bgColor, btnText, btnBorder, outlineColor, enableOrDisable, fontColor, transition,

   //for btn hover
  bgColorHover, fontSizeHover, hPaddingHover, vPaddingHover, borderRadiusHover, btnBorderHover, outlineColorHover, fontColorHover,
}) {

  const [mainBG, setMainBG] = useState('#18d9d6')
  const [buttonHovered, setButtonHovered] = useState(false)

  return (
    <div className='buttonDemo' style={{ backgroundColor: `${mainBG}`}}>
      <div className='part top'>
        Heading
      </div>
      <div className='buttonImage'>
        <button 
          onMouseEnter={() => setButtonHovered(true)} 
          onMouseLeave={() => setButtonHovered(false)}
          transition={2000}
          style={
            buttonHovered === false ? 
            { 
              color: `${fontColor}`,
              fontSize: `${fontSize}px`,
              padding: `${hPadding}px ${vPadding}px`,
              borderRadius: `${borderRadius}px`,
              backgroundColor: `${bgColor}`,
              border: enableOrDisable === false ? `${btnBorder}px solid ${outlineColor}` : 'none',
              transition: `${transition}s`,
            } : 
            {
              color: `${fontColorHover === `#000` ? `${fontColor}` : `${fontColorHover}`}`,
              fontSize: `${fontSizeHover === 16 ? `${fontSize}` : `${fontSizeHover}`}px`,
              padding: `${hPaddingHover === 0 ? `${hPadding}` : `${hPaddingHover}`}px ${vPaddingHover === 0 ? `${vPadding}` : `${vPaddingHover}`}px`,
              borderRadius: `${borderRadiusHover === 0 ? `${borderRadius}` : `${borderRadiusHover}`}px`,
              backgroundColor: `${bgColorHover === `#fff` ? `${bgColor}` : `${bgColorHover}`}`,
              border: enableOrDisable === false ? `${btnBorderHover === 2 ? `${btnBorder}` : `${btnBorderHover}`}px solid ${outlineColorHover === '#fff' ? `${outlineColor}` : `${outlineColorHover}`}` : 'none',
              transition: `${transition}s`,
            }
            }
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