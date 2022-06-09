import Box from "../shared/Box/Box";
import { Link } from "react-router-dom";

import styles from "./Film.module.scss";

const Films = ({ item }) => {
  const { title, url } = item;
  const filmId = url.slice(url.indexOf("films") + 6, url.lastIndexOf("/"));
  return (
    <Box>
      <div className={styles.film}>
        <h2 className={styles.film__title}>
          <Link to={`/films/${filmId}`} className={styles.person__nameLink}>
            {title}
          </Link>
        </h2>
      </div>
    </Box>
  );
};

export default Films;
