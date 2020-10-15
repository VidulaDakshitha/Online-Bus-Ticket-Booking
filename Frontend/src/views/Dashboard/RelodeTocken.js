import React, { useState} from "react";

import {Button, Card, CardBody, Col,  FormGroup, Input, Label} from "reactstrap";
import {database} from "../../firebasejs";

function RelodeTocken(props) {

  const [amount,setAmount]=useState('');
  const [tAmount,setTAmount]=useState('');
  const [success,setSuccess]=useState('');

  useState(()=>{

    database.ref('token').orderByChild('email').equalTo(localStorage.getItem('fulEmail')).on('value',(snapshot)=>{
      snapshot.forEach(data=>{
        setTAmount(data.val().amount)
      })
    })
  },[]);

  const submit =e=>{
    e.preventDefault();
    database.ref('token').orderByChild('email').equalTo(localStorage.getItem('fulEmail')).once('value',(snapshot)=>{
      snapshot.forEach(data=>{
        let newAmount=(Number.parseInt(data.val().amount)+Number.parseInt(amount));
        database.ref(`token/${data.key}/`).update({amount:newAmount});
        setSuccess('Top-up Successfully');
        setTimeout(()=>{
          props.history.push("/dashboard/1");
        },1000)
      })
    })
  }

  return(
    <Card>
      <CardBody>
        <form onSubmit={submit}>
          {success&&<div className="alert alert-success">{success}</div>}

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="date-input">Name of Owner</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" id="fullname" name="fullname" placeholder="Enter Full Name" required/>
            </Col>
          </FormGroup>


          <FormGroup row>
            <Col md="3">
              <Label htmlFor="date-input">Payment Method</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="select" id="method" name="method" required>
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
              <Input type="text" id="fullname" name="fullname" placeholder="xxxx-xxxx-xxxx"  required/>
            </Col>
          </FormGroup>


          <FormGroup row>
            <Col md="3">
              <Label htmlFor="date-input">CVC</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="number" id="cvc" name="cvc" placeholder="3-digit" required/>
            </Col>
          </FormGroup>


          <FormGroup row>
            <Col md="3">
              <Label htmlFor="date-input">Recharge Amount</Label>
            </Col>
            <Col xs="12" md="9">
              <input type="number" id="amount" className="form-control" name="amount"  value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Amount in LKR"  required/>
            </Col>
          </FormGroup>


          <FormGroup row>
            <Col md="3">
              <Label htmlFor="date-input">Available Amount</Label>
            </Col>
            <Col xs="12" md="9">
              <p style={{color:"red"}}> <b> Rs. {tAmount}</b></p>
            </Col>
          </FormGroup>


          <FormGroup row>
            <Col md="3">

            </Col>
            <Col xs="12" md="9">
              <Button style={{borderRadius:"10px"}} className="btn btn-success">Proceed</Button>
            </Col>
          </FormGroup>




        </form>
      </CardBody>
    </Card>
  )
}export default RelodeTocken
