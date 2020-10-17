import React, { Component } from 'react';

import {  UncontrolledDropdown, DropdownItem, DropdownMenu, Nav, Dropdown, DropdownToggle} from 'reactstrap';
import PropTypes from 'prop-types';
import "./Style.scss";
import {  AppNavbarBrand } from '@coreui/react';
import logo from '../../assets/logo2.png'
import imgavatar from "../../assets/avatar1.png";
import {auth} from "../../firebasejs";


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};


class DefaultHeader extends Component {

  constructor(props) {
    super(props);
    this.state={
      show:false
    }

  }

  logout=()=>{
    auth.signOut().then(()=>{
      localStorage.clear();
      window.location.href="/"
    }).catch(err=>{
      console.log(err)
    });
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;


    return (
      <div className="d-flex justify-content-between bg-white px-4">
        {/* <AppSidebarToggler className="d-lg-none" display="md" mobile /> */}

          <AppNavbarBrand style={{paddingbottom:200}} full={{ src: logo, width: 100, height: 45, alt: 'CoreUI Logo' }}/>



        {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> */}




          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={imgavatar}  className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
             <DropdownMenu right>
               <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>

               <DropdownItem >
                 <i className="fa fa-shield"></i>
                 {localStorage.getItem("usertype")}
               </DropdownItem>
              <DropdownItem onClick={this.logout}>
                <i className="fa fa-lock"></i>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>


      </div>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
