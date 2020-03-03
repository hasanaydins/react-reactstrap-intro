import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart:[]
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


  addToCart = (product)=> {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem){
      addedItem.quantity +=1;
    }
    else{
      newCart.push({product: product, quantity: 1});
      
    }

    this.setState({cart: newCart})
  }


  categoryInfo = {
    title: "Category List"
  };
  productInfo = { title: "Product List" };

  render() {
    return (
      <div>
        <Container>

            <Navi cart={this.state.cart} />


          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={this.categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList addToCart={this.addToCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={this.productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
