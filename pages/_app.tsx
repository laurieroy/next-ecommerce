import '../styles/globals.scss';
import { Provider } from 'react-redux';
import store from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist';

import type { AppProps } from 'next/app'

let persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
