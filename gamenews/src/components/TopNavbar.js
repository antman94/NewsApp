import React from 'react';
import SearchBar from './SearchBar';

const platforms = [
    {
      name: 'Playstation',
      id: 1,
    },
    {
      name: 'XBOX',
      id: 2,
    },
    {
      name: 'PC',
      id: 3,
    },
    {
      name: 'Nintendo',
      id: 4,
    }
  ];

const TopNavbar = () => {
    return (
        <div>
            <hr />
            <div className='navbar'>
                <ul className='navbar-ul'>
                    {platforms.map((platform, id) => (
                        <li className='navbar-li' key={id} name={platform.name}>
                            {platform.name}
                        </li>
                    ))}
                    <SearchBar />
                </ul>
            </div>
            <hr />
        </div>
    );
}

export default TopNavbar;
