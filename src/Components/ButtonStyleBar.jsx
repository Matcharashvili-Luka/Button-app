import React from 'react';
import ButtonStyle from './BtnSettings/ButtonStyle';
import '../Styles/ButtonStyleBar.css';

function ButtonStyleBar({ 
  bgColor, setBgColor, fontSize, setFontSize, fontWeight, setFontWeight, hPadding, sethPadding, vPadding, setvPadding, borderRadius, setBorderRadius, btnText, setBtnText, btnBorder, setBtnBorder, outlineColor, setOutlineColor
}) {
  return (
    <div className='buttonStyleBar'>
       <div className='buttonOptions'>
            <div>
                <p>Button Styles</p>
            </div> 
            <div>
                <p>Hover Styles</p>
            </div> 
        </div> 
        <div>
            <ButtonStyle 
              bgColor={bgColor}
              setBgColor={setBgColor}
              fontSize={fontSize}
              setFontSize={setFontSize}
              fontWeight={fontWeight}
              setFontWeight={setFontWeight}
              hPadding={hPadding}
              sethPadding={sethPadding}
              vPadding={vPadding}
              setvPadding={setvPadding}
              borderRadius={borderRadius}
              setBorderRadius={setBorderRadius}
              btnText={btnText}
              setBtnText={setBtnText}
              btnBorder={btnBorder}
              setBtnBorder={setBtnBorder}
              outlineColor={outlineColor}
              setOutlineColor={setOutlineColor}
            />
        </div>
    </div>
  )
}

export default ButtonStyleBar