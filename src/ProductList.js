import React, { Component } from "react";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          <h4>{this.props.info.title} - {this.props.currentCategory}</h4>
        </h3>
      </div>
    );
  }
}

export default ProductList;
