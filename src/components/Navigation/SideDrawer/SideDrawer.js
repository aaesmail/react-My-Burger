import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  const attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.show) {
    attachedClasses[1] = classes.Open;
  }

  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.close} />
      <div className={attachedClasses.join(" ")} onClick={props.close}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Fragment>
  );
};

SideDrawer.propTypes = {
  close: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default SideDrawer;
