import React, { Component } from 'react'
import { Col, Container } from 'reactstrap'
import {database, firestore} from "../../firebasejs";


export default class CardDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            cardData:[],
            userEmail:localStorage.getItem("email"),
            isload:false,
            
        }
    }

    componentDidMount(){
        this.getData()
      

    }

    getData= async ()=> {


        database.ref('token').orderByChild("email").equalTo(this.state.userEmail).on('value',(snapshot)=>{
            var tempJounryData=[];
            snapshot.forEach(data=>{
              tempJounryData =  [... tempJounryData, {id:data.key,... data.val()}];
            // tempJounryData.push(snapshot.val())
                console.log(tempJounryData);
        

            });
            this.setState({
                cardData:tempJounryData,
                isload:true
            })
        },
        
        )
      
        

    }



    render() {
        return (
            <Col sm={StyledHome.ColumnSize}>
                    <h5>Credit</h5>

                    {this.state.cardData.length>0?
                    (<Container style={StyledHome.card}>
                         <p>Transist card</p>
                         <h3>Available Amount :<b>{this.state.cardData[0].amount}</b> </h3>
                            <h5> Expire date: <span>{ this.state.cardData[0].tokentype}</span> </h5>

                         <h6> Expire date: <span>{new Date(this.state.cardData[0].expiryDate).toDateString()}</span> </h6>
                         <h6> IssueDate date:<span>{new Date(this.state.cardData[0].issueDate).toDateString()}</span> </h6>


                    </Container>):' Loadding...' }

                   
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
   