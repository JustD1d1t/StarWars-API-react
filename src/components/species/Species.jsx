import Box from "../shared/Box/Box";
import { Link } from "react-router-dom";

import styles from "./Species.module.scss";

const Species = ({ item }) => {
  const { name, url } = item;
  const speciesId = url.slice(url.indexOf("species") + 8, url.lastIndexOf("/"));
  return (
    <Box>
      <div className={styles.species}>
        <h2 className={styles.species__title}>
          <Link to={`/species/${speciesId}`}>{name}</Link>
        </h2>
      </div>
    </Box>
  );
};

export default Species;
