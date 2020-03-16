import React from "react";
import Category from "./Category";
import Product from "./Product";
export default class Table extends React.PureComponent {
  render() {
    const filterText = this.props.filtertext;
    const instockonly = this.props.instockonly;
    let lastcategory = null;
    let rows = [];
    this.props.products.map((product, i) => {
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      if (instockonly && !product.stocked) {
        return;
      }
      if (product.category !== lastcategory) {
        rows.push(
          <Category category={product.category} key={product.category} />
        );
      }
      rows.push(<Product product={product} key={product.name} />);
      lastcategory = product.category;
    });
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
