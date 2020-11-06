import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore,applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider,useSelector  } from "react-redux";
import thunk from 'redux-thunk'

import { createFirestoreInstance, getFirestore, reduxFirestore  } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase,isLoaded   } from 'react-redux-firebase'

import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig)
  )
);

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}
const reactReduxFirebaseProps = {
  firebase ,
  config: profileSpecificProps,
  attachAuthIsReady: true,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
    <AuthIsLoaded> <App /></AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
