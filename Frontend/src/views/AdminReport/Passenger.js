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
            passengerData: [],
            isload:false,
            searchString:""

        }


        
    }

    componentDidMount(){

        this.getPassengerData()
    }


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
//Passenger search text handler
    handleChange = (e) => {
        this.setState({ searchString:e.target.value });
      }


      

//Generate Passeger table
    showPassengerTable = ()=>{

     return(  this.state.passengerData.map((passenger,i)=>{
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
        // database.ref('passenger')

    }

    searchPassenger =(event)=>{

        let searchString= event.target.value.trim().toLowerCase();
        if(searchString.length>0){
            this.setState({
                passengerData:this.state.passengerData.filter(element=>{
                    if(!(element.identity==null||element.username==null||element.usercatergory==null|| element.tokentype==null) ){

                        console.log(element.identity);
                        return(
                            element.identity.toLowerCase().match(searchString )||
                            element.username.toLowerCase().match(searchString )||
                            element.usercatergory.toLowerCase().match(searchString )||
                            element.tokentype.toString().match(searchString )
    
    
                        )

                    }


                   
                })
            })
        }else{
            this.getPassengerData()
        }


    }


    render() {

        //Filter Data 
        // let passegerData =   this.props.passengerData,
        // searchString = this.state.searchString.trim().toLowerCase();
        // if (searchString.length > 0 && passegerData.length>0) {
        //     passegerData = passegerData.filter(function(i) {
        //          return (i.identity.toLowerCase().match(searchString )||
        //                 i.username.toLowerCase().match(searchString )||
        //                 i.usercatergory.toLowerCase().match(searchString )||
        //                 i.tokentype.toString().match(searchString )
        //                  );
        //     });
        //  }


        return (
            <Col sm={StyledHome.ColumnSize} style={StyledHome.colStyle}>
                  <h5>Passnger Details</h5>
                  <Input placeholder={'Serach Passenger '}   onChange={this.searchPassenger}></Input>   

                  <Table size="sm" responsive>
                    <thead>
                        <tr>
                            <th>identity</th>
                            <th>username</th>
                            <th>usertype</th>
                            <th>tokentype</th>
                            </tr>

                        </thead>
                        <tbody>
                        {this.showPassengerTable()}

                                                 
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