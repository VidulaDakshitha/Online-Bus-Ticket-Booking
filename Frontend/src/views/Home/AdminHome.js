import {database, firestore} from "../../firebasejs";
import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { FaUserFriends,FaBeer, FaBus, FaCarSide, FaWalking, FaGrav } from 'react-icons/fa';
import { IconContext } from "react-icons/lib";
import AdminCharts from "../AdminReport/AdminCharts/AdminCharts";
import Adminsmap from "../AdminReport/AdminMap/Adminsmap";


export default class AdminHome extends Component {

  /**
 * IT18045840
 * S.D.S.L Dissanayake
 */


    constructor(props) {
        super(props);
        this.state = {
            passengerData:[],
            jounryData:[],
            localPassenger:[],

            isload:false
        }
    }

    componentDidMount(){
        this.getJournyData()
        this.getPassengerData()

    }



    getPassengerData =async ()=>{


        database.ref('passenger').once('value',(snapshot)=>{

             //get all passenger data
        var tempPassengerData=[];

        //get all local passenger data
            var tempLocalPassengerData=[];

            snapshot.forEach(data=>{
                tempPassengerData=   [...tempPassengerData, {id:data.key,... data.val()}];
                // console.log(tempPassengerData);

                if(data.val().usercatergory=="local"){
                    tempLocalPassengerData=   [...tempLocalPassengerData, {id:data.key,... data.val()}];

                }


            });
            this.setState({
                passengerData:tempPassengerData,
                localPassenger:tempLocalPassengerData,


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

    getJournyData = async ()=>{
        //get all journey data

        database.ref('journey').on('value',(snapshot)=>{
            var tempJounryData=[];

            snapshot.forEach(data=>{
              tempJounryData=   [... tempJounryData, {id:data.key,... data.val()}];
                // console.log(tempJounryData);


            });
            this.setState({
                jounryData:tempJounryData,
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

            <Container  >

                <Row className="px-5">

                    <Col sm="3" className="p-3" >
                      <div style={StyledHome.card,StyledHome.color1}>
                        <h5 className="text-center">Total Register User   </h5>
                        <h3 className="text-center">{this.state.passengerData.length}</h3>

                        <IconContext.Provider  value={{size:"2em" }} >
                          <div style={StyledHome.iconAligment}>
                            <FaUserFriends/>
                          </div>
                        </IconContext.Provider>
                      </div>




                    </Col>
                    <Col className="p-3" sm="3">
                      <div  style={StyledHome.card,StyledHome.color2}>
                        <h5 className="text-center">Local User  </h5>
                        <h3 className="text-center">{this.state.localPassenger.length}</h3>


                        <IconContext.Provider value={{size:"2em" }} >
                          <div style={StyledHome.iconAligment}>
                            <FaWalking/>
                          </div>
                        </IconContext.Provider>
                      </div>


                    </Col>
                    <Col className="p-3" sm="3" >
                      <div style={StyledHome.card,StyledHome.color3}>
                        <h5 className="text-center">Foreign User </h5>
                        <h3 className="text-center">{this.state.passengerData.length-this.state.localPassenger.length}</h3>



                        <IconContext.Provider value={{size:"2em" }} >
                          <div style={StyledHome.iconAligment}>
                            <FaGrav/>
                          </div>
                        </IconContext.Provider>
                      </div>

                    </Col>
                    <Col  className="p-3" sm="3" >
                      <div style={StyledHome.card,StyledHome.color4}>
                        <h5 className="text-center">Total Journey</h5>
                        <h3 className="text-center">{this.state.jounryData.length} </h3>

                        <IconContext.Provider value={{size:"2em" }} >
                          <div style={StyledHome.iconAligment}>
                            <FaBus/>
                          </div>
                        </IconContext.Provider>
                      </div>


                    </Col>


             </Row>
              <AdminCharts passeger={this.state.passengerData} localPassenger={this.state.localPassenger} jounry={this.state.jounryData}  />

              <div className="row p-5">
                <Adminsmap></Adminsmap>
              </div>


        </Container>
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
           borderRadius:10,
           height:150,
           color:'white',
           padding:10,

       },

       iconAligment:{
        textAlign: 'center',
       },
       color1:{
        borderRadius:10,
        height:150,
        color:'white',
        padding:10,

        backgroundImage:'linear-gradient(to right top, #ff447d, #ff685c, #ff9934, #ffcc00, #f2fd00)',

       },
       color2:{
        backgroundImage:'linear-gradient(to right top, #5dd831, #4cde53, #39e370, #26e789, #12eba0)',
        borderRadius:10,
        height:150,
        color:'white',
        padding:10,

       },
       color3:{
        backgroundImage:'linear-gradient(to right top, #3172d8, #0095ee, #00b5f4, #00d1ee, #12ebe2)',
        borderRadius:10,
        height:150,
        color:'white',
        padding:10,

       },
       color4:{
        backgroundImage:'linear-gradient(to right top, #1fcf3d, #5cd732, #83de26, #a5e51b, #c5eb12)',
        borderRadius:10,
        height:150,
        color:'white',
        padding:10,

       },




   }

