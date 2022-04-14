import '../styles/globals.css';
import '../styles/prism.css';
import {AnimatePresence} from "framer-motion";

function MyApp({ Component, pageProps }) {

  return <AnimatePresence exitBeforEnter>
    <Component {...pageProps} />
  </AnimatePresence>
}

export default MyApp
