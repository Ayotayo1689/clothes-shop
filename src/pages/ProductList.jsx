import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import "./productList.css"
import { Link } from 'react-router-dom'

const ProductList = () => {
  return (
    <div className='container'>
       <Navbar/>
       <Announcement/>
       <h1 className="title">Dresses</h1>
       <div className="filterContainer">
        <div className="filter"><span className="filterText">Filter Products:</span>
        <select name=""  className="select">
        <option disabled selected className="option">Color</option>
            <option  className="option">White</option>
            <option  className="option">Black</option>
            <option  className="option">Red</option>
            <option  className="option">Blue</option>
            <option  className="option">Yellow</option>
            <option  className="option">Green</option>
        </select>
        <select name=""  className="select">
        <option disabled selected className="option">Size</option>
            <option  className="option">XS</option>
            <option  className="option">S</option>
            <option  className="option">M</option>
            <option  className="option">L</option>
            <option  className="option">XL</option>
        </select>
        </div>
        <div className="filter"><span className="filterText">Sort Products:</span>
        <select name=""  className="select">
        <option disabled selected className="option">Newest</option>
            <option  className="option">Price (asc)</option>
            <option  className="option">Price (desc)</option>
        </select>
        </div>
       </div>
       <Link to="/EachProduct"><Products/></Link>
       <Newsletter/>
       <Footer/>
    </div>
  )
}

export default ProductList