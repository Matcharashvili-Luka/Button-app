import React from 'react';
import ButtonStyle from './BtnSettings/ButtonStyle';
import ButtonHover from './BtnSettings/ButtonHover';
import '../Styles/ButtonStyleBar.css';

function ButtonStyleBar({ 
  //for style
  bgColor, setBgColor, fontSize, setFontSize, hPadding, sethPadding, vPadding, setvPadding, borderRadius, setBorderRadius, btnText, setBtnText, btnBorder, setBtnBorder, outlineColor, setOutlineColor, enableOrDisable, setEnableOrDisable, fontColor, setFontColor, transition, setTransition, 
  
  //for hover
  bgColorHover, setBgColorHover, fontSizeHover, setFontSizeHover, hPaddingHover, sethPaddingHover, vPaddingHover, setvPaddingHover, borderRadiusHover, setBorderRadiusHover, btnBorderHover, setBtnBorderHover, outlineColorHover, setOutlineColorHover, fontColorHover, setFontColorHover 
}) {
  return (
    <div className='buttonStyleBar'>
      <div className='btnStyleBarContaner'>
        <div className='buttonOptions'>
          <p>Button Styles</p>         
        </div> 
        <div>
          <ButtonStyle
            className='buttonStyle' 
            bgColor={bgColor}
            setBgColor={setBgColor}
            fontSize={fontSize}
            setFontSize={setFontSize}
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
            enableOrDisable={enableOrDisable}
            setEnableOrDisable={setEnableOrDisable}
            fontColor={fontColor}
            setFontColor={setFontColor}
            transition={transition}
            setTransition={setTransition}
          />     
        </div>
        <div>
          <div className='buttonOptions hoverOptionsHeader'>
            <p>Hover Styles</p>
          </div>
          <div>
            <ButtonHover 
              className='buttonHover'
              bgColorHover={bgColorHover}
              setBgColorHover={setBgColorHover}
              fontSizeHover={fontSizeHover}
              setFontSizeHover={setFontSizeHover}
              hPaddingHover={hPaddingHover}
              sethPaddingHover={sethPaddingHover}
              vPaddingHover={vPaddingHover}
              setvPaddingHover={setvPaddingHover}
              borderRadiusHover={borderRadiusHover}
              setBorderRadiusHover={setBorderRadiusHover}
              btnBorderHover={btnBorderHover}
              setBtnBorderHover={setBtnBorderHover}
              outlineColorHover={outlineColorHover}
              setOutlineColorHover={setOutlineColorHover}
              fontColorHover={fontColorHover}
              setFontColorHover={setFontColorHover}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonStyleBar