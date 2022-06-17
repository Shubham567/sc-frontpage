import '../styles/globals.css';
import '../styles/prism.css';
import NupurUiWrapper from "../src/NupurUiWrapper";

import {Provider} from 'react-redux';
import withRedux from "next-redux-wrapper";
import store from '../src/store';
import DemoForm from "../src/components/pages/Home/DemoForm";

import { createInstance, MatomoProvider } from "@datapunt/matomo-tracker-react";
import useMatomoPageViewTracker from "../src/hooks/useMatomoPageViewTracker";
import matomoConfig from "../src/Constants/matomoConfig";

const matomoInstance = createInstance(matomoConfig);

function MyApp({ Component, pageProps }) {
  useMatomoPageViewTracker();
  return <Provider store={store} >
    <MatomoProvider value={matomoInstance}>
      <NupurUiWrapper>
        <Component {...pageProps} />
        <DemoForm/>
      </NupurUiWrapper>
    </MatomoProvider>
  </Provider>
}


const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
