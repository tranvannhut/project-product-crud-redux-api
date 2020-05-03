import { connect } from 'react-redux'
import ProductActionPage from '../pages/ProductActionPage'
import apiCaller from '../utils/apiCaller'
import { addProduct } from '../actions/ProductAction'


const actAddProductRequest = (product) => {
  return (dispatch) => {
    return apiCaller("POST", "products", product).then(res => {
      dispatch(addProduct(res.data))
    })
  }

}
const mapDispacthToProps = (dispatch, props) => ({
  addProductStore: (product) => dispatch(actAddProductRequest(product))
})

export default connect(null, mapDispacthToProps)(ProductActionPage)