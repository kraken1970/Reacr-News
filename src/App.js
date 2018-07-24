import React, { Component } from "react";
import PropTypes from "prop-types";
import ArticleList from "./news/components/routes/Articles";
import NewArticle from "./news/components/routes/NewArticle";
import NotFound from "./news/components/routes/NotFound";
import CommentsPage from "./news/components/routes/CommentsPage";
import UserForm from "./news/components/UserForm";
import Filters from "./news/components/Filters";
import Counter from "./news/components/Counter";
import "react-select/dist/react-select.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
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
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/filters" component={Filters} />
            <Route path="/articles/new" component={NewArticle} />
            <Route path="/articles" component={ArticleList} />
            <Route path="/comments/:page" component={CommentsPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
