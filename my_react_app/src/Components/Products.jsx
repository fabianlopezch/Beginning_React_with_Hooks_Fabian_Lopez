import React from "react";

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

    return (
        <div>
            
        </div>
    );
}

export default Products;