import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" },
      { categoryId: 3, categoryName: "Beverages" }
    ],
    currentCategory: ""
  };

  changeCategory = category => {
    this.setState({
      currentCategory: category.categoryName
    });
  };
  render() {
    return (
      <div>
        <h4>{this.props.info.title}</h4>
        <h4>{this.state.counter}</h4>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem
              onClick={() => this.changeCategory(category)}
              key={category.categoryId}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>

        <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}

export default CategoryList;
