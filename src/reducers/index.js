import { combineReducers } from "redux";

import rooms from "./rooms.js";
import auth from "./auth.js";
import tasks from "./tasks.js";

export const reducers = combineReducers({ rooms, auth, tasks });
