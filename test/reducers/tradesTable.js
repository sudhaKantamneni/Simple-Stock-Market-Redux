import { expect } from 'chai'
import tradesTable, { submitForm } from '../../src/reducers/tradesTable'
import { defaultProps } from '../../src/propTypes/tradesTable'
import { SUBMIT_FORM } from '../../src/constants/action-types'

const row = {
  stockSymbol: 'CAT',
  price: 5,
  numberOfShares: 5,
  timeStamp: "1970/0/1 0:0:53"
}

const testState = {
  tradesTableRows: [row]
}

const invalidAction = {
  type: 'NOT_A_REAL_ACTION_TYPE',
  values: {
    a: 'b',
    cat: 'dog'
  }
}

const validAction = {
  type: SUBMIT_FORM,
  values: {
    stockSymbol: 'CAT',
    price: 7,
    numberOfShares: 1,
    timeStamp: 12345
  }
}

describe('tradesTable reducer', () => {
  describe(`tradesTable entrypoint`, () => {
    it(`should return provided state when an unhandled action type is provided`, () => {
      expect(tradesTable(testState, invalidAction)).to.deep.equal(testState)
    })
    it(`should return a correctly modified state when provided`, () => {
      const expectedResult = {
        tradesTableRows: [
          row,
          {stockSymbol: 'CAT',
          price: 7,
          numberOfShares: 1,
          timeStamp: "1970/0/1 0:0:12"}
        ]

      }
      expect(tradesTable(testState, validAction)).to.deep.equal(expectedResult)
    })
  })
  describe(`function submitForm`, () => {
    it('should return an object', () => {
      expect(typeof submitForm(testState, row)).to.equal('object')
    })
    it(`should return the row when state === default props`, () => {
      const expectedResult = {
        tradesTableRows: [
          {
            stockSymbol: 'CAT',
            price: 7,
            numberOfShares: 1,
            timeStamp: '1970/0/1 0:0:12'
          }
        ]
      }
      expect(submitForm(defaultProps, validAction.values)).to.deep.equal(expectedResult)
    })
  })  
})
