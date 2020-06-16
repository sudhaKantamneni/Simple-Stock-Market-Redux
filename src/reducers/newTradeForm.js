import { SUBMIT_FORM } from '../constants/action-types'
import { defaultProps } from '../propTypes/newTradeForm'

const initialState = defaultProps

export const submitForm = (state, values) => {
  return {
    ...state,
    stockSymbol: values.stockSymbol,
    price: values.price,
    numberOfShares: values.numberOfShares,
    timeStamp: values.timeStamp
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return submitForm(state, action.values)
    default:
      return state
  }
}
