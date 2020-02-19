import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import App from "../App";
import Table from "./Table";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

configure({ adapter: new Adapter() });

describe("TableComponent", () => {
  it("check date comparison", () => {
    const wrapper = mount(
      <Table
        sortParameter={"birth"}
        data={[
          {
            name: "Ross Geller",
            birth: "11/30/2010"
          }
        ]}
      />
    );
    let res = wrapper.instance().compareVariables(
      {
        name: "Ross Geller",
        birth: "11/30/2010"
      },
      {
        name: "Mike Ross",
        birth: "09/20/1992"
      }
    );
    expect(res).toEqual(1);
  });

  it("check name comparison", () => {
    const wrapper = mount(
      <Table
        sortParameter={"name"}
        data={[
          {
            name: "Ross Geller",
            birth: "11/30/2010"
          }
        ]}
      />
    );
    let res = wrapper.instance().compareVariables(
      {
        name: "Ross Geller",
        birth: "11/30/2010"
      },
      {
        name: "Mike Ross",
        birth: "09/20/1992"
      }
    );
    expect(res).toEqual(1);
  });

  it("check number of rows rendered", () => {
    const table = mount(
      <Table
        sortParameter={"name"}
        data={[
          {
            name: "Ross Geller",
            birth: "11/30/2010"
          }
        ]}
      />
    );
    let el = table.find("tr");
    expect(el.length).toEqual(2);
  });

  it("check random row for sort by name", () => {
    let data = [
      { name: "Shafaet Asharaf", birth: "03/12/1934" },
      { name: "HariShankaran Karunanidhi", birth: "07/06/1986" },
      { name: "Aakansha Doshi", birth: "01/12/1988" },
      { name: "Vivek Ravishankaran", birth: "01/23/1988" },
      { name: "Vishal Kothari", birth: "12/12/1990" },
      { name: "Hemant Kumar", birth: "12/31/1990" },
      { name: "Ashley Bose", birth: "01/16/1992" },
      { name: "Suman Kumar", birth: "03/12/2001" }
    ];
    const table = mount(<Table sortParameter={"name"} data={data} />);
    table.instance().props.data.sort(table.instance().compareVariables);
    expect(table.instance().sortItems(data)[3]).toEqual({
      name: "Hemant Kumar",
      birth: "12/31/1990"
    });
  });
});
