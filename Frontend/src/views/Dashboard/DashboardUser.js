import React, { Component } from 'react';
import { Button, Col, Modal, ModalBody, Row } from 'reactstrap';
import QRcodefile from "../QRcode/QRcode";
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,

} from "reactstrap";


import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {database, firestore} from "../../firebasejs";


import Train from "../../assets/train.jpg";
import Bus from "../../assets/bus.jpg";

import Taxi from "../../assets/taxi.jpg";
import Tuk from "../../assets/tuk.jpg";
import Home from '../Home/Home';

import Travel from "../Travel/Travel";
import AdminTopUp from "../AdminTopUp/AdminTopUp";
import AdminUserHistory from "../AdminUserHistory/AdminUserHistory";

import AdmnReport from '../AdminReport/AdmnReport';

import RelodeTocken from "./RelodeTocken";
import TimeTable from "../AdminReport/TimeTable";

const useStyles =theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
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

  let tempRealTimeDb = [];
class DashboardUser extends Component {

  constructor(props){
    super(props);
    this.state={
        activeTab: new Array(4).fill("1"),
        realTimeDB: [],
        userID: localStorage.getItem("email"),
        large:false

    }
  }


  toggle(tabPane, tab) {
    this.props.history.push(`/dashboard/${tab}`)
    /*const newArray = this.state.activeTab.slice();
    newArray[tabPane] = tab;
    this.setState({
      activeTab: newArray,
    });*/
  }

componentDidMount = async() => {

  console.log("dashboard")

  this.props.history.listen((location, action) => {
      console.log(location.pathname.split('/')[2])
    this.setState({
      activeTab:location.pathname.split('/')[2]
    })
  })

  database.ref('current').orderByChild("userID").equalTo(this.state.userID).on('value',(snapshot)=>{
    tempRealTimeDb=[];
    //console.log(snapshot.numChildren())
    snapshot.forEach(arr=>{

        tempRealTimeDb=[...tempRealTimeDb,{id:arr.key,...arr.val()}]

        console.log("length", tempRealTimeDb.length)
        if(tempRealTimeDb.length > 0){
          console.log("visited")
          this.togglelarge()
          //alert("Journey completed!")
        }
        // tempRealTimeDb.forEach(data=>{
        //   if(data.)
        // })
    });

    this.setState({
        realTimeDB: tempRealTimeDb,

    })
})
}

togglelarge=()=>{

  this.setState({
    large:!this.state.large
  })

}

deleteCurrent = () =>{
  database.ref('current').orderByChild('userID').equalTo(this.state.userID.trim()).once('value',(snapshot)=>{
    snapshot.forEach(data=>{
        database.ref(`current/${data.key}/`).remove()
    })
  })
  this.setState({
    large:false
  })
}



  tabPane() {
    const {pageNumber}=this.state;
    return (
      <>
        <TabPane tabId="1">
          <Home/>
        </TabPane>

        <TabPane tabId="2">
          <Travel />
        </TabPane>

        <TabPane tabId="3">
          <RelodeTocken {...this.props} />
        </TabPane>

        <TabPane tabId="4">
          <div>

 

          <ul class="list-group">
                    <li className="list-group-item">
                      First Top up amount
                    </li>
                    <li className="list-group-item">
                     Add a journey you plan to visit before you get into bus.
                    </li>
                    <li className="list-group-item">
                     Scan the QR code to bus. 
                    </li>
                    <li className="list-group-item">
                     Scan again when you are getting down from bus. 
                    </li>
                    <li className="list-group-item">
                     Your Done. 
                    </li>

                  </ul>

                  <p style={{color:"red"}}><b>Don't scan to QR without making journey. You will be added to penalty</b></p>
          </div>
        </TabPane>

        <TabPane tabId="5">
          {/* <div className="text-center"><img className="img-fluid" src={qr}/></div>*/}
            <QRcodefile/>
        </TabPane>


        <TabPane tabId="6">
          <AdmnReport></AdmnReport>
        </TabPane>

        <TabPane tabId="7">
          <TimeTable/>
        </TabPane>


        <TabPane tabId="8">
          <AdminTopUp />
        </TabPane>

        <TabPane tabId="9">
          <AdminUserHistory />
        </TabPane>

      </>
    );
  }



  render() {

    const {classes} = this.props;
    return (

      <div className="slideshow">

<GridList  className={classes.gridList} cols={2.0} style={{cursor:"pointer"}}>


  <GridListTile key="1"
  onClick={()=>{}}
  style={{borderColor:"red",borderWidth:"medium"}}

  >
    <img src="https://images.unsplash.com/photo-1549118560-5f5ee56cfe55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80" style={{width:"100%"}} alt="image" />

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
    <img src="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80" style={{width:"100%"}} alt="image" />

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
    <img src="https://images.unsplash.com/photo-1485739139909-d0d1783a7196?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" style={{width:"100%"}} alt="image" />

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
    <img src="https://images.unsplash.com/photo-1494094957169-98a78486526e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" style={{width:"100%"}} alt="image" />

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

<Modal isOpen={this.state.large}

className={"modal-lg"+this.props.className}>
  <ModalBody>
    <div className="text-center">
<h3 className="text-center">Successfully Completed Trip</h3>
<br></br>
<Button className="btn-lg btn btn-success" onClick={()=>this.deleteCurrent()}>OK</Button>
</div>
  </ModalBody>
</Modal>

        <Row className="mt-4">
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


{localStorage.getItem("usertype")==="user"?
<>
<NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "2"}
                  onClick={() => {
                    this.toggle(0, "2");
                  }}
                >
                  <b>Journey</b>
                </NavLink>
              </NavItem>
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
                <b> Admin Report</b>
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
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "8"}
                  onClick={() => {
                    this.toggle(0, "8");
                  }}
                >
                <b> Admin Topup</b>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "9"}
                  onClick={() => {
                    this.toggle(0, "9");
                  }}
                >
                <b> Passenger History</b>
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
