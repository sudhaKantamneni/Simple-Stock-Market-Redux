import { expect } from 'chai'
import { SUBMIT_FORM } from '../../src/constants/action-types'
import { submitForm } from '../../src/actions/newTradeForm' 

describe('action submitForm', () => {
  it('should return an object', () => {
    expect(typeof submitForm()).to.equal('object')
  })
  it(`should contain an action type equal to ${SUBMIT_FORM}`, () => {
    expect(submitForm()).to.deep.include({type: SUBMIT_FORM})
  })
  it('should contain the values passed', () => {
    const testValues = 'Hello World'
    expect(submitForm(testValues)).to.deep.include({values: testValues})
  })
  it('should return an object of the correct shape', () => {
    const testValues = 'Hello World'
    const expectedValues = {
        type: SUBMIT_FORM,
        values: testValues
    }
    expect(submitForm(testValues)).to.deep.equal(expectedValues)
  })
})