import React from 'react';
import { SketchPicker } from 'react-color';

function BtnColorSetting({ bgColor, setBgColor}) {
  return (
    <div>
        <label className='text' htmlFor='btnBg'>
            <p>Background Color</p>
            <i class="fa-solid fa-angle-down"></i>
            </label>
            <div className='btnSetting'>
            <SketchPicker 
                color={ bgColor }
                onChangeComplete={(e) => setBgColor(e.hex)}
            /> 
        </div>
    </div>
  )
}

export default BtnColorSetting