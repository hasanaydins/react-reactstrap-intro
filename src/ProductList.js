import React, { Component } from "react";
import { Button, ListGroup, ListGroupItem, Table } from "reactstrap";
import { FiShoppingCart } from 'react-icons/fi';


class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          <h4>
            {this.props.info.title} - {this.props.currentCategory}
          </h4>

          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity per Unit</th>
                <th>Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map(product => (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>$ {product.unitPrice}</td>
                  <td>$ {product.quantityPerUnit}</td>
                  <td>{product.unitsInStock}</td>
                  <td>
                    <Button
                      onClick={() => this.props.addToCart(product)}
                      color="success"
                    >
                      <FiShoppingCart />  Add
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </h3>
      </div>
    );
  }
}

export default ProductList;
