import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16';
import FormulasTable from '../../src/components/FormulasTable'
import sinon from 'sinon'

configure({ adapter: new Adapter() });

const spy = sinon.spy();

const testProps = {
    initLoad: spy
}

const shallowFormulasTable = shallow(<FormulasTable {...testProps} />)
const shallowTable = shallowFormulasTable.find('table')
const shallowTableRows = shallowFormulasTable.find('tr')

describe('<FormulasTable />', () => {
  it('should exist', () => {
    expect(shallowFormulasTable.exists()).to.equal(true)
  })
  it(`should have a table`, () => {
    expect(shallowTable.exists()).to.equal(true)
  })
  it(`should have a tablerow`, () => {
    expect(shallowTableRows.exists()).to.equal(true)
  })
  it(`should call initLoad function after inital render`, () => {
      expect(spy.called).to.be.true
  })
})
