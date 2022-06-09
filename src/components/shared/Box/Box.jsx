import styles from "./Box.module.scss";

const Box = ({ children, classes }) => {
  return (
    <div className={`${styles.box} ${classes ? classes : ""}`}>{children}</div>
  );
};

export default Box;
