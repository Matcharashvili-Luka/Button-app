import React from 'react';
import { CirclePicker } from 'react-color';

function BtnBorderSettingHover({ btnBorderHover, setBtnBorderHover, oulineColorHover, setOutlineColorHover }) {

  return (
    <div>
      <label className='text' htmlFor='btnBorderHover'>
        <p>Border</p>
        <i class="fa-solid fa-angle-down"></i>
      </label>
      <div className='borderAdditionalSettings'>
        <div className='btnSetting'>
          <div className='text'>
            <p>0</p>
            <input
              type="range" 
              min='0' max='20'
              value={btnBorderHover}
              onChange={(e) => setBtnBorderHover(e.target.value)}
            />
            <p>20</p>
          </div>
            <CirclePicker 
              color={ oulineColorHover }
              onChangeComplete={(e) => setOutlineColorHover(e.hex)}
            />
        </div>
      </div>
    </div>
  )
}

export default BtnBorderSettingHover