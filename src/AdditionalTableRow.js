import React, { Component } from "react";

export class AdditionalTableRow extends Component {

    render() {
        let a = this.props.additionals;
        return <tr>
            <td>{a.id}</td>
            <td>{a.description}</td>
            <td>{a.semester}</td>
            <td>{a.prefix}</td>
            <td>{a.number}</td>
            <td>{a.grade}</td>
            <td>
                <button className="btn btn-sm btn-warning m-1"
                    onClick={ () => this.props.editCallback(a) }>
                        Edit
                </button>
                             
            </td>
        </tr>
    }
}