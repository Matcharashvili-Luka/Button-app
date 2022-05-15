import React from 'react'

function BtnFontSizeSettingHover({fontSizeHover, setFontSizeHover}) {
  return (
    <div>
        <label className='text' htmlFor='btnFontSizeHover'>
            <p>Font Size</p>
            <i class="fa-solid fa-angle-down"></i>
        </label>
        <div className='btnSetting'>
            <p>0</p>
                <input 
                type="range" 
                min='0' max='99' step='2'
                value={fontSizeHover}
                onChange={(e) => setFontSizeHover(e.target.value)}
                />
            <p>99</p>
        </div>
    </div>
  )
}

export default BtnFontSizeSettingHover