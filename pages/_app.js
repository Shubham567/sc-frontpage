import '../styles/globals.css';
import '../styles/prism.css';
import {AnimatePresence} from "framer-motion";
import NupurUiWrapper from "../src/NupurUiWrapper";

function MyApp({ Component, pageProps }) {

  return <AnimatePresence exitBeforEnter>
    <NupurUiWrapper>
      <Component {...pageProps} />
    </NupurUiWrapper>
  </AnimatePresence>
}

export default MyApp
