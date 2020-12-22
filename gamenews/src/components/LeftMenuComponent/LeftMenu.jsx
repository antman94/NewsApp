import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { 
  LeftMenu,
  GeneralWhiteText,
 } from '../common/index.styled';
import { makeStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import HomeIcon from '@material-ui/icons/Home';
import { fetchTopGames, fetchGames, fetchNewGames } from "../../redux/actions/games";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import StarsIcon from '@material-ui/icons/Stars';


const LeftMenuStyle = makeStyles(() => ({
  root: {
    '&:hover': {
      backgroundColor: '#2f2f2f !important',
      color: '#DBFE00',
    },
  },
  listItem: {
    color: 'white',
    marginRight: '5px'
  }
}))

function Leftmenu(props) {
  const { fetchTopGames, fetchGames, fetchNewGames} = props;
  const classes = LeftMenuStyle();

 
    
  return (
    <LeftMenu className={classes.menycontainer}>
      <GeneralWhiteText variant="h6">Menu</GeneralWhiteText>
      <MenuList>
        <MenuItem className={classes.root} onClick={() =>fetchGames('1,2,3,7')} component={Link} to={`/`}>
          <ListItemIcon>
            <HomeIcon className={classes.listItem}/>
            <GeneralWhiteText className={classes.root} variant="inherit">Home</GeneralWhiteText>
          </ListItemIcon>
        </MenuItem>
        <MenuItem className={classes.root}>
          <ListItemIcon>
            <WhatshotIcon className={classes.listItem}/>
            <GeneralWhiteText className={classes.root} onClick={() =>fetchNewGames()} variant="inherit">New releases</GeneralWhiteText>
          </ListItemIcon>
        </MenuItem>
        <MenuItem className={classes.root}>
          <ListItemIcon>
            <StarsIcon className={classes.listItem}/>
            <GeneralWhiteText className={classes.root} onClick={() =>fetchTopGames()} variant="inherit">Highest rated games</GeneralWhiteText>
          </ListItemIcon>
        </MenuItem>
      </MenuList>
    </LeftMenu>
  )
}

const mapStateToProps = (state) => { 
  return {
  }
}
const mapDispatchToProps = { 
  fetchTopGames,
  fetchGames,
  fetchNewGames

}

export default connect(mapStateToProps, mapDispatchToProps)(Leftmenu)

