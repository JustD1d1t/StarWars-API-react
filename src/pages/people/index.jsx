import { useEffect } from "react";
import { links } from "../../config";

import useHttpRequest from "../../hooks/useHttpRequest";

import Person from "../../components/people/Person";
import List from "../../components/shared/List/List";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import ItemsContainer from "../../components/shared/ItemsContainer/ItemsContainer";
import Pagination from "../../components/shared/Pagination/Pagination";

import { useSearchParams } from "react-router-dom";

const PeoplePage = (props) => {
  const { state, sendRequest, LoadingSpinner } = useHttpRequest();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const pageNumber = parseInt(searchParams.get("page"));
    if (pageNumber) {
      sendRequest(`${links.people}?page=${pageNumber}`);
    } else {
      sendRequest(links.people);
    }
  }, [sendRequest, searchParams]);

  return (
    <>
      <SectionTitle>People</SectionTitle>
      <ItemsContainer>
        {state.isLoading ? (
          <LoadingSpinner asOverlay />
        ) : (
          <List items={state.items.results} Component={Person} />
        )}
      </ItemsContainer>
      {!state.isLoading && (
        <Pagination
          prev={state.items.previous}
          next={state.items.next}
          path="/people?page="
        />
      )}
    </>
  );
};

export default PeoplePage;
