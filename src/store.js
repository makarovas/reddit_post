import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./Components/reducers/reducer";
import thunk from "redux-thunk";
import { getPosts } from "./Components/actions/actions";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
  )
);
store.dispatch(getPosts());
export default store;
