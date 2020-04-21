import React from "react";
import {Link} from "react-router-dom";
import {Nav,Navbar,Button} from "react-bootstrap";

export default function Home() {
  return (
    <div className='bgimg'>
      <Navbar className='navbar' expand="sm" bg="dark" variant="dark">
        <Link exact to="/">
        <Button variant='dark'>Home</Button>
        </Link>
        <Nav className="ml-auto">
          <Nav.Item style={{ marginRight: "1em" }}>
            <Link to="/form"><Button variant='dark'>Form</Button></Link>
          </Nav.Item>
          <Nav.Item style={{ marginRight: "1em" }}>
            <Link to="/product"><Button variant='dark'>Product List</Button></Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}
