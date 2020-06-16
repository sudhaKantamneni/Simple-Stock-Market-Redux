import { expect } from 'chai'
import { INIT_LOAD } from '../../src/constants/action-types'
import { initLoad } from '../../src/actions/app' 

describe('action initLoad', () => {
  it('should return an object', () => {
    expect(typeof initLoad()).to.equal('object')
  })
  it(`should contain an action type equal to ${INIT_LOAD}`, () => {
    expect(initLoad()).to.deep.include({type: INIT_LOAD})
  })
  it('should contain the values passed', () => {
    const testValues = 'Hello World'
    expect(initLoad(testValues)).to.deep.include({values: testValues})
  })
  it('should return an object of the correct shape', () => {
    const testValues = 'Hello World'
    const expectedValues = {
        type: INIT_LOAD,
        values: testValues
    }
    expect(initLoad(testValues)).to.deep.equal(expectedValues)
  })
})