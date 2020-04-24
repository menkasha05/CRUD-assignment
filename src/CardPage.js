import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'

 class CardPage extends Component {
  handleClick1=()=>{
    console.log(this.props.history.push)
    
    this.props.history.push('/FormPage',"H1")
    
  }

  handleClick2=()=>{
    console.log(this.props.history.push)
    
    this.props.history.push('/FormPage',"H2")
    
  }
  handleClick3=()=>{
    console.log(this.props.history.push)
    
    this.props.history.push('/FormPage',"H3")
    
  }
    render() {
        return (
            <div style={{display:'flex'}}>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" onClick={this.handleClick1}>Go Detailed page</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" onClick={this.handleClick2}>Go Detailed page</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" onClick={this.handleClick3}>Go Detailed page</Button>
  </Card.Body>
</Card>
            </div>
        )
    }
}
export default withRouter(CardPage)