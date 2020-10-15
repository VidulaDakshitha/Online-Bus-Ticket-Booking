import React, { Component } from 'react'
import { FaBus } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Badge, Col, Container, Row } from 'reactstrap'
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
                console.log(tempJounryData);

                localStorage.setItem("tokenID", tempJounryData[0].id);

        

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
                    (<Container style= {(this.state.cardData[0].tokentype=='single')?StyledHome.cardMonthly: StyledHome.cardSingl}>
                         <p>Transist card</p>
                         <h3>Available Amount :<b>{this.state.cardData[0].amount}</b> </h3>
                         <h6> Expire date: <span>{ this.state.cardData[0].tokentype}</span> </h6>
                         <h6> Expire date: <span>{new Date(this.state.cardData[0].expiryDate).toDateString()}</span> </h6>
                         <p> IssueDate date:<span>{new Date(this.state.cardData[0].issueDate).toDateString()}</span> </p>
                         <p>  {this.state.cardData[0].isactive==0?<Badge color="secondary" pill>Token Expireed</Badge> :<Badge color="success" pill>Token Valied</Badge>}  </p>
                           
                       
                              
                         
                            
                        
                        
                         
                         
                         
                         
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
        cardSingl:{
           backgroundImage:'linear-gradient(to right top, #0effab, #00efda, #00dbfd, #00c2ff, #00a6ff)',
           borderRadius:10,
           height:200,
           padding:10,
           margin:5,
           boxShadow: '-1px 4px 8px 0px #c7c7c7',

            
       },
       iconAligment:{
        textAlign: 'end',
        padding:10,
        marginLeft: '100'
       },
       cardMonthly:{
          backgroundImage:'linear-gradient(to right top, #f44838, #fe731e, #fe9d00, #f5c500, #e2eb12)',
          borderRadius:10,
          height:175,
          padding:10,
          margin:5,
          boxShadow: '-1px 4px 8px 0px #c7c7c7',

           
      }
   
   }
   