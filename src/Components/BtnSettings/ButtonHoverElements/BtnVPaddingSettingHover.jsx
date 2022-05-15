import React from 'react'

function BtnVPaddingSettingHover({ vPaddingHover, setvPaddingHover}) {
  return (
    <div>
        <label className='text' htmlFor='btnVPaddHover'>
            <p>Vertical Padding</p>
            <i class="fa-solid fa-angle-down"></i>
        </label>
        <div className='btnSetting'>
          <p>0</p>
            <input 
                type="range" 
                min='0' max='100'
                value={vPaddingHover}
                onChange={(e) => setvPaddingHover(e.target.value)}
            />
          <p>100</p>
        </div>
    </div>
  )
}

export default BtnVPaddingSettingHover