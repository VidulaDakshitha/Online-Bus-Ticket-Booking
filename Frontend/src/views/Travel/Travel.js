import React, { Component, useState, useEffect } from 'react';
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
    Alert,
    Pagination,
    PaginationItem,
    PaginationLink,
    
  } from "reactstrap";
  

  import {database, firestore} from "../../firebasejs";

  const data = [
      {id: 1, value: 'Colombo 1'}, 
      {id: 2, value: 'Kollupitiya'},
      {id: 3, value: 'Bambalapitiya'},
      {id: 4, value: 'Wellawatta'}, 
      {id: 5, value: 'Dehiwala'},
      {id: 6, value: 'Mount Lavnia'}, 
      {id: 7, value: 'Ratmalana'},
      {id: 8, value: 'Moratuwa'}

    ];

    //db connection attributes
// const [realtimeDB,setRealTimeDb]=useState([]);
// const [fireStore,setFireStore]=useState([]);
// const [error,setError]=useState('');

let tempRealTimeDb = [];
let tempRealTimeDbToken = [];

class Travel extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            userID: localStorage.getItem("email"),
            toDestination:"Colombo 1",
            fromDestination:"Colombo 1",
            totalAmount: 0, 
            distance: 0,
            realTimeDB: [],
            realTimeDBToken: [],
            valueStartDist: 0,
            valueEndDist: 0,
            date: new Date(),
            activeTrue: false,
            tokenExpired: false,
            insufficientCredit: false
        };
    }

    componentDidMount(){
        database.ref('journey').orderByChild("userID").equalTo(this.state.userID).on('value',(snapshot)=>{
            tempRealTimeDb=[];
            snapshot.forEach(arr=>{
                tempRealTimeDb=[...tempRealTimeDb,{id:arr.key,...arr.val()}]
            });

            this.setState({
                realTimeDB: tempRealTimeDb,
            })
        })

        database.ref('token').on('value',(snapshot)=>{
            tempRealTimeDb=[];
            snapshot.forEach(arr=>{
                tempRealTimeDbToken=[...tempRealTimeDb,{id:arr.key,...arr.val()}]
            })

            this.setState({
                realTimeDBToken: tempRealTimeDbToken
            })
        })

    }


    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]:event.target.value,
        })
        
        
    }

    calculateAmount = () => {
        if((data.findIndex(e => e.value === this.state.fromDestination)) > (data.findIndex(e => e.value === this.state.toDestination)))
        {
            const tempVar = data.findIndex(e => e.value === this.state.fromDestination) - data.findIndex(e => e.value === this.state.toDestination);
            console.log("Distance data: ", tempVar);
            this.setState({
                totalAmount: tempVar * 10.5,
                distance: tempVar
            })
        }
        else if((data.findIndex(e => e.value === this.state.fromDestination)) < (data.findIndex(e => e.value === this.state.toDestination)))
        {
            const tempVar = data.findIndex(e => e.value === this.state.toDestination) - data.findIndex(e => e.value === this.state.fromDestination)
            console.log("Distance data else: ", tempVar);
            this.setState({
                totalAmount: tempVar * 10.5,
                distance: tempVar
            })
        }
        else{
            alert('Error: Both destinations are same! Can not calculate the total amount');
        }

    }
    

    checkInputAndSubmit = async(e) => {
        e.preventDefault();
        
        await this.state.realTimeDB.map( val=>{
            console.log("this is status"+val.status)
            if(val.status==="Active")
            {
                this.setState({
                    activeTrue: true,
                },()=>console.log("Active: ", this.state.activeTrue))
            }
        })

        await this.state.realTimeDBToken.map( val=>{
            console.log("this is status"+val.isactive)
            if(val.isactive===0)
            {
                this.setState({
                    tokenExpired: true,
                },()=>console.log("Token: ", this.state.tokenExpired))
            }
        })

        await this.state.realTimeDBToken.map( val=>{
            console.log("this is amount: "+val.amount)
            if((val.amount - this.state.totalAmount) < 0)
            {
                this.setState({
                    insufficientCredit: true,
                },()=>console.log("Credit insufficient: ", this.state.insufficientCredit))
            }
        })
        
        if(this.state.insufficientCredit){
            alert('Error: credit insufficient!');
        }
        else if(this.state.tokenExpired ){
            alert('Error: your token is expired');
        }
        else if(this.state.activeTrue===true){
            alert('Error: you already have a current journey');
        }
        else if(this.state.fromDestination === this.state.toDestination){
            alert('Error: Both destinations are same! Can not confirm the Journey');
        }
        else if(this.state.totalAmount === 0){
            alert('Error: You need to calculate the amount');
        }
        else{
            database.ref('journey').push().set({
                userID:this.state.userID,
                fromDestination: this.state.fromDestination,
                toDestination:this.state.toDestination,
                date: this.state.date.toString(),
                status: "Active",
                fullAmount: this.state.totalAmount,
                distance: this.state.distance
              },
              alert('Journey Confirmed! Total required payment will be deducted once the journey is completed!')
              ).catch(err=>console.log(err))
        }

        this.setState({
            toDestination:"Colombo 1",
            fromDestination:"Colombo 1",
            totalAmount: 0, 
            activeTrue: false,
            tokenExpired: false,
            insufficientCredit: false
        })
        
    }

    
    render() {
        return (
            <div>
                <Row>
                    <Col xs="12" sm="9">
                    <Card >
                    <CardHeader><h3>Travel History</h3></CardHeader>
                    <CardBody>
                    <CardText>From this view, you can view all your travel history</CardText>
                   
                        <Table responsive bordered className="table">
                            <thead>
                                <tr>
                                <th>REF No.</th>
                                <th>UserID</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Status</th>
                                <th>Amount(LKR)</th>
                                <th>Points</th>
                                <th>Date:</th>
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

                    <Col xs="12" sm="3">
                        <Card >
                        <CardHeader><h3>Current travel destination</h3></CardHeader>
                        <CardBody>
                        <CardText>You need to provide travel details here in order to proceed further</CardText>

                        <Form method ="POST" onSubmit={this.checkInputAndSubmit}>
                        <Label>Select from destination:</Label>
                            <Input type="select" name="fromDestination" id="fromDestination" onChange={this.onChangeHandler} value={this.state.fromDestination}>
                            { data.map((value) => (    
                            <option>{value.value}</option>
                            ))}
                            </Input>
                            <Label>Select to destination:</Label>
                            <Input type="select" name="toDestination" id="toDestination" onChange={this.onChangeHandler} value={this.state.toDestination}>
                            { data.map((value) => (    
                            <option>{value.value}</option>
                            ))}
                            </Input>
                            <br />
                            <Button onClick={this.calculateAmount}>Calculate Amount</Button>
                            <br />
                            <br />
                            <Button type="submit" >Confirm Journey</Button>
                        </Form>
                        <br />
                        <Alert color="dark">
                            <h5>TOTAL AMOUNT(LKR.): {this.state.totalAmount}</h5> 
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