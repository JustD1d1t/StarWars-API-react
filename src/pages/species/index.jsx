import { useEffect } from "react";
import { links } from "../../config";

import useHttpRequest from "../../hooks/useHttpRequest";

import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import ItemsContainer from "../../components/shared/ItemsContainer/ItemsContainer";
import Species from "../../components/species/Species";
import List from "../../components/shared/List/List";
import Pagination from "../../components/shared/Pagination/Pagination";

import { useSearchParams } from "react-router-dom";

const SpeciesPage = (props) => {
  const { state, sendRequest, LoadingSpinner } = useHttpRequest();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const pageNumber = parseInt(searchParams.get("page"));
    if (pageNumber) {
      sendRequest(`${links.species}?page=${pageNumber}`);
    } else {
      sendRequest(links.species);
    }
  }, [sendRequest, searchParams]);

  return (
    <>
      <SectionTitle>Species</SectionTitle>
      <ItemsContainer>
        {state.isLoading ? (
          <LoadingSpinner asOverlay />
        ) : (
          <List items={state.items.results} Component={Species} />
        )}
      </ItemsContainer>
      {!state.isLoading && (
        <Pagination
          prev={state.items.previous}
          next={state.items.next}
          path="/species?page="
        />
      )}
    </>
  );
};

export default SpeciesPage;
