import React from 'react';

import { 
  LeftMenu,
  GeneralWhiteText,
 } from '../common/index.styled';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';



function Leftmenu() {

    
  return (
      <LeftMenu>
      <GeneralWhiteText>Console</GeneralWhiteText>
        <MenuList>
          <MenuItem>
            <GeneralWhiteText variant="inherit">Playstation 4</GeneralWhiteText>
          </MenuItem>
          <MenuItem>
            <GeneralWhiteText variant="inherit">Playstation 5</GeneralWhiteText>
          </MenuItem>
        </MenuList>
        <GeneralWhiteText>Menu name</GeneralWhiteText>
        <MenuList>
          <MenuItem>
            <GeneralWhiteText variant="inherit">Top 30 Games</GeneralWhiteText>
          </MenuItem>
          <MenuItem>
            <GeneralWhiteText variant="inherit">Release</GeneralWhiteText>
          </MenuItem>
        </MenuList>
      </LeftMenu>
  )
}

export default Leftmenu;