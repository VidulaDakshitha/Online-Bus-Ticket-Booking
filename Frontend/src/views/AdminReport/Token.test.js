import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Token from './Token';
import jest from 'jest';




describe('Token', () => {

  it("renders App component without crashing", () => {
    shallow(<Token />);
  });

  // it('update search key',()=>{

  //   const handleChange=jest.fn();
  //   const wrapper =shallow(<Token/> );  

  //   const searchbox= wrapper.find(<Input name="searchbar"onChange={handleChange}/>);
  //   const event = {
  //     preventDefault() {},
  //     target: { value: 'the-value' }
  //   };

  //   searchbox.simulate('change',event);

  //   const status=wrapper.state.searchString;

  //   expect(handleChange).equal('the-value')


    
  // })

  


})