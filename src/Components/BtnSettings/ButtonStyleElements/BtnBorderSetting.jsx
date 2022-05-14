import React from 'react';
import { SketchPicker } from 'react-color';

function BtnBorderSetting({ btnBorder, setBtnBorder, oulineColor, setOutlineColor  }) {
  return (
    <div>
        <label className='text' htmlFor='btnBorder'>
            <p>Border</p>
            <i class="fa-solid fa-angle-down"></i>
        </label>
        <div className='borderAdditionalSettings'>
          <div className='activateBorder'>
            <label htmlFor='borderCheck'>Border</label>
            <input type="checkbox" id='borderCheck'/>
          </div>
          <div className='btnSetting'>
              <p>0</p>
                  <input 
                    type="range" 
                    min='0' max='20'
                    value={btnBorder}
                    onChange={(e) => setBtnBorder(e.target.value)}
                  />
              <p>20</p>
          </div>
          <div>
            <SketchPicker 
              color={ oulineColor }
              onChangeComplete={(e) => setOutlineColor(e.hex)}
            /> 
          </div>
        </div>
    </div>
  )
}

export default BtnBorderSetting