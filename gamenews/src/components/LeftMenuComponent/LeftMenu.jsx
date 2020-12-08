import React from 'react';

import { 
  LeftMenu,
  GeneralWhiteText,
 } from '../common/index.styled';
 import { makeStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

const LeftMenuStyle = makeStyles(() => ({
  root: {
    '&:hover': {
      backgroundColor: '#2f2f2f !important',
      color: '#DBFE00',
    },
  },
}))

function Leftmenu() {

  const classes = LeftMenuStyle();
    
  return (
      <LeftMenu>
      <GeneralWhiteText>Console</GeneralWhiteText>
        <MenuList>
          <MenuItem className={classes.root}>
            <GeneralWhiteText className={classes.root} variant="inherit">Playstation 4</GeneralWhiteText>
          </MenuItem>
          <MenuItem className={classes.root}>
            <GeneralWhiteText className={classes.root} variant="inherit">Playstation 5</GeneralWhiteText>
          </MenuItem>
        </MenuList>
        <GeneralWhiteText>Menu name</GeneralWhiteText>
        <MenuList>
          <MenuItem className={classes.root}>
            <GeneralWhiteText className={classes.root} variant="inherit">Top 30 Games</GeneralWhiteText>
          </MenuItem>
          <MenuItem className={classes.root}>
            <GeneralWhiteText className={classes.root} variant="inherit">Release</GeneralWhiteText>
          </MenuItem>
        </MenuList>
      </LeftMenu>
  )
}

export default Leftmenu;