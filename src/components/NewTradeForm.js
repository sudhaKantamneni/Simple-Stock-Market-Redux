import React, { Component } from 'react'
import propTypes, { defaultProps } from '../propTypes/newTradeForm'
import {
  STOCK_SYMBOL_LABEL_TEXT,
  PRICE_LABEL_TEXT,
  NUMBER_OF_SHARES_LABEL_TEXT,
  CHECKBOX_LABEL_TEXT
} from '../constants/newTradeForm'
import { isValidStockSymbol } from '../functions'
import bevData from '../gbceData'
import { INVALID_STOCK_SYMBOL } from '../constants/errorText'

export default class NewTradeForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stockSymbol: this.props.stockSymbol,
      price: this.props.price,
      numberOfShares: this.props.numberOfShares,
      resetOnSubmit: false,
      errors: {
        stockSymbol: false,
        price: false,
        quantity: false
      }
    }

    this.handleStockSymbolChange = this.handleStockSymbolChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleNumberOfSharesChange = this.handleNumberOfSharesChange.bind(this)
    this.handleResetOnSubmitChange = this.handleResetOnSubmitChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleStockSymbolChange (event) {
    const stockSymbol = event.target.value.toUpperCase()
    const getErrors = () => {
      if (stockSymbol.length > 2) {
        if (!isValidStockSymbol(stockSymbol, bevData)) {
          return {
            ...this.state.errors,
            stockSymbol: INVALID_STOCK_SYMBOL(stockSymbol)
          }
        }
      }
      return {
        ...this.state.errors,
        stockSymbol: false
      }
    }

    this.setState({
      stockSymbol,
      errors: getErrors()
    })
  }

  handlePriceChange (event) {
    this.setState({ price: event.target.value })
  }

  handleNumberOfSharesChange (event) {
    this.setState({ numberOfShares: event.target.value })
  }

  handleResetOnSubmitChange (event) {
    this.setState({ resetOnSubmit: !this.state.resetOnSubmit })
  }

  resetForm () {
    this.setState({
      stockSymbol: defaultProps.stockSymbol,
      price: defaultProps.price,
      numberOfShares: defaultProps.numberOfShares,
      errors: {
        stockSymbol: false,
        price: false,
        quantity: false
      }
    })
  }

  handleSubmit (event) {
    if (!isValidStockSymbol(this.state.stockSymbol, bevData)) {
      const errors = {
        ...this.state.errors,
        stockSymbol: INVALID_STOCK_SYMBOL(this.state.stockSymbol)
      }
      this.setState({
        stockSymbol: this.state.stockSymbol,
        errors
      })
    } else {
      const timeStamp = new Date()
      this.props.submitForm({
        stockSymbol: this.state.stockSymbol,
        price: this.state.price,
        numberOfShares: this.state.numberOfShares,
        timeStamp
      })
    }
    this.state.resetOnSubmit && this.resetForm()
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>New Trade</h2>
        <label>
          {STOCK_SYMBOL_LABEL_TEXT}
          <input
            type='text'
            value={this.state.stockSymbol}
            onChange={this.handleStockSymbolChange}
            required
            className={this.state.errors.stockSymbol ? 'err-box' : ''}
          />
        </label>
        <p className='error-text'>{this.state.errors.stockSymbol || '\u00A0'}</p>
        <label>
          {PRICE_LABEL_TEXT}
          <input
            type='number'
            step='any'
            value={this.state.price}
            onChange={this.handlePriceChange}
            min='1'
            required
            className={this.state.errors.price ? 'err-box' : ''}
          />
        </label>
        <p className='error-text'>{this.state.errors.price || '\u00A0'}</p>
        <label>
          {NUMBER_OF_SHARES_LABEL_TEXT}
          <input
            type='number'
            value={this.state.numberOfShares}
            onChange={this.handleNumberOfSharesChange}
            min='1'
            required
            className={this.state.errors.quantity ? 'err-box' : ''}
          />
        </label>
        <p className='error-text'>{this.state.errors.quantity || '\u00A0'}</p>
        <label id='reset-on-submit-checkbox'>
          <input type='checkbox'
            value={this.state.resetOnSubmit}
            onChange={this.handleResetOnSubmitChange}
          />
          {CHECKBOX_LABEL_TEXT}
        </label>
        <button className='submit' type='submit' value='Submit'>Submit</button>
      </form>
    )
  }
}

NewTradeForm.propTypes = propTypes
NewTradeForm.defaultProps = defaultProps
