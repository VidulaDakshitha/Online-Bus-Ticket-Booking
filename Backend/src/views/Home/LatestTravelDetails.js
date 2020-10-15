import {database, firestore} from "../../firebasejs";
import React, { Component } from 'react'
import { Alert, Button, Col } from 'reactstrap'
 

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

    }

    getData=async()=>{
        var tempJounryData=[];

        database.ref('journey').orderByChild("userID").equalTo(this.state.userEmail).on('value',(snapshot)=>{
            snapshot.forEach(data=>{
              tempJounryData=   [... tempJounryData, {id:data.key,... data.val()}];
        
            });
            this.setState({
                latestTravel:tempJounryData,
                isload:true
            })
        },
        
        )
 
    }

    deactivateJourney=(id)=>{
        
        database.ref('journey/'+id).update( {status:"Completed"},(err)=>{
            if (err) {
                console.log(err);

                } else {
                    console.log("Jounry Completed");
                    this.getData();
               }
         });
    }

    showLastTravel=()=>{

               return this.state.latestTravel.map(travle=>{


                if(travle.status=="Active"){

                    return (
                        <Alert style={StyledHome.rowShadow} color="success" key={travle.id}>
                            <p>Journy form <b>{travle.fromDestination}</b> to <b>{travle.toDestination}</b> <Button outline color="danger" onClick={()=>{this.deactivateJourney(travle.id)}}> End Journey </Button>     </p>
                        </Alert>
                    )


                }
           
             
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
