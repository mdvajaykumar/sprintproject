import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { LadReducer } from "./LadReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  lad: LadReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
