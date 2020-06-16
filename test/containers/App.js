import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow, mount, render } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16';
import App from '../../src/containers/App'

configure({ adapter: new Adapter() });

const shallowApp = shallow(<App />)

describe('<App />', () => {
  it('should exist', () => {
    expect(shallowApp.exists()).to.equal(true)
  })
})
