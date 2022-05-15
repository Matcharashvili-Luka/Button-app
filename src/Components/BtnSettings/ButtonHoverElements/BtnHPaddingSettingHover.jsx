import React from 'react'

function BtnHPaddingSettingHover({ hPaddingHover, sethPaddingHover}) {
  return (
    <div>
        <label className='text' htmlFor='btnHPaddHover'>
            <p>Horizontal Padding</p>
            <i class="fa-solid fa-angle-down"></i>
        </label>
        <div className='btnSetting'>
          <p>0</p>
            <input 
                type="range" 
                min='0' max='50'
                value={hPaddingHover}
                onChange={(e) => sethPaddingHover(e.target.value)}
            />
          <p>50</p>
        </div>
    </div>
  )
}

export default BtnHPaddingSettingHover