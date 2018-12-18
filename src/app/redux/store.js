import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from 'app/redux/reducers';
import thunk from "redux-thunk";

export function configureStore(initialState) {
  let middleware = applyMiddleware(thunk);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(
    rootReducer,
    initialState,
    middleware
  );

  return store;
}