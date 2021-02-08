import { Actions } from '../actions'

const initialState = {}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_REJECTED:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default appReducer
