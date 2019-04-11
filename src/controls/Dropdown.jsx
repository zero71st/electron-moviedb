import React from 'react'

const Dropdown = (props)=>{
    return(
        <div className="form-group">
            <label htmlFor={props.name}>{props.title}</label>
            <select
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.onSelectedIndexChange}
                className="form-control">

                <option selected>{props.placeholder}</option>

                {props.Items.map(item =>
                    <option
                        key={item}
                        value={item}>
                        {item}
                    </option>
                )}

            </select>
        </div>
    );
};

export default Dropdown;