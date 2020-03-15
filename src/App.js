import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Reddit from "./Components/Reddit";

function App() {
  return (
    <Provider store={store}>
      <Reddit />
    </Provider>
  );
}

export default App;
