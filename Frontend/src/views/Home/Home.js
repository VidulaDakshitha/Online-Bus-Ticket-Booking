import React, { Component } from 'react';
import {  Row   } from 'reactstrap';

import AdminHome from './AdminHome';
import CardDetails from './CardDetails';
import LatestTravelDetails from './LatestTravelDetails';




class Home extends Component {
/**
 * IT18045840
 * S.D.S.L Dissanayake
 */


    render() {
        return (

        <Row>
            {localStorage.getItem("usertype")==="user"?(
           <>

                <CardDetails/>
                <LatestTravelDetails/>


            </>

            )

            : (
                <>
                <AdminHome/>

                </>
             )
    }


        </Row>


        );
    }


}

const StyledHome ={
 s1: {
      backgroundColor:'red',

      borderRadius:7

    },
notificationPanal: {
        backgroundColor:'green',

        alignItems: 'center',
        borderRadius:7
    },

     ColumnSize:{

        size: 'auto',
        offset: 1

    },
    imageStyle:{
        width:'100%',
        borderRadius:10

    },
    card:{
        backgroundImage:'linear-gradient(to right top, #02d5f8, #00e6e7, #53f3ca, #98fba7, #daff89)',
        borderRadius:10,
        height:175,
        padding:10,
        margin:5
    }

}







export default Home;
