import { routes } from "../routes/routes";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.scss";

import logo from "../static/img/sw-logo.png";

const Navigation = (props) => {
  const handleHamburger = () => {
    const hamburger = document.querySelector(
      `.${classes.navigation__hamburger}`
    );
    hamburger.classList.toggle(classes.navigation__hamburgerActive);
  };

  const handleNavigation = () => {
    if (window.innerWidth < 1440) {
      const navLinksList = document.querySelector(
        `.${classes.navigation__links}`
      );
      navLinksList.classList.toggle(classes.navigation__linksActive);
      handleHamburger();
    }
  };

  const navigationLinks = routes.map(
    (route) =>
      route.showInNavigation && (
        <li key={route.path}>
          <NavLink
            to={route.path}
            className={classes.navigation__link}
            onClick={handleNavigation}
          >
            {route.label}
          </NavLink>
        </li>
      )
  );

  return (
    <nav className={classes.navigation}>
      <div className={classes.navigation__logo}>
        <NavLink to={routes[0].path}>
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <ul className={classes.navigation__links}>{navigationLinks}</ul>
      <button
        className={classes.navigation__hamburger}
        onClick={handleNavigation}
        aria-label="Open sidedrawer menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navigation;
