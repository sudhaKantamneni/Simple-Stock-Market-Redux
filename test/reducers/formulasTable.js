import { expect } from 'chai'
import formulasTable, {
  buildRow,
  submitForm,
  initLoad
} from '../../src/reducers/formulasTable'
import { defaultProps } from '../../src/propTypes/formulasTable'
import { SUBMIT_FORM, INIT_LOAD } from '../../src/constants/action-types'
import sinon from 'sinon'
import bevData from '../../src/gbceData'

const emptyState = {}

const populatedValues = {
  stockSymbol: 'CAT',
  price: 2,
  numberOfShares: 4
}

const invalidAction = {
  type: 'NOT_A_REAL_ACTION_TYPE',
  values: {
    a: 'b',
    cat: 'dog'
  }
}

const initLoadAction = {
  type: INIT_LOAD,
  values: populatedValues
}

const submitFormAction = {
  type: SUBMIT_FORM,
  values: populatedValues
}

describe('formulasTable reducer', () => {
  describe(`formulasTable entrypoint`, () => {
    it(`should return provided state when an unhandled action type is provided`, () => {
      expect(formulasTable(emptyState, invalidAction)).to.deep.equal(emptyState)
    })
    it(`should return the correct amount of rows in state when called with ${INIT_LOAD} action type`, () => {
      expect(formulasTable(emptyState, initLoadAction).formulasTableRows.length).to.equal(bevData.length)
    })
    it(`should return the correct state when passed a populated state and values`, () => {
      const populatedState = {
        formulasTableRows: [{
          stockSymbol: 'CAT',
          dividendYield: '-',
          peRatio: '-',
          geometricMean: '-',
          VWSP: '-',
          type: 'Common',
          lastDividend: 4,
          fixedDividend: '',
          parValue: 100,
          productOfPrices: 1,
          numberOfTrades: 0,
          pqTotal: 0,
          qTotal: 0
        }]
      }

      const expectedResult = {
        formulasTableRows: [{
          stockSymbol: 'CAT',
          dividendYield: 2,
          peRatio: 0.5,
          geometricMean: 2,
          VWSP: 2,
          type: 'Common',
          lastDividend: 4,
          fixedDividend: '',
          parValue: 100,
          productOfPrices: 2,
          numberOfTrades: 1,
          pqTotal: 8,
          qTotal: 4
        }]
      }

      expect(formulasTable(populatedState, submitFormAction)).to.deep.equal(expectedResult)
    })
  }) 

  describe(`function buildRow`, () => {
    const commonRow = {
      stockSymbol: 'CAT',
      numberOfTrades: 1,
      type: 'Common',
      lastDividend: 1,
      fixedDividend: 3,
      productOfPrices: 1,
      pqTotal: 1,
      qTotal: 1,
      parValue: 1
    }
    const preferedRow = {
      stockSymbol: 'CAT',
      numberOfTrades: 1,
      type: 'Prefered',
      lastDividend: 1,
      fixedDividend: 2,
      productOfPrices: 1,
      pqTotal: 1,
      qTotal: 1,
      parValue: 1
    }
    const values = {
      price: 1,
      numberOfShares: 1
    }

    it(`should return an object`, () => {
      expect(typeof buildRow(commonRow, values)).to.equal('object')
    })
    it(`should return the correct values when passed a common type trade`, () => {
      const expectedResult = {
        VWSP: 1,
        dividendYield: 1,
        fixedDividend: 3,
        geometricMean: 1,
        lastDividend: 1,
        numberOfTrades: 2,
        parValue: 1,
        peRatio: 1,
        pqTotal: 2,
        productOfPrices: 1,
        qTotal: 2,
        stockSymbol: 'CAT',
        type: "Common"
     }
      expect(buildRow(commonRow, values)).to.deep.equal(expectedResult)
    })
    it(`should return the correct values when passed a Prefered type trade`, () => {
      const expectedResult = {
        VWSP: 1,
        dividendYield: 2,
        fixedDividend: 2,
        geometricMean: 1,
        lastDividend: 1,
        numberOfTrades: 2,
        parValue: 1,
        peRatio: 1,
        pqTotal: 2,
        productOfPrices: 1,
        qTotal: 2,
        stockSymbol: 'CAT',
        type: "Prefered"
     }
      expect(buildRow(preferedRow, values)).to.deep.equal(expectedResult)
    })
  })

  describe(`function submitForm`, () => {
    it('should return state if stockSymbol does not match', () => {
      const state = { formulasTableRows: [{ stockSymbol: 'CAT' }] }
      const values = [{ stockSymbol: 'DOG' }]
      expect(submitForm(state, values)).to.deep.equal(state)
    })
  })

  describe(`function initLoad`, () => {
    it(`should return the correct amount of rows in state when called with ${INIT_LOAD} action type`, () => {
      expect(initLoad(emptyState, populatedValues).formulasTableRows.length).to.equal(bevData.length)
    })
  })
})
