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
  getButtons(items) {
    return items.map((item, index) => {
      return (
        <Button
          {...item}
          onChange={this.onChange}
          radio={this.state.radio}
          index={index}
          key={index}
        />
      );
    });
  }
  render() {
    return (
      <div className="radioButtons">
        {this.getButtons(this.props.sortables)}
      </div>
    );
  }
}

const Button = props => {
  return (
    <div className={props.position}>
      <input
        type="radio"
        onChange={props.onChange}
        id={props.name}
        checked={props.radio === props.name}
      />
      <label>&nbsp;&nbsp;Sort by {props.name}</label>
    </div>
  );
};

Radio.propTypes = {
  sortBy: PropTypes.func
};

export default Radio;
