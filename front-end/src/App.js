import React, { useEffect, useContext, useReducer } from "react";
import { Home, NewWorker, SingleWorker, Workers, UpdatePage } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loading, IconSideBar, SideMenu, Starter } from "./components";
import { useGlobalContext } from "./context";

function App() {
  const { extra_menus } = useGlobalContext();
  return (
    <div className="main-container">
      <Router>
        {extra_menus && <SideMenu />}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/newworker">
            <NewWorker />
          </Route>
          <Route exact path="/workers">
            <Workers />
          </Route>
          <Route exact path="/workers/:id" children={<SingleWorker />} />
          <Route exact path="/starter">
            <Starter />
          </Route>
          <Route exact path="/updatepage">
            <UpdatePage />
          </Route>
        </Switch>
        {extra_menus && <IconSideBar />}
      </Router>
    </div>
  );
}

export default App;
