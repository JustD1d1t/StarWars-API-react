import { useReducer, useCallback } from "react";
import LoadingSpinner from "../components/shared/LoadingSpinner/LoadingSpinner";

const reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "LOADING":
      newState.isLoading = true;
      return newState;
    case "LOADED":
      newState.isLoading = false;
      return newState;
    case "SET_STATE":
      newState.items = action.payload;
      return newState;
    default:
      throw new Error("Error");
  }
};

export const useHttpRequest = () => {
  const [state, dispatchState] = useReducer(reducer, {
    items: [],
    isLoading: true,
  });

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      dispatchState({ type: "LOADING" });
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
        });
        const responseData = await response.json();
        dispatchState({ type: "SET_STATE", payload: responseData });

        dispatchState({ type: "LOADED" });
        return responseData;
      } catch (err) {
        throw err;
      }
    },
    []
  );

  return { state, sendRequest, LoadingSpinner };
};

export default useHttpRequest;
