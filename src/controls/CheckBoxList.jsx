import React from 'react'

const CheckBoxList = (props) => {
    return (
        <div className="form-group">
            {props.Items.map(item => {
                return (
                    <div className="form-check form-check-inline">
                       <input
                            id={props.name}
                            name={props.name}
                            value={item}
                            onChange={props.onItemChecked}
                            checked={props.SelectedItems.indexOf(item) > -1}
                            className="form-check-input"
                            type="checkbox"
                        />
                        <label className="form-check-label" htmlFor={props.name}>
                            {item}
                        </label>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default CheckBoxList;