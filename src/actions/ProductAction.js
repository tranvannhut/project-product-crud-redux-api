import * as types from './../constants/ActionTypes'

export const actFetchData = (products) => ({
  type: types.GET_LIST_PRODUCT,
  products
})
export const addProduct = (product) => ({
  type: types.ADD_PRODUCT,
  product
})
export const editProduct = (product) => ({
  type: types.EDIT_PRODUCT,
  product
})

export const showProduct = (product) => ({
  type: types.SHOW_PRODUCT,
  product
})
export const deleteProduct = (id) => ({
  type: types.DELETE_PRODUCT,
  id
})