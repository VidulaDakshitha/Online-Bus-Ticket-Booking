import React, { Component } from 'react'
import { Col, Container } from 'reactstrap'

export default class CardDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            availableAmount:0,
            amount:0,
            expiredDate:""

        }
    }

    componentDidMount(){

    }

    getData=()=>{

    }



    render() {
        return (
            <Col sm={StyledHome.ColumnSize}>
                    <h5>Credit</h5>
                    <Container style={StyledHome.card}>
                         <p>Transist card</p>
                         <h3>Available Amount :<span>{this.state.availableAmount}</span> </h3>
                         <h6> Amount :<span>{this.state.amount}</span> </h6>
                         <p> Expire date:<span>{this.state.expiredDate}</span> </p>


                    </Container>
                </Col>
        )
    }
}


const StyledHome ={
     
        ColumnSize:{
   
           size: 'auto',
           offset: 1
       
       },
        card:{
           backgroundImage:'linear-gradient(to right top, #0effab, #00efda, #00dbfd, #00c2ff, #00a6ff)',
           borderRadius:10,
           height:175,
           padding:10,
           margin:5,
           boxShadow: '-1px 4px 8px 0px #c7c7c7',

            
       }
   
   }
   