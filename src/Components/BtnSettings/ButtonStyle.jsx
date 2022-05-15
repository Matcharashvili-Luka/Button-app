import React from 'react';
import '../../Styles/BtnSettings/ButtonStyle.css';
import '../../Styles/BtnSettings/Drop-down.css';
import BtnColorSetting from './ButtonStyleElements/BtnColorSetting';
import BtnFontSizeSetting from './ButtonStyleElements/BtnFontSizeSetting';
import BtnHPaddingSetting from './ButtonStyleElements/BtnHPaddingSetting';
import BtnVPaddingSetting from './ButtonStyleElements/BtnVPaddingSetting';
import BtnBorderSetting from './ButtonStyleElements/BtnBorderSetting';
import BtnBorderRadiusSetting from './ButtonStyleElements/BtnBorderRadiusSetting';
import BtnTextSetting from './ButtonStyleElements/BtnTextSetting';
import BtnFontColor from './ButtonStyleElements/BtnFontColor';
import BtnTransitionSetting from './ButtonStyleElements/BtnTransitionSetting';


function ButtonStyle({ 
  bgColor, setBgColor, fontSize, setFontSize, hPadding, sethPadding, vPadding, setvPadding, borderRadius, setBorderRadius, btnText, setBtnText, btnBorder, setBtnBorder, outlineColor, setOutlineColor, enableOrDisable, setEnableOrDisable, fontColor, setFontColor, transition, setTransition 
}) {
  return (
    <div className='buttonStyle'>

      <input type="checkbox" id='btnBg' className='activetionBTN'/>
      <input type="checkbox" id='btnFont' className='activetionBTN'/>
      <input type="checkbox" id='btnFontSize' className='activetionBTN'/>
      <input type="checkbox" id='btnHPadd' className='activetionBTN'/>
      <input type="checkbox" id='btnVPadd' className='activetionBTN'/>
      <input type="checkbox" id='btnBorder' className='activetionBTN'/>
      <input type="checkbox" id='btnBorderRadius' className='activetionBTN'/>
      <input type="checkbox" id='btnText' className='activetionBTN'/>
      <input type="checkbox" id='btnFontColor' className='activetionBTN'/>
      <input type="checkbox" id='btnTransition' className='activetionBTN'/>

        <ul className='btnStyleElements'>
            <li className='btnBgColorSetting'>
              <BtnColorSetting 
                bgColor={bgColor}
                setBgColor={setBgColor}
              />
            </li>
            <li className='btnFontSizeSetting'>
              <BtnFontSizeSetting 
                fontSize={fontSize}
                setFontSize={setFontSize}
              />
            </li>
            <li className='btnFontColor'>
              <BtnFontColor 
                fontColor={fontColor}
                setFontColor={setFontColor}
              />
            </li>
            <li className='btnHPaddSetting'>
              <BtnHPaddingSetting 
                hPadding={hPadding}
                sethPadding={sethPadding}
              />
            </li>
            <li className='btnVPaddSetting'>
              <BtnVPaddingSetting 
                vPadding={vPadding}
                setvPadding={setvPadding}
              />
            </li>
            <li className='btnBorderSetting'>
              <BtnBorderSetting 
                btnBorder={btnBorder}
                setBtnBorder={setBtnBorder}
                outlineColor={outlineColor}
                setOutlineColor={setOutlineColor}
                enableOrDisable={enableOrDisable}
                setEnableOrDisable={setEnableOrDisable}
              />
            </li>
            <li className='btnBorderRadiusSetting'>
              <BtnBorderRadiusSetting 
                borderRadius={borderRadius}
                setBorderRadius={setBorderRadius}
              />
            </li>
            <li className='btnTextSetting'>
              <BtnTextSetting
                btnText={btnText}
                setBtnText={setBtnText}
              />
            </li>
            <li className='btnTransitionSetting'>
              <BtnTransitionSetting 
                transition={transition}
                setTransition={setTransition}
              />
            </li>
        </ul>
    </div>
  )
}

export default ButtonStyle