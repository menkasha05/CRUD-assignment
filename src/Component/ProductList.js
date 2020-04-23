import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

import { connect } from "react-redux";
import {
  getProductAction,
  deleteProductAction,
} from "../Container/ActionCreator";

class ProductList extends Component {
  componentDidMount() {
    console.log(this.props);
    if (this.props.data === null) this.props.getProduct();
  }

  editProduct = (input) => {
    console.log(input);

    this.props.history.push(`/edit/${input.id}`, input);
  };

  render() {
    if (this.props.data === null) return null;
    const { data } = this.props;

    return (
      
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.userId}</td>
                <td>{d.title}</td>
                <td>{d.body}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => this.props.deleteProduct(d.id)}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => this.editProduct(d)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.product);
  return {
    data: state.product
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: () => dispatch(getProductAction()),
    deleteProduct: (input) => dispatch(deleteProductAction(input))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
