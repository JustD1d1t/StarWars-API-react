import { useParams } from "react-router-dom";
import { useEffect } from "react";

import styles from "./FilmPage.module.scss";

import useHttpRequest from "../../../hooks/useHttpRequest";

import { links } from "../../../config";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import DetailWithLinks from "../../../components/shared/DetailWithLinks.jsx/DetailWithLinks";
import Detail from "../../../components/shared/Detail/Detail";
import poster from "../../../static/img/starwars.jpg";
import Box from "../../../components/shared/Box/Box";

const FilmPage = () => {
  const { id } = useParams();
  const { state, sendRequest, LoadingSpinner } = useHttpRequest();
  useEffect(() => {
    sendRequest(`${links.films}/${id}`);
  }, [sendRequest, id]);
  const {
    characters,
    director,
    opening_crawl,
    planets,
    producer,
    release_date,
    species,
    starships,
    title,
    vehicles,
  } = state.items;
  return (
    <>
      {state.isLoading ? (
        <LoadingSpinner asOverlay />
      ) : (
        <div className={styles.film}>
          <SectionTitle classes={styles.film__title}>{title}</SectionTitle>
          <div className={styles.film__crawl}>{opening_crawl}</div>
          <div className={styles.film__details}>
            <Detail>
              Director <span>{director}</span>
            </Detail>
            <Detail>
              Producer <span>{producer}</span>
            </Detail>
            <Detail>
              Release date <span>{release_date}</span>
            </Detail>
            <DetailWithLinks title="Characters" items={characters} />
            <DetailWithLinks title="Planets" items={planets} />
            <DetailWithLinks title="Species" items={species} />
            <DetailWithLinks title="Starships" items={starships} />
            <DetailWithLinks title="Vehicles" items={vehicles} />
          </div>
          <Box classes={styles.film__picture}>
            <img src={poster} alt="Film poster" />
          </Box>
        </div>
      )}
    </>
  );
};

export default FilmPage;
