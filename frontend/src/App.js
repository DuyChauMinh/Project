import './App.css'
import Header from './component/layout/Header/Header'
import { BrowserRouter as Router, Route} from "react-router-dom";
import WebFont from 'webfontloader'
import React from 'react'
import Footer from '../src/component/layout/Footer/Footer'
import Home from './component/Home/Home.js'
import ProductDetails from './component/Product/ProductDetails.js'
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    })
  }, [])

  return (
    <Router>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/products" component={Products} />
      <Route path="/search" component={Search} />

      <Footer />
    </Router>
  )
}

export default App
