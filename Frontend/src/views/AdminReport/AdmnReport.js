import React, { Component } from 'react';
import {database, firestore} from "../../firebasejs";
import {Col, Container, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import Token from './Token';
import Passenger from './Passenger';
import Home from "../Home/Home";
import Travel from "../Travel/Travel";
import RelodeTocken from "../Dashboard/RelodeTocken";
import QRcodefile from "../QRcode/QRcode";
import AdminTopUp from "../AdminTopUp/AdminTopUp";
import AdminUserHistory from "../AdminUserHistory/AdminUserHistory";
import Nav from "reactstrap/es/Nav";
import classnames from 'classnames';


export default class AdmnReport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            passengerData:[],
            jounryData:[],
            tokenData:[],
            isload:false,
          activeTab: 1,
        }
    }


        componentDidMount(){
            //Load Token and passenger data
            this.getPassengerData()
            this.getTokeData()


        }

        //Get all passenger data from firbase
        getPassengerData =async ()=>{


            database.ref('passenger').on('value',(snapshot)=>{
                var tempPassengerData=[];
                snapshot.forEach(data=>{
                    tempPassengerData=  [...tempPassengerData,{id:data.key,... data.val()}];


                });
                console.log("get Passenger data");

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

        //Get all Token data form firbase
         getTokeData = async ()=>{

            database.ref('token').on('value',(snapshot)=>{
                var tempTokenData=[];
                snapshot.forEach(data=>{
                    tempTokenData=  [...tempTokenData,{id:data.key,... data.val()}];


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

  toggle = tab => {

      this.setState({
        activeTab: parseInt(tab.target.value)
      })

  }



    render() {
        return (
          <div>
            <div className="row">
              <div className="col-md-4 ml-auto">

                <select name="" id="" className="form-control" onChange={this.toggle}>
                  <option value="1">Token Details</option>
                  <option value="2">Passenger Details</option>
                </select>
              </div>

            </div>
            <Row>

              <div className="col-md-12 mt-2 report">

                {this.state.activeTab===1? <Token tokenData={this.state.tokenData}></Token>: <Passenger passengerData={this.state.passengerData} load={this.state.isload}></Passenger>}




              </div>
            </Row>
          </div>

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

