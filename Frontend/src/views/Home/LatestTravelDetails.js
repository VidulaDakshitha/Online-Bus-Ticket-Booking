import {database, firestore} from "../../firebasejs";
import React, { Component } from 'react'
import { Alert, Badge, Button, Col } from 'reactstrap'
import LastjorunyImage from "../../assets/last_journy.png"
 /**
 * IT18045840
 * S.D.S.L Dissanayake
 */


export default class LatestTravelDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            latestTravel:[],
            userEmail:localStorage.getItem("email"),
            tokenType:localStorage.getItem("tokenType"),
            tokenID:localStorage.getItem("tokenID"),
            isload:false
        }

    }

    componentDidMount(){
        this.getData()

    }

    //Get Latst Active journey
    getData=async()=>{

        database.ref('journey').orderByChild("userID").equalTo(this.state.userEmail).on('value',(snapshot)=>{
            var tempJounryData=[];

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

    //Deactiate Jounry
    deactivateJourney=(id)=>{
        
        database.ref('journey/'+id).update( {status:"Completed"},(err)=>{
            if (err) {
                console.log(err);

                } else {
                    console.log("Jounry Completed");
                    this.getData();
               }
         });

         if(localStorage.getItem("tokenType")=="single"){

                if(!(localStorage.getItem("tokenID")===null)){

                    
                let tokenID=localStorage.getItem("tokenID");
                database.ref('token/'+tokenID).update({isactive:0},(err)=>{
                    if (err) {
                        console.log(err);
        
                        } else {
                            console.log("Token Completed");
                       }
                });
               

                }


        


         }
    }

    //Show last jounry
    showLastTravel=()=>{

               return this.state.latestTravel.map(travle=>{


                if(travle.status=="Active"){

                    return (
                        <Alert style={StyledHome.rowShadow} color="warning" key={travle.id}>
                            <Badge color="success"  pill>Active Journey</Badge>
                            <p>Journey from 
                            <b> {travle.fromDestination} </b> to
                            <b> {travle.toDestination} </b> 
                             
                             {/* <Button outline color="danger" onClick={()=>{this.deactivateJourney(travle.id)}}> End Journey </Button>  */}
                             
                            </p>
                        </Alert>
                    )


                }
           
             
        })
    }






    render() {
        return (
         <Col sm={StyledHome.ColumnSize} style={StyledHome.lestJourny}>
            <h5>Active Journey</h5>

            {this.state.latestTravel.length<1
            ?  <p>No data available</p>
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
       }, 

       lestJourny:{
           backgroundImage: 'url('+LastjorunyImage+')',
           backgroundPosition: 'center',
             backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
       }
   
   }
