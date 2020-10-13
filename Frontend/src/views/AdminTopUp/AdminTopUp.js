import React, { Component, useState } from 'react';
import { Button, Card, CardBody,CardHeader, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback } from 'reactstrap';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    FormGroup,
    Label,
    Table,
    CardTitle,
    CardText,
    Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    Select,
    Alert
    
  } from "reactstrap";

  const data = [
      {id: 1, value: 'Kevin'}, 
      {id: 2, value: 'Vidula'},
      {id: 3, value: 'Dilshan'},
      {id: 4, value: 'Sathira'}, 
      {id: 5, value: 'Malidi'},
      {id: 6, value: 'Janitha'}, 
      {id: 7, value: 'Pramodya'}

    ];


class AdminTopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID:"",
            amountTopUp:"Colombo"
        };
    }

    onChangeUserID = (event) => {
        this.setState({
            userID:event.target.value
        })
    }
    
    onChangeAmountTopUp = (event) => {
        this.setState({
            amountTopUp:event.target.value
        })
    }

    checkInputAndSubmit = (e) => {
        e.preventDefault();
        console.log("Data: ", this.state.userID, this.state.amountTopUp);
    }
    
    render() {
        return (
            <div>
                <Row>
                    <Col xs="12" sm="8">
                        <Card >
                        <CardHeader><h3>Top Up user's accounts</h3></CardHeader>
                        <CardBody>
                        <CardText>As the admin you can topup user's accounts when they physically visit the bus station</CardText>

                        <Form method ="POST" onSubmit={this.checkInputAndSubmit}>
                        <Label>Select the user account ID and name:</Label>
                            <Input type="select"  name="userID" id="userID" onChange={this.onChangeUserID}>
                            { data.map((value) => (    
                            <option>{value.value}</option>
                            ))}
                            </Input>
                            <Label>Select to destination:</Label>
                            <Input type="text" name="amount" id="amount" onChange={this.onChangeAmountTopUp} />
                            
                            <br />
                            <Button type="submit" >Confirm</Button>
                        </Form>
                        <br />
                        <Alert color="dark">
                            <h4>USER: {this.state.userID}</h4>
                            <h4>TOTAL AMOUNT: {this.state.amountTopUp}</h4> 
                        </Alert>
                        </CardBody>
                        </Card>
                    
                
                    </Col>
            </Row>
            </div>
        );
    }
}

export default AdminTopUp;