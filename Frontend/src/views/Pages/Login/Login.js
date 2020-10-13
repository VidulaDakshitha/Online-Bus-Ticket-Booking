import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";
import Wallpaper from "../../../assets/wallpaper.jpg";
import {auth, database} from "../../../firebasejs";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  margin-top: -13px;
	margin-left: -13px;
  left: 50%;
  top: 50%;
`;

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      username:"",
      password:"",
      loading:false,
      paneltype:"",
      date: new Date(),
      error:''
    }
  }





  onChangeHandler=(e)=>{

    this.setState({
      [e.target.name]:e.target.value
    })

  }

  componentDidMount() {
    auth.onAuthStateChanged((user)=>{
      if (user){
        this.props.history.push("/dashboard");
      }
    });
  }


  onSubmitHandler=(e)=>{

    e.preventDefault();


    var username=this.state.username.split("@")[0];
    try {
      auth.signInWithEmailAndPassword(this.state.username,this.state.password).then(()=>{

              localStorage.setItem("email",this.state.username);
              this.props.history.push("/dashboard");

              if(this.state.username==="admin" && this.state.password==="admin") {
                localStorage.setItem("usertype","admin")

              }else{
                localStorage.setItem("usertype","user")
              }
            }).catch((error)=> {
              this.setState({
                error:error.message
              });
            });







    }catch (e) {

    }





  }




  render() {
    return (
      <div  style={{backgroundImage: `url(${Wallpaper})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}>
            <div style={{position:"absolute",paddingLeft:"20px",paddingTop:"20px"}}>

        </div>
      <div className="app flex-row align-items-center">









               <div className="sweet-loading text-center" style={{zIndex:"5"}}>
        <HashLoader
          css={override}
          size={75}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>


        <Container>




          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmitHandler}>
                      <h1>Ticketing System</h1>
                      <p className="text-muted">Sign In to your account</p>

                      {this.state.error&&<div className="alert alert-danger">{this.state.error}</div>}


                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="username" autoComplete="Email" name="username" value={this.state.username} onChange={this.onChangeHandler} required/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="password" value={this.state.password} onChange={this.onChangeHandler} required/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0" onClick={()=>{window.location.href="#/forgotpassword"}}>Forgot password?</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0" onClick={()=>{ this.props.history.push("/register");}}>Register</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>

              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
      </div>

    );
  }
}

export default Login;
