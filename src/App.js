import React, { Component } from "react";
import PropTypes from "prop-types";
import ArticleList from "./news/components/ArticleList";
import ArticlesChart from "./news/components/ArticlesChart";
import UserForm from "./news/components/UserForm";
import Select from "react-select";
import Filters from "./news/components/Filters";
import { articles } from "./news/fixtures";
import "./App.css";

class App extends Component {
  static propTypes = {};
  // state = {
  //   selection: null
  // };

  render() {
    // const { articles } = this.props;
    // const options = articles.map(article => ({
    //   label: article.title,
    //   value: article.id
    // }));
    return (
      <div className="bigClass">
        <UserForm />
        <Filters articles={articles} />
        <ArticleList articles={articles} />
        <ArticlesChart articles={this.props.articles} />
      </div>
    );
  }
  // changeSelection = selection => this.setState({ selection });
}

export default App;
