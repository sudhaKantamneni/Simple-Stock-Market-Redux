export const PreferedDividendYield = (price, fixedDividend, parValue) => {
  return (price && fixedDividend && parValue)
    ? (fixedDividend * parValue) / price
    : false
}

export const CommonDividendYield = (price, lastDividend) => {
  return (price && lastDividend)
    ? lastDividend / price
    : false
}

export const PERatio = (price, dividend) => {
  return (price && dividend)
    ? price / dividend === Infinity
      ? 'N/A'
      : price / dividend
    : false
}

export const GeometricMean = (productOfPrices, price, numberOfTrades) => {
  const value = price > 0 ? productOfPrices * price : productOfPrices
  return (numberOfTrades > 0)
    ? Math.pow(value, 1 / numberOfTrades)
    : false
}

export const VolumeWeightedStockPrice = (PRICE = 0, QUANTITY = 0, PQTOTAL = 0, QTOTAL = 0) => {
  const price = Number(PRICE)
  const quantity = Number(QUANTITY)
  const pqTotal = Number(PQTOTAL)
  const qTotal = Number(QTOTAL)

  const newPQTotal = pqTotal + (price * quantity)
  const newQTotal = quantity + qTotal

  return {
    newPQTotal,
    newQTotal,
    VWSP: newQTotal === 0 ? 0 : newPQTotal / newQTotal
  }
}

export const formatDate = timestamp => {
  const TS = new Date(timestamp)
  if (Date.parse(TS) > 0) {
    const year = TS.getUTCFullYear()
    const month = TS.getUTCMonth()
    const day = TS.getUTCDate()
    const hour = TS.getUTCHours()
    const min = TS.getUTCMinutes()
    const sec = TS.getUTCSeconds()

    return `${year}/${month}/${day} ${hour}:${min}:${sec}`
  } else return false
}

export const trimNumber = number => {
  const isNumber = !isNaN(number) && number !== Infinity
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + 4 + '})?')
  return isNumber
    ? Number(number.toString().match(re)[0])
    : number === 'N/A'
      ? number
      : false
}

export const isValidStockSymbol = (stockSymbol, bevData) =>
  bevData.filter(stock => stock.stockSymbol === stockSymbol).length > 0
