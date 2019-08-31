import "./index.css";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Store from "./redux/Store";

const rerender = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={Store.addPost.bind(Store)}
        updateNewPostText={Store.updateNewPostText.bind(Store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
rerender(Store.getState());
Store.subscribe(rerender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
