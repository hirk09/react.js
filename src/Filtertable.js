import React from "react";
import Table from "./Table";
import Search from "./Search";

export default class Filtertable extends React.PureComponent {
  state = {
    filtertext: "",
    instockonly: false
  };
  handleFilterTextChange = filtertext => {
    this.setState({
      filtertext: filtertext
    });
  };
  handleInStockChange = instockonly => {
    this.setState({
      instockonly: instockonly
    });
  };
  render() {
    return (
      <div>
        <Search
          filtertext={this.state.filtertext}
          instockonly={this.state.instockonly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <Table
          products={this.props.products}
          filtertext={this.state.filtertext}
          instockonly={this.state.instockonly}
        />
      </div>
    );
  }
}
