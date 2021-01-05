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
        const { name, age } = this.state;

        return (
            <div className="AddPerson">
                <input
                    type="text"
                    placeholder="Name"
                    onChange={this.nameChangedHandler}
                    value={name} />
                <input
                    type="number"
                    placeholder="Age"
                    onChange={this.ageChangedHandler}
                    value={age} />
                <button onClick={personAdded}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;