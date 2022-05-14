import React from 'react'

function BtnHPaddingSetting({ hPadding, sethPadding}) {
  return (
    <div>
        <label className='text' htmlFor='btnHPadd'>
            <p>Horizontal Padding</p>
            <i class="fa-solid fa-angle-down"></i>
        </label>
        <div className='btnSetting'>
          <p>0</p>
            <input 
                type="range" 
                min='0' max='50'
                value={hPadding}
                onChange={(e) => sethPadding(e.target.value)}
            />
          <p>50</p>
        </div>
    </div>
  )
}

export default BtnHPaddingSetting