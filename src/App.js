import React, { PureComponent } from "react";
import Task from "./task6";
import rows from "./lib/countriesAll.json";
import { whyDidYouUpdate } from "why-did-you-update";

whyDidYouUpdate(React);

const columns = [
  { key: "name", name: "Name" },
  { key: "capital", name: "Capital" },
  {
    key: "flag",
    name: "Flag",
    structure: "image",
    styles: { width: "100px" }
  },
  { key: "population", name: "Population" },
  { key: "topLevelDomain", name: "Domain", structure: "array" },
  { key: "numericCode", name: "Numeric Code" },
  { key: "region", name: "region" },
  { key: "subregion", name: "Subregion" },
  { key: "demonym", name: "Demonym" },
  { key: "area", name: "Area" },
  { key: "borders", name: "Borders", structure: "array" }
];
class App extends PureComponent {
  state = {
    toggle: true
  };

  handleToggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };

  render() {
    const { toggle } = this.state;
    return (
      <main className={toggle ? "night" : "day"}>
        <button type="button" onClick={this.handleToggle}>
          {toggle ? "light theme" : "dark theme"}
        </button>
        <Task columns={columns} rows={rows} />
      </main>
    );
  }
}

export default App;
