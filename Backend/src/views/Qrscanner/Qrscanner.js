import React, { Component } from 'react';
import QrReader from 'react-qr-reader'
import Swal from 'sweetalert2';
import queryString from "query-string";
import {database, firestore} from "../../firebasejs";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import alertify from "alertifyjs/build/alertify";
import successimag from "./Successpage.js";

class Qrscanner extends Component{
    constructor(props){
        super(props);
        this.state={
            result: "",
            empty:[],
            matches: window.matchMedia("(min-width: 1008px)").matches
        }
    }



    componentDidMount() {
      const handler = e => this.setState({matches: e.matches});
      

      localStorage.setItem("item",JSON.stringify(this.state.empty));
    }

handleScan=(data)=>{

  console.log(data)
    if (data) {
        this.setState({
          result: data
        },async()=>{


          if(this.state.result!=="" || this.state.result!==null)
          {
           
            database.ref('journey').orderByChild('userID').equalTo(this.state.result.trim()).once('value',(snapshot)=>{
              snapshot.forEach(data=>{

                if(data.val().status==="Active")
                {

                  if(data.val().started===0)
                  {

                    database.ref(`journey/${data.key}/`).update({
                      
                      started:1
                      })
                      localStorage.setItem("capturedemail",this.state.result);

                      // return(
                      //   <successimag/>
                      // )
                    
                      window.location.href="/#/successpage";

                  }else{

                    database.ref(`journey/${data.key}/`).update({
                      
                      status:"Completed"
                      })

                      window.location.href="/#/endtrip";

                  }

                 


                }else{
let dataemail=this.state.result.split("@")[0];

                  database.ref(`penalty/${dataemail}/`).push().set({

                    userID:this.state.result,
                    date:new Date().toString()

                  })

                  window.location.href="/#/errorpage"
                }
              
                  })
              },
       alert("Successfully scanned")
              ).catch(err=>console.log(err))
            
          }
        })
      }
}

handleError = err => {
    Swal.fire({
        icon:'error',
        title:'Oopss....',
        text:err
      })
  }


    render(){
        return(



<div className="animated fadeIn">


<div style={{backgroundColor:"#244f24",width:"100%",height:"10%"}}><b><p style={{color:"white"}}>Powered by Code4</p></b></div>
<div style={{backgroundColor:"#349c32",width:"100%",height:"20%",textAlign:"center"}}>
                <p style={{color:"white",fontSize:"30px"}}>Inorder to use Ticketing system please scan the QR code</p>
              </div>
            <div className="d-flex justify-content-center">
            <QrReader
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%' }}
            />
           
          </div>
</div>


        );
    }
}
export default Qrscanner;