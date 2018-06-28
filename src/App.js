import React, { Component } from "react";
import ArticleList from "./news/components/ArticleList";
import ArticlesChart from "./news/components/ArticlesChart";
import { articles } from "./news/fixtures";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <ArticleList articles={articles} />;
        <ArticlesChart articles={this.props.articles} />
      </div>
    );
  }
}

export default App;
