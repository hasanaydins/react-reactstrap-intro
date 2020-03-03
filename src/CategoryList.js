import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export  default  class CategoryList extends Component {
  state = {
    categories: [

    ]
  };

  componentDidMount() { // componentler yerleesti simdi categorileri yerlestir demek
      this.getCategories()
  }

    getCategories = () => {

      fetch("http://localhost:3000/categories")
          .then(response => response.json())
          .then(data => this.setState({categories: data}))
  }

  render() {
    return (
      <div>
        <h4>{this.props.info.title}</h4>
        <h4>{this.state.counter}</h4>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>

        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
