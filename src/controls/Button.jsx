import React from 'react';

const Button = (props) => {

    let buttonType = props.buttonType === "primary" ? "btn btn-primary" : "btn btn-secondary";
    return(
        <button 
            type={props.type}
            style={props.style}
            className={buttonType}
        >
            {props.caption}
        </button>
    );
};
export default Button;