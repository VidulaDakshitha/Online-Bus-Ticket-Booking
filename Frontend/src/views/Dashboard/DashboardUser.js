import React, { Component } from 'react';
import { Button, Card, CardBody,CardHeader, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback } from 'reactstrap';

import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    FormGroup,
    Label,
    Table,
    CardTitle,
    CardText
    
  } from "reactstrap";


import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import qr from "../../assets/qr.PNG";

import Train from "../../assets/train.jpg";
import Bus from "../../assets/bus.jpg";

import Taxi from "../../assets/taxi.jpg";
import Tuk from "../../assets/tuk.jpg";
import Home from '../Home/Home';

import Travel from "../Travel/Travel";
import AdminTopUp from "../AdminTopUp/AdminTopUp";
import AdminUserHistory from "../AdminUserHistory/AdminUserHistory";

const useStyles =theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: "white",
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%)',
    },
  
    inline: {
      display: 'inline',
      color:"green"
    },
    cardstyle:{
      maxWidth: 345,
      alignItems: 'center'
    },
    root1: {
      width: '100%',
   
      backgroundColor: theme.palette.background.paper,
    },
  });
class DashboardUser extends Component {

  constructor(props){
    super(props);
    this.state={
        activeTab: new Array(4).fill("1"),

    }
  }


  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice();
    newArray[tabPane] = tab;
    this.setState({
      activeTab: newArray,
    });
  }




  tabPane() {
    const {pageNumber}=this.state;
    return (
      <>
        <TabPane tabId="1">
          {
               <Home/>
          }
        </TabPane>
        <TabPane tabId="2">

          {
          <div>
            <AdminUserHistory />
          </div>
          }
        </TabPane>
        <TabPane tabId="3">

            {
                <Card>
                    <CardBody>
                <Form>


                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="date-input">Name of Owner</Label>
                  </Col>
                  <Col xs="12" md="9">
                                 <Input
                                    type="select"
                                    id="method"
                                    name="method"
                                   
                                   
                                    onChange={this.changeHandler}
                                    required
                                  >
                                <option value="">Select Payment Method</option>
                                  <option value="2">Card</option>
                                  <option value="3">Bank</option>
                                  </Input>
                  </Col>
                </FormGroup>

                   
                  

                            <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="date-input">Name of Owner</Label>
                  </Col>
                  <Col xs="12" md="9">
                                 <Input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    placeholder="Enter Full Name"
                                    value={this.state.fullname}
                                    onChange={this.changeHandler}
                                    required
                                  />
                  </Col>
                </FormGroup>


                
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="date-input">Card Number</Label>
                  </Col>
                  <Col xs="12" md="9">
                                 <Input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    placeholder="xxxx-xxxx-xxxx"
                                    value={this.state.fullname}
                                    onChange={this.changeHandler}
                                    required
                                  />
                  </Col>
                </FormGroup>


                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="date-input">CVC</Label>
                  </Col>
                  <Col xs="12" md="9">
                                 <Input
                                    type="number"
                                    id="cvc"
                                    name="cvc"
                                    placeholder="3-digit"
                                    value={this.state.fullname}
                                    onChange={this.changeHandler}
                                    required
                                  />
                  </Col>
                </FormGroup>


                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="date-input">Recharge Amount</Label>
                  </Col>
                  <Col xs="12" md="9">
                                 <Input
                                    type="text"
                                    id="cvc"
                                    name="cvc"
                                    placeholder="Amount in LKR"
                                    value={this.state.fullname}
                                    onChange={this.changeHandler}
                                    required
                                  />
                  </Col>
                </FormGroup>


                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="date-input">Available Amount</Label>
                  </Col>
                  <Col xs="12" md="9">
                               <p style={{color:"red"}}> <b> Rs. 305,000.00</b></p>
                  </Col>
                </FormGroup>


                <FormGroup row>
                  <Col md="3">
                   
                  </Col>
                  <Col xs="12" md="9">
                  <Button style={{borderRadius:"10px"}} className="btn btn-success">Proceed</Button>
                  </Col>
                </FormGroup>




                            </Form>
                            </CardBody>
                            </Card>
            }
            </TabPane>

            <TabPane tabId="4">

            {
                <div>This is help</div>
            }
            </TabPane>

            <TabPane tabId="5">

            {
              <div className="text-center"><img className="img-fluid" src={qr}/></div>
            }
            </TabPane>
            <TabPane tabId="6">

            {
              <div>This is reports</div>
            }
            </TabPane>
            <TabPane tabId="7">

            {
              <div>This is timetable</div>
            }
            </TabPane>
         
      </>
    );
  }


  
  render() {

    const {classes} = this.props;
    return (

      <div>

<GridList className={classes.gridList} cols={2.0} style={{cursor:"pointer"}}> 


  <GridListTile key="1"
  onClick={()=>{}}
  style={{borderColor:"red",borderWidth:"medium"}}
 
  >
    <img src={Train} style={{width:"100%"}} alt="image" />
    
    <GridListTileBar
    
      title="Train"
      classes={{
        root: classes.titleBar,
        title: classes.title,
      }}
      actionIcon={
        <IconButton aria-label={`star ${"hello"}`}
        >
          <StarBorderIcon className={classes.title} />
        </IconButton>
      }
    
    />
  </GridListTile>
  
  <GridListTile key="2"
  onClick={()=>{}}
  style={{borderColor:"red",borderWidth:"medium"}}
 
  >
    <img src={Bus} style={{width:"100%"}} alt="image" />
    
    <GridListTileBar
    
      title="Bus"
      classes={{
        root: classes.titleBar,
        title: classes.title,
      }}
      actionIcon={
        <IconButton aria-label={`star ${"hello"}`}
        >
          <StarBorderIcon className={classes.title} />
        </IconButton>
      }
    
    />
  </GridListTile>

  <GridListTile key="3"
  onClick={()=>{}}
  style={{borderColor:"red",borderWidth:"medium"}}
 
  >
    <img src={Taxi} style={{width:"100%"}} alt="image" />
    
    <GridListTileBar
    
      title="Taxi"
      classes={{
        root: classes.titleBar,
        title: classes.title,
      }}
      actionIcon={
        <IconButton aria-label={`star ${"Taxi"}`}
        >
          <StarBorderIcon className={classes.title} />
        </IconButton>
      }
    
    />
  </GridListTile>

  <GridListTile key="4"
  onClick={()=>{}}
  style={{borderColor:"red",borderWidth:"medium"}}
 
  >
    <img src={Tuk} style={{width:"100%"}} alt="image" />
    
    <GridListTileBar
    
      title="Tuk Tuk"
      classes={{
        root: classes.titleBar,
        title: classes.title,
      }}
      actionIcon={
        <IconButton aria-label={`star ${"Taxi"}`}
        >
          <StarBorderIcon className={classes.title} />
        </IconButton>
      }
    
    />
  </GridListTile>

</GridList>





<Row>
          <Col>
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "1"}
                  onClick={() => {
                    this.toggle(0, "1");
                  }}
                >
                  <b>Home</b>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "2"}
                  onClick={() => {
                    this.toggle(0, "2");
                  }}
                >
                  <b>Travel</b>
                </NavLink>
              </NavItem>

{localStorage.getItem("usertype")==="user"?
<>

              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "3"}
                  onClick={() => {
                    this.toggle(0, "3");
                  }}
                >
                 <b> Reload Token</b>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "4"}
                  onClick={() => {
                    this.toggle(0, "4");
                  }}
                >
                <b> Help</b>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "5"}
                  onClick={() => {
                    this.toggle(0, "5");
                  }}
                >
                <b> QR</b>
                </NavLink>
              </NavItem>
        </>
:<></>}





{localStorage.getItem("usertype")==="admin"?
<>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "6"}
                  onClick={() => {
                    this.toggle(0, "6");
                  }}
                >
                <b> Reports</b>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "7"}
                  onClick={() => {
                    this.toggle(0, "7");
                  }}
                >
                <b> TimeTable</b>
                </NavLink>
              </NavItem>
              </>
:<></>}

            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
        </Row>





      </div>
     
    );
  }
}

export default withStyles(useStyles)(DashboardUser);
