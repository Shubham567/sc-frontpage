import '../styles/globals.css';
import '../styles/prism.css';
import NupurUiWrapper from "../src/NupurUiWrapper";

import {Provider} from 'react-redux';
import withRedux from "next-redux-wrapper";
import store from '../src/store';
function MyApp({ Component, pageProps }) {

  return <Provider store={store} >
    <NupurUiWrapper>
      <Component {...pageProps} />
    </NupurUiWrapper>
  </Provider>
}


const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
