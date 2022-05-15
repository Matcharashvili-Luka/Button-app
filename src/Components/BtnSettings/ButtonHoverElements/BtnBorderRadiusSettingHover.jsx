import React from 'react'

function BtnBorderRadiusSettingHover({ borderRadiusHover, setBorderRadiusHover}) {
  return (
    <div>
        <label className='text' htmlFor='btnBorderRadiusHover'>
            <p>Border Radius</p>
            <i class="fa-solid fa-angle-down"></i>
        </label>
        <div className='btnSetting'>
            <p>0</p>
                <input 
                type="range" 
                min='0' max='100' step='2'
                value={borderRadiusHover}
                onChange={(e) => setBorderRadiusHover(e.target.value)}
                />
            <p>100</p>
        </div>
    </div>
  )
}

export default BtnBorderRadiusSettingHover