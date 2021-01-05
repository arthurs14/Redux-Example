import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    state = {
        persons: []
    }

    render() {
        const { persons, addPerson, deletePerson } = this.props;
        return (
            <div>
                <AddPerson personAdded={addPerson} />
                {persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => deletePerson(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPerson: (name, age) => dispatch({ type: 'ADD', person: { name: name, age: age } }),
        deletePerson: (id) => dispatch({ type: 'DELETE', id: id }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);