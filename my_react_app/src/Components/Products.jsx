import React from "react";

function Products() {

    const products = ["Boston Dynamics' Atlas", "IIT's iCub", "DLR's Toro" , "Tesla's Optimus"];
    const listProducts = products.map( product => 
        <li key={product.toString()}>{product}</li> );

    return (
        <div>
            <h1>Products</h1>
            <ul>{listProducts}</ul>
        </div>
    );
}

export default Products;