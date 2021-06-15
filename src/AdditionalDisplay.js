import React, { Component } from "react";
import { AdditionalEditor } from "./AdditionalEditor";
import { AdditionalTable } from "./AdditionalTable";

export class AdditionalDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayEditor: false,
            selected: null
        }
    }

    startEditing = (additionals) => {
        this.setState({ displayEditor: true, selected: additionals })
    }

    createSupplier = () => {
        this.setState({ displayEditor: true, selected: {} })
    }

    cancelEditing = () => {
        this.setState({ displayEditor: false, selected: null })
    }

    saveAdditionals= (additionals) => {
        this.props.saveCallback(additionals);
        this.setState({ displayEditor: false, selected: null })        
    }

    render() {
        if (this.state.displayEditor) {
            return <AdditionalEditor
                key={ this.state.selected.id || -1 }
                additionals={ this.state.selected } 
                saveCallback={ this.saveAdditionals }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                    <AdditionalTable additionals={ this.props.additionals }
                        editCallback={ this.startEditing }
                        deleteCallback={ this.props.deleteCallback }
                    />
                    <div className="text-center">
                        
                    </div>                        
            </div>        
        }
    }
}
