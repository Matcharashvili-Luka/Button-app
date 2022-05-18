import React from 'react';
import '../App.css';

function Warning() {
  return (
    <div className='warning'>
        <h1>Warning !</h1>
        <div>
            <p>Not mobile Friendly<i class="fa-solid fa-ban"></i></p>
            <p>(Screen Width Should Be 1150px Or More!)</p>
        </div>
    </div>
  )
}

export default Warning