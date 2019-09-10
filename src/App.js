import React, { Component } from "react";
import {
  Search,
  // FollowerList,
  UserInfo
} from "scenes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <UserInfo />
      </div>
    );
  }
}

export default App;
