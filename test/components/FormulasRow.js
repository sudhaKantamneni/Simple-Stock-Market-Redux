import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow, mount } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16';
import FormulasRow from '../../src/components/FormulasRow'

configure({ adapter: new Adapter() });

const expectedTestProps = {
    stockSymbol: 'CAT',
    dividendYield: '3.124',
    peRatio: '0.357',
    geometricMean: '5.2',
    VWSP: '5.34'
}

const initialTestProps = {
    stockSymbol: '-',
    dividendYield: '-',
    peRatio: '-',
    geometricMean: '-',
    VWSP: '-'
}

const boundaryTestProps = {
    stockSymbol: 'CAT',
    dividendYield: '3.124656543654654',
    peRatio: '0.35713464565727',
    geometricMean: '5.215435154315',
    VWSP: '5.34543535657171'
}

const shallowFormulasRow = shallow(<FormulasRow />)
const shallowTableRow = shallowFormulasRow.find('tr')
const shallowTableCell = shallowFormulasRow.find('td')

const shallowFormulasRowInitial = shallow(<FormulasRow {...initialTestProps} />)
const shallowTableCellInitial = shallowFormulasRowInitial.find('td')

const shallowFormulasRowExpected = shallow(<FormulasRow {...expectedTestProps} />)
const shallowTableCellExpected = shallowFormulasRowExpected.find('td')

const shallowFormulasRowBoundary = shallow(<FormulasRow {...boundaryTestProps} />)
const shallowTableCellBoundary = shallowFormulasRowBoundary.find('td')

describe('<FormulasRow />', () => {
  it('should exist', () => {
    expect(shallowFormulasRow.exists()).to.equal(true)
  })
  it('should have a <tr />', () => {
    expect(shallowTableRow.exists()).to.equal(true)
  })
  it(`should have a <td />`, () => {
    expect(shallowTableCell.exists()).to.equal(true)
  })
  it(`should have 5 <td />'s`, () => {
    expect(shallowTableCell).to.have.length(5)
  })

  describe(`initial row props`, () => {
    it(`should have stockSymbol of ${initialTestProps.stockSymbol}, when passed initial props`, () => {
        expect(shallowTableCellInitial.at(0).text()).to.equal(initialTestProps.stockSymbol)
    })
    it(`should have dividendYield of ${initialTestProps.dividendYield}, when passed initial props`, () => {
        expect(shallowTableCellInitial.at(1).text()).to.equal(initialTestProps.dividendYield)
    })
    it(`should have peRatio of ${initialTestProps.peRatio}, when passed initial props`, () => {
        expect(shallowTableCellInitial.at(2).text()).to.equal(initialTestProps.peRatio)
    })
    it(`should have geometricMean of ${initialTestProps.geometricMean}, when passed initial props`, () => {
        expect(shallowTableCellInitial.at(3).text()).to.equal(initialTestProps.geometricMean)
    })
    it(`should have VWSP of ${initialTestProps.VWSP}, when passed initial props`, () => {
        expect(shallowTableCellInitial.at(4).text()).to.equal(initialTestProps.VWSP)
    })
  })

  describe(`expected row props`, () => {
    it(`should have stockSymbol of ${expectedTestProps.stockSymbol}, when passed expected props`, () => {
        expect(shallowTableCellExpected.at(0).text()).to.equal(expectedTestProps.stockSymbol)
    })
    it(`should have dividendYield of ${expectedTestProps.dividendYield}, when passed expected props`, () => {
        expect(shallowTableCellExpected.at(1).text()).to.equal(expectedTestProps.dividendYield)
    })
    it(`should have peRatio of ${expectedTestProps.peRatio}, when passed expected props`, () => {
        expect(shallowTableCellExpected.at(2).text()).to.equal(expectedTestProps.peRatio)
    })
    it(`should have geometricMean of ${expectedTestProps.geometricMean}, when passed expected props`, () => {
        expect(shallowTableCellExpected.at(3).text()).to.equal(expectedTestProps.geometricMean)
    })
    it(`should have VWSP of ${expectedTestProps.VWSP}, when passed expected props`, () => {
        expect(shallowTableCellExpected.at(4).text()).to.equal(expectedTestProps.VWSP)
    })
  })

  describe(`boundary row props`, () => {
    it(`should have stockSymbol of ${boundaryTestProps.stockSymbol}, when passed boundary props`, () => {
        expect(shallowTableCellBoundary.at(0).text()).to.equal(boundaryTestProps.stockSymbol)
    })
    it(`should have trimmed dividendYield when passed boundary props`, () => {
        expect(shallowTableCellBoundary.at(1).text()).to.equal('3.1246')
    })
    it(`should have trimmed peRatio when passed boundary props`, () => {
        expect(shallowTableCellBoundary.at(2).text()).to.equal('0.3571')
    })
    it(`should have trimmed geometricMean when passed boundary props`, () => {
        expect(shallowTableCellBoundary.at(3).text()).to.equal('5.2154')
    })
    it(`should have trimmed VWSP when passed boundary props`, () => {
        expect(shallowTableCellBoundary.at(4).text()).to.equal('5.3454')
    })
  })
  
})
