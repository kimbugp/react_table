import React, { Component } from "react";
import Radio from "./components/Radio";
import Table from "./components/Table";
import "./index.css";

class SimpleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parameterState: "name"
    };
    this.sortByParameter = this.sortByParameter.bind(this);
  }

  sortByParameter(parameter) {
    this.setState({
      parameterState: parameter
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <center>
          <h1>{this.props.title}</h1>
        </center>
        <Radio sortBy={this.sortByParameter} sortables={this.props.sortables} />
        <Table
          sortParameter={this.state.parameterState}
          data={this.props.data}
        />
      </div>
    );
  }
}

SimpleTable.defaultProps = {
  title: "Simple table",
  sortables: [
    { name: "name", position: "left" },
    { name: "birth", position: "right" }
  ],
  data: [
    {
      name: "John Sina",
      birth: "11/30/2011"
    },
    {
      name: "Barcy Washington",
      birth: "09/16/1992"
    },
    {
      name: "Peter Parker",
      birth: "01/16/1992"
    },
    {
      name: "Jimmy Shergil",
      birth: "12/12/2001"
    },
    {
      name: "Alexander Alfred",
      birth: "02/09/1891"
    },
    {
      name: "Krishna Gupta",
      birth: "12/01/1982"
    },
    {
      name: "Sania Mirza",
      birth: "11/30/2011"
    },
    {
      name: "Lata Pathak",
      birth: "10/31/1999"
    }
  ]
};

export default SimpleTable;
