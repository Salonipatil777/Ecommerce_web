import { compose, createStore, applyMiddleware , Middleware} from "redux";
import { persistStore, persistReducer , PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from 'redux-logger';
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

export type RootState = ReturnType<typeof rootReducer>

declare global{
  interface Window{
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

type extendedPersistConfig = PersistConfig<RootState> & {
  whiteList:(keyof RootState)[]
}

const persistConfig:extendedPersistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter((Middleware):Middleware is Middleware => Boolean(Middleware));

//  const thunkMiddleware = (store) => (next) => (action) => {
//     if (type(action)=='function')
//     {action(dispatch)}
//  }

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
