import '../styles/globals.css';
import {StateProvider} from '../state/context';

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  ) 
}

export default MyApp
