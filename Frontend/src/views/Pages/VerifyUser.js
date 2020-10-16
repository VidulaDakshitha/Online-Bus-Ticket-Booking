import React, {useEffect, useState} from "react";
import {auth} from "../../firebasejs";

function VerifyUser(props) {

  const [err,setErr]=useState('');
  const [success,setSuccess]=useState('');
  var email = window.localStorage.getItem('tempEmail');
  var password = window.localStorage.getItem('tempPass');


  useEffect(()=>{

    console.log(window.location)
    if (auth.isSignInWithEmailLink(window.location.href)){

      if (!email) {
        email = window.prompt('Please provide your Email for confirmation');
      }

      if (!password) {
        password = window.prompt('Please provide your Password for confirmation');
      }

      auth.createUserWithEmailAndPassword(email, password)
        .then(function(result) {
          setSuccess('Email Verification Successful');
          window.localStorage.removeItem('tempEmail');
          setInterval(()=>{
            props.history.push("/dashboard/1");
          },2000)

        })
        .catch(function(error) {
          setErr(error.message);
          console.log(error)
        });
    }
  },[email])

  return  <div className="container">
    <div className="row">
      <div className="col-md-6 mt-5 rounded py-5 p-3 mx-auto bg-white shadow">
        {err&&<div className="alert-danger alert">{err}</div>}
        {success&&<div className="alert-success alert">{success}</div>}
      </div>
    </div>

  </div>
}export default VerifyUser;
