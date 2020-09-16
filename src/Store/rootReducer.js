import { combineReducers } from "./node_modules/redux";
import authReducer from "./reducer/authReducer.js";
import companyReducer from "./reducer/companyReducer.js";
export default combineReducers({
  authReducer,
  companyReducer,
});
