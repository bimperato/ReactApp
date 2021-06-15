import React, { Component } from "react";
import { DistributiveEditor } from "./DistributiveEditor";
import { DistributiveTable } from "./DistributiveTable";

export class DistributiveDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayEditor: false,
            selected: null
        }
    }

    startEditing = (supplier) => {
        this.setState({ displayEditor: true, selected: supplier })
    }

    createSupplier = () => {
        this.setState({ displayEditor: true, selected: {} })
    }

    cancelEditing = () => {
        this.setState({ displayEditor: false, selected: null })
    }

    saveSupplier= (supplier) => {
        this.props.saveCallback(supplier);
        this.setState({ displayEditor: false, selected: null })        
    }

    render() {
        if (this.state.displayEditor) {
            return <DistributiveEditor
                key={ this.state.selected.id || -1 }
                supplier={ this.state.selected } 
                saveCallback={ this.saveSupplier }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                    <DistributiveTable suppliers={ this.props.suppliers }
                        editCallback={ this.startEditing }
                        deleteCallback={ this.props.deleteCallback }
                    />
                    <div className="text-center">
                        
                    </div>                        
            </div>        
        }
    }
}