import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitForm } from '../actions/newTradeForm'
import { initLoad } from '../actions/app'
import NewTradeForm from '../components/NewTradeForm'
import TradesTable from '../components/TradesTable'
import FormulasTable from '../components/FormulasTable'

class App extends Component {
  render () {
    return (
      <div>
        <title>Super Simple Stock Market</title>
        <div id='container'>
          <h1 id='page-header'>Super Simple Stock Market</h1>
          <div id='new-trade-form' className='tile'><NewTradeForm {...this.props} /></div>
          <div id='formulas-table' className='tile'><FormulasTable {...this.props} /></div>
          <div id='trades-table' className='tile'><TradesTable {...this.props} /></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tradesTableRows: state.tradesTable.tradesTableRows,
    formulasTableRows: state.formulasTable.formulasTableRows
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitForm: values => {
      dispatch(submitForm(values))
    },
    initLoad: values => {
      dispatch(initLoad(values))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
