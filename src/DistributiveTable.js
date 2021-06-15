import React, { Component } from "react";
import { DistributiveTableRow } from "./DistributiveTableRow";

export class DistributiveTable extends Component {

    render() {
        return <table className="table table-sm table-striped table-bordered">
                <thead>
                <th colSpan="7" 
                                className="bg-primary text-white text-center h4 p-2">
                            Distributive Requirement
                        </th>
                    <tr>
                    <th>ID</th><th>Description</th><th>Semester</th><th>Prefix</th><th>Number</th><th>Grade</th><th>Editor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.suppliers.map(s => 
                            <DistributiveTableRow supplier={ s } 
                                key={ s.id }
                                editCallback={ this.props.editCallback }
                                deleteCallback={ this.props.deleteCallback } />)
                    }
                </tbody>
            </table>        
    }
}