import toggleReducerConstants from "./toggleReducerConstants";

export const actionSetMonthOrYear = (payload) => ({
  type: toggleReducerConstants.toggleMonthYear,
  payload
})
