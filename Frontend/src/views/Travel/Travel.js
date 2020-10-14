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
            valueStartDist: 0,
            valueEndDist: 0,
            date: new Date(),
            activeTrue: false
        };
    }

    componentDidMount(){
        database.ref('journey').orderByChild("userID").equalTo(this.state.userID).on('value',(snapshot)=>{
            tempRealTimeDb=[];
            snapshot.forEach(arr=>{
                tempRealTimeDb=[...tempRealTimeDb,{id:arr.key,...arr.val()}]
            })

            this.setState({
                realTimeDB: tempRealTimeDb,
            })
        })

    }

    getActiveStatus = () => {
        this.state.realTimeDB.find(val => {
            if(val.status === "Active"){
                this.setState({
                    activeTrue: true
                })
            }
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
    

    checkInputAndSubmit = (e) => {
        e.preventDefault();
        
        // this.state.realTimeDB.find(val => {
        //     if(val.status === "Active"){
        //         console.log("Inside if")
        //         this.setState({
        //             activeTrue: true,
        //         })
        //     }
        // })
        console.log(this.state.realTimeDB)
        this.state.realTimeDB.map(val=>{
            if(val.status==="Active")
            {
                console.log("its active")
            }
        })
        console.log("Active: ", this.state.activeTrue);

        if(this.state.activeTrue){
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
            activeTrue: false
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
                                <th>Distance(KM)</th>
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