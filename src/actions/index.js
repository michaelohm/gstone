import axios from "axios";
import { FETCH_TERMS } from "./types";

export const fetchTerms = ({ values }) => async dispatch => {
  const res = await axios.post(
    "https://script.google.com/macros/s/AKfycbwPGz6uQQS9IW33ASPYlcWaEtRMD8eDAK1ONg7lT2dREXpaSUYh/exec",
    JSON.stringify(values)
  );
  dispatch({ type: FETCH_TERMS, payload: res.data.terms });
};
