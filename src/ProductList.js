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
        <h3>
          <h4>{this.props.info.title}</h4>
        </h3>
      </div>
    );
  }
}

export default ProductList;
