import styles from "./Detail.module.scss";

import { Link } from "react-router-dom";
const Detail = ({ children, link, classes, center }) => {
  return (
    <>
      {link ? (
        <p
          className={`${styles.detail} ${classes ? classes : ""} ${
            center && styles.center
          }`}
        >
          <Link to={link}> {children}</Link>
        </p>
      ) : (
        <p
          className={`${styles.detail} ${classes ? classes : ""} ${
            center && styles.center
          }`}
        >
          {children}
        </p>
      )}
    </>
  );
};

export default Detail;
