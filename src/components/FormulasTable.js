import React, { Component } from 'react'
import propTypes, { defaultProps } from '../propTypes/formulasTable'
import FormulasRow from './FormulasRow'

export default class FormulasTable extends Component {
  render () {
    return (
      <table>
        <tbody>
          <tr>
            <th>Stock Symbol</th>
            <th>Dividend Yield</th>
            <th>P/E Ratio</th>
            <th>Geometric Mean</th>
            <th>Volume Weighted Stock Price</th>
          </tr>
          {
            this.props.formulasTableRows &&
            this.props.formulasTableRows.map((row, index) => <FormulasRow {...row} key={`FormulasRow${index}`} />)
          }
        </tbody>
      </table>
    )
  }

  componentDidMount () {
    this.props.initLoad()
  }
}

FormulasTable.propTypes = propTypes
FormulasTable.defaultProps = defaultProps
