import React from 'react';



function ConfirmEmail(){


    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 rounded py-5 p-3 mx-auto bg-white shadow">
                <h3 className="text-center">Please Verify Your Email</h3>
                <div className="  text-center">Check Your Email {localStorage.getItem('tempEmail')}</div>
          </div>
        </div>

      </div>

    );

}

export default ConfirmEmail;
