import React, { Component } from 'react';
import { Col, Table } from 'reactstrap';
import {database, firestore} from "../../firebasejs";


export default class Passenger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passengerData: props.passengerData,
            isload:false
        }


        
    }

    componentDidMount(){

         console.log(this.state.passengerData.length);


    }

    showPassengerTable = (passengers)=>{

     return(  passengers.map((passenger,i)=>{
            return(
              <tr key={i} >
                <th >{passenger.identity}</th>
                <td>{passenger.username}</td>
                <td>{passenger.usercatergory}</td>
                <td>{passenger.tokentype}</td>
              </tr>
      
            )
        })
     )

    }

    deletePassenger =(id)=>{
        database.ref('passenger')

    }

    searchPassenger =()=>{

    }


    render() {
        let d = this.props.passengerData
        return (
            <Col sm={StyledHome.ColumnSize}>
                  <h5>Passnger Details</h5>
                  <p> {this.props.passengerData.length} </p>

                  <Table size="sm" responsive>
                    <thead>
                        <tr>
                            <th>identity</th>
                            <th>username</th>
                            <th>usercatergory</th>
                            <th>tokentype</th>
                            </tr>

                        </thead>
                        <tbody>
                        {this.showPassengerTable(this.props.passengerData)}

                       {/* { d.map(passenger=> 
           
                        <tr key={passenger.id} >
                             <th >{passenger.identity}</th>
                            <td>{passenger.username}</td>
                            <td>{passenger.usercatergory}</td>
                            <td>{passenger.tokentype}</td>
                         </tr>
                       )
      
                          } */}
                            
                        </tbody>


      </Table>
                
                
            </Col>
        );
    }
}

const StyledHome ={
     
    ColumnSize:{

       size: 'auto',
       offset: 1
   
   },
   
   ColumnSizefixd: {
    size: '6',
    offset: 1
   }

}