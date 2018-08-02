import { FETCH_TERMS } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_TERMS:
      return action.payload || false;
    default:
      return state;
  }
}
