import React from "react";

function Product({product}){
    return (
            <div className="product" >
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p><img src={product.image} width={100} alt={product.title} /></p>
            </div>
    )          
}

export default Product;