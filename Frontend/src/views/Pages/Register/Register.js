import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback,Modal,ModalHeader,ModalBody,ModalFooter,FormGroup,Label } from 'reactstrap';

import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import alertify from "alertifyjs/build/alertify";
import {auth, database} from "../../../firebasejs";
import moment from "moment";
class Register extends Component {

  constructor(props){
    super(props);
    this.state={
      token:"",
      userId:"",
      password:"",
      confirmPass:"",
      valid:false,
      invalid:false,
      valid1:false,
      invalid1:false,
      email:'',
      username:'',
      error:'',
      usercatergory:"",
      idtype:"",
      identity:"",
      tokentype:"",
      identitytype:"Enter Nic",
      large:false
    }
  }



  componentDidMount() {
    auth.onAuthStateChanged((user)=>{
      if (user){
      this.props.history.push("/dashboard/1");
      }
    });
  }



  onChangeHandler=(e)=>{

    this.setState({[e.target.name]:e.target.value})



  }




onPasswordChange=(e)=>{

  this.setState({[e.target.name]:e.target.value})

    if(e.target.value.length<7)
    {

      this.setState(
        {
          valid1: false,
          invalid1: true,
        }
      );

    }else{

      this.setState(
        {
          invalid1: false,
          valid1: true,
        }
      );

    }



}
  HandlepasswordConfirm=(e)=>{

    if (e.target.value === this.state.password) {
      this.setState(
        {
          valid: true,
          invalid: false,
        }
      );
    } else {
      this.setState(
        {
          invalid: true,
          valid: false,
        }
      );
    }


  }






  oncatergoryselect=(e)=>{

this.setState({
  [e.target.name]:e.target.value
})

if(e.target.value==="foreign")
{

  this.setState({
    idtype:"passport",
    identitytype:"Enter passport Number"
  })
document.getElementById("idtype").value="nic"
}else{
  this.setState({
    idtype:"nic",
    identitytype:"Enter NIC"
  })
  document.getElementById("idtype").value="passport"
}

  }

  onSubmitHandler=(e)=>{
e.preventDefault();

let regUsers=""

let tokendata="";


if(this.state.usercatergory==="foreign")
{
  regUsers={
    email:this.state.email,
    password:this.state.password,
    username:this.state.username,
    usercatergory:this.state.usercatergory,
    idtype:this.state.idtype,
    identity:this.state.identity,
    tokentype:"temporary"

  }


  tokendata={
    tokentype:"temporary",
    email:this.state.email,
    issueDate:new Date().toString(),
    expiryDate:moment(moment().add(30,'d').toDate()).format("YYYY-MM-DD"),
    amount:200,
    isactive:1
  }


}else if(this.state.usercatergory==="local")
{
  regUsers={
    email:this.state.email,
    password:this.state.password,
    username:this.state.username,
    usercatergory:this.state.usercatergory,
    idtype:this.state.idtype,
    identity:this.state.identity,
    tokentype:this.state.tokentype

  }

  if(this.state.tokentype==="monthly")
  {

    tokendata={
      tokentype:this.state.tokentype,
      email:this.state.email,
      issueDate:new Date().toString(),
      expiryDate:moment(moment().add(30,'d').toDate()).format("YYYY-MM-DD"),
      amount:1000,
      isactive:1
    }

  }else if(this.state.tokentype==="single")
  {
    tokendata={
      tokentype:this.state.tokentype,
      email:this.state.email,
      issueDate:new Date().toString(),
      expiryDate:"",
      amount:200,
      isactive:1
    }
  }



}



auth.createUserWithEmailAndPassword(this.state.email,this.state.password)
  .then(()=>{
    var username=this.state.email.split("@")[0];
    database.ref('passenger').push().set(regUsers).catch(err=>console.log(err.message));
    database.ref('token').push().set(tokendata).catch(err=>console.log(err.message));
    localStorage.setItem("usertype","user");
    localStorage.setItem("email",this.state.email);



  }).catch(err=>{

      this.setState({
        error:err.message
      })

});
  }


  paymentmodelfunction=()=> {
    this.setState({
      large: !this.state.large,
    });
  }

  modelopen=()=>{

    if(this.state.email!=="" || this.state.password!==""||this.state.tokentype!=="")
    {
      this.paymentmodelfunction();
    }else{
      alertify.alert("please fill out all fields")
    }
  }

