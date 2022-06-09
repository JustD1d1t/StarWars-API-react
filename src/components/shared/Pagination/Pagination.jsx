import styles from "./Pagination.module.scss";
import { Link } from "react-router-dom";

const Pagination = ({ prev, next, path }) => {
  return (
    <div className={styles.pagination}>
      {prev && (
        <Link
          className={styles.pagination__button}
          to={`${path}${prev.slice(prev.lastIndexOf("=") + 1, prev.length)}`}
        >
          Prev page
        </Link>
      )}

      {next && (
        <Link
          className={styles.pagination__button}
          to={`${path}${next.slice(next.lastIndexOf("=") + 1, next.length)}`}
        >
          Next page
        </Link>
      )}
    </div>
  );
};

export default Pagination;
