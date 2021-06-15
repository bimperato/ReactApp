import React, { Component } from "react";
import { AdditionalTableRow } from "./AdditionalTableRow";

export class AdditionalTable extends Component {

    render() {
        return <table className="table table-sm table-striped table-bordered">
                <thead>
                <th colSpan="7" 
                                className="bg-primary text-white text-center h4 p-2">
                            Additional Requirement
                        </th>
                    <tr>
                    <th>ID</th><th>Description</th><th>Semester</th><th>Prefix</th><th>Number</th><th>Grade</th><th>Editor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.additionals.map(a => 
                            <AdditionalTableRow additionals={ a } 
                                key={ a.id }
                                editCallback={ this.props.editCallback }
                                deleteCallback={ this.props.deleteCallback } />)
                    }
                </tbody>
            </table>        
    }
}

