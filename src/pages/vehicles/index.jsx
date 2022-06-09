import { useEffect } from "react";
import { links } from "../../config";

import useHttpRequest from "../../hooks/useHttpRequest";

import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import ItemsContainer from "../../components/shared/ItemsContainer/ItemsContainer";
import Vehicle from "../../components/vehicles/Vehicle";
import List from "../../components/shared/List/List";
import Pagination from "../../components/shared/Pagination/Pagination";

import { useSearchParams } from "react-router-dom";

const VehiclesPage = (props) => {
  const { state, sendRequest, LoadingSpinner } = useHttpRequest();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const pageNumber = parseInt(searchParams.get("page"));
    if (pageNumber) {
      sendRequest(`${links.vehicles}?page=${pageNumber}`);
    } else {
      sendRequest(links.vehicles);
    }
  }, [sendRequest, searchParams]);

  return (
    <>
      <SectionTitle>Vehicles</SectionTitle>
      <ItemsContainer>
        {state.isLoading ? (
          <LoadingSpinner asOverlay />
        ) : (
          <List items={state.items.results} Component={Vehicle} />
        )}
      </ItemsContainer>
      {!state.isLoading && (
        <Pagination
          prev={state.items.previous}
          next={state.items.next}
          path="/vehicles?page="
        />
      )}
    </>
  );
};

export default VehiclesPage;
