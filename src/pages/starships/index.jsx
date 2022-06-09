import { useEffect } from "react";
import { links } from "../../config";

import useHttpRequest from "../../hooks/useHttpRequest";

import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import ItemsContainer from "../../components/shared/ItemsContainer/ItemsContainer";
import Starship from "../../components/starships/Starship";
import List from "../../components/shared/List/List";
import Pagination from "../../components/shared/Pagination/Pagination";

import { useSearchParams } from "react-router-dom";

const StarshipsPage = (props) => {
  const { state, sendRequest, LoadingSpinner } = useHttpRequest();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const pageNumber = parseInt(searchParams.get("page"));
    if (pageNumber) {
      sendRequest(`${links.starships}?page=${pageNumber}`);
    } else {
      sendRequest(links.starships);
    }
  }, [sendRequest, searchParams]);

  return (
    <>
      <SectionTitle>Starships</SectionTitle>
      <ItemsContainer>
        {state.isLoading ? (
          <LoadingSpinner asOverlay />
        ) : (
          <List items={state.items.results} Component={Starship} />
        )}
      </ItemsContainer>
      {!state.isLoading && (
        <Pagination
          prev={state.items.previous}
          next={state.items.next}
          path="/starships?page="
        />
      )}
    </>
  );
};

export default StarshipsPage;
