import React, { Component } from 'react';

import Swal from 'sweetalert2';
import queryString from "query-string";
import {database, firestore} from "../../firebasejs";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import alertify from "alertifyjs/build/alertify";

import Penalty from "../../assets/penalty.png";

class Penaltypage extends Component{
    constructor(props){
        super(props);
        this.state={
            result: "",
            empty:[],
           
        }
    }



    componentDidMount() {

        setTimeout(() => {
            window.location.href="/"  
          }, 2500);

    }




    render(){
        return(



<div className="animated fadeIn">

<div className="text-center" style={{paddingTop:"100px"}}>
<img className="img-fluid" src={Penalty} alt="" />

</div>

<div className="text-center"  style={{paddingTop:"50px"}} >
<h3 >User ID:- {localStorage.getItem("capturedemail")}</h3>
<h4>Your under penalty for misusing</h4>
</div>

</div>


        );
    }
}
export default Penaltypage;