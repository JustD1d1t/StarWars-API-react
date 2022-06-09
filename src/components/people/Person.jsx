import { Link } from "react-router-dom";
import Box from "../shared/Box/Box";

import styles from "./Person.module.scss";

const Person = ({ item }) => {
  const { name, url } = item;
  const personId = url.slice(url.indexOf("people") + 7, url.lastIndexOf("/"));

  return (
    <Box>
      <div className={styles.person}>
        <h2 className={styles.person__name}>
          <Link to={`/people/${personId}`}>{name}</Link>
        </h2>
      </div>
    </Box>
  );
};

export default Person;
