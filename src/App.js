import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: []
  };

  componentDidMount() {
    // componentler yerleesti simdi categorileri yerlestir demek
    this.getProducts();
  }

  changeCategory = category => {
    this.setState({
      currentCategory: category.categoryName
    });

    this.getProducts(category.id);
  };

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  addToCart = product => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + "  added to cart.", 2);
  };

  categoryInfo = {
    title: "Category List"
  };
  productInfo = { title: "Product List" };

  removeFromCart = product => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);

    this.setState({ cart: newCart });
    alertify.error(product.productName + "  removed from cart.", 2);
  };

  render() {
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={this.categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <ProductList
                        {...props}
                      addToCart={this.addToCart}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={this.productInfo}
                    />
                  )}
                ></Route>
                <Route exact path="/cart" render={props => (
                    <CartList
                        {...props}
                        removeFromCart={this.removeFromCart}
                        cart={this.state.cart}
                    />
                )} ></Route>
                <Route path="/form1" component={FormDemo1}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
