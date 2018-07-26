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
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import history from "./news/history";
import "./App.css";

class App extends Component {
  static propTypes = {};

  static childContextTypes = {
    user: PropTypes.string
  };

  getChildContext() {
    return {
      user: this.state.username
    };
  }

  state = {
    username: ""
  };

  render() {
    return (
      <ConnectedRouter history={history}>
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
          <UserForm
            value={this.state.username}
            onChange={this.handleUserChange}
          />
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/filters" component={Filters} />
            <Route path="/articles/new" component={NewArticle} />
            <Route path="/articles" component={ArticleList} />
            <Route path="/comments" component={CommentsPage} />
            {/* <Redirect from="/comments/" to="/comments/1" /> */}
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }

  handleUserChange = username => this.setState({ username });
}

export default App;
