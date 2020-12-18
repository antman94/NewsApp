import React, { useState } from 'react';
import SearchBar from './SearchBar'; 
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({

  activeButton: {
    fontFamily: 'Open Sans',
    fontSize: '1em',
    fontWeight: '700',
    color: '#DBFE00',
    textTransform: 'uppercase'
  }
}))

const platforms = [
  {
    name: 'All',
    id: 0,
    active: false
  },
  {
    name: 'Playstation',
    id: 1,
    active: false
  },
  {
    name: 'XBOX',
    id: 2,
    active: false
  },
  {
    name: 'PC',
    id: 3,
    active: false
  },
  {
    name: 'Nintendo',
    id: 4,
    active: false
  }
];

const TopNavbar = () => {
  const [active, setActive] = useState(false);
  const classes = useStyles();

  const handleClick = (e) => {
    setActive(e.target.name);
  }

    return (
        <div>
            <hr />
            <div className='navbar'>
                <div className='navbar-list'>
                    {platforms.map((platform, id) => (
                      platform.name === active ? 
                      <button
                        onClick={handleClick}
                        className={classes.activeButton}
                        key={id}
                        name={platform.name}>
                            {platform.name}
                      </button> :
                      <button
                        onClick={handleClick}
                        className='category-btn'
                        key={id}
                        name={platform.name}>
                            {platform.name}
                      </button>
                    ))}
                    <SearchBar />
                </div>
            </div>
            <hr />
        </div>
    );
}

export default TopNavbar;
