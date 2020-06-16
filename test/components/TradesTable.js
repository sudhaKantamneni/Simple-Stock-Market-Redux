import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow, mount } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16';
import TradesTable from '../../src/components/TradesTable'

configure({ adapter: new Adapter() });

const shallowTradesTable = shallow(<TradesTable />)
const shallowTable = shallowTradesTable.find('table')
const shallowTableRows = shallowTradesTable.find('tr')

describe('<TradesTable />', () => {
  it('should exist', () => {
    expect(shallowTradesTable.exists()).to.equal(true)
  })
  it(`should have a table`, () => {
    expect(shallowTable.exists()).to.equal(true)
  })
  it(`should have a tablerow`, () => {
    expect(shallowTableRows.exists()).to.equal(true)
  })
})
