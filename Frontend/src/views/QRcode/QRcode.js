import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback,Modal,ModalHeader,ModalBody,ModalFooter,FormGroup,Label } from 'reactstrap';

import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import alertify from "alertifyjs/build/alertify";
import {auth, database} from "../../firebasejs";
import moment from "moment";

import QRCode from "qrcode.react";

class QRcodefile extends Component {

  constructor(props){
    super(props);
    this.state={
     
    }
  }






  onChangeHandler=(e)=>{

    this.setState({[e.target.name]:e.target.value})



  }



  render() {
    return (


      <div className="text-center">


<QRCode value={localStorage.getItem("email")} style={{width:"250px",height:"250px"}} />
    
      </div>
    );
  }
}

export default QRcodefile;
