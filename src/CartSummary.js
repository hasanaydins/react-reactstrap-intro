import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
    Badge,
    Button,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav, NavItem, NavLink,
    UncontrolledDropdown
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart - ({this.props.cart.length})
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map(cartItem => (
            <DropdownItem key={cartItem.product.id}>
                <Badge className="mr-3 bg-secondary  pt-1" onClick={() => this.props.removeFromCart(cartItem.product)}>-</Badge>
              {cartItem.product.productName} - ({cartItem.quantity})

            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem className="bg-success">
         <Link to="cart" ><h5 className="text-white text-center my-auto py-2">Checkout</h5></Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmpty(){

    return(
        <NavItem>
          <NavLink>
            Empty Cart
          </NavLink>
        </NavItem>
    )
  }
  render() {
    return <div>
      {this.props.cart.length === 0 ? this.renderEmpty() : this.renderSummary()}
    </div>;
  }
}
