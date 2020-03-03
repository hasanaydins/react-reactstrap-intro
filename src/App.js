import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {

  state = {
  currentCategory: ""
  }
  changeCategory = category => {
    this.setState({
      currentCategory: category.categoryName
    });
  };


  categoryInfo = {
    title: "Category List"
  };
  productInfo = { title: "Product List" };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>

          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory} info={this.categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                  currentCategory={this.state.currentCategory} info={this.productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
