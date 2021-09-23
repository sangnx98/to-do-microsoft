import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// component
import MainLayout from "./components/Layout/MainLayout";
import MyDay from "./pages/MyDay";
import Important from "./pages/Important";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history} exact path={["/"]}>
    <MainLayout>
      <Switch>
        <Route path="/" exact component={MyDay} />
        <Route path="/important" exact component={Important} />
      </Switch>
    </MainLayout>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
