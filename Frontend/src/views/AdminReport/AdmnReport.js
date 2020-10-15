import React, { Component } from 'react';
import {database, firestore} from "../../firebasejs";
import { Col, Container, Row } from 'reactstrap';
import Token from './Token';
import Passenger from './Passenger';
import Journy from './Journy';

export default class AdmnReport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            passengerData:[],
            jounryData:[],
            tokenData:[],
            isload:false

        }
    }


        componentDidMount(){
            this.getPassengerData()
            this.getTokeData()
             

        }

        getPassengerData =async ()=>{

           
            
            database.ref('passenger').on('value',(snapshot)=>{
                var tempPassengerData=[];
                snapshot.forEach(data=>{
                    tempPassengerData=  [...tempPassengerData,{id:data.key,... data.val()}];
                    console.log("get Passenger data");
                               
    
                });

                this.setState({
                    passengerData:tempPassengerData,
                    isload:true
                   
    
                     
                })
            },(err)=>{
                if (err) {
                    console.log(err);
    
                    } else {
                        console.log("data retrived");
                        this.getData();
                   }
    
            }
            
            )
     
        
           
    
        }
    
         getTokeData = async ()=>{

            database.ref('token').on('value',(snapshot)=>{
                var tempTokenData=[];
                snapshot.forEach(data=>{
                    tempTokenData=  [...tempTokenData,{id:data.key,... data.val()}];
                    console.log("get Passenger data");
                               
    
                });

                this.setState({
                    tokenData:tempTokenData,
                    isload:true
                   
    
                     
                })
            },(err)=>{
                if (err) {
                    console.log(err);
    
                    } else {
                        console.log("data retrived");
                        this.getData();
                   }
    
            }
            
            )
     
        
          
    
        }


    render() {
        return (
            <Row>
               
                <Token tokenData={this.state.tokenData}></Token>
                <Passenger passengerData={this.state.passengerData} load={this.state.isload}></Passenger>
             
                
            </Row>
        );
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

        
   }, 
   ColumnSizefixd: {
    size: '6',
    offset: 1
   }

}

