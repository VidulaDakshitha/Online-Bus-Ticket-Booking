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
  import moment from "moment";
  import {database, firestore} from "../../firebasejs";

  let tempRealTimeDb = [];
  let tempRealTimeDbToken = [];


class AdminTopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID:"",
            amountTopUp:"",
            tokenType: "",
            avaiAmount:"",
            realTimeDB:[],
            realTimeDBToken:[],
            totalAmount: 0,
            today: new Date().toString()
        };
    }

    componentDidMount(){
        database.ref('passenger').on('value',(snapshot)=>{
            tempRealTimeDb=[];
            snapshot.forEach(arr=>{
                tempRealTimeDb=[...tempRealTimeDb,{id:arr.key,...arr.val()}]
            })

            this.setState({
                realTimeDB: tempRealTimeDb,
            })
        })

        database.ref('token').on('value',(snapshot)=>{
            tempRealTimeDbToken=[];
            snapshot.forEach(arr=>{
                tempRealTimeDbToken=[...tempRealTimeDbToken,{id:arr.key,...arr.val()}]
            })

            this.setState({
                realTimeDBToken: tempRealTimeDbToken
            })
        })

    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    onSubmit = async(e) => {
        e.preventDefault();



        if(this.state.userID !== "" || this.state.amountTopUp !== "" || this.state.tokenType !== "")
        {
            await this.state.realTimeDBToken.map( val=>{
                if(val.email===this.state.userID)
                {
                    this.setState({
                        totalAmount: parseInt(val.amount) + parseInt(this.state.amountTopUp)
                    })
                }
            })

            console.log("Avai amount", this.state.avaiAmount)

            if(this.state.tokenType === "single"){
                database.ref('token').orderByChild('email').equalTo(this.state.userID.trim()).once('value',(snapshot)=>{
                snapshot.forEach(data=>{
                    database.ref(`token/${data.key}/`).update({
                        amount:this.state.totalAmount,
                        issueDate: this.state.today,
                        expiryDate: "",
                        isactive: 1,
                        tokentype: "single"

                        })
                    })
                },
                alert('Single token updated!')
                ).catch(err=>console.log(err))
            }
            else{
                database.ref('token').orderByChild('email').equalTo(this.state.userID.trim()).once('value',(snapshot)=>{
                snapshot.forEach(data=>{
                    database.ref(`token/${data.key}/`).update({
                        amount:this.state.totalAmount,
                        issueDate: this.state.today,
                        expiryDate: moment(moment().add(30,'d').toDate()).format("YYYY-MM-DD"),
                        isactive: 1,
                        tokentype: "monthly"

                        })
                    })
                },
                alert('Monthly token updated!')
                ).catch(err=>console.log(err))
            }
        }
        else{
            alert('Fill up the required fields!')
        }

        this.setState({
            userID: "",
            tokenType: "",
            amountTopUp: ""
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="12" sm="8" className="mx-auto mt-3">
                        <Card className="shadow">
                        <CardHeader className="primary-bg"><h3>Top Up user's accounts</h3></CardHeader>
                        <CardBody>
                        <CardText>As the admin you can topup user's accounts when they physically visit the bus station</CardText>

                        <Form method ="POST" onSubmit={this.onSubmit}>
                        <Label>Select the user account ID and name:</Label>
                            <Input type="select"  name="userID" id="userID" onChange={this.onChangeHandler}>
                            { this.state.realTimeDB.map(value => (
                            <option>{value.email}</option>
                            ))}
                            </Input>
                        <Label>Token type</Label>
                            <Input type="select"  name="tokenType" id="tokenType" onChange={this.onChangeHandler}>
                            <option>single</option>
                            <option>monthly</option>
                            </Input>

                            <Label>Amount to topup</Label>
                            <Input type="text" name="amountTopUp" id="amountTopUp" onChange={this.onChangeHandler} />

                            <br />
                            <Button className="primary-button" type="submit" >To Up Account</Button>
                        </Form>
                        <br />
                        <Alert color="dark" className="primary-bg">
                            <h4>USER: {this.state.userID}</h4>
                            <h4>TOTAL AMOUNT(LKR): {this.state.amountTopUp}</h4>
                            <h4>TOKEN TYPE: {this.state.tokenType}</h4>
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
