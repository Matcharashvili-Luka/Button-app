import React from 'react'

function BtnFontWeightSetting({fontWeight, setFontWeight}) {
  return (
    <div>
        <label className='text' htmlFor='btnFontWeight'>
            <p>Font Weight</p>
            <i class="fa-solid fa-angle-down"></i>
        </label>
        <div className='btnSetting'>
            <p>400</p>
                <input 
                type="range" 
                min='400' max='900' step='100'
                value={fontWeight}
                onChange={(e) => setFontWeight(e.target.value)}
                />
            <p>900</p>
        </div>
    </div>
  )
}

export default BtnFontWeightSetting