import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Token from './Token';
import AdminReport from './AdmnReport';
import Passenger from './Passenger';




describe('Token', () => {

    it("renders App component without crashing", () => {
        shallow(<AdminReport />);
      });
    

    const tokenprops=mount(<Token tokenData={[{},{}]}/>);
    it("accepts token props", () => {
      expect(tokenprops.props().tokenData).toEqual([{},{}]);
    });



    const passengerprops=mount(<Passenger tokenData={[{},{}]}/>);
    it("accepts passenger props", () => {
      expect(passengerprops.props().tokenData).toEqual([{},{}]);
    });
  
    

  
    
  
  
  })