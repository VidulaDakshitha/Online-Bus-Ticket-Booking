import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback } from 'reactstrap';

import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import {auth, database} from "../../../firebasejs";

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
      error:''

    }
  }



  componentDidMount() {
    auth.onAuthStateChanged((user)=>{
      if (user){
      this.props.history.push("/dashboard");
      }
    });
  }



  onChangeHandler=(e)=>{

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

  onSubmitHandler=(e)=>{
e.preventDefault();

const regUsers={
  email:this.state.email,
  password:this.state.password,
  username:this.state.username

}


auth.createUserWithEmailAndPassword(this.state.email,this.state.password)
  .then(()=>{
    var username=this.state.email.split("@")[0];
    database.ref('userDetails').push().set(regUsers).catch(err=>console.log(err.message));
    localStorage.setItem("usertype","user");
    localStorage.setItem("email",this.state.email);
  }).catch(err=>{

      this.setState({
        error:err.message
      })

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
                    <Button color="success" block>Create Account</Button>
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

export default Register;
