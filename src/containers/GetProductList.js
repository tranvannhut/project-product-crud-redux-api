import { connect } from 'react-redux'
import ProductListPage from '../pages/ProductListPage';
import { actFetchData, deleteProduct } from "../actions/ProductAction";
import apiCaller from '../utils/apiCaller';
//call API
const actFetchDataRequest = () => {
  return (dispatch) => {
    return apiCaller("GET", "products", null).then(res => {
      dispatch(actFetchData(res.data))
    })
  }
}

//call API to delete product
const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    return apiCaller("DELETE", `products/${id}`, null).then(res => {
      dispatch(deleteProduct(res.data.id))
    })
  }
}

const mapStateToProps = (state) => ({
  products: state.showProductList
})
const mapDispatchToProps = (dispatch, _props) => {
  return {
    fetchAllProducts: () => dispatch(actFetchDataRequest()),
    deleteProduct: (id) => dispatch(actDeleteProductRequest(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);