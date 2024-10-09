import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./reducers/counterReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";
import { todoReducer } from "./reducers/todoReducer";
export const rootReducer = combineReducers({
  //keyReducer: ReducerFunction,
  counter: counterReducer,
  todo: todoReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware, thunk))
);
console.log(store);
