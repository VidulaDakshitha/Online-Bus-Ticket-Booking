import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import * as BaseService from "../../../BaseService.js";
import Swal from 'sweetalert2'

class ForgotPassword extends Component {

  constructor(props){
    super(props);
    this.state={
      username:""

    }
  }



  onChangeHandler=(e)=>{

    this.setState({
      [e.target.name]:e.target.value
    })

    
   
  }



  onSubmitHandler=(e)=>{
e.preventDefault();

const reset={
  username:this.state.username
}

const url = "/user/reset/";
BaseService.PostServiceWithoutHeader(url, reset)
  .then((res) => {
    if (res.data.success === true) {
      Swal.fire(
        'Good job!',
        'Reset password Email Sent  ',
        'success'
      )
      //window.location.href="/#/login";
    } else {
      alertify.alert("Cannot perform the operation");
    }
  })
  .catch((err) => {
    alertify.alert("Cannot perform the operation");
  });


  }
  
  render() {
    return (

      
      <div className="app flex-row align-items-center">
        <Container>
     

    
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.onSubmitHandler}>
                    <h1>Forgot Password</h1>
                    <p className="text-muted">Add username to reset password</p>
                    
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="username" name="username" onChange={this.onChangeHandler} value={this.state.username}  />
                    </InputGroup>
                    {/* <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" />
                    </InputGroup> */}
                    {/* <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" name="password" value={this.state.password} autoComplete="new-password" valid={this.state.valid1} invalid={this.state.invalid1} onChange={this.onChangeHandler}/>
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
                    </InputGroup> */}
                    <Button color="success" block>submit</Button>
                  </Form>
                </CardBody>
                {/* <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter> */}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ForgotPassword;
