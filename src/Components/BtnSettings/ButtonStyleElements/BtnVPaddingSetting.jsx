import React from 'react'

function BtnVPaddingSetting({ vPadding, setvPadding}) {
  return (
    <div>
        <label className='text' htmlFor='btnVPadd'>
            <p>Vertical Padding</p>
            <i class="fa-solid fa-angle-down"></i>
        </label>
        <div className='btnSetting'>
          <p>0</p>
            <input 
                type="range" 
                min='0' max='100'
                value={vPadding}
                onChange={(e) => setvPadding(e.target.value)}
            />
          <p>100</p>
        </div>
    </div>
  )
}

export default BtnVPaddingSetting