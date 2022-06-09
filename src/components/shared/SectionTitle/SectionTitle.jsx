import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ children, classes }) => {
  return <h1 className={`${styles.sectionTitle} ${classes}`}>{children}</h1>;
};

export default SectionTitle;
