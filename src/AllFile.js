import React, { Component } from 'react';
import { Selector } from './Selector';
import { AcademicDisplay } from './AcademicDisplay';
import { DistributiveDisplay } from './DistributiveDisplay';
import { AdditionalDisplay } from './AdditionalDisplay';

export default class AllFile extends Component {

    constructor(props) {
        super(props);
        this.state = {
        courses: [
            {id: "1", description: "First Year Experience", semester: "", prefix: "FYE", number: "", grade: ""},
            {id: "2", description: "English Composition I", semester: "", prefix: "WRT", number: "", grade: ""},
            {id: "3", description: "English Composition II", semester: "", prefix: "WRT", number: "120", grade: ""},
            {id: "4", description: "Mathematics", semester: "", prefix: "FYE", number: "200", grade: ""},
            {id: "5", description: "Interdisciplinary", semester: "", prefix: "FYE", number: "151", grade: ""},
            {id: "6", description: "Diverse Communities", semester: "", prefix: "FYE", number: "", grade: ""},
        ],
        
        suppliers: [
            {id: "1", description: "Science I", semester: "", prefix: "", number: "", grade: ""},
            {id: "2", description: "Science II", semester: "", prefix: "", number: "", grade: ""},
            {id: "3", description: "Behavior & Social Science I", semester: "", prefix: "", number: "", grade: ""},
            {id: "4", description: "Behavior & Social Science II", semester: "", prefix: "", number: "", grade: ""},
            {id: "5", description: "Humanity I", semester: "", prefix: "", number: "", grade: ""},
            {id: "6", description: "Humanity II", semester: "", prefix: "", number: "", grade: ""},
            {id: "7", description: "Art", semester: "", prefix: "", number: "", grade: ""},
        ],

        additionals: [
            {id: "1", description: "Writing Emphasis I", semester: "", prefix: "ENG", number: "", grade: ""},
            {id: "2", description: "Writing Emphasis II", semester: "", prefix: "WRT", number: "", grade: ""},
            {id: "3", description: "Writing Emphasis III", semester: "", prefix: "WRT", number: "", grade: ""},
            {id: "4", description: "Speaking Emphasis I", semester: "", prefix: "SPK", number: "", grade: ""},
            {id: "5", description: "Speaking Emphasis II", semester: "", prefix: "", number: "", grade: ""},
            {id: "6", description: "Speaking Emphasis III", semester: "", prefix: "", number: "", grade: ""},
        ],

        }
        this.idCounter = 100;
    }

    saveData = (collection, item) => {
        if (item.id === "") {
            item.id = this.idCounter++;
            this.setState(state => state[collection] 
                = state[collection].concat(item));
        } else {
            this.setState(state => state[collection] 
                = state[collection].map(stored => 
                      stored.id === item.id ? item: stored))
        } 
    }

    deleteData = (collection, item) => {
        this.setState(state => state[collection] 
            = state[collection].filter(stored => stored.id !== item.id));
    }

    render() {
        return <div>
            <Selector>
                <AcademicDisplay 
                    name="Academic Foundation"
                    courses={ this.state.courses }
                    saveCallback={ p => this.saveData("courses", p) }
                    deleteCallback={ p => this.deleteData("courses", p) } />
                <DistributiveDisplay
                    name="Distributive Requirement"
                    suppliers={ this.state.suppliers }
                    saveCallback={ s => this.saveData("suppliers", s) }
                    deleteCallback={ s => this.deleteData("suppliers", s) } />
                <AdditionalDisplay
                    name="Additional Requirement"
                    additionals={ this.state.additionals }
                    saveCallback={ a => this.saveData("additionals", a) }
                    deleteCallback={ a => this.deleteData("additionals", a) } />
            </Selector>
        </div>
    }
}