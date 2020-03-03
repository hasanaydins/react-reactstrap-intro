import React, { Component } from "react";

class ProductList extends Component {
  /*   constructor(props) { zorunlu degil
        super(props);
        state:{}
    }
    */

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default ProductList;
