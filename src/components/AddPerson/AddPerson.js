import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: null,
    };

    nameChangedHandler = (ev) => {
        this.setState({ name: ev.target.value });
    }

    ageChangedHandler = (ev) => {
        this.setState({ age: ev.target.value });
    }

    render() {
        const { personAdded } = this.props;

        return (
            <div className="AddPerson">
                <input type="text" placeholder="Name" />
                <input type="number" placeholder="Age" />
                <button onClick={personAdded}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;