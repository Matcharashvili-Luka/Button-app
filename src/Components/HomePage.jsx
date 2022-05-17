import React from 'react';
import '../Styles/HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='homePage'>
        <div className='homePageText'>
            <p className='headerOfHomePage'>Build Your Own Button</p>
            <p className='homePageP'>(Not Mobile Friendly!)</p>
            <p className='homePageP'>(Screen Width Should Be More Than 1150px!)</p>
        </div>
        <Link to='/build'>
            <button className='homePageButton'>Click To Build</button>
        </Link>
    </div>
  )
}

export default HomePage