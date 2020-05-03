import React from 'react'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import GetProductList from './containers/GetProductList'
import AddProduct from './containers/AddProduct'
import EditProduct from './containers/EditProduct'



const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />
  },
  {
    path: "/product-list",
    exact: false,
    main: () => <GetProductList />
  },
  {
    path: "/product/add",
    exact: false,
    main: ({ history }) => <AddProduct history={history} />
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({ match, history }) => <EditProduct match={match} history={history} />

  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />
  }
]

export default routes