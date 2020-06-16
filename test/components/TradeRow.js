import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow, mount } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16';
import TradeRow from '../../src/components/TradeRow'

configure({ adapter: new Adapter() });

const expectedTestProps = {
    timeStamp: '1559130369756',
    stockSymbol: 'CAT',
    price: '3.124',
    numberOfShares: '12'
}

const shallowTradeRow = shallow(<TradeRow />)
const shallowTableRow = shallowTradeRow.find('tr')
const shallowTableCell = shallowTradeRow.find('td')

const shallowTradeRowExpected = shallow(<TradeRow {...expectedTestProps} />)
const shallowTableCellExpected = shallowTradeRowExpected.find('td')

describe('<TradeRow />', () => {
  it('should exist', () => {
    expect(shallowTradeRow.exists()).to.equal(true)
  })
  it('should have a <tr />', () => {
    expect(shallowTableRow.exists()).to.equal(true)
  })
  it(`should have a <td />`, () => {
    expect(shallowTableCell.exists()).to.equal(true)
  })
  it(`should have 4 <td />'s`, () => {
    expect(shallowTableCell).to.have.length(4)
  })

  describe(`expected row props`, () => {
    it(`should have timeStamp of ${expectedTestProps.timeStamp}, when passed expected props`, () => {
        expect(shallowTableCellExpected.at(0).text()).to.equal(expectedTestProps.timeStamp)
    })
    it(`should have stockSymbol of ${expectedTestProps.stockSymbol}, when passed expected props`, () => {
        expect(shallowTableCellExpected.at(1).text()).to.equal(expectedTestProps.stockSymbol)
    })
    it(`should have price of ${expectedTestProps.price}, when passed expected props`, () => {
        expect(shallowTableCellExpected.at(2).text()).to.equal(expectedTestProps.price)
    })
    it(`should have numberOfShares of ${expectedTestProps.numberOfShares}, when passed expected props`, () => {
        expect(shallowTableCellExpected.at(3).text()).to.equal(expectedTestProps.numberOfShares)
    })
  })  
})
