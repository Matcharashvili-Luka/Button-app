import React from 'react';
import { CirclePicker } from 'react-color';

function BtnFontColorHover({ fontColorHover, setFontColorHover }) {
  return (
    <div>
        <label className='text' htmlFor='btnFontColorHover'>
            <p>Font Color</p>
            <i class="fa-solid fa-angle-down"></i>
        </label>
        <div className='btnSetting'>
            <CirclePicker 
                color={ fontColorHover }
                onChangeComplete={(e) => setFontColorHover(e.hex)}
            />
        </div>
    </div>
  )
}

export default BtnFontColorHover