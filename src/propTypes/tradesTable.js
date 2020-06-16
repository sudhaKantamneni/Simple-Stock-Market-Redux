import {
  number,
  string,
  arrayOf,
  shape,
  oneOfType
} from 'prop-types'

export const defaultProps = {
  tradesTableRows: [
    {
      stockSymbol: '-',
      price: '-',
      numberOfShares: '-',
      timeStamp: '-'
    }
  ]
}

export default {
  tradesTableRows: arrayOf(shape({
    stockSymbol: oneOfType([number, string]),
    price: oneOfType([number, string]),
    numberOfShares: oneOfType([number, string]),
    timeStamp: oneOfType([number, string])
  }))
}
