import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Token from './Token';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });



describe('Token', () => {


it('should be contain search name',()=>{
    let wrapper = shallow(<Token/>);
    const h5=wrapper.find('h5');
    const result = h5.text();

    expect(result.text()).toBe("Token Details");
})


it('include six th tags',()=>{
    let wrapper =shallow(<Token/>);
    expect(wrapper.find("th").length).toEqual(6);
});




it("responds to name change", done => {
    const handleChangeSpy = sinon.spy(Token.prototype, "handleChange");
    const event = {target: {name: "searchbar", value: "spam"}};
    const wrap = mount(
      <Token />
    );
    wrap.ref('searchbar').simulate('change', event);
    expect(handleChangeSpy.calledOnce).to.equal(true);
  })

})