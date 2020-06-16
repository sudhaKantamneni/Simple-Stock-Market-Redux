import {
  number,
  string,
  oneOfType
} from 'prop-types'

export const defaultProps = {
  stockSymbol: 'SYM',
  dividendYield: 0,
  peRatio: 0,
  geometricMean: 0,
  VWSP: 0
}

export default {
  stockSymbol: string,
  dividendYield: oneOfType([number, string]),
  peRatio: oneOfType([number, string]),
  geometricMean: oneOfType([number, string]),
  VWSP: oneOfType([number, string])
}
