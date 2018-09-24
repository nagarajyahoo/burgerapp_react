import React from 'react';
import Logo from '../../ui/logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import Backdrop from '../../ui/backdrop/Backdrop';
import Aux from '../../hoc/Aux';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.displaySideDrawer) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

  return (
      <Aux>
          <Backdrop
              show={props.displaySideDrawer}
              cancelPurchase={props.closed}
          />
          <div className={attachedClasses.join(' ')}>
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