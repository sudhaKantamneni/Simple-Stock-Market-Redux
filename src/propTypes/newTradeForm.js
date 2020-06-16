import {
  func,
  number,
  string
} from 'prop-types'

export const defaultProps = {
  stockSymbol: '',
  price: 0,
  numberOfShares: 0,
  timeStamp: 0
}

export default {
  stockSymbol: string,
  price: number,
  numberOfShares: number,
  timeStamp: number,
  submitForm: func.isRequired
}
