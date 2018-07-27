import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../AC";
import LocalizedText from "../LocalizedText";
import "./style.css";

class CommentForm extends Component {
  static propTypes = {
    articleId: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired
  };

  state = {
    user: "",
    text: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <LocalizedText>User :</LocalizedText>
        <input
          value={this.state.user}
          onChange={this.handleChange("user")}
          className={this.getClassName("user")}
        />
        <LocalizedText>comment:</LocalizedText>
        <input
          value={this.state.text}
          onChange={this.handleChange("text")}
          className={this.getClassName("text")}
        />
        <button type="submit" value="submit">
          <LocalizedText>submit</LocalizedText>
        </button>
      </form>
    );
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.addComment(this.state);
    this.setState({
      user: "",
      text: ""
    });
  };

  getClassName = type =>
    this.state[type].length && this.state[type].length < limits[type].min
      ? "form-input__error"
      : "";

  handleChange = type => ev => {
    const { value } = ev.target;
    if (value.length > limits[type].max) return;
    this.setState({
      [type]: value
    });
  };
}

const limits = {
  user: {
    min: 5,
    max: 15
  },
  text: {
    min: 20,
    max: 50
  }
};

export default connect(
  null,
  (dispatch, ownProps) => ({
    addComment: comment => dispatch(addComment(comment, ownProps.articleId))
  })
)(CommentForm);
