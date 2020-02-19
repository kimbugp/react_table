import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Table extends Component {
  constructor(props) {
    super(props);
    this.people = [
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
    ];
  }
  compareDates(person1, person2) {
    let date1 = new Date(person1.birth);
    let date2 = new Date(person2.birth);
    if (date1 <= date2) {
      return -1;
    }
    if (date1 >= date2) {
      return 1;
    }
    return 0;
  }

  compareNames(person1, person2) {
    if (person1.name <= person2.name) {
      return -1;
    }
    if (person1.name >= person2.name) {
      return 1;
    }
    return 0;
  }

  render() {
    const compare =
      this.props.parameter === "name" ? this.compareNames : this.compareDates;
    return (
      <div className="table-div">
        <table className="table table-striped table-bordered table-hover full-width">
          <thead>
            <tr>
              <th className="course-name">Person Name</th>
              <th className="duration">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {this.people.sort(compare).map((item, key) => rows(item, key))}
          </tbody>
        </table>
      </div>
    );
  }
}

const rows = (data, key) => {
  return (
    <tr key={key}>
      <td>{data.name}</td>
      <td>{data.birth}</td>
    </tr>
  );
};

Table.propTypes = {
  sortParameter: PropTypes.string
};

export default Table;
