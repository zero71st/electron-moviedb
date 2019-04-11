import React from 'react'

const TextArea = (props)=>
{
    return(
        <div className="form-group">
            <label 
                htmlFor={props.name}>
                {props.title}
            </label>
            <textarea
                className="form-control"
                id={props.name}
                name={props.name}
                rows={props.rows}
                cols={props.cols}
                value={props.value}
                onChange={props.onTextChange}
            />
        </div>
    );
};

export default TextArea;