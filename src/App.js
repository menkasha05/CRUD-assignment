import React, { Component } from "react";
import ProductForm from "./Component/ProductForm";
import ProductList from "./Component/ProductList";
import Home from "./Component/Home";

import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={ProductList} />
          <Route exact path="/form" component={ProductForm} />
          <Route exact path="/edit" component={ProductForm} />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
