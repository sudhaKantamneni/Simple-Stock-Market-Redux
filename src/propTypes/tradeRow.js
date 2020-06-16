import {
  number,
  string,
  oneOfType
} from 'prop-types'

export const defaultProps = {
  stockSymbol: 'SYM',
  price: 0,
  numberOfShares: 0,
  timeStamp: '0'
}

export default {
  stockSymbol: string,
  price: oneOfType([number, string]),
  numberOfShares: oneOfType([number, string]),
  timeStamp: oneOfType([number, string])
}
