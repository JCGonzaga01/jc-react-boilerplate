import { DummyList } from "DummyType";
import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { fetchDummyAsync } from "store/actions/dummy";

export const isFetching = createReducer(false as boolean)
  .handleAction([fetchDummyAsync.request], (_state, _action) => true)
  .handleAction([fetchDummyAsync.success, fetchDummyAsync.failure], (_state, _action) => false);

export const payload = createReducer([] as DummyList).handleAction(
  fetchDummyAsync.success,
  (_state, action) => action.payload
);

const dummyReducer = combineReducers({
  isFetching,
  payload,
});

export default dummyReducer;
export type DummyState = ReturnType<typeof dummyReducer>;
