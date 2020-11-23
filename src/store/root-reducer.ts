import { combineReducers } from "redux";
import dummyReducer from "store/reducers/dummy";

const rootReducer = combineReducers({
  dummy: dummyReducer,
});

export default rootReducer;
