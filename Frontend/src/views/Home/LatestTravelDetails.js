import React, { Component } from 'react'
import { Alert, Col } from 'reactstrap'

export default class LatestTravelDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            latestTravel:[45,65 ]
        }

    }

    componentDidMount(){

    }

    getData=()=>{

    }

    showLastTravel=()=>{

               return this.state.latestTravel.map(travle=>{
            return (
                <Alert color="info">
                    {travle}
            </Alert>
            )
        })
    }






    render() {
        return (
         <Col sm={StyledHome.ColumnSize}>
            <h5>Latest Transist Details</h5>

            {this.state.latestTravel.size>0
            ?  (<p>No data available</p>)
            :  (this.showLastTravel())
            }

             

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
           backgroundImage:'linear-gradient(to right top, #02d5f8, #00e6e7, #53f3ca, #98fba7, #daff89)',
           borderRadius:10,
           height:175,
           padding:10,
           margin:5
       }
   
   }
