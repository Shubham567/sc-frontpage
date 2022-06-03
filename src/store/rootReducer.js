import {combineReducers} from 'redux';
import homeReducer from "./reducers/homeReducer/homeReducer";
import toggleReducer from "./reducers/toggleReducer/toggleReducer";


const rootReducer = combineReducers({
  homeReducer: homeReducer,
  toggleReducer: toggleReducer
});

export default rootReducer;
