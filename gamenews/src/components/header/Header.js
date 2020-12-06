import React from 'react';
import iconLogo from './icon-fox.png';
import DayJS from 'react-dayjs';

const currentDate = '';

const Header = () => {

    return (
        <header>
            <div className='items-center'>
                <img src={iconLogo} alt='icon of a fox' className='logo' style={{ height: '100px' }} />
                <div className='column-container'>
                    <h1>Ga<span className='m'>m</span>e Ove<span className='r'>r</span> News</h1>
                    <DayJS className='date' format='dddd D MMMM YYYY'>{ currentDate }</DayJS>
                </div>
            </div>
            <div className='items-right'>
                <button className='login-btn'>Login</button>
            </div>
        </header>
    )
}

export default Header;