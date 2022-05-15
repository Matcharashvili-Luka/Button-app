import React from 'react';
import { SketchPicker } from 'react-color';

function BtnColorSettingHover({ bgColorHover, setBgColorHover}) {
  return (
    <div>
        <label className='text' htmlFor='btnBgHover'>
            <p>Background Color</p>
            <i class="fa-solid fa-angle-down"></i>
            </label>
            <div className='btnSetting'>
            <SketchPicker 
                color={ bgColorHover }
                onChangeComplete={(e) => setBgColorHover(e.hex)}
            /> 
        </div>
    </div>
  )
}

export default BtnColorSettingHover