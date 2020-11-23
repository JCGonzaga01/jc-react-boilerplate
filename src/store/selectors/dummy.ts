import { RootState } from "typesafe-actions";
import { DummyState } from "store/reducers/dummy";

export const dummy = (state: RootState) => state.dummy;

export const isFetching = (state: DummyState) => state.isFetching;
