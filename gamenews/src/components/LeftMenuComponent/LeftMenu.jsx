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
import { fetchTopGames, fetchGames, fetchNewGames } from "../../redux/actions/games";

const LeftMenuStyle = makeStyles(() => ({
  root: {
    '&:hover': {
      backgroundColor: '#2f2f2f !important',
      color: '#DBFE00',
    },
  },
}))

function Leftmenu(props) {
  const { fetchTopGames, fetchGames, fetchNewGames} = props;
  const classes = LeftMenuStyle();

 
    
  return (
      <LeftMenu className={classes.menycontainer}>
        <GeneralWhiteText variant="h6">Menu</GeneralWhiteText>
        <MenuList>
          <MenuItem className={classes.root} onClick={() =>fetchGames()} component={Link} to={`/`}>
            <GeneralWhiteText className={classes.root} variant="inherit">Home</GeneralWhiteText>
          </MenuItem>
          <MenuItem className={classes.root}>
            <GeneralWhiteText className={classes.root} onClick={() =>fetchTopGames()} variant="inherit">Highest rated games</GeneralWhiteText>
          </MenuItem>
          <MenuItem className={classes.root}>
            <GeneralWhiteText className={classes.root} onClick={() =>fetchNewGames()} variant="inherit">New releases</GeneralWhiteText>
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

