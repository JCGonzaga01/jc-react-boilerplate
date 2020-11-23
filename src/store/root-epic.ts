import { combineEpics } from "redux-observable";

import * as dummyEpics from "store/epics/dummy";

export default combineEpics(...Object.values(dummyEpics));
