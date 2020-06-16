import React, { Component } from 'react'
import propTypes, { defaultProps } from '../propTypes/tradeRow'

export default class TradeRow extends Component {
  render () {
    const NOS = isNaN(this.props.numberOfShares) ? this.props.numberOfShares : parseInt(this.props.numberOfShares)
    return (
      <tr>
        <td>{this.props.timeStamp}</td>
        <td>{this.props.stockSymbol}</td>
        <td>{this.props.price}</td>
        <td>{NOS}</td>
      </tr>
    )
  }
}

TradeRow.propTypes = propTypes
TradeRow.defaultProps = defaultProps
