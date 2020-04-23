import React, { Component } from "react";
import { addProductAction,editProductAction } from "../Container/ActionCreator";

import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.location.state?this.props.location.state.id: "",
      userId:this.props.location.state?this.props.location.state.userId: "",
      title:this.props.location.state?this.props.location.state.title:"",
      body:this.props.location.state?this.props.location.state.body: ""
    };
    console.log(this.state)
    
    
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.props.location.state)
    { this.props.handleEditSubmit(this.state)}
   else
   { this.props.handleAddSubmit(this.state)}
    console.log(this.state)
    this.props.history.push("/product")
  }
  onChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    console.log(this.props)
    if (this.props.data === null) return <h1>Loading...</h1>
    // const {data}=this.props
    return (
      <div>
        <h1>Product Form</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>USER ID</Form.Label>
            <Form.Control
              type="userId"
              name="userId"
              placeholder="userId"
              value={this.state.userId}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>TITLE</Form.Label>
            <Form.Control
              type="title"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>BODY</Form.Label>
            <Form.Control
              type="body"
              name="body"
              placeholder="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" margin-bottom="2 rem">
            Save
          </Button>
        </Form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleAddSubmit: (input) => dispatch(addProductAction(input)),
    handleEditSubmit: (input) => dispatch(editProductAction(input)),
  };
};
export default connect(null, mapDispatchToProps)(ProductForm);


