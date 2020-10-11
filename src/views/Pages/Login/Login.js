import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import * as BaseService from "../../../BaseService.js";


import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import Swal from 'sweetalert2'
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";
import Wallpaper from "../../../assets/wallpaper.jpg";

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
    }
  }


  


  onChangeHandler=(e)=>{

    this.setState({
      [e.target.name]:e.target.value
    })

  }

  onSubmitHandler=(e)=>{
    this.setState({
      loading:true
    })
    e.preventDefault();
    const login={
      email:this.state.username,
      password:this.state.password
    }
   
    const url = "/user/varify/";
BaseService.PostServiceWithoutHeader(url, login)
  .then((res) => {
    
    this.setState({
      loading:false
    })

    if (res.data.type === null) {
     
      localStorage.setItem('AccessToken',res.data.Access_Token);
      localStorage.setItem('RefreshToken',res.data.Refresh_Token);
      localStorage.setItem('type',res.data.type);
      
      
    
      alertify.success("Successfully logged in");

window.location.href="/#/onepos/addWorkspace";

    } else {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid User Login!',
        
      })
    }

 

  })
  .catch((err) => {
   
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Invalid Credentials!',
    
  })
  });
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


              
      
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" placeholder="Email" autoComplete="Email" name="username" value={this.state.username} onChange={this.onChangeHandler} required/>
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
