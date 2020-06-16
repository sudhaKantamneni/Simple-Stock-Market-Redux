import { SUBMIT_FORM, INIT_LOAD } from '../constants/action-types'
import { defaultProps } from '../propTypes/formulasTable'
import { CommonDividendYield, PreferedDividendYield, PERatio, GeometricMean, VolumeWeightedStockPrice } from '../functions'
import bevData from '../gbceData'

const initialState = defaultProps

export const buildRow = (row, values) => {
  const newNumberOfTrades = row.numberOfTrades + 1
  const dividendYield = row.type === 'Common'
    ? CommonDividendYield(values.price, row.lastDividend)
    : PreferedDividendYield(values.price, row.fixedDividend, row.parValue)
  const peRatio = PERatio(values.price, row.lastDividend)
  const geometricMean = GeometricMean(row.productOfPrices, values.price, newNumberOfTrades)
  const VWSP = VolumeWeightedStockPrice(values.price, values.numberOfShares, row.pqTotal, row.qTotal)
  const newProductOfPrices = row.productOfPrices * values.price

  return {
    stockSymbol: row.stockSymbol,
    dividendYield,
    peRatio,
    geometricMean,
    VWSP: VWSP.VWSP,
    type: row.type,
    lastDividend: row.lastDividend,
    fixedDividend: row.fixedDividend,
    parValue: row.parValue,
    productOfPrices: newProductOfPrices,
    numberOfTrades: newNumberOfTrades,
    pqTotal: VWSP.newPQTotal,
    qTotal: VWSP.newQTotal
  }
}

export const submitForm = (state, values) => {
  const newArr = state.formulasTableRows.map(row => {
    return row.stockSymbol === values.stockSymbol
      ? buildRow(row, values)
      : row
  })

  return {
    ...state,
    formulasTableRows: newArr
  }
}

export const initLoad = (state, values) => {
  const initData = bevData.map(bev => {
    return {
      stockSymbol: bev.stockSymbol,
      dividendYield: '-',
      peRatio: '-',
      geometricMean: '-',
      VWSP: '-',
      type: bev.type,
      lastDividend: bev.lastDividend,
      fixedDividend: bev.fixedDividend,
      parValue: bev.parValue,
      productOfPrices: 1,
      numberOfTrades: 0,
      pqTotal: 0,
      qTotal: 0
    }
  })

  return {
    ...state,
    formulasTableRows: initData
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return submitForm(state, action.values)
    case INIT_LOAD:
      return initLoad(state, action.values)
    default:
      return state
  }
}