  render() {
    return (


      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">

                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    {this.state.error&&<div className="alert alert-danger">{this.state.error}</div>}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" name="username" vlue={this.state.username} onChange={this.onChangeHandler}   autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" name="email" autoComplete="email" value={this.state.email} onChange={this.onChangeHandler} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" name="password" value={this.state.password} autoComplete="new-password" valid={this.state.valid1} invalid={this.state.invalid1} onChange={this.onPasswordChange}/>
                      <FormFeedback>Password length should be more than 7</FormFeedback>
                    </InputGroup>




                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" name="confirmPass" autoComplete="new-password" valid={this.state.valid} invalid={this.state.invalid} onChange={this.HandlepasswordConfirm}/>
                      <FormFeedback>Passwords doesn't match</FormFeedback>
                    </InputGroup>

                    <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
        <Input type="select" name="usercatergory" id="usercatergory" onChange={this.oncatergoryselect}>
         <option value="foreign">Foreigner</option>
         <option value="local">Local</option>
        </Input>
      </InputGroup>

      <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user-female"></i>
                        </InputGroupText>
                      </InputGroupAddon>
        <Input type="select" name="idtype" id="idtype" value={this.state.idtype} onChange={this.onChangeHandler} disabled>
         <option value="nic">NIC</option>
         <option value="passport">Passport</option>
        </Input>
      </InputGroup>


      <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText> <i className="icon-bag"></i></InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder={this.state.identitytype} name="identity" id="identity"  value={this.state.identity} onChange={this.onChangeHandler} />
                    </InputGroup>


{this.state.usercatergory==="local"?
                    <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
        <Input type="select" name="tokentype" id="tokentype" onChange={this.onChangeHandler}>
        <option value="">Select token</option>
         <option value="single">Single</option>
         <option value="monthly">Monthly</option>

        </Input>
      </InputGroup>
:<></>}


                    <Button color="success" onClick={()=>this.modelopen()} block>Create Account</Button>

                </CardBody>

              </Card>
            </Col>
          </Row>
        </Container>



        <Modal
            isOpen={this.state.large}
            toggle={this.toggleLarge}
            className={"modal-lg " + this.props.className}
          >
              <Form onSubmit={this.onSubmitHandler}>
              <ModalHeader toggle={this.toggleLarge}><i className="fa fa-plus-circle fa-lg mt-4" style={{paddingRight:"8px"}}></i>Add Payment</ModalHeader>
              <ModalBody >




              <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="date-input">Name of Owner</Label>
                  </Col>
                  <Col xs="12" md="9">
                                 <Input
                                    type="select"
                                    id="method"
                                    name="method"


                                    onChange={this.changeHandler}
                                    required
                                  >
                                <option value="">Select Payment Method</option>
                                  <option value="2">Card</option>
                                  <option value="3">Bank</option>
                                  </Input>
                  </Col>
                </FormGroup>



                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="date-input">Card Number</Label>
                  </Col>
                  <Col xs="12" md="9">
                                 <Input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    placeholder="xxxx-xxxx-xxxx"
                                    value={this.state.fullname}
                                    onChange={this.changeHandler}
                                    required
                                  />
                  </Col>
                </FormGroup>


                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="date-input">CVC</Label>
                  </Col>
                  <Col xs="12" md="9">
                                 <Input
                                    type="number"
                                    id="cvc"
                                    name="cvc"
                                    placeholder="3-digit"
                                    value={this.state.fullname}
                                    onChange={this.changeHandler}
                                    required
                                  />
                  </Col>
                </FormGroup>



                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="date-input">Payable Amount</Label>
                  </Col>
                  <Col xs="12" md="9">
                    {this.state.tokentype==="sinle"||this.state.tokentype==="temporary"?
                               <p style={{color:"red"}}> <b> Rs. 200.00</b></p>
                               :<p style={{color:"red"}}> <b> Rs. 1000.00</b></p>}
                  </Col>
                </FormGroup>



              </ModalBody>
              <ModalFooter>
                <Button id="submitbtn" type="submit" color="success">
                  Save
                </Button>
                <Button color="secondary" onClick={()=>this.setState({large:false})}>
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          </Modal>
      </div>
    );
  }
}

export default Register;
