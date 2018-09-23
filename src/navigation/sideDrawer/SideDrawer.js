import React from 'react';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import Backdrop from '../../ui/backdrop/Backdrop';
import Aux from '../../hoc/Aux';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
  return (
      <Aux>
          <Backdrop/>
          <div className={classes.SideDrawer}>
              <div className={classes.Logo}>
                  <Logo/>
              </div>
              <nav>
                  <NavigationItems/>
              </nav>
          </div>
      </Aux>
  );
};

export default sideDrawer;