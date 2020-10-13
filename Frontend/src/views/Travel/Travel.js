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
      {id: 1, value: 'Colombo'}, 
      {id: 2, value: 'Moratuwa'},
      {id: 3, value: 'Gampaha'},
      {id: 4, value: 'Negombo'}, 
      {id: 5, value: 'Ragama'},
      {id: 6, value: 'Wattala'}, 
      {id: 7, value: 'Ratmalana'}

    ];


class Travel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDestination:"Colombo",
            fromDestination:"Colombo",
            totalAmount: 0
        };
    }

    onChangeFrom = (event) => {
        this.setState({
            fromDestination:event.target.value
        })
    }
    
    onChangeTo = (event) => {
        this.setState({
            toDestination:event.target.value
        })
    }

    checkInputAndSubmit = (e) => {
        e.preventDefault();
        console.log("Data: ", this.state.fromDestination, this.state.toDestination);
        if(this.state.fromDestination === this.state.toDestination){
            alert('Error: Both destinations are same!');
        }
    }
    
    render() {
        return (
            <div>
                <Row>
                    <Col xs="12" sm="6">
                    <Card >
                    <CardHeader><h3>Travel History</h3></CardHeader>
                    <CardBody>
                    <CardText>From this view, you can view all your travel history</CardText>
                   
                        <Table responsive bordered className="table">
                            <thead>
                                <tr>
                                <th>REF No.</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Colombo</td>
                                <td>Dehiwala</td>
                                <td>13/10/2020</td>
                                </tr>
                                <tr>
                                <th scope="row">1</th>
                                <td>Colombo</td>
                                <td>Dehiwala</td>
                                <td>13/10/2020</td>
                                </tr>
                                <tr>
                                <th scope="row">1</th>
                                <td>Colombo</td>
                                <td>Dehiwala</td>
                                <td>13/10/2020</td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                    </Card>

                   
                    </Col>

                    <Col xs="12" sm="6">
                        <Card >
                        <CardHeader><h3>Current travel destination</h3></CardHeader>
                        <CardBody>
                        <CardText>You need to provide travel details here in order to proceed further</CardText>

                        <Form method ="POST" onSubmit={this.checkInputAndSubmit}>
                        <Label>Select from destination:</Label>
                            <Input type="select" name="from" id="fromDestination" onChange={this.onChangeFrom}>
                            { data.map((value) => (    
                            <option>{value.value}</option>
                            ))}
                            </Input>
                            <Label>Select to destination:</Label>
                            <Input type="select" name="to" id="toDestination" onChange={this.onChangeTo}>
                            { data.map((value) => (    
                            <option>{value.value}</option>
                            ))}
                            </Input>
                            <br />
                            <Button type="submit" >Confirm</Button>
                        </Form>
                        <br />
                        <Alert color="dark">
                            <h4>TOTAL AMOUNT: {this.state.totalAmount}</h4> 
                        </Alert>
                        </CardBody>
                        </Card>
                    
                
                    </Col>
            </Row>
            </div>
        );
    }
}

export default Travel;