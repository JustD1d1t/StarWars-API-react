import { useParams } from "react-router-dom";
import { useEffect } from "react";

import styles from "./VehiclePage.module.scss";

import { links } from "../../../config";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import DetailWithLinks from "../../../components/shared/DetailWithLinks.jsx/DetailWithLinks";
import Detail from "../../../components/shared/Detail/Detail";

import vehicleImage from "../../../static/img/vehicle-page.jpg";

import useHttpRequest from "../../../hooks/useHttpRequest";

const VehiclePage = (props) => {
  const { id } = useParams();
  const { state, sendRequest, LoadingSpinner } = useHttpRequest();

  useEffect(() => {
    sendRequest(`${links.vehicles}/${id}`);
  }, [sendRequest, id]);
  const {
    cargo_capacity,
    consumables,
    cost_in_credits,
    crew,
    films,
    length,
    manufacturer,
    model,
    name,
    passengers,
    pilots,
    vehicle_class,
  } = state.items;

  console.log(state.items);

  return (
    <>
      {state.isLoading ? (
        <LoadingSpinner asOverlay />
      ) : (
        <>
          <SectionTitle>{name}</SectionTitle>
          <div className={styles.vehicle}>
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
              Length: <span>{length}</span>
            </Detail>
            <Detail>
              Manufacturer: <span>{manufacturer}</span>
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
              Class: <span>{vehicle_class}</span>
            </Detail>
            <DetailWithLinks title="Films" items={films} row />
            <div className={styles.vehicle__image}>
              <img src={vehicleImage} alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default VehiclePage;
