# Simple React Table

A Simple React Component

[DEMO](http://kimbugp.github.io/react_table)

## Install

```sh
npm install --save sortable-react-table
```

## Settings

```js
import React from "react";
import ReactDom from "react-dom";
import SimpleTable from "sortable-react-table";

class App extends React.Component {
  render() {
    return (
      <SimpleTable
        data={[
          { id: 1, name: "simon" },
          { id: 2, name: "peter" }
        ]}
        title="simple table"
        sortables={[{ name: "id", position: "left" }]}
      ></SimpleTable>
    );
  }
}

ReactDom.render(<App />, document.getElementById("App"));
```

## Sample

![Sample](/sample.png)
