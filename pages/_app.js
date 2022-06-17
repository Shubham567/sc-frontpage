import '../styles/globals.css';
import '../styles/prism.css';
import NupurUiWrapper from "../src/NupurUiWrapper";

import {Provider} from 'react-redux';
import withRedux from "next-redux-wrapper";
import store from '../src/store';
import DemoForm from "../src/components/pages/Home/DemoForm";
function MyApp({ Component, pageProps }) {

  return <Provider store={store} >
    <NupurUiWrapper>
      <Component {...pageProps} />
      <DemoForm/>
    </NupurUiWrapper>
  </Provider>
}


const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
