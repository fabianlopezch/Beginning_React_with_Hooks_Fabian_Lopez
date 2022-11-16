import React from "react";
import Product from "./Product";

function Products() {

    // getProduct function simulates data received from a server
    const getProducts = () => {
        return [
            {
                imageUrl: "https://loremflickr.com/150/150?random=1",
                productName: "Product 1",
                releasedDate: "May 31, 2016",
                description: "Description ... \nDescription ...",
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: "https://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: "December 15, 2017",
                description: "Description ... \nDescription ...",
                rating: 5,
                numOfReviews: 24
            },
            {
                imageUrl: "https://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releasedDate: "June 5, 2015",
                description: "Description ... \nDescription ...",
                rating: 2,
                numOfReviews: 15
            }
        ];
    };

    const products = getProducts(); // "Receiving" data from server

    const listProducts = products.map( (product) =>
            <Product key={product.productName} data={product}/>
        );

    // listProducts.length = 0; // Uncomment to check the message for 
                                // the case where there are no products
                                // to display.

    return (
        <div>
            {
                listProducts.length > 0 && 
                <ul>{listProducts}</ul>
            }
            {
                listProducts.length == 0 && 
                <ul>No products to display</ul>
            }

            
        </div>
    );
}

export default Products;