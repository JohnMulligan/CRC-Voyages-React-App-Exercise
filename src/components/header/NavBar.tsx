import React from 'react';
import {
  Hidden
} from '@mui/material';

import CanscandingMenu from '../canscanding/CanscandingMenu';

const NavBar: React.FC = () => {

  return (
    <Hidden smDown>
      <CanscandingMenu />
    </Hidden>

  );
};

export default NavBar;