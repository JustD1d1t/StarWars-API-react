import { useParams } from "react-router-dom";
import { useEffect } from "react";

import styles from "./SpeciesTypePage.module.scss";

import { links } from "../../../config";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import DetailWithLinks from "../../../components/shared/DetailWithLinks.jsx/DetailWithLinks";
import Detail from "../../../components/shared/Detail/Detail";

import speciesImage from "../../../static/img/species-page.jpg";

import useHttpRequest from "../../../hooks/useHttpRequest";

const SpeciesTypePage = (props) => {
  const { id } = useParams();
  const { state, sendRequest, LoadingSpinner } = useHttpRequest();

  useEffect(() => {
    sendRequest(`${links.species}/${id}`);
  }, [sendRequest, id]);
  const {
    average_height,
    average_lifespan,
    classification,
    designation,
    eye_colors,
    films,
    hair_colors,
    homeworld,
    language,
    name,
    people,
    skin_colors,
  } = state.items;

  console.log(state.items);

  return (
    <>
      {state.isLoading ? (
        <LoadingSpinner asOverlay />
      ) : (
        <>
          <SectionTitle>{name}</SectionTitle>
          <div className={styles.speciesType}>
            <Detail>
              Average height: <span>{average_height}</span>
            </Detail>
            <Detail>
              Average lifespan: <span>{average_lifespan}</span>
            </Detail>
            <Detail>
              Classification: <span>{classification}</span>
            </Detail>
            <Detail>
              Designation: <span>{designation}</span>
            </Detail>
            <Detail link={homeworld}>Homeworld</Detail>
            <Detail>
              Language: <span>{language}</span>
            </Detail>
            <Detail>
              Eye colors: <span>{eye_colors}</span>
            </Detail>
            <Detail>
              Skin colors: <span>{skin_colors}</span>
            </Detail>
            <Detail>
              Hair colors: <span>{hair_colors}</span>
            </Detail>
            {people.length ? (
              <DetailWithLinks title="People" items={people} row />
            ) : null}
            <DetailWithLinks title="Films" items={films} row />
            <div className={styles.speciesType__image}>
              <img src={speciesImage} alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SpeciesTypePage;
