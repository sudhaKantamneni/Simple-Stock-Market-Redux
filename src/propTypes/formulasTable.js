import {
  number,
  string,
  arrayOf,
  shape,
  oneOfType
} from 'prop-types'

export const defaultProps = {}

export default {
  formulasTableRows: arrayOf(shape({
    stockSymbol: string,
    dividendYield: oneOfType([number, string]),
    peRatio: oneOfType([number, string]),
    geometricMean: oneOfType([number, string]),
    VWSP: oneOfType([number, string]),
    type: string,
    lastDividend: oneOfType([number, string]),
    fixedDividend: oneOfType([number, string]),
    parValue: number,
    productOfPrices: number,
    numberOfTrades: number,
    pqTotal: oneOfType([number, string]),
    qTotal: oneOfType([number, string])
  }))
}
