import '../styles/globals.css';
import '../styles/prism.css';
import NupurUiWrapper from "../src/NupurUiWrapper";

function MyApp({ Component, pageProps }) {

  return <NupurUiWrapper>
    <Component {...pageProps} />
  </NupurUiWrapper>
}

export default MyApp
