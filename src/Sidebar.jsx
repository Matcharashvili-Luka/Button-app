import React from 'react';
import { SketchPicker } from 'react-color';

function Sidebar({  }) {
  return (
    <div className='sideBar'>
        <div className='sideBarHeaders'>
            <p>BTN</p>
            <p>HVR</p>
        </div>
        <div  className='sideBarMenu'>
            <ul>
                <li>
                    <div>
                        <p>Font Size</p>
                        ...
                    </div>
                    <div>
                        <input type='range' />
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar


{/* <SketchPicker 
    color={ bgColor }
    onChangeComplete={(e) => setBgColor(e.hex)}
/> */}