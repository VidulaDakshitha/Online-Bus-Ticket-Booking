import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback } from 'reactstrap';
import queryString from 'query-string';
import Swal from 'sweetalert2'
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import * as BaseService from "../../../BaseService.js";
class ResetPassword extends Component {

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

    }
  }


  componentDidMount=()=>{
    
      const values = queryString.parse(this.props.location.search)

      if(values.token===undefined||values.user_id===undefined)
      {
   
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Unable to reset password. Please contact system administrator or check your email inbox for password reset link!',
            
          })
        window.location.href="/#/login";
      }else{

        this.setState({
          token:values.token,
          userId:values.user_id
        })
      }
      
    
    
  }

  onChangeHandler=(e)=>{

    this.setState({
      [e.target.name]:e.target.value
    })

    if(e.target.value.length<7)
    {
      console.log("visited")
      this.setState(
        {
          valid1: false,
          invalid1: true,
        }
      );

    }else{
      console.log("visited 2")
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
    // console.log(this.state.malidi);
  
  }

  onSubmitHandler=(e)=>{
e.preventDefault();

const regUsers={
  id:parseInt(this.state.userId),
  password:this.state.password,
  token:this.state.token
}

const url = "/user/update/";
BaseService.PostServiceWithoutHeader(url, regUsers)
  .then((res) => {
    if (res.data.success === true) {
        Swal.fire(
            'Good job!',
            'successfuly changed password',
            'success'
          )
      window.location.href="/#/login";
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
                    <h1>Reset Password</h1>
                    <p className="text-muted">provide the new password</p>
                    
                 
                    <InputGroup className="mb-3">
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
                    </InputGroup>
                    <Button color="success" block>Reset Password</Button>
                  </Form>
                </CardBody>
                
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ResetPassword;
