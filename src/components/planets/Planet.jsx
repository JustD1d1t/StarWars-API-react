import Box from "../shared/Box/Box";
import { Link } from "react-router-dom";

import styles from "./Planet.module.scss";

const Planets = ({ item }) => {
  const { name, url } = item;
  const planetId = url.slice(url.indexOf("planets") + 8, url.lastIndexOf("/"));
  return (
    <Box>
      <div className={styles.planet}>
        <h2 className={styles.planet__title}>
          <Link to={`/planets/${planetId}`}>{name}</Link>
        </h2>
      </div>
    </Box>
  );
};

export default Planets;
