import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { filter, mergeMap, map, catchError } from "rxjs/operators";
import { RootAction, RootState, Services, isActionOf } from "typesafe-actions";

import { fetchDummyAsync } from "store/actions/dummy";

export const fetchDummyAsyncEpic: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  _state$,
  { api }
) =>
  action$.pipe(
    filter(isActionOf(fetchDummyAsync.request)),
    mergeMap(() =>
      from(api.dummy.fetchDummyData()).pipe(
        map(fetchDummyAsync.success),
        catchError((message: string) => of(fetchDummyAsync.failure(message)))
      )
    )
  );
