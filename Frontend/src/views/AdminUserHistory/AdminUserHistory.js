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


class AdminUserHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        return (
            <div>
                <Row>
                    <Col xs="12" sm="6">
                    <Card >
                    <CardHeader><h3>User History</h3></CardHeader>
                    <CardBody>
                    <CardText>You can view all the user history</CardText>
                   
                        <Table responsive bordered className="table">
                            <thead>
                                <tr>
                                <th>UserID No.</th>
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
            </Row>
            </div>
        );
    }
}

export default AdminUserHistory;