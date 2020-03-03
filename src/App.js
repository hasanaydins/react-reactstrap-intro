import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
function App() {
  // let productList = "Product List"; // 2.yol props icin

  let categoryInfo = {
    title: "Category List",
    baskaBisey: "baska  bir ozellik"
  };
  let productInfo = { title: "Product List" };

  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            <CategoryList /* title="Category List" */ info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList /* title={productList} 2.yol*/ info={productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
