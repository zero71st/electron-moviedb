import React from 'react'

const TextBox = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.title}</label>
            <input
                id={props.name}
                name={props.name}
                onChange={props.onTextChange}
                placeholder={props.placeholder}
                className="form-control"
                type="text"
            />
        </div>
    );
};

export default TextBox;