import React, { Component } from 'react'
import propTypes, { defaultProps } from '../propTypes/formulasRow'
import { trimNumber as trim } from '../functions'

export default class FormulasRow extends Component {
  render () {
    const DY = this.props.dividendYield
    const PER = this.props.peRatio
    const GEO = this.props.geometricMean
    const VWSP = this.props.VWSP

    return (
      <tr>
        <td>{this.props.stockSymbol}</td>
        <td>{DY === '-' ? DY : trim(DY)}</td>
        <td>{PER === '-' ? PER : trim(PER)}</td>
        <td>{GEO === '-' ? GEO : trim(GEO)}</td>
        <td>{VWSP === '-' ? VWSP : trim(VWSP)}</td>
      </tr>
    )
  }
}

FormulasRow.propTypes = propTypes
FormulasRow.defaultProps = defaultProps
