import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    state = {
        persons: []
    }

    personDeletedHandler = (personId) => {
        this.setState((prevState) => {
            return { persons: prevState.persons.filter(person => person.id !== personId) }
        });
    }

    render() {
        const { persons, addPerson } = this.props;
        return (
            <div>
                <AddPerson personAdded={addPerson} />
                {persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.personDeletedHandler(person.id)} />
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
        addPerson: () => dispatch({ type: 'ADD' }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);