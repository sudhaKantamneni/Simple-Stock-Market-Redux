import { SUBMIT_FORM } from '../constants/action-types'

export const submitForm = values => {
  return {
    type: SUBMIT_FORM,
    values
  }
}
