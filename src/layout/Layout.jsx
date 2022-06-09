import classes from "./Layout.module.scss";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
