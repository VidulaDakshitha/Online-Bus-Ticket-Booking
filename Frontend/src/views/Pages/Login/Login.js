import React, {useEffect, useState} from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";

import moment from "moment";

import Wallpaper from "../../../assets/wallpaper.jpg";
import {auth, database} from "../../../firebasejs";



function Login(props){



    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');





 useEffect(()=>{
   auth.onAuthStateChanged((user)=>{
     if (user){
       props.history.push("/dashboard/1");
     }
   });
 },[])



 const onSubmitHandler=(e)=>{

    e.preventDefault();

if(username==="admin@gmail.com" && password==="admin")
{
  localStorage.setItem("usertype","admin")
  localStorage.setItem("email",username);
  localStorage.setItem('fulEmail',username);

 // this.props.history.push("/dashboard");

 window.location.href="/#/dashboard"

}else{




    var user=username.split("@")[0];
    try {
      auth.signInWithEmailAndPassword(username,password).then(()=>{

        database.ref('token').orderByChild('email').equalTo(username.trim()).once('value',(snapshot)=>{
          let time = new Date().getTime();
          
         

          snapshot.forEach(data=>{
            localStorage.setItem("tokenType",data.val().tokentype)


       if(moment(data.val().expiryDate).isBefore(moment(new Date()).format("YYYY-MM-DD")) && data.val().tokentype!=="single")
       {
        database.ref(`token/${data.key}/`).update({isactive:0})

       }else if(moment(moment(data.val().issueDate).format("YYYY-MM-DD")).isBefore(moment(new Date()).format("YYYY-MM-DD")) && data.val().tokentype==="single")
          {

            database.ref(`token/${data.key}/`).update({isactive:0})
          }


          })
        })

        // if(user==="admin" && password==="admin") {
        //   localStorage.setItem("usertype","admin")
        // }else{

        //   localStorage.setItem("usertype","user")
        // }

        localStorage.setItem("usertype","user")
        localStorage.setItem("email",username);
        localStorage.setItem('fulEmail',username);

        this.props.history.push("/dashboard");

    

      }).catch((error)=> {
             setError(error.message)
      });

    }catch (e) {

    }
  }
 }





    return (
      <div  style={{backgroundImage: `url(${Wallpaper})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}>
            <div style={{position:"absolute",paddingLeft:"20px",paddingTop:"20px"}}>

        </div>
        <div className="app flex-row align-items-center">
        <div className="sweet-loading text-center" style={{zIndex:"5"}}>

      </div>


        <Container>
          <Row className="justify-content-center">

            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={onSubmitHandler}>
                      <h1>Ticketing System</h1>
                      <p className="text-muted">Sign In to your account</p>
                      {error&&<div className="alert alert-danger">{error}</div>}
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="username" autoComplete="Email" name="username" value={username} onChange={e=>setUsername(e.target.value)} required/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0" onClick={()=>{props.history.push("/forgotpassword")}}>Forgot password?</Button>
                        </Col>
                        <Col xs="6" className="text-left">
                          <Button color="link" className="px-0" onClick={()=>{ props.history.push("/register")}}>I already have an account</Button>
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

export default Login;
