import React from 'react';
import Product from './product.js';
import ProductCard from './ProductCard';

const ProductSection = () =>(

    
        <div className="d-flex justify-content-around">{Product.map(prod=>(<ProductCard className="justify-content-around"  title = {prod.title} desc={prod.desc} link={prod.link} pic={prod.banner} />))}</div>
    

)

export default ProductSection;