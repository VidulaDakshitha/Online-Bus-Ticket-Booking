import {database, firestore} from "../../firebasejs";
import React, { Component } from 'react'
import { Col, Container } from 'reactstrap'

export default class AdminHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passengerData:[],
            jounryData:[],
            isload:false
        }
    }

    componentDidMount(){
        this.getPassengerData()

    }

    getPassengerData =async ()=>{

       

    }

    getJournyData = async ()=>{

    }





    render() {
        return (
            <Col sm={StyledHome.ColumnSize}>
            <h5>Summery</h5>
            <Container style={StyledHome.card}>
                 <h3>Total Register User  </h3>
                 <h3>Local User  </h3>
                 <h3>Forign User </h3>
            </Container>
        </Col>
        )
    }
}

const StyledHome ={
    s1: { 
         backgroundColor:'red',
         
         borderRadius:7
        
       },
   notificationPanal: { 
           backgroundColor:'green',
          
           alignItems: 'center',
           borderRadius:7
       },
   
        ColumnSize:{
   
           size: 'auto',
           offset: 1
       
       },
       imageStyle:{
           width:'100%',
           borderRadius:10
   
       },
       card:{
           backgroundImage:'linear-gradient(to right top, #ff447d, #ff685c, #ff9934, #ffcc00, #f2fd00)',
           borderRadius:10,
           height:175,
           padding:10,
           margin:5
       }
   
   }
   
