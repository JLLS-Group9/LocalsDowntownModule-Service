import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/components/App.jsx';
import Votes from '../client/components/Votes.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<App/>', () => {
  it('contains Votes component', () => {
    let wrapper = shallow(<App />); // mount/render/shallow when applicable
    expect(wrapper.find(Votes).exists()).to.equal(true);
  });


});


