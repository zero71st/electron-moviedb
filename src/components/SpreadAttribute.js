import React, { Component } from 'react'

export default class SpreadAttribute extends Component {
    render() {
        const student = { firstName: 'Kasem', lastName: 'Wongsa'};
        return (
            <div>
                <MyForm {...student} />
            </div>
        )
    }
}

function MyForm({firstName,lastName}){
    return (
        <div className="container">
            <h6 className="Display-4">{firstName}{lastName}</h6>
        </div>
    );
}
