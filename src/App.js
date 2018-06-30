import React, { Component } from "react";
import ArticleList from "./news/components/ArticleList";
import ArticlesChart from "./news/components/ArticlesChart";
import UserForm from "./news/components/UserForm";
import { articles } from "./news/fixtures";
import "./App.css";

class App extends Component {
  static propTypes = {};
  render() {
    return (
      <div className="bigClass">
        <UserForm />
        <ArticleList articles={articles} />;
        <ArticlesChart articles={this.props.articles} />
      </div>
    );
  }
}

export default App;
