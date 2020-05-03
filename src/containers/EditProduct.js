import { connect } from 'react-redux'
import ProductActionPage from '../pages/ProductActionPage'
import apiCaller from '../utils/apiCaller'
import { editProduct, showProduct } from '../actions/ProductAction'

const actGetProductRequest = (id) => (
  (dispatch) => apiCaller("GET", `products/${id}`, null).then(res => {
    dispatch(showProduct(res.data))
  })
)
const actEditProductRequest = (product) => (
  (dispatch) => apiCaller("PUT", `products/${product.id}`, product).then(res => {
    dispatch(editProduct(res.data))
  })
)

const mapStateToProps = (state) => ({
  product: state.showProductItem
})
const mapDispatchToProps = (dispatch) => ({
  editProductItem: (product) => dispatch(actEditProductRequest(product)),
  getProduct: (id) => dispatch(actGetProductRequest(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)