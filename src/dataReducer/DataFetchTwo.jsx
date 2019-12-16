import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: ""
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "error"
      };
    default:
      return state;
  }
};

function DataFetchTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typcode.com/posts/1`)
      .then(respone => {
        dispatch({ type: "FETCH_SUCCESS", payload: respone.data });
      })
      .catch(error => {
        dispatch({ type: "FETCH_ERROR" });
      });
    /* return () => {
          cleanup;
        }; */
  }, []);
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchTwo;
