import { expect } from 'chai'
import newTradeForm, { submitForm } from '../../src/reducers/newTradeForm'
import { defaultProps } from '../../src/propTypes/newTradeForm'
import { SUBMIT_FORM } from '../../src/constants/action-types'

const populatedState = {
  stockSymbol: 'abc',
  price: 123,
  numberOfShares: 10
}
const values = {
  stockSymbol: 'a',
  price: 1,
  numberOfShares: 2,
  timeStamp: 54321
}

const invalidAction = {
  type: 'NOT_A_REAL_ACTION_TYPE',
  values
}
const validAction = {
  type: SUBMIT_FORM,
  values
}

describe('newTradeForm reducer', () => {
  describe(`newTradeForm entrypoint`, () => {
    it(`should return provided state when an unhandled action type is provided`, () => {
      expect(newTradeForm(populatedState, invalidAction)).to.deep.equal(populatedState)
    })
    it(`should return a correctly modified state when provided `, () => {
      expect(newTradeForm(populatedState, validAction)).to.deep.equal(values)
    })
  })
  describe(`function submitForm`, () => {
    it('should return an object', () => {
      expect(typeof submitForm(defaultProps, values)).to.equal('object')
    })
    it('should return the object passed in with default state provided', () => {
      expect(submitForm(defaultProps, values)).to.deep.equal(values)
    })
    it('should return the object passed in with populated state provided', () => {
      expect(submitForm(populatedState, values)).to.deep.equal(values)
    })
  })  
})
