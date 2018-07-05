import React, { Component } from "react";
import PropTypes from "prop-types";
import ArticleList from "./news/components/ArticleList";
// import ArticlesChart from "./news/components/ArticlesChart";
import UserForm from "./news/components/UserForm";
// import Select from "react-select";
import Filters from "./news/components/Filters";
import Counter from "./news/components/Counter";
import { articles } from "./news/fixtures";
import "./App.css";

class App extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="bigClass">
        <Counter />
        <UserForm />
        <Filters articles={[]} />
        <ArticleList />
      </div>
    );
  }
  // changeSelection = selection => this.setState({ selection });
}

export default App;
