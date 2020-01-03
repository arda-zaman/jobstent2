import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from '../fbConfig';

const middleware = composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })));

const store = createStore(rootReducer,
  compose(
    middleware,
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
);

export default (initialState) => store;
