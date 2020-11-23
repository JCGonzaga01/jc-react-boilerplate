import { DummyList } from "DummyType";
import { createAsyncAction } from "typesafe-actions";

export const fetchDummyAsync = createAsyncAction(
  "FETCH_DUMMY_ASYNC_REQUEST",
  "FETCH_DUMMY_ASYNC_SUCCCESS",
  "FETCH_DUMMY_ASYNC_FAILURE"
)<undefined, DummyList, string>();
