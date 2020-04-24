import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class FormPage extends Component {
    
  submit=()=>{
      console.log('submt')
  if(this.props.location.state==='H1'){
      alert('card1')
      console.log('h')
  }
  else if (this.props.location.state==='H2'){
  alert('card2')
  }
  else {
      alert('card 3')
  }
  }

  render() {
    const form = () => 
 
  {
      if (this.props.location.state === "H1") {
        return (
          <form onSubmit={this.submit}>
            <input type="text" name="email" placeholder='email' />
            <br />
            <input type="text" name="name" placeholder='name'/>
            <br />
            <button type="submit" >
              submit
            </button>
          </form>
        );
      } else if (this.props.location.state === "H2") {
        return (
            <form onSubmit={this.submit}>
            <input type="text" name="email"placeholder='email' />
            <br />
            <input type="number" name="number"placeholder='number' />
            <br />
            <button type="submit">submit</button>
          </form>
        );
      } else {
        return (
            <form onSubmit={this.submit}>
            
            <input type="text" name="email"placeholder='email' />
            <br />
            <input type="number" name="age"placeholder='age' />
            <br />
            <button type="submit">submit</button>
          </form>
        );
      }
    }
   return <div>{form()}</div>;
  }
}
