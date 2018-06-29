import React, { Component } from "react";
// import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import CommentList from "./CommentList";

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired, //isRequired - обязательное поле
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  };

  state = {
    updateIndex: 0
  };

  componentWillReceiveProps(nextProps) {
    console.log("---", "updating", this.props.isOpen, nextProps.isOpen);
  }

  componentWillMount() {
    console.log("---", "mounting");
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <div ref={this.setContainerRef}>
        <h2>{article.title}</h2>
        <button onClick={toggleOpen}>{isOpen ? "close" : "open"}</button>
        {this.getBody()}
      </div>
    );
  }

  setContainerRef = ref => {
    this.container = ref;
    console.log("---", ref);
  };

  componentDidMount() {
    console.log("---", "mounted");
  }

  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <section>
        {article.text}
        <button
          onClick={() =>
            this.setState({ updateIndex: this.state.updateIndex + 1 })
          }
        >
          update
        </button>
        <CommentList
          comments={article.comments}
          ref={this.setCommentRef}
          key={this.state.updateIndex}
        />
      </section>
    );
  }

  setCommentRef = ref => {
    console.log("---", ref);
  };
}

export default Article;
