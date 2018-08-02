import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import termsReducer from "./termsReducer";

export default combineReducers({
  form: reduxForm,
  terms: termsReducer
});
