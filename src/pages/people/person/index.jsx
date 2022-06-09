import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { links } from "../../../config";
import useHttpRequest from "../../../hooks/useHttpRequest";
import styles from "./PersonPage.module.scss";

import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import DetailWithLinks from "../../../components/shared/DetailWithLinks.jsx/DetailWithLinks";
import Detail from "../../../components/shared/Detail/Detail";

const PersonPage = () => {
  const { id } = useParams();
  const { state, sendRequest, LoadingSpinner } = useHttpRequest();
  useEffect(() => {
    sendRequest(`${links.people}/${id}`);
  }, [sendRequest, id]);

  const {
    birth_year,
    eye_color,
    films,
    gender,
    hair_color,
    height,
    homeworld,
    mass,
    name,
    skin_color,
    species,
    starships,
    vehicles,
  } = state.items;
  return (
    <>
      {state.isLoading ? (
        <LoadingSpinner asOverlay />
      ) : (
        <div className={styles.person}>
          <SectionTitle classes={styles.person__title}>{name}</SectionTitle>
          <div className={styles.person__details}>
            <Detail>
              Birthday <span>{birth_year}</span>
            </Detail>
            <Detail>
              Gender <span>{gender}</span>
            </Detail>
            <Detail>
              Mass <span>{mass}</span>
            </Detail>
            <Detail>
              Height <span>{height}</span>
            </Detail>
            <Detail>
              Eye color <span>{eye_color}</span>
            </Detail>
            <Detail>
              Skin color <span>{skin_color}</span>
            </Detail>
            <Detail>
              Hair color <span>{hair_color}</span>
            </Detail>
            <Detail link={`/planets/${homeworld.slice(-2, -1)}`}>
              Homeworld
            </Detail>
            <DetailWithLinks
              classes={styles.person__detailsWithLinks}
              title="Films"
              items={films}
            />
            <DetailWithLinks
              classes={styles.person__detailsWithLinks}
              title="Species"
              items={species}
            />
            <DetailWithLinks
              classes={styles.person__detailsWithLinks}
              title="Starships"
              items={starships}
            />
            <DetailWithLinks
              classes={styles.person__detailsWithLinks}
              title="Vehicles"
              items={vehicles}
            />
          </div>
          <div className={styles.person__details}></div>
        </div>
      )}
    </>
  );
};

export default PersonPage;
