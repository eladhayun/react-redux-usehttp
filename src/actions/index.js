// Action Types
export const Actions = {
  // App Actions
  LOCATION_CHANGED: '@@router/LOCATION_CHANGE',
  FETCH_REJECTED: 'FETCH_REJECTED',
}

// Action Creator
const action = (type, payload) => ({
  type,
  payload,
})

export default action
