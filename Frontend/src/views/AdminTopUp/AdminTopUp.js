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
 

class AdminTopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID:"",
            amountTopUp:"",
            tokenType: "",
            realTimeDB:[]
        };
    }

    componentDidMount(){
        database.ref('userDetails').on('value',(snapshot)=>{
            tempRealTimeDb=[];
            snapshot.forEach(arr=>{
                tempRealTimeDb=[...tempRealTimeDb,{id:arr.key,...arr.val()}]
            })

            this.setState({
                realTimeDB: tempRealTimeDb,
            })
        })

    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    checkInputAndSubmit = (e) => {
        e.preventDefault();
        console.log("Data: ", this.state.userID, this.state.amountTopUp);
    }

    onSubmit = (e) => {
        e.preventDefault();

            database.ref('journey').push().set({
                userID:this.state.userID,
                fromDestination: this.state.fromDestination,
                toDestination:this.state.toDestination,
                date: this.state.date.toString(),
                status: "Active",
                fullAmount: this.state.totalAmount,
                distance: this.state.distance
              },
              alert('Account updated!')
              ).catch(err=>console.log(err))
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
                            <Input type="select"  name="userID" id="userID" onChange={this.onChangeHandler}>
                            { this.state.realTimeDB.map(value => (    
                            <option>{value.email}</option>
                            ))}
                            </Input>
                        <Label>Token type</Label>
                            <Input type="select"  name="tokenType" id="tokenType" onChange={this.onChangeHandler}>
                            <option>Single</option>
                            <option>Monthly</option>
                            </Input>

                            <Label>Amount to topup</Label>
                            <Input type="text" name="amountTopUp" id="amountTopUp" onChange={this.onChangeHandler} />
                            
                            <br />
                            <Button type="submit" >To Up Account</Button>
                        </Form>
                        <br />
                        <Alert color="dark">
                            <h4>USER: {this.state.userID}</h4>
                            <h4>TOTAL AMOUNT(LKR): {this.state.amountTopUp}</h4> 
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