import React, { Component } from "react";
import PropTypes from "prop-types";
import ArticleList from "./news/components/routes/Articles";
// import ArticlesChart from "./news/components/ArticlesChart";
import UserForm from "./news/components/UserForm";
// import Select from "react-select";
import Filters from "./news/components/Filters";
import Counter from "./news/components/Counter";
import "react-select/dist/react-select.css";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";

class App extends Component {
  static propTypes = {};

  render() {
    return (
      <Router>
        <div className="bigClass">
          <div>
            <h2>Main menu</h2>
            <div>
              <NavLink activeStyle={{ color: "red" }} to="/counter">
                Counter
              </NavLink>
            </div>
            <div>
              <NavLink activeStyle={{ color: "red" }} to="/filters">
                Filters
              </NavLink>
            </div>
            <div>
              <NavLink activeStyle={{ color: "red" }} to="/articles">
                Articles
              </NavLink>
            </div>
          </div>
          <UserForm />
          <Route path="/counter" component={Counter} />
          <Route path="/filters" component={Filters} />
          <Route path="/articles" component={ArticleList} />
        </div>
      </Router>
    );
  }
}

export default App;
