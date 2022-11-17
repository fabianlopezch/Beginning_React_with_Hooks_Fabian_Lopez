import React from "react";
import Button from 'react-bootstrap/Button';

function JumbotronComponent() {

    return (
        <div className="m-3 p-5 bg-secondary text-white">  
            <h1> Bootstrap 5 jumbotron </h1>            
            <p>  
            In Bootstrap 3, a jumbotron was introduced as a large, padded box for highlighting special content or information. Now, jumbotrons does not supported by Bootstrap 5 version. We can achieve the same result with an element, special helper classes, and a color class.  
            </p>  
            <Button variant="primary">Learn more</Button>
        </div>  
    );
}

export default JumbotronComponent;