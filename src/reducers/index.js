import { combineReducers } from 'redux'
import showProductList from './showProductList'
import showProductItem from './showProductItem'
const myReducer = combineReducers({
  showProductItem,
  showProductList
})
export default myReducer;