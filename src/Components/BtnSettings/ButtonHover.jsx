import React from 'react';
import '../../Styles/BtnSettings/Drop-down.css';
import BtnColorSettingHover from './ButtonHoverElements/BtnColorSettingHover';
import BtnFontSizeSettingHover from './ButtonHoverElements/BtnFontSizeSettingHover';
import BtnHPaddingSettingHover from './ButtonHoverElements/BtnHPaddingSettingHover';
import BtnVPaddingSettingHover from './ButtonHoverElements/BtnVPaddingSettingHover';
import BtnBorderSettingHover from './ButtonHoverElements/BtnBorderSettingHover';
import BtnBorderRadiusSettingHover from './ButtonHoverElements/BtnBorderRadiusSettingHover';
import BtnFontColorHover from './ButtonHoverElements/BtnFontColorHover';


function ButtonStyle({ 
  bgColorHover, setBgColorHover, fontSizeHover, setFontSizeHover, hPaddingHover, sethPaddingHover, vPaddingHover, setvPaddingHover, borderRadiusHover, setBorderRadiusHover, btnBorderHover, setBtnBorderHover, outlineColorHover, setOutlineColorHover, fontColorHover, setFontColorHover
}) {
  return (
    <div className='buttonHover'>

      <input type="checkbox" id='btnBgHover' className='activetionBTN'/>
      <input type="checkbox" id='btnFontSizeHover' className='activetionBTN'/>
      <input type="checkbox" id='btnHPaddHover' className='activetionBTN'/>
      <input type="checkbox" id='btnVPaddHover' className='activetionBTN'/>
      <input type="checkbox" id='btnBorderHover' className='activetionBTN'/>
      <input type="checkbox" id='btnBorderRadiusHover' className='activetionBTN'/>
      <input type="checkbox" id='btnFontColorHover' className='activetionBTN'/>

      <ul className='btnStyleElementsHover'>
        <li className='btnBgColorSettingHover'>
          <BtnColorSettingHover 
            bgColorHover={bgColorHover}
            setBgColorHover={setBgColorHover}
          />
        </li>
        <li className='btnFontSizeSettingHover'>
          <BtnFontSizeSettingHover 
            fontSizeHover={fontSizeHover}
            setFontSizeHover={setFontSizeHover}
          />
        </li>
        <li className='btnFontColorHover'>
          <BtnFontColorHover 
            fontColorHover={fontColorHover}
            setFontColorHover={setFontColorHover}
          />
        </li>
        <li className='btnHPaddSettingHover'>
          <BtnHPaddingSettingHover 
            hPaddingHover={hPaddingHover}
            sethPaddingHover={sethPaddingHover}
          />
        </li>
        <li className='btnVPaddSettingHover'>
          <BtnVPaddingSettingHover 
            vPaddingHover={vPaddingHover}
            setvPaddingHover={setvPaddingHover}
          />
        </li>
        <li className='btnBorderSettingHover'>
          <BtnBorderSettingHover 
            btnBorderHover={btnBorderHover}
            setBtnBorderHover={setBtnBorderHover}
            outlineColorHover={outlineColorHover}
            setOutlineColorHover={setOutlineColorHover}
          />
        </li>
        <li className='btnBorderRadiusSettingHover'>
          <BtnBorderRadiusSettingHover 
            borderRadiusHover={borderRadiusHover}
            setBorderRadiusHover={setBorderRadiusHover}
          />
        </li>
      </ul>
    </div>
  )
}

export default ButtonStyle