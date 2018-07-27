import React, { Component } from "react";
import PropTypes from "prop-types";
import Articles from "./news/components/routes/Articles";
import NewArticle from "./news/components/routes/NewArticle";
import NotFound from "./news/components/routes/NotFound";
import CommentsPage from "./news/components/routes/CommentsPage";
import UserForm from "./news/components/UserForm";
import Filters from "./news/components/Filters";
import Counter from "./news/components/Counter";
import "react-select/dist/react-select.css";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import LangProvider from "./news/components/LangProvider";
import LocalizedText from "./news/components/LocalizedText";
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
    username: "",
    language: "ru"
  };

  changeLanguage = language => ev => this.setState({ language });

  render() {
    console.log("---", 0);
    return (
      <ConnectedRouter history={history}>
        <LangProvider language={this.state.language}>
          <div className="bigClass">
            <ul className="lang_Select">
              <li onClick={this.changeLanguage("en")}>English</li>
              <li onClick={this.changeLanguage("ru")}>Russian</li>
            </ul>
            <div>
              <h2>
                <LocalizedText>Main menu</LocalizedText>
              </h2>
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
              <Route path="/articles" component={Articles} />
              <Route path="/comments" component={CommentsPage} />
              {/*<Redirect from = '/comments/' to = '/comments/1'/>*/}
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </LangProvider>
      </ConnectedRouter>
    );
  }

  handleUserChange = username => this.setState({ username });
}

export default App;
