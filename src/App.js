import React from "react";
import { HomePage } from "./Pages";
import { Provider } from "react-redux";
import { store } from "./Store";

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
