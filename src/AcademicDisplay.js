import React, { Component } from "react";
import { AcademicTable } from "./AcademicTable"
import { AcademicEditor } from "./AcademicEditor";

export class AcademicDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayEditor: false,
            selectedCourse: null
        }
    }

    startEditing = (course) => {
        this.setState({ displayEditor: true, selectedCourse: course })
    }

    createCourse = () => {
        this.setState({ displayEditor: true, selectedCourse: {} })
    }

    cancelEditing = () => {
        this.setState({ displayEditor: false, selectedCourse: null })
    }

    saveCourse = (course) => {
        this.props.saveCallback(course);
        this.setState({ displayEditor: false, selectedCourse: null })        
    }

    render() {
        if (this.state.displayEditor) {
            return <AcademicEditor 
                key={ this.state.selectedCourse.id || -1 }
                course={ this.state.selectedCourse } 
                saveCallback={ this.saveCourse}
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                <AcademicTable courses={ this.props.courses }
                    editCallback={ this.startEditing }
                    deleteCallback={ this.props.deleteCallback } />            
                <div className="text-center">
                </div>                        
            </div>
        }
    }
}