import React from 'react';
import iconLogo from './icon-fox.png';

const Header = () => {
    return (
        <header>
            <img src={iconLogo} alt='icon of a fox' style={{ height: '95px' }} />
            <div className='column-container'>
                <h1>Game Over News</h1>
                <p>– I'VE GOT NEWS FOR YA! –</p>
            </div>
            <div className='items-right'>
                <p>Sign in</p>
                <p>Login</p>
            </div>
        </header>
    )
}

export default Header;