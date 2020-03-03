import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
function App() {
  let productList = "Product List"; // 2.yol props icin
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            <CategoryList title="Category List" />
          </Col>
          <Col xs="9">
            <ProductList title={productList} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
