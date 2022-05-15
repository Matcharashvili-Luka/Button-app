import React from 'react'

function BtnTransitionSetting({ transition, setTransition}) {
  return (
    <div>
        <label className='text' htmlFor='btnTransition'>
            <p>Transition</p>
            <i class="fa-solid fa-angle-down"></i>
        </label>
        <div className='btnSetting'>
            <p>0</p>
            <input 
                type="range" 
                min='0' max='3' step='0.1'
                value={transition}
                onChange={(e) => setTransition(e.target.value)}
            />
            <p>3</p>
        </div>
    </div>
  )
}

export default BtnTransitionSetting