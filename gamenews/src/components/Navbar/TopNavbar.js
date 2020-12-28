import React, { useState } from 'react';
import { connect } from 'react-redux'

import SearchBar from '../LeftMenuComponent/SearchBar'; 
import { makeStyles } from '@material-ui/core/styles';
import { fetchGames } from '../../redux/actions/games'

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
    gameId: '1,2,3,7',
    active: false
  },
  {
    name: 'Playstation',
    id: 1,
    gameId: 2,
    active: false
  },
  {
    name: 'XBOX',
    id: 2,
    gameId: 3,
    active: false
  },
  {
    name: 'PC',
    id: 3,
    gameId: 1,
    active: false
  },
  {
    name: 'Nintendo',
    id: 4,
    gameId: 7,
    active: false
  }
];

const TopNavbar = (props) => {
  const {fetchGames} = props;
  const [active, setActive] = useState(false);
  const classes = useStyles();

  const handleClick = (e) => {
    setActive(e.target.name);
    fetchGames(e.target.name)

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
                        name={platform.gameId}>
                            {platform.name}
                      </button> :
                      <button
                        onClick={handleClick}
                        className='category-btn'
                        key={id}
                        name={platform.gameId}>
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
const mapStateToProps = (state) => { 
  return {
  }
}
const mapDispatchToProps = { 
  fetchGames
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar)

