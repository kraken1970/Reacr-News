import React, { Component } from "react";
import ArticleList from "./news/components/ArticleList";
import { articles } from "./news/fixtures";
import "./App.css";

class App extends Component {
  render() {
    return <ArticleList articles={articles} />;
  }
}

export default App;
