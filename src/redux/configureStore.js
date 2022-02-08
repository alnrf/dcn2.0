import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import monitorReducersEnhancer from "./enhancers/monitorReducers";
import loggerMiddleware from "./middleware/logger.js";
import reducers from "./reducers";

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: reducers,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState,
    enhancers: [monitorReducersEnhancer],
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(reducers));
  }

  return store;
}
