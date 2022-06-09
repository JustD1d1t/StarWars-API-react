import Box from "../shared/Box/Box";
import { Link } from "react-router-dom";

import styles from "./Starship.module.scss";

const Starship = ({ item }) => {
  const { name, url } = item;
  const starshipId = url.slice(
    url.indexOf("starships") + 10,
    url.lastIndexOf("/")
  );
  return (
    <Box>
      <div className={styles.starship}>
        <h2 className={styles.starship__title}>
          <Link to={`/starships/${starshipId}`}>{name}</Link>
        </h2>
      </div>
    </Box>
  );
};

export default Starship;
