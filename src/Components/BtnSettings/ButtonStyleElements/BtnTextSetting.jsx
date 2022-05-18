import React from 'react';
import '../../../Styles/BtnSettings/ButtonStyle.css'

function BtnTextSetting({ btnText, setBtnText}) {
  return (
    <div className='buttonTextSettings'>
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