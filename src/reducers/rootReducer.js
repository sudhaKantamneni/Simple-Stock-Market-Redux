import { combineReducers } from 'redux'
import newTradeForm from './newTradeForm'
import tradesTable from './tradesTable'
import formulasTable from './formulasTable'

export default combineReducers({
  newTradeForm,
  tradesTable,
  formulasTable
})
