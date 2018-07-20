import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import logger from "../middlewars/logger";
import randomId from "../middlewars/randomId";
import api from "../middlewars/api";
import thunk from "redux-thunk";

const enhancer = applyMiddleware(thunk, randomId, api, logger);

const store = createStore(reducer, {}, enhancer);

//dev only
window.store = store;

export default store;
