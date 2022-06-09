import styles from "./DetailWithLinks.module.scss";
import { Link } from "react-router-dom";

const DetailWithLinks = ({ title, items, classes, row }) => {
  const anchorItems = items.map((item, index) => {
    let url = item.slice(-2, -1);
    return (
      <Link key={index} to={`/${title.toLowerCase()}/${url}`}>
        {index + 1}
      </Link>
    );
  });
  return (
    <div className={`${styles.detail} ${classes} ${row && styles.row}`}>
      <p>{title}:</p>
      <div>{anchorItems.length ? anchorItems : "-"}</div>
    </div>
  );
};

export default DetailWithLinks;
