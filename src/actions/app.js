import { INIT_LOAD } from '../constants/action-types'

export const initLoad = values => {
  return {
    type: INIT_LOAD,
    values
  }
}
