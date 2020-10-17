import React, { Component } from 'react';
import { Badge, Button, Col, Input, Table } from 'reactstrap';
import {database, firestore} from "../../firebasejs";
/**
 * IT18045840
 * S.D.S.L Dissanayake
 */


export default  class Token extends Component {
    constructor(props) {
    super(props);
    this.state = {
        tokenData: props.tokenData,
        isload:false,
        searchString:""
    }
}

    componentDidMount(){



}



    tokenDeactive=(id,active)=>{
       //Token Activate or deactovate
        if(active==1){

            database.ref('token/'+id).update({isactive:0},(err)=>{
                if (err) {
                    console.log(err);

                    } else {
                        console.log("Jounry Completed");
                   }
            });

            //If Token is deactivate ,Token re-activate form this function
        }else if(active==0){

            database.ref('token/'+id).update({isactive:1},(err)=>{
                if (err) {
                    console.log(err);

                    } else {
                        console.log("Jounry Completed");
                   }
            });


        }




    }

//Token search text handler
    handleChange = (e) => {
        this.setState({ searchString:e.target.value });
      }

//Geneate Token table
    showTokenTable = (tokens)=>{

        return(  tokens.map((token,i)=>{
               return(
                 <tr key={token.id} >
                   <th>{token.email}</th>
                   <td>{token.isactive==0?<Badge color="secondary">InActive</Badge>:<Badge   color="success">Active</Badge> }</td>
                   <td>{token.amount}</td>
                   <td>{new Date( token.issueDate).toDateString()}</td>
                   <td>{token.tokentype}</td>
                   <td>
                       {/* If token is deactivate ,token activate button show */}
                       {token.isactive==1?
                       <Button outline color="danger" onClick={()=>{this.tokenDeactive(token.id,token.isactive)}}>deactivate</Button>:
                       <Button outline color="success" onClick={()=>{this.tokenDeactive(token.id,token.isactive)}}>activate</Button>


                    }
                    </td>
                 </tr>

               )
           })
        )

    }




    render() {



        //Filter data
        var tokenData = this.props.tokenData,
        searchString = this.state.searchString.trim().toLowerCase();
                if (searchString.length > 0) {
                    tokenData = tokenData.filter(function(i) {
                         return (i.email.toLowerCase().match( searchString )||
                                i.tokentype.toLowerCase().match( searchString )||
                                i.id.toLowerCase().match( searchString )||
                                i.amount.toString().match( searchString )
                                 );
                    });
                 }
        return (
          < Col className="p-3 mt-2">
                 <h5>Token Details</h5>

                 <Input placeholder={'Serach Token '}  value={this.state.searchString} onChange={this.handleChange}></Input>
                 <Table size="sm" className="mt-3" responsive>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>IssueDate</th>
                            <th>Tokentype</th>
                            <th>Active</th>

                            </tr>

                        </thead>
                        <tbody>
                        {this.showTokenTable(tokenData)}


                        </tbody>

                 </Table>

          </Col>
        );
    }
}

//Token Style
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
