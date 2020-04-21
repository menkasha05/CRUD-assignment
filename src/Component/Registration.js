// import React, { Component } from "react";
// import { Form, Row, Col, Button } from "react-bootstrap";

// export default class Registration extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       name: "",
//       email: "",
//       number: "",
//       address: "",
//       dob: "",
//       gender: ""
//     };
//   }

//   onSubmit = e =>alert('submited successfulley') 
//   onChange = e => this.setState({[e.target.name]:e.target.value})
//   render() {
//     return (
//       <div>
//         <h1>Registration Form</h1>
//         <Form onSubmit={this.onSubmit}>
//           <Form.Group as={Row} controlId="formPlaintextPassword">
//             <Form.Label column sm="2">
//               Name
//             </Form.Label>
//             <Col sm="10">
//               <Form.Control type="name" name="name" placeholder="name" onChange={this.onChange}/>
//             </Col>
//           </Form.Group>
//           <Form.Group as={Row} controlId="formPlaintextEmail">
//             <Form.Label column sm="2">
//               Email
//             </Form.Label>
//             <Col sm="10">
//               <Form.Control
//                 name="email"
//                 type='email'
//                placeholder ="email@example.com"
//                 onChange={this.onChange}
//               />
//             </Col>
//           </Form.Group>

//           <Form.Group as={Row} controlId="formPlaintextPassword">
//             <Form.Label column sm="2">
//               Number
//             </Form.Label>
//             <Col sm="10">
//               <Form.Control name="number" type="number" placeholder="number" onChange={this.onChange} />
//             </Col>
//           </Form.Group>

//           <Form.Group as={Row} controlId="formPlaintextPassword">
//             <Form.Label column sm="2">
//               Address
//             </Form.Label>
//             <Col sm="10">
//               <Form.Control
//                 name="address"
//                 type="address"
//                 placeholder="address"
//                 onChange={this.onChange}
//               />
//             </Col>
//           </Form.Group>

//           <Form.Group as={Row} controlId="formPlaintextPassword">
//             <Form.Label column sm="2">
//               Dob
//             </Form.Label>
//             <Col sm="10">
//               <Form.Control name="dob" type="dob" placeholder="DD/MM/YYYY" onChange={this.onChange}/>
//             </Col>
//           </Form.Group>
//           <Form.Group as={Row} controlId="formPlaintextPassword">
//             <Form.Label column sm="2">
//               Gender
//             </Form.Label>
//             <Col sm="10">
//               <Form.Control
//                 name="gender"
//                 type="gender"
//                 placeholder="M/F"
//                 onChange={this.onChange}
//               />
//             </Col>
//           </Form.Group>
//           <div>
//             <Button type='submit'>Submit</Button>
//           </div>
//         </Form>
//       </div>
//     );
//   }
// }
