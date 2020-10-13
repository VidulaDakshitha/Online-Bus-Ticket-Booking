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
    DropdownMenu
    
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

    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6">
                    {/* <Card >
                    <CardTitle><h3>Travel History</h3></CardTitle>
                    <CardText>From this view, you can view all your travel history</CardText>
                    <CardBody>
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
                    </Card> */}

                    <button>hellloooooooooooooooooooooo</button>
                    </div>

                    <div className="col-6" >
                        {/* <Card >
                        <CardTitle><h3>Current travel destination</h3></CardTitle>
                        <CardText>You need to provide travel details here in order to proceed further</CardText>

                        <Label>Select from destination:</Label>
                        <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Input>
                        </Card>
                    </div> */}
                     <button>hellloooooooooooooooooooooo</button>
                    </div>
            </div>
            </div>
        );
    }
}

export default Travel;