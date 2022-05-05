import homeReducerConstants from "./homeReducerConstants";

const defaultValue = {
  demoFormOpen : false,
}

const homeReducer = (state = defaultValue,actions) => {

  switch (actions.type) {

    case homeReducerConstants.toggleDemoForm : return {...state,demoFormOpen: actions.payload}

    default: return defaultValue

  }


}

export default homeReducer;
