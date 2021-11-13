import React, { Fragment, useEffect } from 'react'
import { CgMouse } from 'react-icons/all'
import './Home.css'
import Product from './ProductCard.js'
import MetaData from '../layout/MetaData'
import { clearErrors, getProduct } from '../../actions/productAction'
import { useSelector, useDispatch } from 'react-redux'
import Loader from "../layout/Loader/Loader"
import { useAlert } from 'react-alert'
// test display home's products
//const product = {
//  name: 'Blue shirt',
//  price: '$30',
//direct link not link
//  images: [{ url: "https://i.ibb.co/TBvxD0V/p1.jpg" }],
//  _id: 'producttestforfrontend',
//}

const Home = () => {

  const alert = useAlert()
  const dispatch = useDispatch()

  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products,
  )

  useEffect(() => {
    if(error) {
      alert.error(error)
      dispatch(clearErrors())
    }

    dispatch(getProduct())
  }, [dispatch, error, alert])

  return (
    <Fragment>
      {loading ? (
        <Loader/>
      ) : (
        <Fragment>
          <MetaData title="Hello" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCS BELOW</h1>
            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => <Product product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home
