import {database, firestore} from "../../firebasejs";
import React, { Component } from 'react'
import { Alert, Col } from 'reactstrap'
 

export default class LatestTravelDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            latestTravel:[],
            userEmail:localStorage.getItem("email"),
            isload:false
        }

    }

    componentDidMount(){
        this.getData()
        console.log(this.state.userEmail);

    }

    getData=async()=>{
        var tempJounryData=[];

        database.ref('journey').orderByChild("userID").equalTo(this.state.userEmail).on('value',(snapshot)=>{
            snapshot.forEach(data=>{
              tempJounryData=   [... tempJounryData, {id:data.key,... data.val()}];
                console.log(tempJounryData);
        

            });
            this.setState({
                latestTravel:tempJounryData,
                isload:true
            })
        },
        
        )
 
    }

    showLastTravel=()=>{

               return this.state.latestTravel.map(travle=>{

           
                return (
                <Alert style={StyledHome.rowShadow} color="info" key={travle.id}>
                   <p>Journy form <b>{travle.fromDestination}</b> to <b>{travle.toDestination}</b>      </p>
            </Alert>
            )
        })
    }






    render() {
        return (
         <Col sm={StyledHome.ColumnSize}>
            <h5>Latest Transist Details</h5>

            {this.state.latestTravel.length<1
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
   
           size: '6',
           offset: 1
       
       },
       imageStyle:{
           width:'100%',
           borderRadius:10
   
       },
      
       rowShadow:{
        boxShadow: '-1px 4px 8px 0px #c7c7c7',
       }
   
   }
