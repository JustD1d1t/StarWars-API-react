import styles from "./ItemsContainer.module.scss";
const ItemsContainer = ({ children }) => {
  return <div className={styles.items__container}>{children}</div>;
};

export default ItemsContainer;
