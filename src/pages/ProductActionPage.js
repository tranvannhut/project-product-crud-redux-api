import React, { Component } from "react";
import { Link } from 'react-router-dom'


class ProductActionPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      name: "",
      price: "",
      status: false
    }
  }

  componentDidMount() {
    let { match } = this.props
    if (match) {
      let id = match.params.id;
      this.props.getProduct(id)
      console.log(this.props.product)

    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.product) {
      var { product } = nextProps
      this.setState({
        id: product.id,
        name: product.name,
        price: product.price,
        status: product.status
      })
    }
  }
  onchange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  onSave = (event) => {
    event.preventDefault();
    var { match, history } = this.props;
    let product = this.state
    if (!match) {//or comparasion id
      if (product.name !== "" && product.price !== "") {
        this.props.addProductStore(product)
        history.goBack()
      }
    } else {
      this.props.editProductItem(product)
      history.goBack()
    }


  }
  render() {
    var { name, price, status } = this.state
    return (
      <React.Fragment>
        <div className="col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={this.onSave}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control" name="name" onChange={this.onchange} value={name} />
            </div>
            <div className="form-group">
              <label>Price:</label>
              <input type="number" className="form-control" name="price" value={price} onChange={this.onchange} />
            </div>
            <div className="form-group">
              <label>Status:</label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" name="status" checked={status} onChange={this.onchange} />Còn hàng
                </label>
            </div>
            <Link to="/product-list" className="btn btn-warning mr-3">Return</Link>
            <button type="submit" className="btn btn-primary">Saved</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}
export default ProductActionPage;