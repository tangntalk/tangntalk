import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from "react-router-dom";

import loginPage from "../src/pages/login";
import registerPage from "../src/pages/register";

import mainPage from "../src/pages/main";
import searchPage from "../src/pages/search";

import chatListPage from "../src/pages/chatList";
import chattingPage from "../src/pages/chatting";

import aroundPage from "../src/pages/around";
import settingPage from "../src/pages/setting";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={withRouter(loginPage)} />
        <Route exact path="/register" component={withRouter(registerPage)} />

        <Route exact path="/user" component={withRouter(mainPage)} />
        <Route exact path="/search" component={withRouter(searchPage)} />

        <Route exact path="/around" component={withRouter(aroundPage)} />
        <Route exact path="/setting" component={withRouter(settingPage)} />

        <Route exact path="/chat" component={withRouter(chatListPage)} />
        <Route exact path="/chatting" component={withRouter(chattingPage)} />
        {/* chatting별 아이디 처리 */}
      </Switch>
    </Router>

  );
}

export default App;
