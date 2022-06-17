import pricingFeatureReducerConstants from "./pricingFeatureReducerConstants";

const defaultValue = {
  featuresByPrice: ""
}

const pricingFeaturesReducer = (state = defaultValue, actions) => {
  switch (actions.type) {
    case pricingFeatureReducerConstants.featuresByPrice : return {...state, featuresByPrice: actions.payload}
    default: return defaultValue
  }
}

export default pricingFeaturesReducer;
