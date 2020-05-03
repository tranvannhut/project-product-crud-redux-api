import * as types from './../constants/ActionTypes'
let product = {}
const showProductItem = ((state = product, action) => {
  switch (action.type) {
    case types.SHOW_PRODUCT:
      return action.product
    default: return state
  }
})
export default showProductItem;