import styles from "./Subtitle.module.scss";
const Subtitle = ({ children, classes }) => {
  return <h2 className={`${styles.subtitle} ${classes}`}>{children}</h2>;
};

export default Subtitle;
