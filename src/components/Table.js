import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Table extends Component {
  constructor(props) {
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    this.compareVariables = this.compareVariables.bind(this);
  }
  getKeys() {
    return Object.keys(this.props.data[0]);
  }

  getHeader() {
    let keys = this.getKeys();
    return keys.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  }
  sortItems(items) {
    return items.sort(this.compareVariables);
  }
  getRowsData() {
    let items = this.props.data;
    let keys = this.getKeys();
    return this.sortItems(items).map((row, index) => {
      return (
        <tr key={index}>
          <Rows key={index} data={row} keys={keys} />
        </tr>
      );
    });
  }
  isDate(date) {
    return new Date(date) !== "Invalid Date" && !isNaN(new Date(date))
      ? true
      : false;
  }
  getComparator(data1, data2, param) {
    let var1 = data1[param];
    let var2 = data2[param];
    if (this.isDate(var1) & this.isDate(var2)) {
      return { var1: new Date(var1), var2: new Date(var2) };
    }
    return { var1, var2 };
  }

  compareVariables(data1, data2) {
    let param = this.props.sortParameter;
    let { var1, var2 } = this.getComparator(data1, data2, param);
    if (var1 <= var2) {
      return -1;
    }
    if (var1 >= var2) {
      return 1;
    }
    return 0;
  }

  render() {
    return (
      <div className="table-div">
        <table className="table table-striped table-bordered table-hover full-width">
          <thead>
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody>{this.getRowsData()}</tbody>
        </table>
      </div>
    );
  }
}

const Rows = props => {
  return props.keys.map((key, index) => {
    return (
      <td key={props.data[key]} id={index}>
        {props.data[key]}
      </td>
    );
  });
};
Table.defaultProps = {
  data: []
};

Table.propTypes = {
  sortParameter: PropTypes.string,
  data: PropTypes.array
};

export default Table;
