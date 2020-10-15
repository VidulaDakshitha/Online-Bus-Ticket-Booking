import React, { Component } from 'react';
import { Col } from 'reactstrap';

export default class Journy extends Component {
    render() {
        return (
            <Col sm={StyledHome.ColumnSizefixd}>
                <h5>Jounry Details</h5>
                
            </Col>
        );
    }
}

const StyledHome ={
     
    ColumnSize:{

       size: 'auto',
       offset: 1
   
   },
   
   ColumnSizefixd: {
    size: '6',
    offset: 1
   }

}