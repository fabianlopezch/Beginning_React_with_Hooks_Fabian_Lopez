import React from "react";
import Rating from "./Rating";

const Product = (props) => {
    return (
        <div className="d-flex">
            <div className="flex-shrink-0">
                <img
                    width={64}
                    height={64}
                    //className="mr-3"
                    src={props.data.imageUrl}
                    alt="Image"
                />
            </div>
            <div class="flex-grow-1 ms-3">
                <h5>{props.data.productName}</h5>
                <small class="text-muted"><i>Released on {props.data.releasedDate}</i></small>
                <Rating 
                    rating={props.data.rating} numOfReviews={props.data.numOfReviews}                    
                />
                <p>{props.data.description}</p>
            </div>
        </div>
    );
}

export default Product;