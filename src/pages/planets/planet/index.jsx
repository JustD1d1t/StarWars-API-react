import { useParams } from "react-router-dom";
import { useEffect } from "react";

import styles from "./PlanetPage.module.scss";

import { links } from "../../../config";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import DetailWithLinks from "../../../components/shared/DetailWithLinks.jsx/DetailWithLinks";
import Detail from "../../../components/shared/Detail/Detail";

import planetImage from "../../../static/img/planet-page.jpg";

import useHttpRequest from "../../../hooks/useHttpRequest";

const PlanetPage = (props) => {
  const { id } = useParams();
  const { state, sendRequest, LoadingSpinner } = useHttpRequest();

  useEffect(() => {
    sendRequest(`${links.planets}/${id}`);
  }, [sendRequest, id]);
  const {
    climate,
    diameter,
    films,
    gravity,
    name,
    orbital_period,
    population,
    residents,
    rotation_period,
    surface_water,
    terrain,
  } = state.items;

  console.log(state.items);

  return (
    <>
      {state.isLoading ? (
        <LoadingSpinner asOverlay />
      ) : (
        <>
          <SectionTitle>{name}</SectionTitle>
          <div className={styles.planet}>
            <Detail>
              Climate: <span>{climate}</span>
            </Detail>
            <Detail>
              Diameter: <span>{diameter}</span>
            </Detail>
            <Detail>
              Gravity: <span>{gravity}</span>
            </Detail>
            <Detail>
              Orbital period: <span>{orbital_period}</span>
            </Detail>
            <Detail>
              Population: <span>{population}</span>
            </Detail>
            <Detail>
              Language: <span>{rotation_period}</span>
            </Detail>
            <Detail>
              Eye colors: <span>{surface_water}</span>
            </Detail>
            <Detail>
              Skin colors: <span>{terrain}</span>
            </Detail>
            <DetailWithLinks title="Residents" items={residents} row />
            <DetailWithLinks title="Films" items={films} row />
            <div className={styles.planet__image}>
              <img src={planetImage} alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PlanetPage;
