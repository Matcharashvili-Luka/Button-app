import React from 'react'

function BtnTextSetting({ btnText, setBtnText}) {
  return (
    <div>
        <label className='text' htmlFor='btnText'>
            <p>Button Text</p>
            <i class="fa-solid fa-angle-down"></i>
        </label>
        <div className='btnSetting'>
            <input 
              type="text" 
              placeholder='Text'
              value={btnText}
              onChange={(e) => setBtnText(e.target.value)}
            />
        </div>
    </div>
  )
}

export default BtnTextSetting