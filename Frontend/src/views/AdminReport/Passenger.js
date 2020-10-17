import React, { Component } from 'react';
import { Col, Input, Table } from 'reactstrap';
import {database, firestore} from "../../firebasejs";
/**
 * IT18045840
 * S.D.S.L Dissanayake
 */


export default class Passenger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passengerData: props.passengerData,
            isload:false,
            searchString:""

        }



    }

    componentDidMount(){


    }
//Passenger search text handler
    handleChange = (e) => {
        this.setState({ searchString:e.target.value });
      }

//Generate Passeger table
    showPassengerTable = (passengers)=>{

     return(  passengers.map((passenger,i)=>{
            return(
              <tr key={i} >
                <th className="py-2">{passenger.identity}</th>
                <td className="py-2">{passenger.username}</td>
                <td className="py-2">{passenger.usercatergory}</td>
                <td className="py-2">{passenger.tokentype}</td>
              </tr>

            )
        })
     )

    }

    deletePassenger =(id)=>{
        // database.ref('passenger')

    }

    searchPassenger =()=>{

    }


    render() {

        //Filter Data
        var passegerData = this.props.passengerData,
        searchString = this.state.searchString.trim().toLowerCase();
        if (searchString.length > 0) {
            passegerData = passegerData.filter(function(i) {
                 return (i.identity.toLowerCase().match( searchString )||
                        i.username.toLowerCase().match( searchString )||
                        i.usercatergory.toLowerCase().match( searchString )||
                        i.tokentype.toString().match( searchString )
                         );
            });
         }


        return (
            < Col className="p-3 mt-2">
                  <h5>Passnger Details</h5>
                  <Input placeholder={'Serach Passenger '}  value={this.state.searchString} onChange={this.handleChange}></Input>

              <Table size="sm" className="mt-3" responsive>
                <thead>
                        <tr>
                            <th>identity</th>
                            <th>username</th>
                            <th>usertype</th>
                            <th>tokentype</th>
                            </tr>

                        </thead>
                        <tbody>
                        {this.showPassengerTable(passegerData)}


                        </tbody>

                 </Table>


            </Col>
        );
    }
}

//Passenger Token
const StyledHome ={

    ColumnSize:{

       size: 'auto',
       offset: 1

   },

   ColumnSizefixd: {
    size: '6',
    offset: 1
   },
   colStyle:{
    padding:12,
    borderRadius:7,
    backgroundColor:"#DCEAF5"
}

}
