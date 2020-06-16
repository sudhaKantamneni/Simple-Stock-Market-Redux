import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16';
import NewTradeForm from '../../src/components/NewTradeForm'
import { defaultProps } from '../../src/propTypes/newTradeForm'
import {
  STOCK_SYMBOL_LABEL_TEXT,
  PRICE_LABEL_TEXT,
  NUMBER_OF_SHARES_LABEL_TEXT,
  CHECKBOX_LABEL_TEXT
} from '../../src/constants/newTradeForm'

configure({ adapter: new Adapter() });

const shallowNewTradeForm = shallow(<NewTradeForm />)
const shallowForm = shallowNewTradeForm.find('form')
const shallowLabels = shallowNewTradeForm.find('label')
const shallowInputs = shallowNewTradeForm.find('input')
const shallowButtons = shallowNewTradeForm.find('button')

describe('<NewTradeForm />', () => {
  it('should exist', () => {
    expect(shallowNewTradeForm.exists()).to.equal(true)
  })
  it('should have a form', () => {
    expect(shallowForm.exists()).to.equal(true)
  })

  describe('Labels', () => {
    it('should have a label', () => {
      expect(shallowLabels.exists()).to.equal(true)
    })
    it('should have 4 labels', () => {
      expect(shallowLabels).to.have.length(4)
    })

    describe('First label', () => {
      it(`first label should have text "${STOCK_SYMBOL_LABEL_TEXT}"`, () => {
        expect(shallowLabels.at(0).text()).to.have.equal(STOCK_SYMBOL_LABEL_TEXT)
      })
      it('should contain an input', () => {
        expect(shallowLabels.at(0).find('label').exists()).to.equal(true)
      })
    })

    describe('Second label', () => {
      it(`should have text "${PRICE_LABEL_TEXT}"`, () => {
        expect(shallowLabels.at(1).text()).to.have.equal(PRICE_LABEL_TEXT)
      })
      it('should contain an input', () => {
        expect(shallowLabels.at(1).find('label').exists()).to.equal(true)
      })
    })

    describe('Third label', () => {
      it(`should have text "${NUMBER_OF_SHARES_LABEL_TEXT}"`, () => {
        expect(shallowLabels.at(2).text()).to.have.equal(NUMBER_OF_SHARES_LABEL_TEXT)
      })
      it('should contain an input', () => {
        expect(shallowLabels.at(2).find('label').exists()).to.equal(true)
      })
    })

    describe('Fourth label', () => {
      it(`should have text "${CHECKBOX_LABEL_TEXT}"`, () => {
        expect(shallowLabels.at(3).text()).to.have.equal(CHECKBOX_LABEL_TEXT)
      })
      it('should contain an input', () => {
        expect(shallowLabels.at(3).find('label').exists()).to.equal(true)
      })
    })
  })

  describe('Inputs', () => {
    it('should have an input', () => {
      expect(shallowInputs.exists()).to.equal(true)
    })
    it('should have 4 inputs', () => {
      expect(shallowInputs).to.have.length(4)
    })
  })

  describe('Button', () => {
    it('should have a button', () => {
      expect(shallowButtons.exists()).to.equal(true)
    })
    it('should have 1 button', () => {
      expect(shallowButtons).to.have.length(1)
    })
  })

})
