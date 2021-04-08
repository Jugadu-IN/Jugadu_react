import React from 'react';
import Product from './product.js';
import ProductCard from './ProductCard';
import './ProdSection.css';


const ProductSection = () =>(

    
        <div className="product-section d-flex justify-content-around">{Product.map(prod=>(<ProductCard className=" justify-content-around"  title = {prod.title} desc={prod.desc} link={prod.link} pic={prod.banner} />))}</div>
    

)

export default ProductSection;