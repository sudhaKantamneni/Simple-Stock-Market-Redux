import { expect } from 'chai'
import {
    INVALID_STOCK_SYMBOL,
    NUMBER_TOO_SMALL,
    LENGTH_TOO_SHORT
} from '../../src/constants/errorText'

describe('errorText constants', () => {
  it('INVALID_STOCK_SYMBOL should return with correct provided symbol ina formatted string', () => {
    const symbol = 'CAT'
    expect(INVALID_STOCK_SYMBOL(symbol)).to.equal(`CAT is not a valid stock symbol`)
  })
  it('NUMBER_TOO_SMALL should return with correct provided symbol ina formatted string', () => {
    const minValue = 5
    expect(NUMBER_TOO_SMALL(minValue)).to.equal(`Please provide a number greater than or equal to 5`)
  })
  it('NUMBER_TOO_SMALL should return with correct provided symbol ina formatted string', () => {
    const minChars = 5
    expect(LENGTH_TOO_SHORT(minChars)).to.equal(`Length must be equal to or greater than 5 characters`)
  })
})
