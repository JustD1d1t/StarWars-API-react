import { useEffect } from "react";
import { links } from "../../config";

import useHttpRequest from "../../hooks/useHttpRequest";

import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import ItemsContainer from "../../components/shared/ItemsContainer/ItemsContainer";
import Planet from "../../components/planets/Planet";
import List from "../../components/shared/List/List";
import Pagination from "../../components/shared/Pagination/Pagination";

import { useSearchParams } from "react-router-dom";

const PlanetsPage = (props) => {
  const { state, sendRequest, LoadingSpinner } = useHttpRequest();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const pageNumber = parseInt(searchParams.get("page"));
    if (pageNumber) {
      sendRequest(`${links.planets}?page=${pageNumber}`);
    } else {
      sendRequest(links.planets);
    }
  }, [sendRequest, searchParams]);

  return (
    <>
      <SectionTitle>Planets</SectionTitle>
      <ItemsContainer>
        {state.isLoading ? (
          <LoadingSpinner asOverlay />
        ) : (
          <List items={state.items.results} Component={Planet} />
        )}
      </ItemsContainer>
      {!state.isLoading && (
        <Pagination
          prev={state.items.previous}
          next={state.items.next}
          path="/planets?page="
        />
      )}
    </>
  );
};

export default PlanetsPage;
