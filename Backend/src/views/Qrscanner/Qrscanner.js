import React, { Component } from 'react';
import QrReader from 'react-qr-reader'
import Swal from 'sweetalert2';
import queryString from "query-string";


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
      window.matchMedia("(min-width: 1008px)").addListener(handler);

      localStorage.setItem("item",JSON.stringify(this.state.empty));
    }

handleScan=(data)=>{

    // if (data) {
    //     this.setState({
    //       result: data
    //     },async()=>{


    //       if(this.state.result!=="")
    //       {
    //         let value3=this.state.result.split("?");
    //         const values=queryString.parse(value3[1]);

      
    //       if(value3[1].includes("sub_domain"))
    //       {

    //        await localStorage.setItem("sub_domain",values.sub_domain);
    //         window.location.href="#/menu"
           
    //       }else{
    //         Swal.fire({
    //           icon:'error',
    //           title:'Oopss....',
    //           text:"please provide valid QR code for digital menu"
    //         })

    //       }
            
    //       }
    //     })
    //   }
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



<div>


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