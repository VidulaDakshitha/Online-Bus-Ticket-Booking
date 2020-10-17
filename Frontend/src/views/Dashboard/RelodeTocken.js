import React, { useState} from "react";

import {Button, Card, CardBody, Col,  FormGroup, Input, Label} from "reactstrap";
import {database} from "../../firebasejs";
import moment from "moment";

function RelodeTocken(props) {

  const [amount,setAmount]=useState('');
  const [tAmount,setTAmount]=useState('');
  const [success,setSuccess]=useState('');
  const [status,setStatus]=useState('');
  const [type,setType]=useState('');
  const [datevalue,setDatevalue]=useState('');

  useState(()=>{

    database.ref('token').orderByChild('email').equalTo(localStorage.getItem('fulEmail')).on('value',(snapshot)=>{
      snapshot.forEach(data=>{
        setTAmount(data.val().amount)
        setStatus(data.val().isactive)
        setType(data.val().tokentype)


      })
    })

  },[]);

  const submit =e=>{
    e.preventDefault();
    database.ref('token').orderByChild('email').equalTo(localStorage.getItem('fulEmail')).once('value',(snapshot)=>{
      snapshot.forEach(data=>{

        let newAmount=(Number.parseInt(data.val().amount)+Number.parseInt(amount));

if(data.val().isactive===0 && (data.val().tokentype==="monthly"||data.val().tokentype==="temporary"))
{
  const issuedate=new Date().toString();
  const expire=moment(moment().add(30,'d').toDate()).format("YYYY-MM-DD");

 database.ref(`token/${data.key}/`).update({amount:newAmount,isactive:1,issueDate:issuedate,expiryDate:expire});
 setSuccess('Top-up Successfully');
}else if(data.val().isactive===1 && (data.val().tokentype==="monthly"||data.val().tokentype==="temporary"))
{

  const issuedate=new Date().toString();
  const expire=moment(moment(data.val().expiryDate).add(30,'d')).format("YYYY-MM-DD");


 database.ref(`token/${data.key}/`).update({amount:newAmount,isactive:1,issueDate:issuedate,expiryDate:expire});
 setSuccess('Top-up Successfully');


}else if(data.val().isactive===0 && data.val().tokentype==="single")
{

  const issuedate=new Date(datevalue).toString();


 database.ref(`token/${data.key}/`).update({amount:newAmount,isactive:1,issueDate:issuedate});
 setSuccess('Top-up Successfully');

}else if(data.val().isactive===1 && data.val().tokentype==="single")
{
  const issuedate=new Date().toString();


 database.ref(`token/${data.key}/`).update({amount:newAmount,isactive:1,issueDate:issuedate});
 setSuccess('Top-up Successfully');

}
       // let newAmount=(Number.parseInt(data.val().amount)+Number.parseInt(amount));
        // database.ref(`token/${data.key}/`).update({amount:newAmount});
        // setSuccess('Top-up Successfully');
        // setTimeout(()=>{
        //   props.history.push("/dashboard/1");
        // },1000)



      })
    })
  }

  return(
    <Card>
      <CardBody>
      {(status.toString()==="1" && parseFloat(tAmount)<100 && (type==="monthly"||type==="temporary")) || ((status.toString()==="1"||status.toString()==="0") && type==="single") ||(status.toString()==="0" && (type==="monthly"||type==="temporary")) ?

        <form onSubmit={submit}>
          {success&&<div className="alert alert-success">{success}</div>}


{status.toString()==="0" && (type==="single"||type==="temporary")?
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="date-input">Date to be used</Label>
            </Col>
            <Col xs="12" md="9">
              <Input value={datevalue}  type="date" id="datevalue" name="datevalue" onChange={e=>setDatevalue(e.target.value)}  />
            </Col>
          </FormGroup>
:type!=="monthly"?
<h3 className="text-center">The date the topup can be used {moment(moment()).format("YYYY-MM-DD")}</h3>:<></>}

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="date-input">Name of Owner</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" id="fullname" name="fullname" placeholder="Enter Full Name" />
            </Col>
          </FormGroup>


          <FormGroup row>
            <Col md="3">
              <Label htmlFor="date-input">Payment Method</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="select" id="method" name="method" >
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
              <Input type="text" id="fullname" name="fullname" placeholder="xxxx-xxxx-xxxx"  />
            </Col>
          </FormGroup>


          <FormGroup row>
            <Col md="3">
              <Label htmlFor="date-input">CVC</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="number" id="cvc" name="cvc" placeholder="3-digit" />
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
              <Button   className="btn btn-success primary-button">Proceed</Button>
            </Col>
          </FormGroup>



        </form>
        :<div>

          <h4>Please use your money to travel and top up once over</h4>
        <h5>Currently You Have  <b> Rs. {tAmount}</b></h5>
          </div>}
      </CardBody>
    </Card>
  )
}export default RelodeTocken
