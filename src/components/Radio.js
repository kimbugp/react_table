import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioClick: "name"
    };
    this.onChange = this.onChange.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  onChange(type) {
    const { id } = type.target;
    this.setState({
      radio: id,
      radioClick: id
    });
    this.props.sortBy(id);
  }
  sortBy(value) {
    this.setState({
      parameterState: value
    });
  }

  render() {
    return (
      <div className="radioButtons">
        <div className="left">
          <input
            type="radio"
            onChange={this.onChange}
            id="name"
            checked={this.state.radio === "name"}
          />
          <label>&nbsp;&nbsp;Sort by name</label>
        </div>
        <div className="right">
          <input
            type="radio"
            onChange={this.onChange}
            id="age"
            checked={this.state.radio === "age"}
          />
          <label>&nbsp;&nbsp;Sort by age</label>
        </div>
      </div>
    );
  }
}

Radio.propTypes = {
  sortBy: PropTypes.func
};

export default Radio;
