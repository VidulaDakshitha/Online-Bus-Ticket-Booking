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

  import {database, firestore} from "../../firebasejs";
  let tempRealTimeDb = [];

class AdminUserHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            realTimeDB: []
        };
    }

    componentDidMount(){
        database.ref('journey').on('value',(snapshot)=>{
            tempRealTimeDb=[];
            snapshot.forEach(arr=>{
                tempRealTimeDb=[...tempRealTimeDb,{id:arr.key,...arr.val()}]
            })

            this.setState({
                realTimeDB: tempRealTimeDb,
            })
        })

    }
    
    render() {
        return (
            <div>
                <Row>
                    <Col xs="12" sm="12">
                    <Card >
                    <CardHeader><h3>User History</h3></CardHeader>
                    <CardBody>
                    <CardText>You can view all the user history</CardText>
                   
                    <Table responsive bordered className="table">
                            <thead>
                                <tr>
                                <th>REF No.</th>
                                <th>UserID</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Status</th>
                                <th>Amount(LKR)</th>
                                <th>Distance(KM)</th>
                                <th>Date</th>
                                </tr>
                            </thead>
                            {this.state.realTimeDB.map(
                                data=>(
                                    
                                    <tbody>
                                        <tr>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.userID}</td>
                                    <td>{data.fromDestination}</td>
                                    <td>{data.toDestination}</td>
                                    <td>{data.status}</td>
                                    <td>{data.fullAmount}</td>
                                    <td>{data.distance}</td>
                                    <td>{data.date}</td>
                                        </tr>
                                    </tbody>)
                            )
                        }
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