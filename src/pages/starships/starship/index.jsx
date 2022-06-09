import { useParams } from "react-router-dom";
import { useEffect } from "react";

import styles from "./StarshipPage.module.scss";

import { links } from "../../../config";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import DetailWithLinks from "../../../components/shared/DetailWithLinks.jsx/DetailWithLinks";
import Detail from "../../../components/shared/Detail/Detail";

import starshipImage from "../../../static/img/starship-page.jpg";

import useHttpRequest from "../../../hooks/useHttpRequest";

const StarshipPage = (props) => {
  const { id } = useParams();
  const { state, sendRequest, LoadingSpinner } = useHttpRequest();

  useEffect(() => {
    sendRequest(`${links.starships}/${id}`);
  }, [sendRequest, id]);
  const {
    MGLT,
    cargo_capacity,
    consumables,
    cost_in_credits,
    crew,
    films,
    hyperdrive_rating,
    length,
    manufacturer,
    max_atmosphering_speed,
    model,
    name,
    passengers,
    pilots,
    starship_class,
  } = state.items;

  return (
    <>
      {state.isLoading ? (
        <LoadingSpinner asOverlay />
      ) : (
        <>
          <SectionTitle>{name}</SectionTitle>
          <div className={styles.starship}>
            <Detail>
              MGLT: <span>{MGLT}</span>
            </Detail>
            <Detail>
              Cargo capacity: <span>{cargo_capacity}</span>
            </Detail>
            <Detail>
              Cost: <span>{cost_in_credits}</span>
            </Detail>
            <Detail>
              Consumables: <span>{consumables}</span>
            </Detail>
            <Detail>
              Crew: <span>{crew}</span>
            </Detail>
            <Detail>
              Rating: <span>{hyperdrive_rating}</span>
            </Detail>
            <Detail>
              Length: <span>{length}</span>
            </Detail>
            <Detail>
              Manufacturer: <span>{manufacturer}</span>
            </Detail>
            <Detail>
              Max speed: <span>{max_atmosphering_speed}</span>
            </Detail>
            <Detail>
              Passengers: <span>{passengers}</span>
            </Detail>
            <Detail>
              Model: <span>{model}</span>
            </Detail>
            {pilots.length ? (
              <DetailWithLinks title="Pilots" items={pilots} />
            ) : null}
            <Detail>
              Class: <span>{starship_class}</span>
            </Detail>
            <DetailWithLinks title="Films" items={films} row />
            <div className={styles.starship__image}>
              <img src={starshipImage} alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StarshipPage;
