import React from 'react'

function BtnBorderRadiusSetting({ borderRadius, setBorderRadius}) {
  return (
    <div>
        <label className='text' htmlFor='btnBorderRadius'>
            <p>Border Radius</p>
            <i class="fa-solid fa-angle-down"></i>
        </label>
        <div className='btnSetting'>
            <p>0</p>
                <input 
                type="range" 
                min='0' max='100' step='2'
                value={borderRadius}
                onChange={(e) => setBorderRadius(e.target.value)}
                />
            <p>100</p>
        </div>
    </div>
  )
}

export default BtnBorderRadiusSetting