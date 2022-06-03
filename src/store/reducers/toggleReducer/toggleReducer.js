import toggleReducerConstants from "./toggleReducerConstants";

const defaultValue = {
   monthlySubscription: true
}

const toggleReducer = (state = defaultValue, actions) => {
  switch (actions.type) {
    case toggleReducerConstants.toggleMonthYear : return {...state, monthlySubscription: actions.payload}
    default: return defaultValue
  }
}

export default toggleReducer;
