import React, { Component } from "react";
import ProductItem from "../components/productItem/ProductItem";
import ProductList from "../components/productList/ProductList";
import { Link } from "react-router-dom";


class ProductListPage extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  onDelete = (id) => {
    this.props.deleteProduct(id)
  }
  render() {
    var { products } = this.props
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Link to="/product/add" className="btn btn-info mb-3">Add Product</Link>
            <ProductList>{this.showProductItem(products)}</ProductList>
          </div>
        </div>
      </div>
    )
  }
  showProductItem(products) {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem
          key={index}
          product={product}
          index={index}
          onDelete={this.onDelete}
        />
      })
    }
    return result;
  }
}

export default ProductListPage;  
