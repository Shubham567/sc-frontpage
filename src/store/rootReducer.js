import {combineReducers} from 'redux';
import homeReducer from "./reducers/homeReducer/homeReducer";
import toggleReducer from "./reducers/toggleReducer/toggleReducer";
import pricingFeatureReducer from "./reducers/pricingFeatureReducer/pricingFeatureReducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
  toggleReducer: toggleReducer,
  pricingFeatureReducer: pricingFeatureReducer
});

export default rootReducer;
