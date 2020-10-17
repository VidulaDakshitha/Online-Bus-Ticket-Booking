import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {AppFooter} from "@coreui/react";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <AppFooter>
      <React.Fragment>

        <div className="container footer">
          <div className="row align-items-center p-3">
            <div className="col-md-8">
              <div className="d-flex justify-content-between footer-links">
                <a className="p-3 d-block text-white p-2" href="">T & C</a>
                <a className="p-3 d-block text-white p-2" href="">Privacy Policy</a>
                <a className="p-3 d-block text-white p-2" href="">Software Service Agreement</a>
                <a className="p-3 d-block text-white p-2" href="">Careers</a>
                <a className="p-3 d-block text-white p-2" href="">Contact Us</a>
              </div>
            </div>

            <div className="col-md-3">
              <div className="d-flex justify-content-between">
                <a href="#" className="fa fa-facebook" style={{width:'40px'}}></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-linkedin"></a>
                <a href="#" className="fa fa-instagram"></a>
              </div>
            </div>

          </div>
        </div>


        <span className="ml-auto text-white">Powered by <a href="https://github.com/sathiralamal/Public-Transport-Ticketing-System">Code4</a></span>
      </React.Fragment>
      </AppFooter>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
