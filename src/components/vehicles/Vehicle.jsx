import Box from "../shared/Box/Box";
import { Link } from "react-router-dom";

import styles from "./Vehicle.module.scss";

const Vehicle = ({ item }) => {
  const { name, url } = item;
  const vehicleId = url.slice(
    url.indexOf("vehicles") + 9,
    url.lastIndexOf("/")
  );
  return (
    <Box>
      <div className={styles.planet}>
        <h2 className={styles.planet__title}>
          <Link to={`/vehicles/${vehicleId}`}>{name}</Link>
        </h2>
      </div>
    </Box>
  );
};

export default Vehicle;
