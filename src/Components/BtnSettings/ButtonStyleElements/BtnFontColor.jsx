import React from 'react';
import { CirclePicker } from 'react-color';

function BtnFontColor({ fontColor, setFontColor }) {
  return (
    <div>
        <label className='text' htmlFor='btnFontColor'>
            <p>Font Color</p>
            <i class="fa-solid fa-angle-down"></i>
        </label>
        <div className='btnSetting'>
            <CirclePicker 
                color={ fontColor }
                onChangeComplete={(e) => setFontColor(e.hex)}
            />
        </div>
    </div>
  )
}

export default BtnFontColor