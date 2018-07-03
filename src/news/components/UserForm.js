import React, { Component } from "react";
import PropTypes from "prop-types";

class UserForm extends Component {
  static proopTypes = {};

  state = {
    username: ""
  };

  render() {
    return (
      <div>
        Name:{" "}
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUserChange} // паттерн 'Обратный поток данных'
        />
      </div>
    );
  }
  handleUserChange = ev => {
    if (ev.target.value.length > 10) return;
    this.setState({
      username: ev.target.value
    });
  };
}

export default UserForm;
