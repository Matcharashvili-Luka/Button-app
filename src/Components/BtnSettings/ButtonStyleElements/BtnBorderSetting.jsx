import React from 'react';
import { CirclePicker } from 'react-color';

function BtnBorderSetting({ btnBorder, setBtnBorder, oulineColor, setOutlineColor, enableOrDisable, setEnableOrDisable  }) {

  return (
    <div>
      <label className='text' htmlFor='btnBorder'>
        <p>Border</p>
        <i class="fa-solid fa-angle-down"></i>
      </label>
      <div className='borderAdditionalSettings'>
        <div className='btnSetting'>
          <div className='activateBorder'>
            <label htmlFor='borderCheck'>Border</label>
            <input 
              type="checkbox" 
              id='borderCheck'
              onClick={() => setEnableOrDisable(!enableOrDisable)}
            />
          </div>
          <div className='text'>
            <p>0</p>
            <input
              disabled={enableOrDisable} 
              type="range" 
              min='0' max='20'
              value={btnBorder}
              onChange={(e) => setBtnBorder(e.target.value)}
            />
            <p>20</p>
          </div>
          <CirclePicker 
            color={ oulineColor }
            onChangeComplete={(e) => setOutlineColor(e.hex)}
          />
        </div>
      </div>
    </div>
  )
}

export default BtnBorderSetting