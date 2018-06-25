import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentList from "./CommentList";
import toggleOpen from "../decorators/toggleOpen";

class Article extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isOpen: true
  //   };
  // }
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired //isRequired - обязательное поле
  };

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <div>
        <h2>{article.title}</h2>
        <button onClick={toggleOpen}>{isOpen ? "close" : "open"}</button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;

    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    );
  }
}

export default toggleOpen(Article);
