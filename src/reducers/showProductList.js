import * as types from './../constants/ActionTypes'
const initialState = [];
const showProductList = ((state = initialState, action) => {
  var index = -1;
  var { id, product } = action
  switch (action.type) {
    case types.ADD_PRODUCT:
      state.push(action.product)
      return [...state]
    case types.GET_LIST_PRODUCT:
      state = action.products;
      return [...state]
    case types.EDIT_PRODUCT:
      index = findIndex(state, product.id)
      state[index] = product
      return [...state]
    case types.DELETE_PRODUCT:
      index = findIndex(state, id)
      state.splice(index, 1)
      return [...state]
    /*  return state.map((ele) => ele.id = action.product.id ? { ele: action.product } : ele) */
    default: return state
  }
})
const findIndex = (products, id) => {
  let result = -1;
  products.forEach((pro, index) => {
    if (pro.id === id) {
      result = index
    }
  })
  return result;
}
export default showProductList;