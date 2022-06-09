import { useEffect } from "react";
import { links } from "../../config";

import useHttpRequest from "../../hooks/useHttpRequest";

import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import ItemsContainer from "../../components/shared/ItemsContainer/ItemsContainer";
import Film from "../../components/films/Film";
import List from "../../components/shared/List/List";

const FilmsPage = (props) => {
  const { state, sendRequest, LoadingSpinner } = useHttpRequest();
  useEffect(() => {
    sendRequest(links.films);
  }, [sendRequest]);

  return (
    <>
      <SectionTitle>Films</SectionTitle>
      <ItemsContainer>
        {state.isLoading ? (
          <LoadingSpinner asOverlay />
        ) : (
          <List items={state.items.results} Component={Film} />
        )}
      </ItemsContainer>
    </>
  );
};

export default FilmsPage;
